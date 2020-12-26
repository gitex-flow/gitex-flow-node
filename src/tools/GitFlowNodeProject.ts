/* eslint-disable @typescript-eslint/no-explicit-any */
import { join, dirname, basename } from 'path';
import { GitRepository } from '../git/GitRepository';
import { Readable, Transform } from 'stream';
import conventionalChangelogWriter, { Context } from 'conventional-changelog-writer';
import conventionalChangelogPresetLoader from 'conventional-changelog-preset-loader';
import { readJson, pathExists, ensureFile, createWriteStream, createReadStream, moveSync, copySync } from 'fs-extra';
import { Utils } from './Utils';
import writeJsonFile from 'write-json-file';
import { getLogger } from 'log4js';

/**
 * Options of the git flow node project.
 */
export interface ProjectConfig {
  /**
   * Path to the node project folder / git repository.
   */
  projectPath: string;

  /**
   * Auto stashes the uncommited changes on starting a git flow branch.
   * After the git flow branch was created, the latest stash is popped.
   * *DEFAULTS*: true
   */
  autoStash?: boolean;

  /**
   * Specifies the name of the changelog.
   * *DEFAULTS*: CHANGELOG.md
   */
  changelogFileName?: string;

  /**
   * Set this flag to keep the changelog of the latest release as [[changelogFileName]].latest.md.
   * This file can be useful for some other tools which processes the release information (ex. gitlab).
   */
  storeLatestChangelog?: boolean;

  /**
   * Specifies the conventional commit format.
   * The selectable options are:
   * - angular (default)
   * - atom
   * - ember
   * - eslint
   * - jquery
   * - jshint
   *
   * For more infomation check out the documentation of the
   * [conventional-changelog-preset-loader](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-preset-loader).
   * This loader is used to load the corresponding present.
   */
  conventionalChangelogPresent?: string;

  /**
   * Specifies the primary version file containing the version of the project.
   * *DEFAULTS*: 'package.json'
   */
  versionFile?: string;

  /**
   * Specifies the JSON files containing a version attribute to be overwritten if the version changes.
   * *DEFAULTS*: 'package.json' and 'package-lock.json'
   */
  bumpVersionFiles?: string[];
}

/**
 * Representing an API for handling git flow SemVer.
 */
export class GitFlowNodeProject {
  private readonly logger = getLogger('GitFlowNodeProject');

  public static readonly DefaultVersionFile = 'package.json';
  public static readonly DefaultBumpVersionFiles = [GitFlowNodeProject.DefaultVersionFile, 'package-lock.json'];
  public static readonly DefaultChangelogFile = 'CHANGELOG.md';
  public static readonly DefaultLatestChangelogFile = 'CHANGELOG.latest.md';

  private options: ProjectConfig;
  private gitRepository: GitRepository;

  /**
   * Initializes a new instance of this class.
   *
   * @param options - Options of the git flow node project instance.
   */
  constructor(options?: ProjectConfig) {
    if (!options) options = { projectPath: process.cwd() };
    if (!options.projectPath) options.projectPath = process.cwd();
    this.options = options;
    this.options.versionFile = GitFlowNodeProject.DefaultVersionFile;
    this.options.bumpVersionFiles = options.bumpVersionFiles ?? GitFlowNodeProject.DefaultBumpVersionFiles;
    this.options.conventionalChangelogPresent = options.conventionalChangelogPresent ?? 'angular';
    this.options.changelogFileName = options.changelogFileName ?? GitFlowNodeProject.DefaultChangelogFile;
    this.gitRepository = new GitRepository(this.options.projectPath);
  }

  /**
   * Checks out the given branch of the project.
   *
   * @param branchName - Name of the branch to be checked out.
   */
  public async checkoutBranch(branchName: string): Promise<void> {
    await this.gitRepository.checkout(branchName);
  }

  /**
   * Stashes the uncommited changes from the current branch.
   */
  public async stash(): Promise<boolean> {
    const status = await this.gitRepository.status();
    let stashMessage: string | undefined = undefined;
    if (!status.isClean()) {
      stashMessage = await this.gitRepository.stash();
    }
    return stashMessage !== undefined;
  }

  /**
   * Pops stash with a given name.
   *
   */
  public async popLatestStash(): Promise<void> {
    return this.gitRepository.popLatestStash();
  }

  /**
   * Gets the current branch.
   */
  public async getCurrentBranch(): Promise<string> {
    const status = await this.gitRepository.status();
    return status.current ?? '';
  }

  /**
   *  Writes the version and commits the changes in the git repository.
   *
   * @param version - Version to commit.
   */
  public async writeVersion(version: string): Promise<void> {
    const versionFiles = this.options.bumpVersionFiles as string[];
    for (const versionFile of versionFiles) {
      await this.writeVersionToFile(versionFile, version);
    }
    this.logger.info(`Updated versions in ${versionFiles.join(' and ')} to ${version}`);
  }

  /**
   * Updates the changelog with the changes since the last release.
   *
   * @param version - Version the changelog is created for.
   * @param name - Name of the release.
   */
  public async updateChangelog(version?: string, name?: string): Promise<void> {
    const logs = await this.gitRepository.getLogsSinceLastRelease();
    const stream = Readable.from(logs);
    version = version ?? (await this.getVersion());

    const changelogFile = this.options.changelogFileName as string;
    const changelogPath = join(this.options.projectPath, changelogFile);
    await ensureFile(changelogPath);

    const present = this.options.conventionalChangelogPresent as string;
    const config = (await conventionalChangelogPresetLoader(present)) as any;
    const context = await this.getContext(version, name);

    await this.appendChangelog(stream, changelogPath, context, config);
    let changelogUpdatedMessage = `Updated ${this.options.changelogFileName}`;
    if (this.options.storeLatestChangelog) {
      changelogUpdatedMessage += ` and ${GitFlowNodeProject.DefaultLatestChangelogFile}`;
    }
    this.logger.info(changelogUpdatedMessage);
  }

  /**
   * Commits the changes of the git repository.
   *
   * @param commitVersionFiles - Indicates if the defined version files should be committed if they exists.
   * @param commitChangelog - Indicates if the changelog should be committed.
   */
  public async commitChanges(commitVersionFiles = true, commitChangelog = true): Promise<void> {
    const updateDescs: string[] = [];
    const files: string[] = [];

    if (commitVersionFiles) {
      updateDescs.push('version');
      const versionFiles = this.options.bumpVersionFiles as string[];
      for (const versionFile of versionFiles) {
        const versionFilePath = join(this.options.projectPath, versionFile);
        if (await pathExists(versionFilePath)) {
          files.push(versionFile);
        }
      }
    }

    if (commitChangelog) {
      updateDescs.push('changelog');
      const changelog = this.options.changelogFileName as string;
      const changelogPath = join(this.options.projectPath, changelog);
      if (await pathExists(changelogPath)) {
        files.push(changelog);
      }
      const latestChangelogPath = join(this.options.projectPath, GitFlowNodeProject.DefaultLatestChangelogFile);
      if (await pathExists(latestChangelogPath)) {
        files.push(latestChangelogPath);
      }
    }

    const commitMsg = `chore(release): Updated ${updateDescs.join(' and ')}`;
    await this.gitRepository.commit(files, commitMsg);
  }

  /**
   * Gets the current version from the package.json.
   */
  public async getVersion(): Promise<string> {
    const versionFile = this.options.versionFile as string;
    const packageJson = await readJson(join(this.options.projectPath, versionFile));
    return packageJson.version;
  }

  private async writeVersionToFile(fileName: string, version: string): Promise<void> {
    const filePath = join(this.options.projectPath, fileName);
    if (await pathExists(filePath)) {
      const packageJson = await readJson(filePath);
      packageJson.version = version;
      await writeJsonFile(filePath, packageJson, { detectIndent: true });
    }
  }

  private async getContext(version: string, name?: string): Promise<Context> {
    const versionFile = this.options.versionFile as string;
    const packageJson = await readJson(join(this.options.projectPath, versionFile));
    const repoUrl = packageJson?.repository?.url ? new URL(packageJson.repository.url) : undefined;
    const host = repoUrl ? `https://${repoUrl.host}` : undefined;
    let path = repoUrl?.pathname;
    if (path?.endsWith('.git')) {
      path = path.substring(0, path.length - 4);
    }
    const url = repoUrl ? `https://${repoUrl.host}${path}` : undefined;

    return {
      version: version,
      title: name,
      host: host,
      repoUrl: url,
      commit: 'commits',
      issue: 'issues',
      date: Utils.getCurrDate(),
    };
  }

  private appendChangelog(
    commitStream: Readable,
    changelogFilePath: string,
    context: Context,
    config?: any,
  ): Promise<void> {
    const dir = dirname(changelogFilePath);
    const fileName = basename(changelogFilePath, '.md');
    const tmpChangelogFilePath = join(dir, `${fileName}.tmp.md`);
    const latestChangelogFilePath = join(dir, `${fileName}.latest.md`);
    return new Promise((resolve, reject) => {
      this.createChangelogStream(commitStream, context, config)
        .on('error', (err: Error) => {
          err.message = 'Error in conventional-changelog-writer: ' + err.message;
          reject(err);
        })
        .pipe(createWriteStream(tmpChangelogFilePath))
        .on('error', (err: Error) => {
          err.message = 'Error on writing CHANGELOG.md: ' + err.message;
          reject(err);
        })
        .on('finish', () => {
          if (this.options.storeLatestChangelog) {
            copySync(tmpChangelogFilePath, latestChangelogFilePath, { overwrite: true });
          }
          this.mergeFiles(changelogFilePath, tmpChangelogFilePath).then(resolve).catch(reject);
        });
    });
  }

  private createChangelogStream(commitStream: Readable, context: Context, config?: any): Transform {
    return commitStream.pipe(conventionalChangelogWriter(context, config.writerOpts));
  }

  private mergeFiles(filePath: string, mergeFilePath: string): Promise<void> {
    const readStream = createReadStream(filePath);

    return new Promise((resolve, reject) => {
      readStream
        .pipe(createWriteStream(mergeFilePath, { flags: 'a' }))
        .on('error', (err: Error) => {
          err.message = `Error on appending ${mergeFilePath}: ${err.message}`;
          reject(err);
        })
        .on('finish', () => {
          moveSync(mergeFilePath, filePath, { overwrite: true });
          resolve();
        });
    });
  }
}

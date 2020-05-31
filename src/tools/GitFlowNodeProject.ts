/* eslint-disable @typescript-eslint/no-explicit-any */
import { join } from 'path';
import { GitRepository } from '../git/GitRepository';
import { Readable, Transform } from 'stream';
import conventionalChangelogWriter, { Context } from 'conventional-changelog-writer';
import conventionalChangelogPresetLoader from 'conventional-changelog-preset-loader';
import { readJson, writeJson, pathExists, ensureFile, createWriteStream, createReadStream, moveSync } from 'fs-extra';
import { Utils } from './Utils';

/**
 * Representing an API for handling git flow SemVer.
 */
export class GitFlowNodeProject {
  public static readonly packageJson = 'package.json';
  public static readonly packageLockJson = 'package-lock.json';
  public static readonly changelogFile = 'CHANGELOG.md';

  private basePath: string;
  private gitRepository: GitRepository;

  /**
   * Initializes a new instance of this class.
   *
   * @param basePath - Base path of the project folder.
   */
  constructor(basePath?: string) {
    this.basePath = basePath ?? __dirname;
    this.gitRepository = new GitRepository(this.basePath);
  }

  /**
   *  Writes the version and commits the changes in the git repository.
   *
   * @param version - Version to commit.
   */
  public async writeVersion(version: string): Promise<void> {
    await this.writeVersionToFile(GitFlowNodeProject.packageJson, version);
    await this.writeVersionToFile(GitFlowNodeProject.packageLockJson, version);
  }

  /**
   * Updates the changelog with the changes since the last release.
   *
   * @param version - Version the changelog is created for.
   * @param name - Name of the release.
   */
  public async updateChangelog(version?: string, name?: string): Promise<void> {
    const gitRepository = new GitRepository(this.basePath);
    const logs = await gitRepository.getLogsSinceLastRelease();
    const stream = Readable.from(logs);
    version = version ?? (await this.getVersion());

    const changelogPath = join(this.basePath, GitFlowNodeProject.changelogFile);
    await ensureFile(changelogPath);

    const config = (await conventionalChangelogPresetLoader('angular')) as any;
    const context = await this.getContext(version, name);

    await this.appendChangelog(stream, changelogPath, context, config);
  }

  /**
   * Commits the changes of the git repository.
   *
   * @param commitFiles - Files to be commited.
   */
  public async commitChanges(commitFiles?: string[]): Promise<void> {
    const updateDescs: string[] = [];
    const files: string[] = [];

    const addPackageJson =
      (!commitFiles || commitFiles.includes(GitFlowNodeProject.packageJson)) &&
      (await pathExists(join(this.basePath, GitFlowNodeProject.packageJson)));
    if (addPackageJson) {
      files.push(GitFlowNodeProject.packageJson);
      updateDescs.push('version');
      if (await pathExists(join(this.basePath, GitFlowNodeProject.packageLockJson)))
        files.push(GitFlowNodeProject.packageLockJson);
    }

    const addChangelog =
      (!commitFiles || commitFiles.includes(GitFlowNodeProject.changelogFile)) &&
      (await pathExists(join(this.basePath, GitFlowNodeProject.changelogFile)));
    if (addChangelog) {
      files.push(GitFlowNodeProject.changelogFile);
      updateDescs.push('changelog');
    }

    const commitMsg = `chore(release): Update ${updateDescs.join(' and ')}`;
    await this.gitRepository.commit(files, 'release', 'release', commitMsg);
  }

  /**
   * Gets the current version from the package.json.
   */
  public async getVersion(): Promise<string> {
    const packageJson = await readJson(join(this.basePath, GitFlowNodeProject.packageJson));
    return packageJson.version;
  }

  private async writeVersionToFile(fileName: string, version: string): Promise<void> {
    const filePath = join(this.basePath, fileName);
    if (await pathExists(filePath)) {
      const obj = await readJson(filePath);
      obj.version = version;
      await writeJson(filePath, obj, { spaces: 2 });
    }
  }

  private async getContext(version: string, name?: string): Promise<Context> {
    const packageJson = await readJson(join(this.basePath, GitFlowNodeProject.packageJson));
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
    const changelogFilePathTmp = `${changelogFilePath}.tmp`;
    return new Promise((resolve, reject) => {
      this.createChangelogStream(commitStream, context, config)
        .on('error', (err: Error) => {
          err.message = 'Error in conventional-changelog-writer: ' + err.message;
          reject(err);
        })
        .pipe(createWriteStream(changelogFilePathTmp))
        .on('error', (err: Error) => {
          err.message = 'Error on writing CHANGELOG.md: ' + err.message;
          reject(err);
        })
        .on('finish', () => {
          this.mergeFiles(changelogFilePath, changelogFilePathTmp).then(resolve).catch(reject);
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

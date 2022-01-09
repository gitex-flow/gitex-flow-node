import { join } from 'path';
import { GitRepository } from '../git/GitRepository';
import { readJson, pathExists } from 'fs-extra';
import { Utils } from './Utils';
import writeJsonFile from 'write-json-file';
import { getLogger } from 'log4js';
import { ChangelogWriter } from '../changelog/ChangelogWriter';
import { ProjectConfig } from '../configs/ProjectConfig';
import { GitRepositoryContext } from '../git/GitRepositoryContext';
import { ChangelogConfig } from '../configs/ChangelogConfig';
import { ChangelogWriterFactory } from '../changelog/ChangelogWriterFactory';
import gitUrlParse from 'git-url-parse';

/**
 * Representing an API for handling git flow SemVer.
 */
export class GitFlowNodeProject {
  private readonly logger = getLogger('GitFlowNodeProject');

  public static readonly DefaultVersionFile = 'package.json';
  public static readonly DefaultBumpVersionFiles = [GitFlowNodeProject.DefaultVersionFile, 'package-lock.json'];

  private options: ProjectConfig;
  private gitRepository: GitRepository;

  /**
   * Initializes a new instance of this class.
   *
   * @param options - Options of the git flow node project instance.
   */
  constructor(options?: ProjectConfig) {
    if (!options) options = { projectPath: process.cwd() };
    options.projectPath = options.projectPath ?? process.cwd();
    this.options = options;
    this.options.versionFile = this.options.versionFile ?? GitFlowNodeProject.DefaultVersionFile;
    this.options.bumpVersionFiles = options.bumpVersionFiles ?? GitFlowNodeProject.DefaultBumpVersionFiles;
    this.options.changelog = Utils.deriveChangelogConfig(this.options);
    this.gitRepository = new GitRepository(options);
  }

  /**
   * Checks out the given branch of the project.
   *
   * @param branchName - Name of the branch to be checked out.
   */
  public async checkoutBranch(branchName: string): Promise<void> {
    await this.gitRepository.ensureNoUnCommitedChanges();
    await this.gitRepository.checkout(branchName);
  }

  /**
   * Stashes the uncommited changes from the current branch.
   *
   * @returns `true` if stash was successful, otherwise `false`.
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
   * Pops the latest stash.
   *
   * @returns Promise on popping the latest stash.
   */
  public async popLatestStash(): Promise<void> {
    return this.gitRepository.popLatestStash();
  }

  /**
   * Gets the current branch.
   *
   * @returns The current branch checked out.
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
   * @param changelogConfig - The changelog configuration.
   * @param version - Version the changelog is created for.
   * @param name - Name of the release.
   */
  public async updateChangelog<T>(changelogConfig: ChangelogConfig<T>, version?: string, name?: string): Promise<void> {
    const changelogWriter = ChangelogWriterFactory.create(changelogConfig);
    if (changelogWriter) {
      const logs = await this.gitRepository.getLogsSinceLastRelease();
      version = version ?? (await this.getVersion());
      const context = await this.getContext(version, name);
      await changelogWriter.write(context, logs);
    }
  }

  /**
   * Commits the changes of the git repository.
   *
   * @param commitVersionFiles - Indicates if the defined version files should be committed if they exists.
   * @param commitChangelog - Indicates if the changelog should be committed.
   *
   * @returns The hash of the commit.
   */
  public async commitChanges(commitVersionFiles = true, commitChangelog = true): Promise<string> {
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
      const changelog = this.options.changelog?.changelogFileName as string;
      const changelogPath = join(this.options.projectPath, changelog);
      if (await pathExists(changelogPath)) {
        files.push(changelog);
      }
      const latestChangelogName = ChangelogWriter.getLatestChangelogName(changelog);
      const latestChangelogPath = join(this.options.projectPath, latestChangelogName);
      if (await pathExists(latestChangelogPath)) {
        files.push(latestChangelogPath);
      }
    }

    const commitMsg = `chore(release): Updated ${updateDescs.join(' and ')}`;
    return this.gitRepository.commit(files, commitMsg);
  }

  /**
   * Gets the current version from the package.json.
   *
   * @returns The version of the project.
   */
  public async getVersion(): Promise<string | undefined> {
    let version = undefined;
    const versionFile = this.options.versionFile as string;
    const versionFilePath = join(this.options.projectPath, versionFile);
    if (await pathExists(versionFilePath)) {
      const packageJson = await readJson(versionFilePath);
      version = packageJson.version;
    }
    return version;
  }

  /**
   * Gets an object representing the current context of the node project.
   *
   * @param version - A optional user defined version.
   * @param name - A optional user defined release name.
   * @returns An object with information about the node project.
   */
  public async getContext(version?: string, name?: string): Promise<GitRepositoryContext> {
    let host: string | undefined = undefined;
    let url: string | undefined = undefined;
    const gitUrlConfig = await this.gitRepository.getConfig('remote.origin.url');
    if (gitUrlConfig.value) {
      const repoUrl = new URL(gitUrlParse(gitUrlConfig.value as string).toString('https'));
      host = repoUrl.origin;
      url = repoUrl?.href;
      if (url?.endsWith('.git')) {
        url = url.substring(0, url.length - 4);
      }
    }

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

  private async writeVersionToFile(fileName: string, version: string): Promise<void> {
    const filePath = join(this.options.projectPath, fileName);
    if (await pathExists(filePath)) {
      const packageJson = await readJson(filePath);
      packageJson.version = version;
      await writeJsonFile(filePath, packageJson, { detectIndent: true });
    }
  }
}

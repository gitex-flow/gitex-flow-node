import createRepository, { SimpleGit as Repository, StatusResult, DefaultLogFields, ConfigGetResult } from 'simple-git';
import { join } from 'path';
import { pathExists, rmdir, emptyDir, ensureDir } from 'fs-extra';
import { GitLog } from './GitLog';
import { ProjectConfig } from '../configs';
import { Utils } from '../tools';
import { prerelease, valid } from 'semver';
import { GitFlowTagType } from '../api/tags/GitFlowTag';

/**
 * A simple API with basic functionality of a git repository.
 */
export class GitRepository {
  protected config?: ProjectConfig;

  /**
   * Initializes a new instance of this class.
   *
   * @param config - The project configuration.
   */
  constructor(config?: ProjectConfig) {
    this.config = config;
  }

  /**
   * Gets the folder path of the git repository.
   *
   * @returns The path to the git repository.
   */
  public getRepoPath(): string {
    return this.config?.projectPath ?? process.cwd();
  }

  /**
   * Gets the path of the git repository.
   */
  public async remove(): Promise<void> {
    await emptyDir(this.getRepoPath());
    await rmdir(this.getRepoPath());
  }

  /**
   * Ensures the repository exists.
   * If it doesn't exist it will be created.
   */
  public async ensure(): Promise<void> {
    await this.createOrOpenRepo();
  }

  /**
   * Checks out a given branch.
   *
   * @param branchName - Name of the branch to be checked out.
   */
  public async checkout(branchName: string): Promise<void> {
    const repo = await this.createOrOpenRepo();
    await repo.checkout(branchName);
  }

  /**
   * Retrieves the current status of the git repository.
   *
   * @returns The status of the git repository.
   */
  public async status(): Promise<StatusResult> {
    const repo = await this.createOrOpenRepo();
    const status = await repo.status();
    return status;
  }

  /**
   * Gets the git config values.
   *
   * @param configKey - The key of the config to read.
   * @returns The config key-values.
   */
  public async getConfig(configKey: string): Promise<ConfigGetResult> {
    const repo = await this.createOrOpenRepo();
    return repo.getConfig(configKey);
  }

  /**
   * Adds and commits the given file names to the current branch.
   *
   * @param fileNames - Relative file paths to be added before commit.
   * @param message - Commit message.
   * @param authorName - The name of the author.
   * @param authorMail - Mail address of the author.
   *
   * @returns The hash of the commit.
   */
  public async commit(fileNames: string[], message: string, authorName?: string, authorMail?: string): Promise<string> {
    const repo = await this.createOrOpenRepo();
    for (const fileName of fileNames) {
      await repo.add(fileName);
    }
    let options = undefined;
    if (authorName && authorMail) {
      options = { '--author': `"${authorName} <${authorMail}>"` };
    }
    const hash = await repo.commit(message, fileNames, options);
    return hash.commit;
  }

  /**
   * Stashes the uncommited changes from the current branch.
   *
   * @returns The message of the stashing.
   */
  public async stash(): Promise<string> {
    const repo = await this.createOrOpenRepo();
    const message = await repo.stash();
    return message.trim();
  }

  /**
   * Pops stash with a given name.
   */
  public async popLatestStash(): Promise<void> {
    const repo = await this.createOrOpenRepo();
    await repo.stash(['pop', '-q']);
  }

  /**
   * Ensures there are no uncommited changes (staged and unstaged) in the local workspace.
   */
  public async ensureNoUnCommitedChanges(): Promise<void> {
    const repo = await this.createOrOpenRepo();
    const diff = await repo.diff(['HEAD']);
    if (diff) {
      throw new Error('There are some uncommited changes.');
    }
  }

  /**
   * Returns the most recent released version tag (semantic version).
   *
   * @returns The version of the latest release.
   */
  public async getLatestReleasedVersion(): Promise<string | undefined> {
    const repo = await this.createOrOpenRepo();
    const gitTags = await repo.tags();
    // Filter all non-semver and prerelease-semver tags
    const tags = gitTags.all.filter((tag) => valid(tag) && !prerelease(tag));
    return tags.pop();
  }

  /**
   * Returns the most recent prerelease of a given type (semantic version).
   *
   * @param prereleaseType - The type of the prerelease.
   * @returns The version of the latest release.
   */
  public async getLatestPrereleaseVersion(prereleaseType: GitFlowTagType): Promise<string | undefined> {
    const tags = await this.getLatestPrereleaseVersions(prereleaseType);
    return tags.pop();
  }

  /**
   * Returns all prereleases of a given type (semantic version).
   *
   * @param prereleaseType - The type of the prerelease.
   * @returns The version of the latest release.
   */
  public async getLatestPrereleaseVersions(prereleaseType: GitFlowTagType): Promise<string[]> {
    const repo = await this.createOrOpenRepo();
    const gitTags = await repo.tags();
    // Filter all non-semver and non-prerelease-semver tags
    const tags = gitTags.all.filter((tag) => valid(tag) && prerelease(tag)?.[0] == prereleaseType);
    return tags;
  }

  /**
   * Collects all commit messages since the last release.
   *
   * @returns The logs since the last release.
   */
  public async getLogsSinceLastRelease(): Promise<GitLog[]> {
    const logs = await this.getDiffLogs();
    const logMessages = logs.map((log) => `${log.message}\n\n${log.body}\n\n${log.refs}`);
    const gitLogs = await Utils.parseConventionalCommits(logMessages, this.config?.conventionalCommit);
    gitLogs.forEach((v, i) => (v.hash = logs[i].hash));
    return gitLogs;
  }

  /**
   * Adds a tag to the head of the current branch.
   *
   * @param name - The name of the tag.
   * @returns The name of the tag being added.
   */
  public async addTag(name: string): Promise<string> {
    const repo = await this.createOrOpenRepo();
    const tag = await repo.addTag(name);
    return tag.name;
  }

  /**
   * Creates or open the test git repository.
   *
   * @returns The instance ot the git repository.
   */
  protected async createOrOpenRepo(): Promise<Repository> {
    let repo: Repository;
    const path = this.getRepoPath();
    const gitFolder = join(path, '.git');
    await ensureDir(path);
    if (await pathExists(gitFolder)) {
      repo = createRepository(path);
    } else {
      repo = createRepository(path);
      await repo.init();
    }
    return repo;
  }

  private async getDiffLogs(): Promise<readonly DefaultLogFields[]> {
    const repo = await this.createOrOpenRepo();
    const latestVersion = await this.getLatestReleasedVersion();
    const logs = await repo.log({
      from: latestVersion ? 'HEAD' : undefined,
      to: latestVersion,
      symmetric: latestVersion ? true : false,
    });
    return logs.all;
  }
}

import createRepository, { SimpleGit as Repository, StatusResult, DefaultLogFields } from 'simple-git';
import { join } from 'path';
import { pathExists, rmdir, emptyDir, ensureDir } from 'fs-extra';
import { GitLog } from './GitLog';
import { ProjectConfig } from '../configs';
import { Utils } from '../tools';

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
   */
  public async status(): Promise<StatusResult> {
    const repo = await this.createOrOpenRepo();
    const status = await repo.status();
    return status;
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
    console.log(diff);
    if (diff) {
      throw new Error('There are some uncommited changes.');
    }
  }

  /**
   * Returns the most recent released version tag (semantic version).
   */
  public async getLatestReleasedVersion(): Promise<string | undefined> {
    const repo = await this.createOrOpenRepo();
    const tags = await repo.tags();
    return tags?.latest;
  }

  /**
   * Collects all commit messages since the last release.
   */
  public async getLogsSinceLastRelease(): Promise<GitLog[]> {
    const logs = await this.getDiffLogs();
    const logMessages = logs.map((log) => `${log.message}\n\n${log.body}\n\n${log.refs}`);
    const gitLogs = await Utils.parseConventionalCommits(logMessages, this.config?.conventionalCommit);
    gitLogs.forEach((v, i) => (v.hash = logs[i].hash));
    return gitLogs;
  }

  private async getDiffLogs(): Promise<readonly DefaultLogFields[]> {
    const repo = await this.createOrOpenRepo();
    const latestVersion = await this.getLatestReleasedVersion();
    const logs = await repo.log({
      from: 'HEAD',
      to: latestVersion,
      symmetric: true,
    });
    return logs.all;
  }

  private async createOrOpenRepo(): Promise<Repository> {
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
}

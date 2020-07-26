import createRepository, { SimpleGit as Repository } from 'simple-git/promise';
import { join } from 'path';
import { pathExists, rmdir, emptyDir, ensureDir } from 'fs-extra';
import conventionalCommitsParser from 'conventional-commits-parser';
import { GitLog } from './GitLog';
import { Readable } from 'stream';
import { DefaultLogFields } from 'simple-git';

/**
 * A simple API with basic functionality of a git repository.
 */
export class GitRepository {
  protected repoPath: string;

  /**
   * Initializes a new instance of this class.
   *
   * @param repoPath - Path of the git repository.
   */
  constructor(repoPath?: string) {
    this.repoPath = repoPath ?? process.cwd();
  }

  /**
   * Gets the folder path of the git repository.
   *
   * @returns The path to the git repository.
   */
  public getRepoPath(): string {
    return this.repoPath;
  }

  /**
   * Gets the path of the git repository.
   */
  public async remove(): Promise<void> {
    await emptyDir(this.repoPath);
    await rmdir(this.repoPath);
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
    console.log(`Checkout branch '${branchName}'`);
    await repo.checkout(branchName);
  }

  /**
   * Adds and commits the given file names to the current branch.
   *
   * @param fileNames - Relative file paths to be added before commit.
   * @param message - Commit message.
   * @param authorName - The name of the author.
   * @param authorMail - Mail address of the author.
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
    const gitLogs: GitLog[] = [];
    const logs = await this.getDiffLogs();
    const logMessages = logs.map((log) => `${log.message}\n\n${log.body}\n\n${log.refs}`);
    const stream = Readable.from(logMessages);
    let currIndex = 0;
    return new Promise((resolve, reject) => {
      stream
        .pipe(conventionalCommitsParser())
        .on('error', function (err) {
          err.message = 'Error in conventional-commits-parser: ' + err.message;
          reject(err);
        })
        .on('data', (data) => {
          const log = data as GitLog;
          log.hash = logs[currIndex++].hash;
          gitLogs.push(log);
        })
        .on('end', () => {
          resolve(gitLogs);
        });
    });
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
    const gitFolder = join(this.repoPath, '.git');
    await ensureDir(this.repoPath);
    if (await pathExists(gitFolder)) {
      repo = createRepository(this.repoPath);
    } else {
      repo = createRepository(this.repoPath);
      await repo.init();
    }
    return repo;
  }
}

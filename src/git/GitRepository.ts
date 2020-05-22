import { Repository, Signature, Reference } from 'nodegit';
import { join } from 'path';
import { pathExists, rmdir, emptyDir } from 'fs-extra';

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
  constructor(repoPath: string) {
    this.repoPath = repoPath;
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
    await repo.checkoutBranch(branchName);
  }

  /**
   * Checks out a given git reference.
   *
   * @param ref - Git reference to be checked out.
   */
  public async checkoutRef(ref: string): Promise<void> {
    const repo = await this.createOrOpenRepo();
    const reference = await repo.getReference(ref);
    await repo.checkoutRef(reference);
  }

  /**
   * Adds and commits the given file names to the current branch.
   *
   * @param fileNames - Relative file paths to be added before commit.
   * @param authorName - The name of the author.
   * @param authorMail - Mail address of the author.
   * @param message - Commit message.
   */
  public async commit(fileNames: string[], authorName: string, authorMail: string, message: string): Promise<string> {
    const repo = await this.createOrOpenRepo();
    const author = Signature.now(authorName, authorMail);
    const hash = await repo.createCommitOnHead(fileNames, author, author, message);
    return hash.tostrS();
  }

  /**
   * Gets the existing references from the git repository.
   */
  public async getReferences(): Promise<string[]> {
    const repo = await this.createOrOpenRepo();
    return await Reference.list(repo);
  }

  private async createOrOpenRepo(): Promise<Repository> {
    let repo: Repository;
    const gitFolder = join(this.repoPath, '.git');
    if (await pathExists(gitFolder)) {
      repo = await Repository.open(this.repoPath);
    } else {
      repo = await Repository.init(this.repoPath, 0);
    }
    return repo;
  }
}

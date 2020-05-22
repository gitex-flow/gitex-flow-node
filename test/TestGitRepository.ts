import { copy } from 'fs-extra';
import { join, resolve } from 'path';
import { GitRepository } from '../src/git/GitRepository';

/**
 * Representing a git test repository, providing some easy operations to write unit tests.
 */
export class TestGitRepository extends GitRepository {
  private readonly fileFolderPath = resolve(join(__dirname, 'files'));

  private readonly authorName = 'test';
  private readonly authorMail = 'test@test.com';

  /**
   * Commits a given file (from folder 'files') to the test repo.
   *
   * @param fileName - Name of the file to be commited.
   * @param message - Commit message to be set.
   */
  public async commitTestFile(fileName: string, message: string): Promise<string> {
    await this.copyFileToRepo(fileName);
    return await this.commit([fileName], this.authorName, this.authorMail, message);
  }

  /**
   * Checks if a given git reference exists.
   *
   * @example await refExists('refs/heads/release/1.0.0'))
   * @param ref - Git reference (ex. refs/heads/release/1.0.0) to be checked.
   */
  public async refExists(ref: string): Promise<boolean> {
    const refList = await this.getReferences();
    return refList.includes(ref);
  }

  private async copyFileToRepo(fileName: string): Promise<void> {
    const src = join(this.fileFolderPath, fileName);
    const dest = join(this.repoPath, fileName);
    await copy(src, dest);
  }
}

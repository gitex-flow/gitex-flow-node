import { copy } from 'fs-extra';
import { join, resolve } from 'path';
import { GitRepository } from '../src/git/GitRepository';

/**
 * Representing a git test repository, providing some easy operations to write unit tests.
 */
export class TestGitRepository extends GitRepository {
  private readonly fileFolderPath = resolve(join(__dirname, 'files'));

  /**
   * Commits a given file (from folder 'files') to the test repo.
   *
   * @param fileName - Name of the file to be commited.
   * @param message - Commit message to be set.
   *
   * @returns The commit hash.
   */
  public async commitTestFile(fileName: string, message: string): Promise<string> {
    await this.copyFileToRepo(fileName);
    return await this.commit([fileName], message);
  }

  private async copyFileToRepo(fileName: string): Promise<void> {
    const src = join(this.fileFolderPath, fileName);
    const dest = join(this.getRepoPath(), fileName);
    await copy(src, dest);
  }
}

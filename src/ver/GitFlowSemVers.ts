import { join } from 'path';
import { readJson, writeJson, pathExists } from 'fs-extra';
import { BranchType } from '../api/branches/GitFlowBranch';
import { inc, ReleaseType } from 'semver';
import { GitRepository } from '../git/GitRepository';
import { Readable } from 'stream';
import concat from 'concat-stream';
import conventionalCommitsParser, { Commit } from 'conventional-commits-parser';
/**
 * Representing an API for handling git flow SemVer.
 */
export class GitFlowSemVers {
  public static readonly packageJson = 'package.json';
  public static readonly packageLockJson = 'package-lock.json';

  private basePath: string;

  /**
   * Initializes a new instance of this class.
   *
   * @param basePath - Base path of the project folder.
   */
  constructor(basePath?: string) {
    this.basePath = basePath ?? __dirname;
  }

  /**
   * Gets the version of the branch created from the current branch.
   *
   * @param type - Type of the branch should be created.
   */
  public async getBranchVersion(type: BranchType): Promise<string> {
    let releaseType: ReleaseType = 'patch';
    if (type == 'release') {
      if (await this.hasBreakingChanges()) {
        releaseType = 'major';
      } else {
        releaseType = 'minor';
      }
    }
    const gitRepository = new GitRepository(this.basePath);
    const latestVersion = await gitRepository.getLatestReleasedVersion();
    if (!latestVersion) {
      return '1.0.0';
    }
    return inc(latestVersion, releaseType) as string;
  }

  /**
   *  Writes the version and commits the changes in the git repository.
   *
   * @param version - Version to commit.
   */
  public async commitVersion(version: string): Promise<void> {
    await this.writeToFile(GitFlowSemVers.packageJson, version);
    await this.writeToFile(GitFlowSemVers.packageLockJson, version);
  }

  private async writeToFile(fileName: string, version: string): Promise<void> {
    const filePath = join(this.basePath, fileName);
    if (await pathExists(filePath)) {
      const obj = await readJson(filePath);
      obj.version = version;
      await writeJson(filePath, obj, { spaces: 2 });
      const gitRepository = new GitRepository(this.basePath);
      await gitRepository.commit([fileName], 'release', 'release', 'chore(release): Update version');
    }
  }

  private async hasBreakingChanges(): Promise<boolean> {
    const gitRepository = new GitRepository(this.basePath);
    const messages = await gitRepository.getLogsSinceLastRelease();
    const stream = Readable.from(messages);
    return new Promise((resolve) => {
      stream.pipe(conventionalCommitsParser()).pipe(
        concat((data) => {
          const commits = (data as unknown) as Commit[];
          // There are BREAKING CHANGES if there is at least one note.
          const hasBreakingChanges = commits.some((commit: Commit) => commit.notes.length > 0);
          resolve(hasBreakingChanges);
        }),
      );
    });
  }
}

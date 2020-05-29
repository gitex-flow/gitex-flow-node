import { BranchType } from '../api/branches/GitFlowBranch';
import { inc, valid, ReleaseType } from 'semver';
import { GitRepository } from '../git/GitRepository';
import { GitLog } from '../git/GitLog';

/**
 * Representing an API for handling git flow SemVer.
 */
export class GitFlowSemVers {
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
   * Calculates the version of the branch created from the current branch.
   *
   * @param type - Type of the branch should be created.
   * @param version - A optional custom version to be used.
   */
  public async calculateBranchVersion(type: BranchType, version?: string): Promise<string> {
    if (version) {
      const validatedVersion = valid(version);
      if (!validatedVersion) {
        throw new Error(`The given name '${name}' isn't a valid semantic version.`);
      }
      version = validatedVersion;
    } else {
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
        version = '1.0.0';
      } else {
        version = inc(latestVersion, releaseType) as string;
      }
    }
    return version;
  }

  private async hasBreakingChanges(): Promise<boolean> {
    const gitRepository = new GitRepository(this.basePath);
    const gitLogs = await gitRepository.getLogsSinceLastRelease();
    // There are BREAKING CHANGES if there is at least one note.
    const hasBreakingChanges = gitLogs.some((log: GitLog) => log.notes.length > 0);
    return hasBreakingChanges;
  }
}

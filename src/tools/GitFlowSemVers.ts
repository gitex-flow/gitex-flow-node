import { GitFlowBranchType } from '../api/branches/GitFlowBranch';
import { inc, valid, ReleaseType, clean } from 'semver';
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
    this.basePath = basePath ?? process.cwd();
  }

  /**
   * Calculates the version of the branch created from the current branch.
   *
   * @param type - Type of the branch should be created.
   * @param version - A optional custom version to be used.
   *
   * @returns The calculated branch version.
   */
  public async calculateBranchVersion(type: GitFlowBranchType, version?: string): Promise<string | undefined> {
    if (type == 'hotfix' || type == 'release') {
      if (version) {
        version = valid(clean(version)) ?? undefined;
      } else {
        const gitRepository = new GitRepository({
          projectPath: this.basePath,
        });
        const latestVersion = await gitRepository.getLatestReleasedVersion();
        if (!latestVersion) {
          version = '1.0.0';
        } else {
          let releaseType: ReleaseType = 'patch';
          if (type == 'release') {
            if (await this.hasBreakingChanges()) {
              releaseType = 'major';
            } else {
              releaseType = 'minor';
            }
          }
          version = inc(latestVersion, releaseType) as string;
        }
      }
    }
    return version;
  }

  private async hasBreakingChanges(): Promise<boolean> {
    const gitRepository = new GitRepository({
      projectPath: this.basePath,
    });
    const gitLogs = await gitRepository.getLogsSinceLastRelease();
    const hasBreakingChanges = gitLogs.some((log: GitLog) => log.notes.some((x) => x.title === 'BREAKING CHANGE'));
    return hasBreakingChanges;
  }
}

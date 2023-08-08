import { GitFlowBranchType } from '../api/branches/GitFlowBranch';
import { inc, valid, ReleaseType, clean, gt } from 'semver';
import { GitRepository } from '../git/GitRepository';
import { GitLog } from '../git/GitLog';
import { ProjectConfig } from '../configs/ProjectConfig';
import { GitFlowNodeProject } from './GitFlowNodeProject';
import { GitFlowTagType } from '../api/tags/GitFlowTag';

/**
 * Representing an API for handling git flow SemVer.
 */
export class GitFlowSemVers {
  private config: ProjectConfig;

  /**
   * Initializes a new instance of this class.
   *
   * @param config - Base path of the project folder.
   */
  constructor(config: ProjectConfig) {
    this.config = config;
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
        const gitRepository = new GitRepository(this.config);
        const latestVersion = await gitRepository.getLatestReleasedVersion();
        if (!latestVersion) {
          const project = new GitFlowNodeProject(this.config);
          version = await project.getVersion();
          if (!version) {
            version = '1.0.0';
          }
        } else {
          let releaseType: ReleaseType = 'patch';
          if (type == 'release') {
            if (await this.hasBreakingChanges(gitRepository)) {
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

  /**
   * Calculates the next prerelease version tag for a given prerelease type.
   *
   * @param prereleaseType - The prerelease type.
   * @param fromBranch - The branch the prerelease is started from.
   * @returns The next prerelease version for a given type.
   */
  public async calculateNextPrereleaseVersion(
    prereleaseType: GitFlowTagType,
    fromBranch: GitFlowBranchType = 'release',
  ): Promise<string | undefined> {
    const gitRepository = new GitRepository(this.config);
    const prereleaseVersion = await gitRepository.getLatestPrereleaseVersion(prereleaseType);
    const latestReleasedVersion = await gitRepository.getLatestReleasedVersion();
    let version;
    if (prereleaseVersion && gt(prereleaseVersion, latestReleasedVersion ?? '0.0.0')) {
      version = prereleaseVersion;
    } else {
      const nextReleaseVersion = await this.calculateBranchVersion(fromBranch);
      version = `${nextReleaseVersion}-${prereleaseType}`;
    }
    return inc(version, 'prerelease') ?? undefined;
  }

  private async hasBreakingChanges(gitRepository: GitRepository): Promise<boolean> {
    const gitLogs = await gitRepository.getLogsSinceLastRelease();
    const hasBreakingChanges = gitLogs.some((log: GitLog) => log.notes.some((x) => x.title === 'BREAKING CHANGE'));
    return hasBreakingChanges;
  }
}

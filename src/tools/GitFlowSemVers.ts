import { GitFlowBranchType } from '../api/branches/GitFlowBranch';
import { inc, valid, ReleaseType, clean } from 'semver';
import { GitRepository } from '../git/GitRepository';
import { GitLog } from '../git/GitLog';
import { ProjectConfig } from '../configs/ProjectConfig';
import { GitFlowNodeProject } from './GitFlowNodeProject';

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

  private async hasBreakingChanges(gitRepository: GitRepository): Promise<boolean> {
    const gitLogs = await gitRepository.getLogsSinceLastRelease();
    const hasBreakingChanges = gitLogs.some((log: GitLog) => log.notes.some((x) => x.title === 'BREAKING CHANGE'));
    return hasBreakingChanges;
  }
}

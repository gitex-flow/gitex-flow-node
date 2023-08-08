import { GitFlowBranch } from '../../api/branches/GitFlowBranch';
import { GFlowConfig } from '../../configs/GFlowConfig';
import { GitFlowNodeProject } from '../../tools/GitFlowNodeProject';
import { GFlowPreReleaseTag } from './GFlowPreReleaseTag';

/**
 * This class provides functionality to calculate and publish a beta tag.
 */
export class GFlowBetaReleaseTag extends GFlowPreReleaseTag {
  private releaseBranch: GitFlowBranch;
  private hotfixBranch: GitFlowBranch;

  /**
   * Initializes a new instance of this class.
   *
   * @param releaseBranch - The git flow release branch.
   * @param hotfixBranch - The git flow hotfix branch.
   * @param options - Git flow node project options.
   */
  constructor(releaseBranch: GitFlowBranch, hotfixBranch: GitFlowBranch, options: GFlowConfig) {
    super('beta', options);
    this.releaseBranch = releaseBranch;
    this.hotfixBranch = hotfixBranch;
  }

  /**
   * Publishes a prerelease tag of the given [[type]].
   *
   * @param baseBranch - The base branch to create an prerelease from.
   * @returns The name of the created prerelease tag.
   */
  public async start(baseBranch?: string): Promise<string> {
    const releaseBranches = await this.releaseBranch.list(true);
    const hotfixBranches = await this.hotfixBranch.list(true);

    const project = new GitFlowNodeProject(this.config.projectConfig);
    const targetBranch = baseBranch ?? (await project.getCurrentBranch());
    let prereleaseBranch = releaseBranches.find((x) => x.endsWith(targetBranch));
    if (!prereleaseBranch) {
      prereleaseBranch = hotfixBranches.find((x) => x.endsWith(targetBranch));
      this.baseBranch = 'hotfix';
    }
    if (!prereleaseBranch) {
      throw new Error(`Not allowed to create an ${this.type} release on branch "${targetBranch}".`);
    }

    return super.start(prereleaseBranch);
  }
}

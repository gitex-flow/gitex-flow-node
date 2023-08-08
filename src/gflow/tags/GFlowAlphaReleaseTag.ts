import { GitFlowBranch } from '../../api/branches/GitFlowBranch';
import { GFlowConfig } from '../../configs';
import { GitFlowNodeProject } from '../../tools/GitFlowNodeProject';
import { GFlowPreReleaseTag } from './GFlowPreReleaseTag';

/**
 * This class provides functionality to calculate and publish an alpha tag.
 */
export class GFlowAlphaReleaseTag extends GFlowPreReleaseTag {
  private featureBranch: GitFlowBranch;
  private bugfixBranch: GitFlowBranch;

  /**
   * Initializes a new instance of this class.
   *
   * @param featureBranch - The git flow feature branch.
   * @param bugfixBranch - The git flow bugfix branch.
   * @param options - Gitex flow options.
   */
  constructor(featureBranch: GitFlowBranch, bugfixBranch: GitFlowBranch, options: GFlowConfig) {
    super('alpha', options);
    this.featureBranch = featureBranch;
    this.bugfixBranch = bugfixBranch;
  }

  /**
   * Publishes a prerelease tag of the given [[type]].
   *
   * @param baseBranch - The base branch to create an prerelease from.
   * @returns The name of the created prerelease tag.
   */
  public async start(baseBranch?: string): Promise<string> {
    const allowedBranches = [...(await this.featureBranch.list(true)), ...(await this.bugfixBranch.list(true))];
    if (this.config.gitFlowConfig?.developBranch) {
      allowedBranches.push(this.config.gitFlowConfig.developBranch);
    }

    const project = new GitFlowNodeProject(this.config.projectConfig);
    const targetBranch = baseBranch ?? (await project.getCurrentBranch());

    const prereleaseBranch = allowedBranches.find((x) => x.endsWith(targetBranch));
    if (!prereleaseBranch) {
      throw new Error(`Not allowed to create an ${this.type} release on branch "${targetBranch}".`);
    }

    return super.start(prereleaseBranch);
  }
}

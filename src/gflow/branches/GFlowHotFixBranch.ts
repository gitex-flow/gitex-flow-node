import { GitFlowBranch } from '../../api/branches/GitFlowBranch';
import { GitFlowNodeProject } from '../../tools/GitFlowNodeProject';
import { ProjectConfig } from '../../configs/ProjectConfig';
import { GFlowBranch } from './GFlowBranch';
/**
 * This class extending a hotfix branch with some helpful functionality.
 */
export class GFlowHotFixBranch extends GFlowBranch {
  /**
   * Initializes a new instance of this class.
   *
   * @param gitFlowBranch - Git flow branch to be wrapped.
   * @param options - Git flow node project options.
   */
  constructor(gitFlowBranch: GitFlowBranch, options?: ProjectConfig) {
    super(gitFlowBranch, options);
  }

  /**
   * Creates and starts a new hotfix branch.
   *
   * @param name - Name of the branch to be started.
   * @param base - Base of the branch should be started from.
   *
   * @returns The name of the hotfix branch.
   */
  public async start(name?: string, base?: string): Promise<string> {
    const version = await this.generateBranchName(name);
    if (!version) {
      throw new Error('Failed to calculate the version from the current repository.');
    }
    const project = new GitFlowNodeProject(this.projectConfig);
    const stashed = await super.stashChanges(project);
    const branch = await super.start(version, base);
    await project.writeVersion(version);
    await project.commitChanges(true, false);
    if (stashed) {
      await this.popStashedChanges(project);
    }
    return branch;
  }

  /**
   * Merges and finishes the branch of the branch type '[[type]]'.
   *
   * @param name - Name of the branch to be finished.
   * @param msg - Message to be set for finishing the branch.
   */
  public async finish(name?: string, msg?: string): Promise<void> {
    const project = new GitFlowNodeProject(this.projectConfig);
    const version = await this.getVersion(project, name);
    const branchName = await this.generateBranchNameFromConfig(version);
    await project.checkoutBranch(branchName);
    if (this.projectConfig?.changelog) {
      await project.updateChangelog(this.projectConfig.changelog);
    }
    await project.commitChanges(false);
    await super.finish(version, msg ?? version);
  }

  private async getVersion(project: GitFlowNodeProject, name?: string): Promise<string> {
    let version = name;
    if (!version) {
      const hotfixBranches = await this.list();
      if (hotfixBranches.length == 0) {
        version = await project.getVersion();
      }
      // There is only one hotfix branch
      version = hotfixBranches[0];
    }
    return version;
  }
}

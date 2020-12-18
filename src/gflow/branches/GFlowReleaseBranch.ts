import { GitFlowBranch } from '../../api/branches/GitFlowBranch';
import { GitFlowNodeProject, ProjectConfig } from '../../tools/GitFlowNodeProject';
import { GFlowBranch } from './GFlowBranch';

/**
 * This class extending a release branch with some helpful functionality.
 */
export class GFlowReleaseBranch extends GFlowBranch {
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
   * Creates and starts a new branch of the type '[[type]]'.
   *
   * @param name - Name of the branch to be started.
   * @param base - Base of the branch should be started from.
   */
  public async start(name?: string, base?: string): Promise<string> {
    const version = await this.generateBranchName(name);
    if (!version) {
      throw new Error('Failed to calculate the version from the current repository.');
    }
    const branchName = await super.start(version, base);
    const project = new GitFlowNodeProject(this.projectConfig);
    await project.writeVersion(version);
    await project.updateChangelog(version);
    await project.commitChanges();
    return branchName;
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
    msg = msg ?? version;
    await super.finish(version, msg);
  }

  private async getVersion(project: GitFlowNodeProject, name?: string): Promise<string> {
    let version = name;
    if (!version) {
      const releaseBranches = await this.list();
      if (releaseBranches.length == 0) {
        version = await project.getVersion();
      }
      // There is only one release branch
      version = releaseBranches[0];
    }
    return version;
  }
}

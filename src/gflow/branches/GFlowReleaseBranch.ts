import { GitFlowBranch } from '../../api/branches/GitFlowBranch';
import { GitFlowNodeProject } from '../../tools/GitFlowNodeProject';
import { ProjectConfig } from '../../configs/ProjectConfig';
import { GFlowBranch } from './GFlowBranch';
import { Utils } from '../../tools/Utils';

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
   * Creates and starts a new release branch.
   *
   * @param name - Name of the branch to be started.
   * @param base - Base of the branch should be started from.
   *
   * @returns The name of the release branch.
   */
  public async start(name?: string, base?: string): Promise<string> {
    const version = await this.generateBranchName(name);
    if (!version) {
      throw new Error('Failed to calculate the version from the current repository.');
    }
    const project = new GitFlowNodeProject(this.projectConfig);
    const stashed = await super.stashChanges(project);
    const branchName = await super.start(version, base);
    await project.writeVersion(version);
    const changelogConfig = Utils.deriveChangelogConfig(this.projectConfig);
    await project.updateChangelog(changelogConfig, version);
    await project.commitChanges();
    if (stashed) {
      await this.popStashedChanges(project);
    }
    return branchName;
  }

  /**
   * Merges and finishes the branch of the branch type '[[type]]'.
   *
   * @param name - Name of the branch to be finished.
   * @param msg - Message to be set for finishing the branch.
   */
  public async finish(name?: string, msg?: string): Promise<void> {
    const version = await this.getVersion(name);
    msg = msg ?? version;
    await super.finish(version, msg);
  }

  private async getVersion(name?: string): Promise<string> {
    let version = name;
    if (!version) {
      const releaseBranches = await this.list();
      // There is only one release branch
      version = releaseBranches[0];
    }
    return version;
  }
}

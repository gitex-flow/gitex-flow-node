import { GitFlowBranch, BranchType } from '../../api/branches/GitFlowBranch';
import { GitFlowSemVers } from '../../tools/GitFlowSemVers';
import { GitFlowNodeProject, ProjectConfig } from '../../tools/GitFlowNodeProject';
import { GitFlowBranchConfig } from '../../api/GitFlowBranchConfig';

/**
 * This class extending a release branch with some helpful functionality.
 */
export class GFlowReleaseBranch implements GitFlowBranch {
  public readonly type: BranchType = 'release';

  private readonly gitFlowBranch: GitFlowBranch;
  private readonly options?: ProjectConfig;

  /**
   * Initializes a new instance of this class.
   *
   * @param gitFlowBranch - Git flow branch to be wrapped.
   * @param options - Git flow node project options.
   */
  constructor(gitFlowBranch: GitFlowBranch, options?: ProjectConfig) {
    this.gitFlowBranch = gitFlowBranch;
    this.options = options;
  }

  /**
   * Gets the git flow branch config.
   */
  public async getConfig(): Promise<GitFlowBranchConfig> {
    return await this.gitFlowBranch.getConfig();
  }

  /**
   * Lists all branches of the type '[[type]]'.
   */
  public async list(): Promise<string[]> {
    return await this.gitFlowBranch.list();
  }

  /**
   * Creates and starts a new branch of the type '[[type]]'.
   *
   * @param name - Name of the branch to be started.
   * @param base - Base of the branch should be started from.
   */
  public async start(name?: string, base?: string): Promise<string> {
    const semVer = new GitFlowSemVers(this.options?.projectPath);
    const version = await semVer.calculateBranchVersion(this.type, name);
    const branchName = await this.gitFlowBranch.start(version, base);
    const project = new GitFlowNodeProject(this.options);
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
    const project = new GitFlowNodeProject(this.options);
    const version = await this.getVersion(project, name);
    msg = msg ?? version;
    await this.gitFlowBranch.finish(version, msg);
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

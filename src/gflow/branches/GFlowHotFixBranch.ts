import { GitFlowBranch, BranchType } from '../../api/branches/GitFlowBranch';
import { GitFlowSemVers } from '../../tools/GitFlowSemVers';
import { GitFlowNodeProject, ProjectConfig } from '../../tools/GitFlowNodeProject';
import { GitFlowBranchConfig } from '../../api/GitFlowBranchConfig';

/**
 * This class extending a hotfix branch with some helpful functionality.
 */
export class GFlowHotFixBranch implements GitFlowBranch {
  public readonly type: BranchType = 'hotfix';

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
    const branch = await this.gitFlowBranch.start(version, base);
    const project = new GitFlowNodeProject(this.options);
    await project.writeVersion(version);
    await project.commitChanges(true, false);
    return branch;
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
    const branchName = await this.getBranchNameFromConfig(version);
    await project.checkoutBranch(branchName);
    await project.updateChangelog();
    await project.commitChanges(false);
    await this.gitFlowBranch.finish(version, msg ?? version);
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

  private async getBranchNameFromConfig(name?: string): Promise<string> {
    const config = await this.getConfig();
    let prefix = config.prefix ?? this.type;
    if (prefix.endsWith('/')) {
      prefix = prefix.slice(0, -1);
    }
    return `${prefix}/${name}`;
  }
}

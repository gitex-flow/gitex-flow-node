import { GitFlowBranch, BranchType } from '../../api/branches/GitFlowBranch';
import { GitFlowSemVers } from '../../tools/GitFlowSemVers';
import { GitFlowNodeProject } from '../../tools/GitFlowNodeProject';

/**
 * This class extending a hotfix branch with some helpful functionality.
 */
export class GFlowHotFixBranch implements GitFlowBranch {
  public readonly type: BranchType = 'hotfix';

  private readonly gitFlowBranch: GitFlowBranch;
  private readonly repoPath: string;

  /**
   * Initializes a new instance of this class.
   *
   * @param gitFlowBranch - Git flow branch to be wrapped.
   * @param repoPath - Path of the git repository.
   */
  constructor(gitFlowBranch: GitFlowBranch, repoPath: string) {
    this.gitFlowBranch = gitFlowBranch;
    this.repoPath = repoPath;
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
    const semVer = new GitFlowSemVers(this.repoPath);
    const version = await semVer.calculateBranchVersion('hotfix', name);
    const branch = await this.gitFlowBranch.start(version, base);
    const project = new GitFlowNodeProject(this.repoPath);
    await project.writeVersion(version);
    await project.commitChanges([GitFlowNodeProject.packageJson]);
    return branch;
  }

  /**
   * Merges and finishes the branch of the branch type '[[type]]'.
   *
   * @param name - Name of the branch to be finished.
   * @param msg - Message to be set for finishing the branch.
   */
  public async finish(name?: string, msg?: string): Promise<void> {
    const project = new GitFlowNodeProject(this.repoPath);
    await project.updateChangelog();
    await project.commitChanges([GitFlowNodeProject.changelogFile]);
    await this.gitFlowBranch.finish(name, msg);
  }
}

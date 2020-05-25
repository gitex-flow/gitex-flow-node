import { GitFlowBranch, BranchType } from '../../api/branches/GitFlowBranch';
import { GitFlowBashExecuter } from '../GitFlowBashExecuter';

/**
 * This class implements the basic functionality of a git flow branch.
 */
export abstract class AvhGitFlowBranch implements GitFlowBranch {
  private repositoryPath?: string;

  /**
   * Initializes a new instance of this class.
   *
   * @param repoPath - The path to the git repository.
   */
  constructor(repoPath?: string) {
    this.repositoryPath = repoPath;
  }

  /**
   * {@inheritdoc}
   */
  public abstract readonly type: BranchType;

  /**
   * {@inheritdoc}
   */
  public async list(): Promise<string[]> {
    throw new Error('Method not implemented.');
  }

  /**
   * {@inheritdoc}
   *
   * @param name - Name of the branch to be started.
   * @param base - Base of the branch should be started from.
   * @returns The git reference of the create branch.
   */
  public async start(name?: string, base?: string): Promise<string> {
    let args: string[] | undefined = undefined;
    if (base) {
      args = [base];
    }
    const output = await GitFlowBashExecuter.execute({
      type: this.type,
      action: 'start',
      name: name,
      repositoryPath: this.repositoryPath,
      args: args,
    });
    let branchName = `${this.type}/${name}`;
    const matches = output.match(/'([^']+)'/);
    if (matches && matches.groups) {
      branchName = matches.groups[0];
    }
    return branchName;
  }

  /**
   * {@inheritdoc}
   *
   * @param name - Name of the branch to be finished.
   * @param msg - Message to be set for finishing the branch.
   */
  public async finish(name?: string, msg?: string): Promise<void> {
    let options: string | undefined = undefined;
    if (msg) {
      options = `-m ${msg}`;
    }
    const output = await GitFlowBashExecuter.execute({
      type: this.type,
      action: 'finish',
      name: name,
      repositoryPath: this.repositoryPath,
      options: options,
    });
    console.info(output);
  }
}

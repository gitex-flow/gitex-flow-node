import { getLogger, Logger } from 'log4js';
import { GitFlowBaseBranchType, GitFlowBranch, GitFlowBranchType } from '../../api/branches/GitFlowBranch';
import { GitFlowBranchConfig } from '../../api/GitFlowBranchConfig';
import { AvhBranchListParser } from '../AvhBranchListParser';
import { GitFlowBashExecuter } from '../GitFlowBashExecuter';

/**
 * This class implements the basic functionality of a git flow branch.
 */
export abstract class AvhGitFlowBranch implements GitFlowBranch {
  private logger: Logger = getLogger('AvhGitFlowBranch');
  private readonly repositoryPath?: string;

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
  public abstract readonly type: GitFlowBranchType;

  /**
   * {@inheritdoc}
   */
  public abstract readonly defaultBase: GitFlowBaseBranchType;

  /**
   * {@inheritdoc}
   */
  public abstract getConfig(): Promise<GitFlowBranchConfig>;

  /**
   * {@inheritdoc}
   *
   * @param withPrefix - Indicates if the entities should be listed with their prefix.
   * @returns The list of the currently opened branch.
   */
  public async list(withPrefix?: boolean): Promise<string[]> {
    const output = await GitFlowBashExecuter.execute({
      type: this.type,
      action: 'list',
      repositoryPath: this.repositoryPath,
    });

    const branches = await AvhBranchListParser.parse(output);
    if (withPrefix) {
      for (let i = 0; i < branches.length; i++) {
        branches[i] = await this.getBranchNameFromConfig(branches[i]);
      }
    }
    return branches;
  }

  /**
   * {@inheritdoc}
   *
   * @param name - Name of the branch to be started.
   * @param base - Base of the branch should be started from.
   * @returns The git reference of the create branch.
   */
  public async start(name?: string, base?: string): Promise<string> {
    let branchName = await this.getBranchNameFromConfig(name);

    const output = await GitFlowBashExecuter.execute({
      type: this.type,
      action: 'start',
      name: name,
      repositoryPath: this.repositoryPath,
      args: base ? [base] : undefined,
    });

    const matches = output.match(/'([^']+)'/);
    if (matches && matches.groups) {
      if (branchName !== matches.groups[0]) {
        this.logger.warn(
          `WARNING: The expected branch name "${branchName}" does not match the actual branch name '${matches.groups[0]}'`,
        );
      }
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
    const outputs = output.trim().split('\n');
    for (const out of outputs) {
      this.logger.info(out);
    }
  }

  /**
   * {@inheritdoc}
   *
   * @param name - A custom name for the branch.
   *
   * @returns The generated branch name.
   */
  public async generateBranchName(name?: string): Promise<string | undefined> {
    return name;
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

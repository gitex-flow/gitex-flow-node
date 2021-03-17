import { GitFlowBaseBranchType, GitFlowBranch, GitFlowBranchType } from '../../api/branches/GitFlowBranch';
import { GitFlowBranchConfig } from '../../api/GitFlowBranchConfig';
import { getLogger, Logger } from 'log4js';
import { GitFlowNodeProject, ProjectConfig } from '../../tools/GitFlowNodeProject';
import { GitFlowSemVers } from '../../tools/GitFlowSemVers';

/**
 * This class represents an abstract GFlow branch with some basic functionality.
 */
export class GFlowBranch implements GitFlowBranch {
  public readonly type: GitFlowBranchType;
  public readonly defaultBase: GitFlowBaseBranchType;

  private readonly gitFlowBranch: GitFlowBranch;

  protected readonly projectConfig?: ProjectConfig;
  protected readonly logger: Logger;

  /**
   * Initializes a new instance of this class.
   *
   * @param gitFlowBranch - Git flow branch to be wrapped.
   * @param options - Git flow node project options.
   */
  constructor(gitFlowBranch: GitFlowBranch, options?: ProjectConfig) {
    this.gitFlowBranch = gitFlowBranch;
    this.projectConfig = options;
    this.type = this.gitFlowBranch.type;
    this.defaultBase = this.gitFlowBranch.defaultBase;
    this.logger = getLogger(`gitex-flow [${this.type}]`);
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
    this.logger.info(`Starting ${this.type} branch "${name}" based on "${base ?? this.defaultBase}"`);
    name = await this.generateBranchName(name);
    const branch = await this.gitFlowBranch.start(name, base);
    this.logger.info(`Created branch "${branch}"`);
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
    if (!name) {
      name = await project.getCurrentBranch();
      name = name.substr(name.indexOf('/') + 1);
    }
    this.logger.info(`Finishing ${this.type} branch "${name}"`);
    await this.gitFlowBranch.finish(name, msg);
    const branchName = await this.generateBranchNameFromConfig(name ?? '');
    this.logger.info(`Merged branch "${branchName}"`);
  }

  /**
   * Generates an default branch name.
   *
   * @param name - A custom name for the branch.
   */
  public async generateBranchName(name?: string): Promise<string | undefined> {
    const semVer = new GitFlowSemVers(this.projectConfig?.projectPath);
    return semVer.calculateBranchVersion(this.type, name);
  }

  /**
   * Gets the branch name including the git-flow configuration.
   *
   * @param name - A given branch name without prefix.
   */
  protected async generateBranchNameFromConfig(name: string): Promise<string> {
    const config = await this.getConfig();
    let prefix = config.prefix ?? this.type;
    if (prefix.endsWith('/')) {
      prefix = prefix.slice(0, -1);
    }
    return `${prefix}/${name}`;
  }
}

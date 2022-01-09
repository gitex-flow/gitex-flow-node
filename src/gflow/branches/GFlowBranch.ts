import { GitFlowBaseBranchType, GitFlowBranch, GitFlowBranchType } from '../../api/branches/GitFlowBranch';
import { GitFlowBranchConfig } from '../../api/GitFlowBranchConfig';
import { getLogger, Logger } from 'log4js';
import { GitFlowNodeProject } from '../../tools/GitFlowNodeProject';
import { ProjectConfig } from '../../configs/ProjectConfig';
import { GitFlowSemVers } from '../../tools/GitFlowSemVers';
import { ConfigDefaulter } from '../../configs/ConfigDefaulter';

/**
 * This class represents an abstract GFlow branch with some basic functionality.
 */
export class GFlowBranch implements GitFlowBranch {
  public readonly type: GitFlowBranchType;
  public readonly defaultBase: GitFlowBaseBranchType;

  private readonly gitFlowBranch: GitFlowBranch;

  protected readonly projectConfig: ProjectConfig;
  protected readonly logger: Logger;

  /**
   * Initializes a new instance of this class.
   *
   * @param gitFlowBranch - Git flow branch to be wrapped.
   * @param options - Git flow node project options.
   */
  constructor(gitFlowBranch: GitFlowBranch, options?: ProjectConfig) {
    this.gitFlowBranch = gitFlowBranch;
    this.projectConfig = ConfigDefaulter.ensureProjectConfigDefaults(options);
    this.type = this.gitFlowBranch.type;
    this.defaultBase = this.gitFlowBranch.defaultBase;
    this.logger = getLogger(`gitex-flow [${this.type}]`);
  }

  /**
   * Gets the git flow branch config.
   *
   * @returns The configuration of the gitex flow branch.
   */
  public async getConfig(): Promise<GitFlowBranchConfig> {
    return await this.gitFlowBranch.getConfig();
  }

  /**
   * Lists all branches of the type '[[type]]'.
   *
   * @returns The list of branches.
   */
  public async list(): Promise<string[]> {
    return await this.gitFlowBranch.list();
  }

  /**
   * Creates and starts a new branch of the type '[[type]]'.
   *
   * @param name - Name of the branch to be started.
   * @param base - Base of the branch should be started from.
   *
   * @returns The name of the started branch.
   */
  public async start(name?: string, base?: string): Promise<string> {
    const project = new GitFlowNodeProject(this.projectConfig);
    this.logger.info(`Starting ${this.type} branch "${name}" based on "${base ?? this.defaultBase}"`);
    name = await this.generateBranchName(name);
    const stashed = await this.stashChanges(project);
    const branch = await this.gitFlowBranch.start(name, base);
    if (stashed) {
      await this.popStashedChanges(project);
    }
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
   *
   * @returns The generated branch name.
   */
  public async generateBranchName(name?: string): Promise<string | undefined> {
    const semVer = new GitFlowSemVers(this.projectConfig);
    return semVer.calculateBranchVersion(this.type, name);
  }

  /**
   * Gets the branch name including the git-flow configuration.
   *
   * @param name - A given branch name without prefix.
   *
   * @returns The generated name.
   */
  protected async generateBranchNameFromConfig(name: string): Promise<string> {
    const config = await this.getConfig();
    let prefix = config.prefix ?? this.type;
    if (prefix.endsWith('/')) {
      prefix = prefix.slice(0, -1);
    }
    return `${prefix}/${name}`;
  }

  /**
   * Stashes the current local changes.
   *
   * @param project - The git project to be stashed.
   * @returns Returns `true` if changes were stashed. Otherwise `false`.
   */
  protected async stashChanges(project: GitFlowNodeProject): Promise<boolean> {
    let stashed = false;
    if (this.projectConfig?.autoStash !== false) {
      stashed = await project.stash();
      if (stashed) {
        this.logger.info(`Auto stashed current changes`);
      }
    }
    return stashed;
  }

  /**
   * Pops the latest stash into to local repository.
   *
   * @param project - The git project the stash should be popped from.
   */
  protected async popStashedChanges(project: GitFlowNodeProject): Promise<void> {
    await project.popLatestStash();
    this.logger.info(`Pop auto stashed changes`);
  }
}

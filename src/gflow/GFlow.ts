import { GitFlow } from '../api/GitFlow';
import { GitFlowBranch } from '../api/branches/GitFlowBranch';
import { ConfigProvider } from '../api/ConfigProvider';
import { GitFlowConfig } from '../api/GitFlowConfig';
import { GFlowReleaseBranch } from './branches/GFlowReleaseBranch';
import { GFlowHotFixBranch } from './branches/GFlowHotFixBranch';
import { ProjectConfig } from '../tools/GitFlowNodeProject';

/**
 * Options of the GFlow implementation.
 */
export interface GFlowConfig {
  /**
   * The git flow config can be directly set in the GFlow options.
   * This config will be taken if no other git flow config is given on calling the `init` method.
   */
  gitFlowConfig?: GitFlowConfig;

  /**
   * The configuration of the node project.
   */
  projectConfig: ProjectConfig;
}

/**
 * GitFlow wrapper extending functionality to a common git flow implementation.
 */
export class GFlow implements GitFlow {
  public feature: GitFlowBranch;
  public bugfix: GitFlowBranch;
  public release: GitFlowBranch;
  public hotfix: GitFlowBranch;
  public support: GitFlowBranch;
  public config: ConfigProvider<GitFlowConfig>;

  private gitFlow: GitFlow;
  private options: GFlowConfig;

  /**
   * Initializes a new instance of this class.
   *
   * @param gitFlow - GitFlow implementation.
   * @param options - Options for configuring the GFlow.
   */
  constructor(gitFlow: GitFlow, options?: GFlowConfig) {
    if (!options) {
      options = {
        projectConfig: {
          projectPath: process.cwd(),
        },
      };
    }

    this.gitFlow = gitFlow;
    this.options = options;
    this.feature = this.gitFlow.feature;
    this.bugfix = this.gitFlow.bugfix;
    this.release = new GFlowReleaseBranch(this.gitFlow.release, options.projectConfig);
    this.hotfix = new GFlowHotFixBranch(this.gitFlow.hotfix, options.projectConfig);
    this.support = this.gitFlow.support;
    this.config = this.gitFlow.config;
  }

  /**
   * Setup a git repository for git flow ussage.
   *
   * @param config - The git flow configuration.
   * @param force - Force reinitialisation if git flow already initialized.
   */
  public async init(config?: GitFlowConfig, force?: boolean): Promise<void> {
    await this.gitFlow.init(config ?? this.options.gitFlowConfig, force);
  }

  /**
   * Provides the version of the git flow implementation.
   */
  public async version(): Promise<string> {
    return await this.gitFlow.version();
  }
}

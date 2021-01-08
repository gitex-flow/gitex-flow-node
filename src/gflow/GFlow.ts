import { GitFlow } from '../api/GitFlow';
import { GitFlowBranch } from '../api/branches/GitFlowBranch';
import { ConfigProvider } from '../api/ConfigProvider';
import { GitFlowConfig } from '../configs/GitFlowConfig';
import { GFlowConfig } from '../configs/GFlowConfig';
import { GFlowReleaseBranch } from './branches/GFlowReleaseBranch';
import { GFlowHotFixBranch } from './branches/GFlowHotFixBranch';
import { configure } from 'log4js';
import { GFlowBranch } from './branches/GFlowBranch';

/**
 * GitFlow wrapper extending functionality to a common git flow implementation.
 */
export class GFlow implements GitFlow {
  public feature: GitFlowBranch;
  public bugfix: GitFlowBranch;
  public release: GitFlowBranch;
  public hotfix: GitFlowBranch;
  public support: GitFlowBranch;
  public readonly config: ConfigProvider<GitFlowConfig>;

  protected readonly options: GFlowConfig;
  private readonly gitFlow: GitFlow;

  /**
   * Initializes a new instance of this class.
   *
   * @param gitFlow - GitFlow implementation.
   * @param options - Options for configuring the GFlow.
   */
  constructor(gitFlow: GitFlow, options?: GFlowConfig) {
    options = this.ensureDefaults(options);

    if (options.log4jsConfig) {
      configure(options.log4jsConfig);
    }

    this.gitFlow = gitFlow;
    this.options = options;
    this.feature = new GFlowBranch(this.gitFlow.feature, options.projectConfig);
    this.bugfix = new GFlowBranch(this.gitFlow.bugfix, options.projectConfig);
    this.release = new GFlowReleaseBranch(this.gitFlow.release, options.projectConfig);
    this.hotfix = new GFlowHotFixBranch(this.gitFlow.hotfix, options.projectConfig);
    this.support = new GFlowBranch(this.gitFlow.support, options.projectConfig);
    this.config = this.gitFlow.config;
  }

  /**
   * Setup a git repository for git flow usage.
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

  private ensureDefaults(options?: GFlowConfig): GFlowConfig {
    options = options ?? {};
    if (!options.projectConfig) {
      options.projectConfig = {
        projectPath: process.cwd(),
      };
    }
    if (!options.log4jsConfig) {
      options.log4jsConfig = {
        appenders: { console: { type: 'console' } },
        categories: { default: { appenders: ['console'], level: 'info' } },
      };
    }
    return options;
  }
}

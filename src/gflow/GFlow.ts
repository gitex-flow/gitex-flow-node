import { GitFlow } from '../api/GitFlow';
import { GitFlowBranch } from '../api/branches/GitFlowBranch';
import { ConfigProvider } from '../api/ConfigProvider';
import { GitFlowConfig } from '../api/GitFlowConfig';
import { GFlowReleaseBranch } from './branches/GFlowReleaseBranch';
import { GFlowHotFixBranch } from './branches/GFlowHotFixBranch';

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

  /**
   * Initializes a new instance of this class.
   *
   * @param gitFlow - GitFlow implementation.
   * @param repoPath - Path of the git repository.
   */
  constructor(gitFlow: GitFlow, repoPath?: string) {
    repoPath = repoPath ?? __dirname;
    this.gitFlow = gitFlow;
    this.feature = this.gitFlow.feature;
    this.bugfix = this.gitFlow.bugfix;
    this.release = new GFlowReleaseBranch(this.gitFlow.release, repoPath);
    this.hotfix = new GFlowHotFixBranch(this.gitFlow.hotfix, repoPath);
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
    await this.gitFlow.init(config, force);
  }

  /**
   * Provides the version of the git flow implementation.
   */
  public async version(): Promise<string> {
    return await this.gitFlow.version();
  }
}

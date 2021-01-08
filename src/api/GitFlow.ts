import { GitFlowBranch } from './branches/GitFlowBranch';
import { GitFlowConfig } from '../configs/GitFlowConfig';
import { ConfigProvider } from './ConfigProvider';

/**
 * Specification of the git flow API.
 */
export interface GitFlow {
  /**
   * Provides functionality of feature branches.
   */
  readonly feature: GitFlowBranch;

  /**
   * Provides functionality of bugfix branches.
   */
  readonly bugfix: GitFlowBranch;

  /**
   * Provides functionality of release branches.
   */
  readonly release: GitFlowBranch;

  /**
   * Provides functionality of hotfix branches.
   */
  readonly hotfix: GitFlowBranch;

  /**
   * Provides functionality of support branches.
   */
  readonly support: GitFlowBranch;

  /**
   * Provides functionality to get and set the git flow configuration.
   */
  readonly config: ConfigProvider<GitFlowConfig>;

  /**
   * Setup a git repository for git flow ussage.
   *
   * @param config - The git flow configuration.
   * @param force - Force reinitialisation if git flow already initialized.
   */
  init(config?: GitFlowConfig, force?: boolean): Promise<void>;

  /**
   * Provides the version of the git flow implementation.
   */
  version(): Promise<string>;
}

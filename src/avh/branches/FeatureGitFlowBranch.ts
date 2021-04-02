import { GitFlowBaseBranchType, GitFlowBranchType } from '../../api/branches/GitFlowBranch';
import { ConfigProvider } from '../../api/ConfigProvider';
import { GitFlowBranchConfig } from '../../api/GitFlowBranchConfig';
import { GitFlowConfig } from '../../configs/GitFlowConfig';
import { AvhGitFlowBranch } from './AvhGitFlowBranch';

/**
 * This class wraps the feature branch of the AVH implementation.
 */
export class FeatureGitFlowBranch extends AvhGitFlowBranch {
  private readonly configProvider: ConfigProvider<GitFlowConfig> | undefined;

  /**
   * {@inheritdoc}
   */
  public readonly type: GitFlowBranchType = 'feature';

  /**
   * {@inheritdoc}
   */
  public readonly defaultBase: GitFlowBaseBranchType = 'develop';

  /**
   * Initializes a new instance of this class.
   *
   * @param repoPath - The path to the git repository.
   * @param configProvider - Git flow config provider.
   */
  constructor(repoPath?: string, configProvider?: ConfigProvider<GitFlowConfig>) {
    super(repoPath);
    this.configProvider = configProvider;
  }

  /**
   * {@inheritdoc}
   *
   * @returns The configuration of the feature git flow branch.
   */
  public async getConfig(): Promise<GitFlowBranchConfig> {
    const config = await this.configProvider?.get();
    return {
      prefix: config?.featureBranchPrefix,
    };
  }
}

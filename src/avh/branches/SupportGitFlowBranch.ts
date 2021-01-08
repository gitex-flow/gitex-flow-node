import { GitFlowBaseBranchType, GitFlowBranchType } from '../../api/branches/GitFlowBranch';
import { ConfigProvider } from '../../api/ConfigProvider';
import { GitFlowBranchConfig } from '../../api/GitFlowBranchConfig';
import { GitFlowConfig } from '../../configs/GitFlowConfig';
import { AvhGitFlowBranch } from './AvhGitFlowBranch';

/**
 * This class wraps the support branch of the AVH implementation.
 */
export class SupportGitFlowBranch extends AvhGitFlowBranch {
  private readonly configProvider: ConfigProvider<GitFlowConfig> | undefined;

  /**
   * {@inheritdoc}
   */
  public readonly type: GitFlowBranchType = 'support';

  /**
   * {@inheritdoc}
   */
  public readonly defaultBase: GitFlowBaseBranchType = 'master';

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
   * @param name - Name of the branch to be started.
   * @param base - Base of the branch should be started from.
   * @returns The git reference of the create branch.
   */
  public async start(name?: string, base?: string): Promise<string> {
    return super.start(name, base ?? this.defaultBase);
  }

  /**
   * {@inheritdoc}
   */
  public async finish(): Promise<void> {
    throw new Error('The AVH implementation does not support a finish on support branches.');
  }

  /**
   * {@inheritdoc}
   */
  public async getConfig(): Promise<GitFlowBranchConfig> {
    const config = await this.configProvider?.get();
    return {
      prefix: config?.supportBranchPrefix,
    };
  }
}

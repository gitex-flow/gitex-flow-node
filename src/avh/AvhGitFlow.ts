import { GitFlow } from '../api/GitFlow';
import { GitFlowBranch } from '../api/branches/GitFlowBranch';
import { GitFlowBashExecuter } from './GitFlowBashExecuter';
import { GenericAvhGitFlowBranch } from './branches/GenericAvhGitFlowBranch';
import { GitFlowConfig } from '../api/GitFlowConfig';
import { ConfigProvider } from '../api/ConfigProvider';
import { AvhConfigProvider } from './AvhConfigProvider';

/**
 * Implementation of git flow by [gitflow-avh](https://github.com/petervanderdoes/gitflow-avh).
 */
export class AvhGitFlow implements GitFlow {
  public readonly feature: GitFlowBranch;
  public readonly bugfix: GitFlowBranch;
  public readonly release: GitFlowBranch;
  public readonly hotfix: GitFlowBranch;
  public readonly support: GitFlowBranch;
  public readonly config: ConfigProvider<GitFlowConfig>;

  private repositoryPath?: string;

  /**
   * Initializes a new instance of this class.
   *
   * @param repoPath - The path to the git repository.
   */
  constructor(repoPath?: string) {
    this.repositoryPath = repoPath;
    this.feature = new GenericAvhGitFlowBranch('feature', repoPath);
    this.bugfix = new GenericAvhGitFlowBranch('bugfix', repoPath);
    this.release = new GenericAvhGitFlowBranch('release', repoPath);
    this.hotfix = new GenericAvhGitFlowBranch('hotfix', repoPath);
    this.support = new GenericAvhGitFlowBranch('support', repoPath);
    this.config = new AvhConfigProvider(repoPath);
  }

  /**
   * {@inheritdoc}
   *
   * @param config - The git flow configuration.
   * @param force - Force reinitialisation if git flow already initialized.
   */
  public async init(config?: GitFlowConfig, force?: boolean): Promise<void> {
    let options = '-d';
    if (force == true) {
      options += ' -f';
    }
    const output = await GitFlowBashExecuter.execute({
      action: 'init',
      repositoryPath: this.repositoryPath,
      options: options,
    });
    console.info(output);
    if (config) {
      await this.config.set(config);
    }
  }

  /**
   * {@inheritdoc}
   */
  public async version(): Promise<string> {
    return await GitFlowBashExecuter.execute({
      action: 'version',
    });
  }
}

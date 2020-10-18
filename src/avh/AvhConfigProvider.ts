import { getLogger, Logger } from 'log4js';
import { ConfigProvider } from '../api/ConfigProvider';
import { GitFlowConfig } from '../api/GitFlowConfig';
import { GitFlowBashExecuter } from './GitFlowBashExecuter';

/**
 * AVH Configuration provider.
 */
export class AvhConfigProvider implements ConfigProvider<GitFlowConfig> {
  private logger: Logger = getLogger('AvhConfigProvider');

  private repositoryPath?: string;

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
   *
   * @param config - Git flow config to be set.
   */
  public async set(config: GitFlowConfig): Promise<void> {
    if (config?.masterBranch != undefined) await this.setConfig('master', config.masterBranch);
    if (config?.developBranch != undefined) await this.setConfig('develop', config.developBranch);
    if (config?.featureBranchPrefix != undefined) await this.setConfig('feature', config.featureBranchPrefix);
    if (config?.bugfixBranchPrefix != undefined) await this.setConfig('bugfix', config.bugfixBranchPrefix);
    if (config?.releaseBranchPrefix != undefined) await this.setConfig('release', config.releaseBranchPrefix);
    if (config?.hotfixBranchPrefix != undefined) await this.setConfig('hotfix', config.hotfixBranchPrefix);
    if (config?.supportBranchPrefix != undefined) await this.setConfig('support', config.supportBranchPrefix);
    if (config?.versionTagPrefix != undefined) await this.setConfig('versiontagprefix', config.versionTagPrefix);
  }

  /**
   * {@inheritdoc}
   */
  public async get(): Promise<GitFlowConfig> {
    const output = await GitFlowBashExecuter.execute({
      action: 'config',
      repositoryPath: this.repositoryPath,
    });

    const lines = output.split('\n');

    return {
      masterBranch: this.extractConfig(lines[0]),
      developBranch: this.extractConfig(lines[1]),
      featureBranchPrefix: this.extractConfig(lines[2]),
      bugfixBranchPrefix: this.extractConfig(lines[3]),
      releaseBranchPrefix: this.extractConfig(lines[4]),
      hotfixBranchPrefix: this.extractConfig(lines[5]),
      supportBranchPrefix: this.extractConfig(lines[6]),
      versionTagPrefix: this.extractConfig(lines[7]),
    };
  }

  private extractConfig(line: string): string | undefined {
    const index = line.indexOf(':') + 1;
    let option: string | undefined = line.substr(index).trim();
    if (!option) option = undefined;
    return option;
  }

  private async setConfig(key: string, value: string): Promise<void> {
    const output = await GitFlowBashExecuter.execute({
      action: 'config',
      repositoryPath: this.repositoryPath,
      options: `set ${key} ${value}`,
    });
    this.logger.debug(output.trim());
  }
}

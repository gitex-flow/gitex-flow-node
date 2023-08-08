import { Logger, getLogger } from 'log4js';
import { GitFlowTag, GitFlowTagType } from '../../api/tags/GitFlowTag';
import { ConfigDefaulter } from '../../configs/ConfigDefaulter';
import { GitRepository } from '../../git';
import { GitFlowNodeProject, GitFlowSemVers } from '../../tools';
import { GFlowConfig } from '../../configs';
import { GitFlowBranchType } from '../../api/branches/GitFlowBranch';

/**
 * This class provides functionality to calculate and publish prerelease tags.
 */
export abstract class GFlowPreReleaseTag implements GitFlowTag {
  protected config: GFlowConfig;
  protected readonly logger: Logger;

  public readonly type: GitFlowTagType;

  protected baseBranch?: GitFlowBranchType;

  /**
   * Initializes a new instance of this class.
   *
   * @param type - Git flow tag type.
   * @param options - Git flow node project options.
   */
  constructor(type: GitFlowTagType, options?: GFlowConfig) {
    this.type = type;
    this.config = ConfigDefaulter.ensureGFlowConfigDefaults(options);
    this.logger = getLogger(`gitex-flow [${this.type}]`);
  }

  /**
   * Lists all prerelease tags of the given [[type]].
   *
   * @returns The list of prerelease tags.
   */
  public async list(): Promise<string[]> {
    const repo = new GitRepository(this.config.projectConfig);
    return repo.getLatestPrereleaseVersions(this.type);
  }

  /**
   * Publishes a prerelease tag of the given [[type]].
   *
   * @param baseBranch - The base branch to create an prerelease from.
   * @returns The name of the created prerelease tag.
   */
  public async start(baseBranch?: string): Promise<string> {
    const version = await this.generateTagName();
    if (!version) {
      throw new Error('Failed to calculate the prerelease tag name from the current repository.');
    }

    const project = new GitFlowNodeProject(this.config.projectConfig);
    if (baseBranch) {
      await project.checkoutBranch(baseBranch);
    }
    await project.writeVersion(version);
    if (this.config?.projectConfig?.changelog) {
      await project.updateChangelog(this.config.projectConfig.changelog, version);
    }
    await project.commitChanges();

    const repo = new GitRepository(this.config.projectConfig);
    await repo.addTag(version);

    return version;
  }

  /**
   * Generates an the prerelease tag name.
   *
   * @returns The generated prerelease tag.
   */
  public async generateTagName(): Promise<string | undefined> {
    const projectConfig = ConfigDefaulter.ensureProjectConfigDefaults(this.config.projectConfig);
    const semVers = new GitFlowSemVers(projectConfig);
    const nextPrereleaseVersion = await semVers.calculateNextPrereleaseVersion(this.type, this.baseBranch);
    const versionTagPrefix = this.config.gitFlowConfig?.versionTagPrefix ?? '';
    return `${versionTagPrefix}${nextPrereleaseVersion}`;
  }
}

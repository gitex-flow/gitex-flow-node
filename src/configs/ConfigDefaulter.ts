import { ChangelogConfig, GFlowConfig, GitFlowConfig, Log4jsConfig, ProjectConfig } from '.';
import { ChangelogType } from '../changelog/ChangelogType';
import { ChangelogWriter } from '../changelog/ChangelogWriter';
import { ConventionalChangelogWriterOptions } from '../changelog/ConventionalChangelogWriter';

/**
 * Sets the defaults of the different kinds of configurations.
 */
export class ConfigDefaulter {
  public static readonly DefaultVersionFile = 'package.json';
  public static readonly DefaultBumpVersionFiles = [ConfigDefaulter.DefaultVersionFile, 'package-lock.json'];
  public static readonly DefaultConventionalCommit = {
    referenceActions: [
      'close',
      'closes',
      'closed',
      'fix',
      'fixes',
      'fixed',
      'resolve',
      'resolves',
      'resolved',
      'refs',
      'references',
    ],
    noteKeywords: ['BREAKING CHANGE', 'SECURITY', 'REMOVED'],
  };

  /**
   * Ensures the defaults of the GFlow configuration.
   *
   * @param config - The GFlow configuration should be extended with its defaults.
   * @returns The extended GFlow configuration with its defaults.
   */
  public static ensureGFlowConfigDefaults(config?: GFlowConfig): GFlowConfig {
    config = config ?? {};
    config.gitFlowConfig = ConfigDefaulter.ensureGitFlowConfigDefaults(config.gitFlowConfig);
    config.projectConfig = ConfigDefaulter.ensureProjectConfigDefaults(config.projectConfig);
    config.log4jsConfig = ConfigDefaulter.enusreLog4jsConfigDefaults(config.log4jsConfig);
    return config;
  }

  /**
   * Ensures the defaults of the git flow configuration.
   *
   * @param config - The git flow configuration should be extended with its defaults.
   * @returns The extended git flow configuration with its defaults.
   */
  public static ensureGitFlowConfigDefaults(config?: GitFlowConfig): GitFlowConfig {
    if (!config) config = {};
    config.masterBranch = config.masterBranch ?? 'master';
    config.developBranch = config.developBranch ?? 'develop';
    config.featureBranchPrefix = config.featureBranchPrefix ?? 'feature/';
    config.bugfixBranchPrefix = config.bugfixBranchPrefix ?? 'bugfix/';
    config.releaseBranchPrefix = config.releaseBranchPrefix ?? 'release/';
    config.hotfixBranchPrefix = config.hotfixBranchPrefix ?? 'hotfix/';
    config.supportBranchPrefix = config.supportBranchPrefix ?? 'support/';
    return config;
  }

  /**
   * Ensures the defaults of the project configuration.
   *
   * @param config - The project configuration should be extended with its defaults.
   * @returns The extended project configuration with its defaults.
   */
  public static ensureProjectConfigDefaults(config?: ProjectConfig): ProjectConfig {
    if (!config) config = { projectPath: process.cwd() };
    config.projectPath = config.projectPath ?? process.cwd();
    config.autoStash = config.autoStash ?? true;
    config.changelog = ConfigDefaulter.deriveChangelogConfig(config);
    config.conventionalCommit = config.conventionalCommit ?? ConfigDefaulter.DefaultConventionalCommit;
    config.versionFile = config.versionFile ?? ConfigDefaulter.DefaultVersionFile;
    config.bumpVersionFiles = config.bumpVersionFiles ?? ConfigDefaulter.DefaultBumpVersionFiles;
    return config;
  }

  private static enusreLog4jsConfigDefaults(config?: Log4jsConfig): Log4jsConfig {
    if (!config) {
      config = {
        appenders: { console: { type: 'console' } },
        categories: { default: { appenders: ['console'], level: 'info' } },
      };
    }
    return config;
  }

  /**
   * Derives the [[ChangelogConfig]] from a given [[projectConfig]].
   *
   * @param projectConfig - The project configuration.
   *
   * @returns The derived changelog config.
   */
  private static deriveChangelogConfig(projectConfig?: ProjectConfig): ChangelogConfig<Record<string, unknown>> {
    const config = projectConfig?.changelog ?? {
      basePath: projectConfig?.projectPath ?? process.cwd(),
      type: ChangelogType.ConventionalChangelog,
    };

    config.basePath = config.basePath ?? projectConfig?.projectPath ?? process.cwd();

    // Following lines are ensuring backward compatibility to avoid a breaking change for version 2.3.
    config.changelogFileName =
      projectConfig?.changelogFileName ?? config.changelogFileName ?? ChangelogWriter.DefaultChangelogFile;
    config.storeLatestChangelog = projectConfig?.storeLatestChangelog ?? config.storeLatestChangelog;
    if (config.type == ChangelogType.ConventionalChangelog) {
      const conf = config as ConventionalChangelogWriterOptions;
      conf.conventionalChangelogPresent =
        projectConfig?.conventionalChangelogPresent ?? conf.conventionalChangelogPresent ?? 'angular';
    }

    return config;
  }
}

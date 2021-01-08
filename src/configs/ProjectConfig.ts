import { ChangelogConfig } from './ChangelogConfig';

/**
 * Options of the git flow node project.
 */
export interface ProjectConfig {
  /**
   * Path to the node project folder / git repository.
   */
  projectPath: string;

  /**
   * Auto stashes the uncommited changes on starting a git flow branch.
   * After the git flow branch was created, the latest stash is popped.
   * *DEFAULTS*: true
   */
  autoStash?: boolean;

  /**
   * Specifies the name of the changelog.
   * *DEFAULTS*: CHANGELOG.md
   *
   * @deprecated This property was moved to the option `changelog`. This property will be removed in version 3.*.
   */
  changelogFileName?: string;

  /**
   * Set this flag to keep the changelog of the latest release as [[changelogFileName]].latest.md.
   * This file can be useful for some other tools which processes the release information (ex. gitlab).
   *
   * @deprecated This property was moved to the option `changelog`. This property will be removed in version 3.*.
   */
  storeLatestChangelog?: boolean;

  /**
   * Specifies the conventional commit format.
   * The selectable options are:
   * - angular (default)
   * - atom
   * - ember
   * - eslint
   * - jquery
   * - jshint
   *
   * For more infomation check out the documentation of the
   * [conventional-changelog-preset-loader](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-preset-loader).
   * This loader is used to load the corresponding present.
   *
   * @deprecated This property was moved to the option `changelog`. This property will be removed in version 3.*.
   */
  conventionalChangelogPresent?: string;

  /**
   * Set the configuration of the changelog.
   *
   * *DEFAULTS*:
   * ```JSON
   * {
   *    type: 'ConventionalChangelog',
   *    changelogFileName: 'CHANGELOG.md',
   *    storeLatestChangelog: false,
   *    conventionalChangelogPresent: 'angular'
   * }
   * ```
   */
  changelog?: ChangelogConfig;

  /**
   * Specifies the primary version file containing the version of the project.
   * *DEFAULTS*: 'package.json'
   */
  versionFile?: string;

  /**
   * Specifies the JSON files containing a version attribute to be overwritten if the version changes.
   * *DEFAULTS*: 'package.json' and 'package-lock.json'
   */
  bumpVersionFiles?: string[];
}

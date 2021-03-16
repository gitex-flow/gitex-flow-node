/**
 * Enum of all available changelog types.
 */
export enum ChangelogType {
  /**
   * [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)
   */
  ConventionalChangelog = 'ConventionalChangelog',

  /**
   * [keep-a-changelog](https://keepachangelog.com/en/1.0.0/)
   */
  KeepAChangelog = 'KeepAChangelog',

  /**
   * Indicates no changelog should be generated.
   */
  None = 'None',
}

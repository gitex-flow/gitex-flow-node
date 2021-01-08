/**
 * Enum of all available changelog types.
 */
export enum ChangelogType {
  /**
   * The conventional changelog is the default changelog generator.
   */
  ConventionalChangelog = 'ConventionalChangelog',

  /**
   * Indicates no changelog should be generated.
   */
  None = 'None',
}

import { ChangelogWriterOptions } from '../changelog';
import { ChangelogType } from '../changelog/ChangelogType';

/**
 * Configuration for the changelog creation.
 */
export type ChangelogConfig<T extends ChangelogWriterOptions> = T & {
  /**
   * The type of the changelog.
   * This option indicates which type of changelog should be parsed and generated.
   */
  type: ChangelogType | string;
};

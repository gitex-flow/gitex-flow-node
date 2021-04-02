import { ChangelogConfig } from '../configs/ChangelogConfig';
import { ChangelogType } from './ChangelogType';
import { ChangelogWriter } from './ChangelogWriter';
import { ConventionalChangelogWriter, ConventionalChangelogWriterOptions } from './ConventionalChangelogWriter';
import { KeepAChangelogWriter, KeepAChangelogWriterOptions } from './KeepAChangelogWriter';

/**
 * A factory to create [[ChangelogWriter]] from a [[ChangelogConfig]].
 */
export class ChangelogWriterFactory {
  /**
   * Creates an instance of a [[ChangelogWriter]] from a [[ChangelogConfig]].
   *
   * @param changelogConfig - The changelog configuration to be used.
   *
   * @returns The instance of the created ChangelogWriter or `undefined`.
   */
  public static create<T>(changelogConfig: ChangelogConfig<T>): ChangelogWriter | undefined {
    switch (changelogConfig.type) {
      case ChangelogType.None:
        return undefined;
      case ChangelogType.KeepAChangelog:
        return new KeepAChangelogWriter(changelogConfig as ChangelogConfig<KeepAChangelogWriterOptions>);
      default:
        return new ConventionalChangelogWriter(changelogConfig as ChangelogConfig<ConventionalChangelogWriterOptions>);
    }
  }
}

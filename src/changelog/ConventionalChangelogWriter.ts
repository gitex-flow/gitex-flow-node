import { GitLog } from '../git';
import { Transform, Readable } from 'stream';
import { GitRepositoryContext } from '../git/GitRepositoryContext';
import { ChangelogWriter, ChangelogWriterOptions } from './ChangelogWriter';
import conventionalChangelogPresetLoader from 'conventional-changelog-preset-loader';
import conventionalChangelogWriter from 'conventional-changelog-writer';
import { basename, dirname, join } from 'path';
import { createWriteStream, createReadStream, removeSync } from 'fs-extra';
import { Utils } from '../tools';

/**
 * Options of the ConventionalChangelogBuilder.
 */
export interface ConventionalChangelogWriterOptions extends ChangelogWriterOptions {
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
   */
  conventionalChangelogPresent?: string;
}

/**
 * Builder for a changelog from conventional commits.
 */
export class ConventionalChangelogWriter extends ChangelogWriter {
  private options: ConventionalChangelogWriterOptions;

  /**
   * Initializes a new instance of this class.
   *
   * @param options - The options of the instance.
   */
  constructor(options: ConventionalChangelogWriterOptions) {
    super(options);
    this.options = options;
  }

  /**
   * Builds a changelog stream from the commits since the last release.
   *
   * @param context - The context information of the git repository.
   * @param logs - The conventional git logs since the last release.
   *
   * @returns The stream of the latest changelog.
   */
  protected async createLatestChangelogStream(context: GitRepositoryContext, logs: GitLog[]): Promise<Transform> {
    const present = this.options.conventionalChangelogPresent ?? 'angular';

    // Workaround for issue https://github.com/conventional-changelog/conventional-changelog/issues/815
    // Should be removed if bug will be fixed.
    logs = this.cleanNotes(logs);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const config = (await conventionalChangelogPresetLoader(present)) as any;
    const commitStream = Readable.from(logs);
    return commitStream.pipe(conventionalChangelogWriter(context, config.writerOpts));
  }

  /**
   * Merges the changelog since the latest release with the main changelog.
   *
   * @param latestChangelogStream - The stream with the changelogs since the latest release.
   * @param changelogPath - The file path of the changelog to be merged.
   *
   * @returns The stream of the merged changelogs.
   */
  protected async mergeWithChangelog(latestChangelogStream: Readable, changelogPath: string): Promise<Readable> {
    const dir = dirname(changelogPath);
    const fileName = basename(changelogPath, '.md');

    // Create tmp file with latest changelog.
    const tmpChangelogFilePath = join(dir, `${fileName}.tmp.md`);
    const tmpChangelogFileStream = createWriteStream(tmpChangelogFilePath);
    await Utils.pipe(latestChangelogStream, tmpChangelogFileStream);

    // Append content of changelog to tmp file.
    const changelogFileStream = createReadStream(changelogPath);
    const tmpChangelogFileAppendStream = createWriteStream(tmpChangelogFilePath, { flags: 'a' });
    await Utils.pipe(changelogFileStream, tmpChangelogFileAppendStream);

    // Return readable stream of the tmp file and add listener to delete file on closing the stream.
    return createReadStream(tmpChangelogFilePath).on('close', () => {
      removeSync(tmpChangelogFilePath);
    });
  }

  private cleanNotes(logs: GitLog[]): GitLog[] {
    for (const log of logs) {
      log.notes = log.notes.filter((v) => ['BREAKING CHANGE', 'BREAKING CHANGES'].includes(v.title));
    }
    return logs;
  }
}

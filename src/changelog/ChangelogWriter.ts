import { GitLog } from '../git';
import { GitRepositoryContext } from '../git/GitRepositoryContext';
import { Readable } from 'stream';
import { basename, extname, join } from 'path';
import { createReadStream, createWriteStream, ensureFile, remove } from 'fs-extra';
import { getLogger } from 'log4js';
import { Utils } from '../tools/Utils';

/**
 * Options of the ChangelogWriter.
 */
export interface ChangelogWriterOptions {
  /**
   * Path to the node project folder / git repository.
   */
  basePath?: string;

  /**
   * Specifies the name of the changelog.
   *
   * *DEFAULT*: CHANGELOG.md
   */
  changelogFileName?: string;

  /**
   * Set this flag to keep the changelog of the latest release as [[changelogFileName]].latest.md.
   * This file can be useful for some other tools which processes the release information (ex. gitlab).
   */
  storeLatestChangelog?: boolean;
}

/**
 * Builder for a changelog.
 */
export abstract class ChangelogWriter {
  public static readonly DefaultChangelogFile = 'CHANGELOG.md';

  private readonly logger = getLogger('ChangelogWriter');
  private readonly opt: ChangelogWriterOptions;

  /**
   * Initializes a new instance of this class.
   *
   * @param options - The options of the instance.
   */
  constructor(options: ChangelogWriterOptions) {
    this.opt = options;
  }

  /**
   * Writes a changelog.
   *
   * @param context - The context information of the git repository.
   * @param logs - The conventional git logs since the last release.
   */
  public async write(context: GitRepositoryContext, logs: GitLog[]): Promise<void> {
    const changelogFileName = this.opt.changelogFileName ?? ChangelogWriter.DefaultChangelogFile;
    const basePath = this.opt.basePath ?? process.cwd();
    const changelogPath = join(basePath, changelogFileName);
    await ensureFile(changelogPath);

    let latestChangelogStream = await this.createLatestChangelogStream(context, logs);

    const latestChangelogFileName = ChangelogWriter.getLatestChangelogName(changelogFileName);
    const latestChangelogFilePath = join(basePath, latestChangelogFileName);
    const latestChangelogFileStream = createWriteStream(latestChangelogFilePath);
    await Utils.pipe(latestChangelogStream, latestChangelogFileStream);

    latestChangelogStream = createReadStream(latestChangelogFilePath);
    const changelogStream = await this.mergeWithChangelog(latestChangelogStream, changelogPath, context);

    let changelogUpdatedMessage = `Updated ${changelogFileName}`;
    if (this.opt.storeLatestChangelog) {
      changelogUpdatedMessage += ` and ${latestChangelogFileName}`;
    } else {
      await remove(latestChangelogFilePath);
    }

    const changelogFileStream = createWriteStream(changelogPath);
    await Utils.pipe(changelogStream, changelogFileStream);

    this.logger.info(changelogUpdatedMessage);
  }

  /**
   * Derives the name of the seperated latest changelog from the main changelog name.
   *
   * @param changelogFileName - The name of the main changelog.
   *
   * @returns The derived name for the latest changelog.
   */
  public static getLatestChangelogName(changelogFileName: string): string {
    const ext = extname(changelogFileName);
    const baseFileName = basename(changelogFileName, ext);
    return `${baseFileName}.latest${ext}`;
  }

  /**
   * Creates a changelog stream from the commits since the last release.
   *
   * @param context - The context information of the git repository.
   * @param logs - The conventional git logs since the last release.
   */
  protected abstract createLatestChangelogStream(context: GitRepositoryContext, logs: GitLog[]): Promise<Readable>;

  /**
   * Merges a changelog stream from the commits since the last release.
   *
   * @param context - The context information of the git repository.
   * @param logs - The conventional git logs since the last release.
   * @param context - The context information of the git repository.
   */
  protected abstract mergeWithChangelog(
    latestChangelogStream: Readable,
    changelogPath: string,
    context?: GitRepositoryContext,
  ): Promise<Readable>;
}

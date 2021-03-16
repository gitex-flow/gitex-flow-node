import { GitLog } from '../git';
import { Readable } from 'stream';
import { GitRepositoryContext } from '../git/GitRepositoryContext';
import { ChangelogWriter, ChangelogWriterOptions } from './ChangelogWriter';
import { readFile } from 'fs-extra';
import { parse, format } from 'url';
import { Change, Changelog, ChangeType, parser, Release } from 'keep-a-changelog';

/**
 * Options of the KeepAChangelogWriter.
 */
export interface KeepAChangelogWriterOptions extends ChangelogWriterOptions {
  /**
   * The title of the changelog.
   * *DEFAULT*: 'Changelog'
   */
  title?: string;

  /**
   * The description of the changelog.
   */
  description?: string;
}

/**
 * Builder for a changelog from conventional commits in [keep-a-changelog format](https://keepachangelog.com/en/1.0.0/).
 */
export class KeepAChangelogWriter extends ChangelogWriter {
  private options: KeepAChangelogWriterOptions;

  /**
   * Initializes a new instance of this class.
   *
   * @param options - The options of the instance.
   */
  constructor(options: KeepAChangelogWriterOptions) {
    super(options);
    this.options = options;
  }

  /**
   * Builds a changelog stream from the commits since the last release.
   *
   * @param context - The context information of the git repository.
   * @param logs - The conventional git logs since the last release.
   */
  protected async createLatestChangelogStream(context: GitRepositoryContext, logs: GitLog[]): Promise<Readable> {
    const latestReleaseChangelog = new Changelog(this.options.title ?? 'Changelog', this.options.description);
    const latestRelease = new Release(context.version ?? '', context.date ?? new Date());
    latestReleaseChangelog.addRelease(latestRelease);

    for (const log of logs) {
      const changeType = this.getTypeFromLog(log);
      if (log.subject) {
        const referencedIssues = log.references?.map((x) => `#${x.issue}`).join(', ');
        const message = log.subject + (referencedIssues ? ` ( ${referencedIssues} )` : '');
        latestRelease.addChange(changeType, new Change(message));
      }
    }

    return Readable.from(latestReleaseChangelog.toString());
  }

  private getTypeFromLog(log: GitLog): ChangeType {
    let changeType: ChangeType = 'changed';
    if (log.notes.some((x) => x.title === 'REMOVED')) {
      changeType = 'removed';
    } else if (log.notes.some((x) => x.title === 'SECURITY')) {
      changeType = 'security';
    } else if (log.type === 'feat') {
      changeType = 'added';
    } else if (log.type === 'fix') {
      changeType = 'fixed';
    } else if (log.notes.some((x) => x.title === 'DEPRECATED')) {
      changeType = 'deprecated';
    }
    return changeType;
  }

  /**
   * Merges the changelog since the latest release with the main changelog.
   *
   * @param latestChangelogStream - The stream with the changelogs since the latest release.
   * @param changelogPath - The file path of the changelog to be merged.
   * @param context - The context information of the git repository.
   */
  protected async mergeWithChangelog(
    latestChangelogStream: Readable,
    changelogPath: string,
    context?: GitRepositoryContext,
  ): Promise<Readable> {
    const changelogText = await readFile(changelogPath, 'utf8');
    let changelog = new Changelog(this.options.title ?? 'Changelog', this.options.description);
    if (changelogText) {
      changelog = parser(changelogText);
    }
    if (context?.repoUrl) {
      changelog.url = this.rewriteUrl(context.repoUrl);
    }

    let latestChangelog: Changelog;
    latestChangelogStream.on('data', (changelog: string) => {
      latestChangelog = parser(changelog);
    });

    return new Promise((resolve, reject) => {
      latestChangelogStream.on('error', (error: Error) => reject(error));
      latestChangelogStream.on('end', () => {
        changelog.addRelease(latestChangelog.releases[0]);
        resolve(Readable.from(changelog.toString()));
      });
    });
  }

  private rewriteUrl(url: string): string {
    const parsed = parse(url.replace('git@', `https://`));
    if (parsed.pathname) {
      parsed.pathname = parsed.pathname.replace(/\.git$/, '').replace(/^\/:/, '/');
    }
    return format(parsed);
  }
}

import { getLogger } from 'log4js';
import { GitFlowBranch } from '../api/branches/GitFlowBranch';
import { GFlow } from '../gflow/GFlow';
import { Readable, Writable, Transform } from 'stream';
import { ConventionalCommitConfig, ProjectConfig } from '../configs';
import { ChangelogConfig } from '../configs/ChangelogConfig';
import { ChangelogType } from '../changelog/ChangelogType';
import { ConventionalChangelogWriterOptions } from '../changelog/ConventionalChangelogWriter';
import { ChangelogWriter } from '../changelog';
import conventionalCommitsParser from 'conventional-commits-parser';
import { GitLog } from '../git/GitLog';

/**
 * Provides some utility functions.
 */
export class Utils {
  /**
   * Gets the current date formatted as yyyy-mm-dd.
   *
   * @returns date in fomat yyyy-mm-dd.
   */
  public static getCurrDate(): string {
    const today = new Date();
    const yyyy = today.getFullYear();
    let dd = '' + today.getDate();
    let mm = '' + (today.getMonth() + 1);
    if (+dd < 10) {
      dd = '0' + dd;
    }
    if (+mm < 10) {
      mm = '0' + mm;
    }
    return `${yyyy}-${mm}-${dd}`;
  }

  /**
   * Executes a command and suppresses errors if they are thrown.
   *
   * @param command - Command to be executed.
   */
  public static async exec(command: () => Promise<string | void>): Promise<void> {
    try {
      await command();
    } catch (error) {
      const logger = getLogger('gitex-flow');
      logger.error(error);
    }
  }

  /**
   * Prints the config to the console.
   *
   * @param gitFlow - The git flow instance the config should be printed.
   */
  public static async printConfig(gitFlow: GFlow): Promise<void> {
    const branches = await gitFlow.config.get();
    console.info(branches);
  }

  /**
   * Prints the branches to the console.
   *
   * @param gitFlowBranch - The branch type to be printed.
   */
  public static async printBranches(gitFlowBranch: GitFlowBranch): Promise<void> {
    const branches = await gitFlowBranch.list();
    if (branches.length === 0) {
      console.error(`There are no active ${gitFlowBranch.type} branches.`);
    } else {
      console.info(`Active ${gitFlowBranch.type} branches:`);
      for (const branch of branches) {
        console.info(` - ${branch}`);
      }
    }
  }

  /**
   * Pipes a readable stream asynchrounously to a writable stream with error handling.
   *
   * @param src - The readable source stream.
   * @param dest - The writable destination stream.
   * @param destroy - Specifies if the streams should be destroyed on finish.
   *
   * @returns Promise on copying stream properly.
   */
  public static pipe(src: Readable, dest: Writable, destroy = true): Promise<void> {
    return new Promise((resolve, reject) => {
      src
        .on('error', (err: Error) => {
          err.message = `Error on reading source stream: ${err.message}`;
          reject(err);
        })
        .pipe(dest)
        .on('error', (err: Error) => {
          err.message = `Error on writing destination stream: ${err.message}`;
          reject(err);
        })
        .on('finish', () => {
          if (destroy) {
            src.destroy();
            dest.destroy();
          }
          resolve();
        });
    });
  }

  /**
   * Derives the [[ChangelogConfig]] from a given [[projectConfig]].
   *
   * @param projectConfig - The project configuration.
   *
   * @returns The derived changelog config.
   */
  public static deriveChangelogConfig(projectConfig?: ProjectConfig): ChangelogConfig {
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

  /**
   * Parses conventional commit messages to a [[GitLog]] array.
   *
   * @param commitMessages - The commit messages.
   * @param conventionalCommitConfig - The configuration of the conventional commit parser.
   * @returns The parsed conventional commit messages as an array of [[GitLogs]].
   */
  public static async parseConventionalCommits(
    commitMessages: string[],
    conventionalCommitConfig?: ConventionalCommitConfig,
  ): Promise<GitLog[]> {
    const gitLogs: GitLog[] = [];
    const stream = Readable.from(commitMessages);
    return new Promise((resolve, reject) => {
      stream
        .pipe(Utils.parseConventionalCommitsViaPipe(conventionalCommitConfig))
        .on('error', function (err) {
          err.message = 'Error in conventional-commits-parser: ' + err.message;
          reject(err);
        })
        .on('data', (data) => {
          const log = data as GitLog;
          gitLogs.push(log);
        })
        .on('end', () => {
          resolve(gitLogs);
        });
    });
  }

  /**
   * Parses conventional commit messages via a stream.Transform pipe.
   *
   * @param conventionalCommitConfig - The configuration of the conventional commit parser.
   * @returns The parsed conventional commit messages as transformed stream.
   */
  public static parseConventionalCommitsViaPipe(conventionalCommitConfig?: ConventionalCommitConfig): Transform {
    return conventionalCommitsParser(
      conventionalCommitConfig ?? {
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
        noteKeywords: ['BREAKING CHANGE', 'SECURITY'],
      },
    );
  }
}

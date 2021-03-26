import { exec } from 'child_process';
import { getLogger } from 'log4js';
import { GitFlowBranchType } from '../api/branches/GitFlowBranch';

/**
 * All possible git flow actions can be applied.
 */
export type GitFlowAction =
  | 'start'
  | 'finish'
  | 'list'
  | 'publish'
  | 'track'
  | 'diff'
  | 'rebase'
  | 'checkout'
  | 'pull'
  | 'delete'
  | 'init'
  | 'version'
  | 'config';

/**
 * Schema of a git flow command arguments.
 */
export interface GitFlowCommandArgs {
  type?: GitFlowBranchType;
  action?: GitFlowAction;
  name?: string;
  args?: string[];
  options?: string;
  repositoryPath?: string;
}

/**
 * Executer for git flow commands via command line.
 */
export class GitFlowBashExecuter {
  private static readonly logger = getLogger('GitFlowBashExecuter');
  private static readonly GitFlowCommand = 'git flow';

  /**
   * Executes the a git flow command via command line.
   *
   * @param args - Arguments for git flow command execution.
   *
   * @returns The result of the executed command.
   */
  public static async execute(args: GitFlowCommandArgs): Promise<string> {
    let cmd = '';
    if (args.repositoryPath) {
      cmd = `cd "${args.repositoryPath}" && `;
    }
    cmd += `${GitFlowBashExecuter.GitFlowCommand}`;
    if (args.type) {
      cmd += ` ${args.type}`;
    }
    if (args.action) {
      cmd += ` ${args.action}`;
    }
    if (args.options) {
      cmd += ` ${args.options}`;
    }
    if (args.name) {
      cmd += ` "${args.name}"`;
    }
    if (args.args) {
      cmd += ` "${args.args.join('" "')}"`;
    }
    GitFlowBashExecuter.logger.debug(`Executing '${cmd}'`);
    return await GitFlowBashExecuter.execViaShell(cmd);
  }

  /**
   * Executes the command via command line.
   *
   * @param cmd - The command should be executed via command line.
   * @returns Standard output (stdout) of the started process.
   */
  private static execViaShell(cmd: string): Promise<string> {
    return new Promise((resolve, reject) => {
      exec(cmd, (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else if (stderr) {
          resolve(stderr);
        } else {
          resolve(stdout);
        }
      });
    });
  }
}

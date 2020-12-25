import { getLogger } from 'log4js';
import { GitFlowBranch } from '../api/branches/GitFlowBranch';
import { GFlow } from '../gflow/GFlow';

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
}

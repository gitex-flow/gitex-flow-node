import { GitFlowConfig } from './GitFlowConfig';
import { ProjectConfig } from './ProjectConfig';
import { Configuration } from 'log4js';

export type Log4jsConfig = Configuration;

/**
 * Options of the GFlow implementation.
 */
export interface GFlowConfig {
  /**
   * The git flow config can be directly set in the GFlow options.
   * This config will be taken if no other git flow config is given on calling the `init` method.
   */
  gitFlowConfig?: GitFlowConfig;

  /**
   * The configuration of the node project.
   */
  projectConfig?: ProjectConfig;

  /**
   * The log4js configuration.
   * For more information see https://log4js-node.github.io/log4js-node/api.html.
   */
  log4jsConfig?: Log4jsConfig;
}

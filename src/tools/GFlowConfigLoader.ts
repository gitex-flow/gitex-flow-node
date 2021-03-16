import { pathExistsSync, readJsonSync } from 'fs-extra';
import { join } from 'path';
import { GFlowConfig } from '../configs/GFlowConfig';

/**
 * Loader of the GFlow config file.
 */
export class GFlowConfigLoader {
  private static readonly ConfigFileNames = ['.gitex-flow.json', '.gitex-flow', '.gitex.json', '.gitex'];

  /**
   * Loads the gitex configuration file if exists.
   *
   * @param projectPath - The path to the repository. (default: process.cwd())
   *
   * @returns The configuration from file if it exists.
   */
  public static load(projectPath?: string): GFlowConfig | undefined {
    let gFlowConfig: GFlowConfig | undefined;
    projectPath = projectPath ?? process.cwd();

    for (const configFileName of GFlowConfigLoader.ConfigFileNames) {
      const configFilePath = join(projectPath, configFileName);
      if (pathExistsSync(configFilePath)) {
        gFlowConfig = readJsonSync(configFilePath) as GFlowConfig;
        break;
      }
    }

    return gFlowConfig;
  }
}

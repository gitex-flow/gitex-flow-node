import { GFlowConfig } from '../gflow/GFlow';
import { pathExistsSync, readJsonSync } from 'fs-extra';
import { join } from 'path';

/**
 * Loader of the GFlow config file.
 */
export class GFlowConfigLoader {
  private static readonly ConfigFileNames = ['.gitex-flow.json', '.gitex-flow', '.gitex.json', '.gitex'];

  /**
   * Loads the gitex configuration file if exists.
   *
   * @returns The configuration from file if it exists.
   */
  public static load(): GFlowConfig | undefined {
    let gFlowConfig: GFlowConfig | undefined;

    for (const configFileName of GFlowConfigLoader.ConfigFileNames) {
      const configFilePath = join(process.cwd(), configFileName);
      if (pathExistsSync(configFilePath)) {
        gFlowConfig = readJsonSync(configFilePath) as GFlowConfig;
        break;
      }
    }

    if (gFlowConfig && !gFlowConfig.projectConfig.projectPath) {
      gFlowConfig.projectConfig.projectPath = process.cwd();
    }

    return gFlowConfig;
  }
}

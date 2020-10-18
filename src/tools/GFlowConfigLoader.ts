import { pathExistsSync, readJsonSync } from 'fs-extra';
import { join } from 'path';
import { GFlowConfig } from '../gflow/GFlowConfig';

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

    return gFlowConfig;
  }
}

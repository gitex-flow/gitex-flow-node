/**
 * Specification of the git flow API.
 */
export interface GitFlow {
  /**
   * Provides the version of the git flow implementation.
   */
  version(): Promise<string>;
}

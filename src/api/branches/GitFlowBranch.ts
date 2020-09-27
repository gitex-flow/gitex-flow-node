import { GitFlowBranchConfig } from '../GitFlowBranchConfig';

/**
 * Types of the git flow branches.
 */
export type BranchType = 'feature' | 'release' | 'bugfix' | 'hotfix' | 'support';

/**
 * This interface represents the basic functionality of a git flow branch.
 */
export interface GitFlowBranch {
  /**
   * Specifies the git flow branch type.
   */
  readonly type: BranchType;

  /**
   * Gets the git flow branch config.
   */
  getConfig(): Promise<GitFlowBranchConfig>;

  /**
   * Lists all branches of the type '[[type]]'.
   */
  list(): Promise<string[]>;

  /**
   * Creates and starts a new branch of the type '[[type]]'.
   *
   * @param name - Name of the branch to be started.
   * @param base - Base of the branch should be started from.
   * @returns The git reference of the create branch.
   */
  start(name?: string, base?: string): Promise<string>;

  /**
   * Merges and finishes the branch of the branch type '[[type]]'.
   *
   * @param name - Name of the branch to be finished.
   * @param msg - Message to be set for finishing the branch.
   */
  finish(name?: string, msg?: string): Promise<void>;
}

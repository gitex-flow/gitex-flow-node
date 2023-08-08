import { GitFlowBranchConfig } from '../GitFlowBranchConfig';
import { GitFlowEntity } from '../GitFlowEntity';

/**
 * Types of the git flow base branches.
 */
export type GitFlowBaseBranchType = 'master' | 'develop';

/**
 * Types of the git flow branches.
 */
export type GitFlowBranchType = 'feature' | 'release' | 'bugfix' | 'hotfix' | 'support';

/**
 * This interface represents the basic functionality of a git flow branch.
 */
export interface GitFlowBranch extends GitFlowEntity<GitFlowBranchType> {
  /**
   * Default base of this branch.
   */
  readonly defaultBase: GitFlowBaseBranchType;

  /**
   * Gets the git flow branch config.
   */
  getConfig(): Promise<GitFlowBranchConfig>;

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

  /**
   * Generates an default branch name.
   *
   * @param name - A custom name for the branch.
   */
  generateBranchName(name?: string): Promise<string | undefined>;
}

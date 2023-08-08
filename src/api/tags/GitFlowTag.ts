import { GitFlowEntity } from '../GitFlowEntity';

/**
 * Types of the git flow tags.
 */
export type GitFlowTagType = 'alpha' | 'beta';

/**
 * This interface represents the basic functionality of a git flow tag.
 */
export interface GitFlowTag extends GitFlowEntity<GitFlowTagType> {
  /**
   * Publishs a new tag of the type '[[type]]'.
   *
   * @param baseBranch - The base branch to create an prerelease from.
   * @returns The git reference of the create tag.
   */
  start(baseBranch?: string): Promise<string>;

  /**
   * Generates a default tag name.
   */
  generateTagName(): Promise<string | undefined>;
}

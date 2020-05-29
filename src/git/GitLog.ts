import { GitNote } from './GitNote';
import { GitReference } from './GitReference';

/**
 * Represents the parsed properties of a conventional commit git log.
 */
export interface GitLog {
  /**
   * The hash of of the referenced commit.
   */
  hash: string;

  /**
   * Conventional commit type.
   */
  type: string;

  /**
   * Conventional commit scope (group).
   */
  scope?: string;

  /**
   * The whole conventional commit message.
   */
  header: string;

  /**
   * The conventional commit message without the type and scope.
   */
  subject: string;

  /**
   * The body of the conventional commit message (long description).
   */
  body?: string;

  /**
   * The footer of the conventional commit message (containing references).
   */
  footer?: string;

  /**
   * The merge text of the commit message.
   */
  merge?: string;

  /**
   * Mentioned contributer.
   */
  mentions?: string;

  /**
   * States if the commit is a revert commit.
   */
  revert?: string;

  /**
   * Parsed footer notes (ex. BREAKING CHANGE)
   */
  notes: GitNote[];

  /**
   * Parsed footer references (ex. closes #39)
   */
  references?: GitReference[];
}

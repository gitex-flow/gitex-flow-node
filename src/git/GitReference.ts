/**
 * Represents a git reference.
 */
export interface GitReference {
  /**
   * The action of the reference (ex. closes).
   */
  action: string;

  /**
   * The owner of the referenced issue.
   */
  owner?: string;

  /**
   * The repository the referenced issue.
   */
  repository?: string;

  /**
   * The issue number without prefix.
   */
  issue?: string;

  /**
   * The prefix of the issue number without issue number.
   */
  prefix: string;

  /**
   * The raw issue number.
   */
  raw: string;
}

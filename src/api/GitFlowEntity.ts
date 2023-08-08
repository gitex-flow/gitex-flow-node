/**
 * This interface represents a basic git flow entity.
 */
export interface GitFlowEntity<T> {
  /**
   * Specifies the git flow entity type.
   */
  readonly type: T;

  /**
   * Lists all git flow entity of the type '[[type]]'.
   *
   * @param withPrefix - Indicates if the entities should be listed with their prefix.
   */
  list(withPrefix?: boolean): Promise<string[]>;
}

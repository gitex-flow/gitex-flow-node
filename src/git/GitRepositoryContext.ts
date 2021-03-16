/**
 * Represents the git repository context.
 */
export interface GitRepositoryContext {
  /**
   * Version number of the up-coming release. If `version` is found in the last
   * commit before generating logs, it will be overwritten.
   */
  version?: string;

  /**
   * Title of the current version.
   */
  title?: string;

  /**
   * The hosting website. Eg: `'https://github.com'` or `'https://bitbucket.org'`.
   */
  host?: string;

  /**
   * The owner of the repository. Eg: `'stevemao'`.
   */
  owner?: string;

  /**
   * The repository name on `host`. Eg: `'gitex-flow-node'`.
   */
  repository?: string;

  /**
   * The whole repository url. Eg: `'https://github.com/gitex-flow/gitex-flow-node'`.
   * The should be used as a fallback when `context.repository` doesn't exist.
   */
  repoUrl?: string;

  /**
   * Commit keyword in the url.
   *
   * *DEFAULT*: 'commits'
   */
  commit?: string;

  /**
   * Issue or pull request keyword.
   *
   * *DEFAULT*: 'issues'
   */
  issue?: string;

  /**
   * Default to formatted (`'yyyy-mm-dd'`) today's date. [dateformat](https://github.com/felixge/node-dateformat)
   * is used for formatting the date. If `version` is found in the last commit,
   * `committerDate` will overwrite this.
   */
  date?: string;
}

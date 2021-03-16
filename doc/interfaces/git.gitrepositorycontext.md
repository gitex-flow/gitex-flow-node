[gitex-flow](../README.md) › [git](../modules/git.md) › [GitRepositoryContext](git.gitrepositorycontext.md)

# Interface: GitRepositoryContext

Represents the git repository context.

## Hierarchy

* **GitRepositoryContext**

## Index

### Properties

* [commit](git.gitrepositorycontext.md#optional-commit)
* [date](git.gitrepositorycontext.md#optional-date)
* [host](git.gitrepositorycontext.md#optional-host)
* [issue](git.gitrepositorycontext.md#optional-issue)
* [owner](git.gitrepositorycontext.md#optional-owner)
* [repoUrl](git.gitrepositorycontext.md#optional-repourl)
* [repository](git.gitrepositorycontext.md#optional-repository)
* [title](git.gitrepositorycontext.md#optional-title)
* [version](git.gitrepositorycontext.md#optional-version)

## Properties

### `Optional` commit

• **commit**? : *undefined | string*

Commit keyword in the url.

*DEFAULT*: 'commits'

___

### `Optional` date

• **date**? : *undefined | string*

Default to formatted (`'yyyy-mm-dd'`) today's date. [dateformat](https://github.com/felixge/node-dateformat)
is used for formatting the date. If `version` is found in the last commit,
`committerDate` will overwrite this.

___

### `Optional` host

• **host**? : *undefined | string*

The hosting website. Eg: `'https://github.com'` or `'https://bitbucket.org'`.

___

### `Optional` issue

• **issue**? : *undefined | string*

Issue or pull request keyword.

*DEFAULT*: 'issues'

___

### `Optional` owner

• **owner**? : *undefined | string*

The owner of the repository. Eg: `'stevemao'`.

___

### `Optional` repoUrl

• **repoUrl**? : *undefined | string*

The whole repository url. Eg: `'https://github.com/gitex-flow/gitex-flow-node'`.
The should be used as a fallback when `context.repository` doesn't exist.

___

### `Optional` repository

• **repository**? : *undefined | string*

The repository name on `host`. Eg: `'gitex-flow-node'`.

___

### `Optional` title

• **title**? : *undefined | string*

Title of the current version.

___

### `Optional` version

• **version**? : *undefined | string*

Version number of the up-coming release. If `version` is found in the last
commit before generating logs, it will be overwritten.

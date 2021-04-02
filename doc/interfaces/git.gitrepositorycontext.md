[gitex-flow](../README.md) / [git](../modules/git.md) / GitRepositoryContext

# Interface: GitRepositoryContext

[git](../modules/git.md).GitRepositoryContext

Represents the git repository context.

## Table of contents

### Properties

- [commit](git.gitrepositorycontext.md#commit)
- [date](git.gitrepositorycontext.md#date)
- [host](git.gitrepositorycontext.md#host)
- [issue](git.gitrepositorycontext.md#issue)
- [owner](git.gitrepositorycontext.md#owner)
- [repoUrl](git.gitrepositorycontext.md#repourl)
- [repository](git.gitrepositorycontext.md#repository)
- [title](git.gitrepositorycontext.md#title)
- [version](git.gitrepositorycontext.md#version)

## Properties

### commit

• `Optional` **commit**: *string*

Commit keyword in the url.

*DEFAULT*: 'commits'

___

### date

• `Optional` **date**: *string*

Default to formatted (`'yyyy-mm-dd'`) today's date. [dateformat](https://github.com/felixge/node-dateformat)
is used for formatting the date. If `version` is found in the last commit,
`committerDate` will overwrite this.

___

### host

• `Optional` **host**: *string*

The hosting website. Eg: `'https://github.com'` or `'https://bitbucket.org'`.

___

### issue

• `Optional` **issue**: *string*

Issue or pull request keyword.

*DEFAULT*: 'issues'

___

### owner

• `Optional` **owner**: *string*

The owner of the repository. Eg: `'stevemao'`.

___

### repoUrl

• `Optional` **repoUrl**: *string*

The whole repository url. Eg: `'https://github.com/gitex-flow/gitex-flow-node'`.
The should be used as a fallback when `context.repository` doesn't exist.

___

### repository

• `Optional` **repository**: *string*

The repository name on `host`. Eg: `'gitex-flow-node'`.

___

### title

• `Optional` **title**: *string*

Title of the current version.

___

### version

• `Optional` **version**: *string*

Version number of the up-coming release. If `version` is found in the last
commit before generating logs, it will be overwritten.

[gitex-flow](../README.md) / [git](../modules/git.md) / GitRepository

# Class: GitRepository

[git](../modules/git.md).GitRepository

A simple API with basic functionality of a git repository.

## Table of contents

### Constructors

- [constructor](git.gitrepository.md#constructor)

### Properties

- [config](git.gitrepository.md#config)

### Methods

- [checkout](git.gitrepository.md#checkout)
- [commit](git.gitrepository.md#commit)
- [createOrOpenRepo](git.gitrepository.md#createoropenrepo)
- [ensure](git.gitrepository.md#ensure)
- [ensureNoUnCommitedChanges](git.gitrepository.md#ensurenouncommitedchanges)
- [getConfig](git.gitrepository.md#getconfig)
- [getLatestReleasedVersion](git.gitrepository.md#getlatestreleasedversion)
- [getLogsSinceLastRelease](git.gitrepository.md#getlogssincelastrelease)
- [getRepoPath](git.gitrepository.md#getrepopath)
- [popLatestStash](git.gitrepository.md#poplateststash)
- [remove](git.gitrepository.md#remove)
- [stash](git.gitrepository.md#stash)
- [status](git.gitrepository.md#status)

## Constructors

### constructor

• **new GitRepository**(`config?`)

Initializes a new instance of this class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | [ProjectConfig](../interfaces/configs.projectconfig.md) | The project configuration. |

## Properties

### config

• `Protected` `Optional` **config**: [ProjectConfig](../interfaces/configs.projectconfig.md)

## Methods

### checkout

▸ **checkout**(`branchName`): `Promise`<void\>

Checks out a given branch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `branchName` | `string` | Name of the branch to be checked out. |

#### Returns

`Promise`<void\>

___

### commit

▸ **commit**(`fileNames`, `message`, `authorName?`, `authorMail?`): `Promise`<string\>

Adds and commits the given file names to the current branch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileNames` | `string`[] | Relative file paths to be added before commit. |
| `message` | `string` | Commit message. |
| `authorName?` | `string` | The name of the author. |
| `authorMail?` | `string` | Mail address of the author. |

#### Returns

`Promise`<string\>

The hash of the commit.

___

### createOrOpenRepo

▸ `Protected` **createOrOpenRepo**(): `Promise`<SimpleGit\>

Creates or open the test git repository.

#### Returns

`Promise`<SimpleGit\>

The instance ot the git repository.

___

### ensure

▸ **ensure**(): `Promise`<void\>

Ensures the repository exists.
If it doesn't exist it will be created.

#### Returns

`Promise`<void\>

___

### ensureNoUnCommitedChanges

▸ **ensureNoUnCommitedChanges**(): `Promise`<void\>

Ensures there are no uncommited changes (staged and unstaged) in the local workspace.

#### Returns

`Promise`<void\>

___

### getConfig

▸ **getConfig**(`configKey`): `Promise`<ConfigGetResult\>

Gets the git config values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configKey` | `string` | The key of the config to read. |

#### Returns

`Promise`<ConfigGetResult\>

The config key-values.

___

### getLatestReleasedVersion

▸ **getLatestReleasedVersion**(): `Promise`<undefined \| string\>

Returns the most recent released version tag (semantic version).

#### Returns

`Promise`<undefined \| string\>

The version of the latest release.

___

### getLogsSinceLastRelease

▸ **getLogsSinceLastRelease**(): `Promise`<[GitLog](../interfaces/git.gitlog.md)[]\>

Collects all commit messages since the last release.

#### Returns

`Promise`<[GitLog](../interfaces/git.gitlog.md)[]\>

The logs since the last release.

___

### getRepoPath

▸ **getRepoPath**(): `string`

Gets the folder path of the git repository.

#### Returns

`string`

The path to the git repository.

___

### popLatestStash

▸ **popLatestStash**(): `Promise`<void\>

Pops stash with a given name.

#### Returns

`Promise`<void\>

___

### remove

▸ **remove**(): `Promise`<void\>

Gets the path of the git repository.

#### Returns

`Promise`<void\>

___

### stash

▸ **stash**(): `Promise`<string\>

Stashes the uncommited changes from the current branch.

#### Returns

`Promise`<string\>

The message of the stashing.

___

### status

▸ **status**(): `Promise`<StatusResult\>

Retrieves the current status of the git repository.

#### Returns

`Promise`<StatusResult\>

The status of the git repository.

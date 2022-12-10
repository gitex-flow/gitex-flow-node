[gitex-flow](../README.md) / [tools](../modules/tools.md) / GitFlowNodeProject

# Class: GitFlowNodeProject

[tools](../modules/tools.md).GitFlowNodeProject

Representing an API for handling git flow SemVer.

## Table of contents

### Constructors

- [constructor](tools.GitFlowNodeProject.md#constructor)

### Methods

- [checkoutBranch](tools.GitFlowNodeProject.md#checkoutbranch)
- [commitChanges](tools.GitFlowNodeProject.md#commitchanges)
- [getContext](tools.GitFlowNodeProject.md#getcontext)
- [getCurrentBranch](tools.GitFlowNodeProject.md#getcurrentbranch)
- [getVersion](tools.GitFlowNodeProject.md#getversion)
- [popLatestStash](tools.GitFlowNodeProject.md#poplateststash)
- [stash](tools.GitFlowNodeProject.md#stash)
- [updateChangelog](tools.GitFlowNodeProject.md#updatechangelog)
- [writeVersion](tools.GitFlowNodeProject.md#writeversion)

## Constructors

### constructor

• **new GitFlowNodeProject**(`options?`)

Initializes a new instance of this class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`ProjectConfig`](../interfaces/configs.ProjectConfig.md) | Options of the git flow node project instance. |

## Methods

### checkoutBranch

▸ **checkoutBranch**(`branchName`): `Promise`<`void`\>

Checks out the given branch of the project.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `branchName` | `string` | Name of the branch to be checked out. |

#### Returns

`Promise`<`void`\>

___

### commitChanges

▸ **commitChanges**(`commitVersionFiles?`, `commitChangelog?`): `Promise`<`string`\>

Commits the changes of the git repository.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `commitVersionFiles` | `boolean` | `true` | Indicates if the defined version files should be committed if they exists. |
| `commitChangelog` | `boolean` | `true` | Indicates if the changelog should be committed. |

#### Returns

`Promise`<`string`\>

The hash of the commit.

___

### getContext

▸ **getContext**(`version?`, `name?`): `Promise`<[`GitRepositoryContext`](../interfaces/git.GitRepositoryContext.md)\>

Gets an object representing the current context of the node project.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `version?` | `string` | A optional user defined version. |
| `name?` | `string` | A optional user defined release name. |

#### Returns

`Promise`<[`GitRepositoryContext`](../interfaces/git.GitRepositoryContext.md)\>

An object with information about the node project.

___

### getCurrentBranch

▸ **getCurrentBranch**(): `Promise`<`string`\>

Gets the current branch.

#### Returns

`Promise`<`string`\>

The current branch checked out.

___

### getVersion

▸ **getVersion**(): `Promise`<`undefined` \| `string`\>

Gets the current version from the package.json.

#### Returns

`Promise`<`undefined` \| `string`\>

The version of the project.

___

### popLatestStash

▸ **popLatestStash**(): `Promise`<`void`\>

Pops the latest stash.

#### Returns

`Promise`<`void`\>

Promise on popping the latest stash.

___

### stash

▸ **stash**(): `Promise`<`boolean`\>

Stashes the uncommited changes from the current branch.

#### Returns

`Promise`<`boolean`\>

`true` if stash was successful, otherwise `false`.

___

### updateChangelog

▸ **updateChangelog**<`T`\>(`changelogConfig`, `version?`, `name?`): `Promise`<`void`\>

Updates the changelog with the changes since the last release.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `changelogConfig` | [`ChangelogConfig`](../modules/configs.md#changelogconfig)<`T`\> | The changelog configuration. |
| `version?` | `string` | Version the changelog is created for. |
| `name?` | `string` | Name of the release. |

#### Returns

`Promise`<`void`\>

___

### writeVersion

▸ **writeVersion**(`version`): `Promise`<`void`\>

 Writes the version and commits the changes in the git repository.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `version` | `string` | Version to commit. |

#### Returns

`Promise`<`void`\>
[gitex-flow](../README.md) / [gflow](../modules/gflow.md) / GFlowBranch

# Class: GFlowBranch

[gflow](../modules/gflow.md).GFlowBranch

This class represents an abstract GFlow branch with some basic functionality.

## Hierarchy

- **`GFlowBranch`**

  ↳ [`GFlowHotFixBranch`](gflow.GFlowHotFixBranch.md)

  ↳ [`GFlowReleaseBranch`](gflow.GFlowReleaseBranch.md)

## Implements

- [`GitFlowBranch`](../interfaces/api.GitFlowBranch.md)

## Table of contents

### Constructors

- [constructor](gflow.GFlowBranch.md#constructor)

### Properties

- [defaultBase](gflow.GFlowBranch.md#defaultbase)
- [logger](gflow.GFlowBranch.md#logger)
- [projectConfig](gflow.GFlowBranch.md#projectconfig)
- [type](gflow.GFlowBranch.md#type)

### Methods

- [finish](gflow.GFlowBranch.md#finish)
- [generateBranchName](gflow.GFlowBranch.md#generatebranchname)
- [generateBranchNameFromConfig](gflow.GFlowBranch.md#generatebranchnamefromconfig)
- [getConfig](gflow.GFlowBranch.md#getconfig)
- [list](gflow.GFlowBranch.md#list)
- [popStashedChanges](gflow.GFlowBranch.md#popstashedchanges)
- [start](gflow.GFlowBranch.md#start)
- [stashChanges](gflow.GFlowBranch.md#stashchanges)

## Constructors

### constructor

• **new GFlowBranch**(`gitFlowBranch`, `options?`)

Initializes a new instance of this class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gitFlowBranch` | [`GitFlowBranch`](../interfaces/api.GitFlowBranch.md) | Git flow branch to be wrapped. |
| `options?` | [`ProjectConfig`](../interfaces/configs.ProjectConfig.md) | Git flow node project options. |

## Properties

### defaultBase

• `Readonly` **defaultBase**: [`GitFlowBaseBranchType`](../modules/api.md#gitflowbasebranchtype)

Default base of this branch.

#### Implementation of

[GitFlowBranch](../interfaces/api.GitFlowBranch.md).[defaultBase](../interfaces/api.GitFlowBranch.md#defaultbase)

___

### logger

• `Protected` `Readonly` **logger**: `Logger`

___

### projectConfig

• `Protected` `Readonly` **projectConfig**: [`ProjectConfig`](../interfaces/configs.ProjectConfig.md)

___

### type

• `Readonly` **type**: [`GitFlowBranchType`](../modules/api.md#gitflowbranchtype)

Specifies the git flow branch type.

#### Implementation of

[GitFlowBranch](../interfaces/api.GitFlowBranch.md).[type](../interfaces/api.GitFlowBranch.md#type)

## Methods

### finish

▸ **finish**(`name?`, `msg?`): `Promise`<`void`\>

Merges and finishes the branch of the branch type '[type](gflow.GFlowBranch.md#type)'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | Name of the branch to be finished. |
| `msg?` | `string` | Message to be set for finishing the branch. |

#### Returns

`Promise`<`void`\>

#### Implementation of

[GitFlowBranch](../interfaces/api.GitFlowBranch.md).[finish](../interfaces/api.GitFlowBranch.md#finish)

___

### generateBranchName

▸ **generateBranchName**(`name?`): `Promise`<`undefined` \| `string`\>

Generates an default branch name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | A custom name for the branch. |

#### Returns

`Promise`<`undefined` \| `string`\>

The generated branch name.

#### Implementation of

[GitFlowBranch](../interfaces/api.GitFlowBranch.md).[generateBranchName](../interfaces/api.GitFlowBranch.md#generatebranchname)

___

### generateBranchNameFromConfig

▸ `Protected` **generateBranchNameFromConfig**(`name`): `Promise`<`string`\>

Gets the branch name including the git-flow configuration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | A given branch name without prefix. |

#### Returns

`Promise`<`string`\>

The generated name.

___

### getConfig

▸ **getConfig**(): `Promise`<[`GitFlowBranchConfig`](../interfaces/api.GitFlowBranchConfig.md)\>

Gets the git flow branch config.

#### Returns

`Promise`<[`GitFlowBranchConfig`](../interfaces/api.GitFlowBranchConfig.md)\>

The configuration of the gitex flow branch.

#### Implementation of

[GitFlowBranch](../interfaces/api.GitFlowBranch.md).[getConfig](../interfaces/api.GitFlowBranch.md#getconfig)

___

### list

▸ **list**(): `Promise`<`string`[]\>

Lists all branches of the type '[type](gflow.GFlowBranch.md#type)'.

#### Returns

`Promise`<`string`[]\>

The list of branches.

#### Implementation of

[GitFlowBranch](../interfaces/api.GitFlowBranch.md).[list](../interfaces/api.GitFlowBranch.md#list)

___

### popStashedChanges

▸ `Protected` **popStashedChanges**(`project`): `Promise`<`void`\>

Pops the latest stash into to local repository.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `project` | [`GitFlowNodeProject`](tools.GitFlowNodeProject.md) | The git project the stash should be popped from. |

#### Returns

`Promise`<`void`\>

___

### start

▸ **start**(`name?`, `base?`): `Promise`<`string`\>

Creates and starts a new branch of the type '[type](gflow.GFlowBranch.md#type)'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | Name of the branch to be started. |
| `base?` | `string` | Base of the branch should be started from. |

#### Returns

`Promise`<`string`\>

The name of the started branch.

#### Implementation of

[GitFlowBranch](../interfaces/api.GitFlowBranch.md).[start](../interfaces/api.GitFlowBranch.md#start)

___

### stashChanges

▸ `Protected` **stashChanges**(`project`): `Promise`<`boolean`\>

Stashes the current local changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `project` | [`GitFlowNodeProject`](tools.GitFlowNodeProject.md) | The git project to be stashed. |

#### Returns

`Promise`<`boolean`\>

Returns `true` if changes were stashed. Otherwise `false`.

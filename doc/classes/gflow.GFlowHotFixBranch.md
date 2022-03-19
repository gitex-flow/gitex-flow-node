[gitex-flow](../README.md) / [gflow](../modules/gflow.md) / GFlowHotFixBranch

# Class: GFlowHotFixBranch

[gflow](../modules/gflow.md).GFlowHotFixBranch

This class extending a hotfix branch with some helpful functionality.

## Hierarchy

- [`GFlowBranch`](gflow.GFlowBranch.md)

  ↳ **`GFlowHotFixBranch`**

## Table of contents

### Constructors

- [constructor](gflow.GFlowHotFixBranch.md#constructor)

### Properties

- [defaultBase](gflow.GFlowHotFixBranch.md#defaultbase)
- [logger](gflow.GFlowHotFixBranch.md#logger)
- [projectConfig](gflow.GFlowHotFixBranch.md#projectconfig)
- [type](gflow.GFlowHotFixBranch.md#type)

### Methods

- [finish](gflow.GFlowHotFixBranch.md#finish)
- [generateBranchName](gflow.GFlowHotFixBranch.md#generatebranchname)
- [generateBranchNameFromConfig](gflow.GFlowHotFixBranch.md#generatebranchnamefromconfig)
- [getConfig](gflow.GFlowHotFixBranch.md#getconfig)
- [list](gflow.GFlowHotFixBranch.md#list)
- [popStashedChanges](gflow.GFlowHotFixBranch.md#popstashedchanges)
- [start](gflow.GFlowHotFixBranch.md#start)
- [stashChanges](gflow.GFlowHotFixBranch.md#stashchanges)

## Constructors

### constructor

• **new GFlowHotFixBranch**(`gitFlowBranch`, `options?`)

Initializes a new instance of this class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gitFlowBranch` | [`GitFlowBranch`](../interfaces/api.GitFlowBranch.md) | Git flow branch to be wrapped. |
| `options?` | [`ProjectConfig`](../interfaces/configs.ProjectConfig.md) | Git flow node project options. |

#### Overrides

[GFlowBranch](gflow.GFlowBranch.md).[constructor](gflow.GFlowBranch.md#constructor)

## Properties

### defaultBase

• `Readonly` **defaultBase**: [`GitFlowBaseBranchType`](../modules/api.md#gitflowbasebranchtype)

Default base of this branch.

#### Inherited from

[GFlowBranch](gflow.GFlowBranch.md).[defaultBase](gflow.GFlowBranch.md#defaultbase)

___

### logger

• `Protected` `Readonly` **logger**: `Logger`

#### Inherited from

[GFlowBranch](gflow.GFlowBranch.md).[logger](gflow.GFlowBranch.md#logger)

___

### projectConfig

• `Protected` `Readonly` **projectConfig**: [`ProjectConfig`](../interfaces/configs.ProjectConfig.md)

#### Inherited from

[GFlowBranch](gflow.GFlowBranch.md).[projectConfig](gflow.GFlowBranch.md#projectconfig)

___

### type

• `Readonly` **type**: [`GitFlowBranchType`](../modules/api.md#gitflowbranchtype)

Specifies the git flow branch type.

#### Inherited from

[GFlowBranch](gflow.GFlowBranch.md).[type](gflow.GFlowBranch.md#type)

## Methods

### finish

▸ **finish**(`name?`, `msg?`): `Promise`<`void`\>

Merges and finishes the branch of the branch type '[type](gflow.GFlowHotFixBranch.md#type)'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | Name of the branch to be finished. |
| `msg?` | `string` | Message to be set for finishing the branch. |

#### Returns

`Promise`<`void`\>

#### Overrides

[GFlowBranch](gflow.GFlowBranch.md).[finish](gflow.GFlowBranch.md#finish)

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

#### Inherited from

[GFlowBranch](gflow.GFlowBranch.md).[generateBranchName](gflow.GFlowBranch.md#generatebranchname)

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

#### Inherited from

[GFlowBranch](gflow.GFlowBranch.md).[generateBranchNameFromConfig](gflow.GFlowBranch.md#generatebranchnamefromconfig)

___

### getConfig

▸ **getConfig**(): `Promise`<[`GitFlowBranchConfig`](../interfaces/api.GitFlowBranchConfig.md)\>

Gets the git flow branch config.

#### Returns

`Promise`<[`GitFlowBranchConfig`](../interfaces/api.GitFlowBranchConfig.md)\>

The configuration of the gitex flow branch.

#### Inherited from

[GFlowBranch](gflow.GFlowBranch.md).[getConfig](gflow.GFlowBranch.md#getconfig)

___

### list

▸ **list**(): `Promise`<`string`[]\>

Lists all branches of the type '[type](gflow.GFlowHotFixBranch.md#type)'.

#### Returns

`Promise`<`string`[]\>

The list of branches.

#### Inherited from

[GFlowBranch](gflow.GFlowBranch.md).[list](gflow.GFlowBranch.md#list)

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

#### Inherited from

[GFlowBranch](gflow.GFlowBranch.md).[popStashedChanges](gflow.GFlowBranch.md#popstashedchanges)

___

### start

▸ **start**(`name?`, `base?`): `Promise`<`string`\>

Creates and starts a new hotfix branch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | Name of the branch to be started. |
| `base?` | `string` | Base of the branch should be started from. |

#### Returns

`Promise`<`string`\>

The name of the hotfix branch.

#### Overrides

[GFlowBranch](gflow.GFlowBranch.md).[start](gflow.GFlowBranch.md#start)

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

#### Inherited from

[GFlowBranch](gflow.GFlowBranch.md).[stashChanges](gflow.GFlowBranch.md#stashchanges)

[gitex-flow](../README.md) / [gflow](../modules/gflow.md) / GFlowHotFixBranch

# Class: GFlowHotFixBranch

[gflow](../modules/gflow.md).GFlowHotFixBranch

This class extending a hotfix branch with some helpful functionality.

## Hierarchy

- [GFlowBranch](gflow.gflowbranch.md)

  ↳ **GFlowHotFixBranch**

## Table of contents

### Constructors

- [constructor](gflow.gflowhotfixbranch.md#constructor)

### Properties

- [defaultBase](gflow.gflowhotfixbranch.md#defaultbase)
- [logger](gflow.gflowhotfixbranch.md#logger)
- [projectConfig](gflow.gflowhotfixbranch.md#projectconfig)
- [type](gflow.gflowhotfixbranch.md#type)

### Methods

- [finish](gflow.gflowhotfixbranch.md#finish)
- [generateBranchName](gflow.gflowhotfixbranch.md#generatebranchname)
- [generateBranchNameFromConfig](gflow.gflowhotfixbranch.md#generatebranchnamefromconfig)
- [getConfig](gflow.gflowhotfixbranch.md#getconfig)
- [list](gflow.gflowhotfixbranch.md#list)
- [popStashedChanges](gflow.gflowhotfixbranch.md#popstashedchanges)
- [start](gflow.gflowhotfixbranch.md#start)
- [stashChanges](gflow.gflowhotfixbranch.md#stashchanges)

## Constructors

### constructor

• **new GFlowHotFixBranch**(`gitFlowBranch`, `options?`)

Initializes a new instance of this class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gitFlowBranch` | [GitFlowBranch](../interfaces/api.gitflowbranch.md) | Git flow branch to be wrapped. |
| `options?` | [ProjectConfig](../interfaces/configs.projectconfig.md) | Git flow node project options. |

#### Overrides

[GFlowBranch](gflow.gflowbranch.md).[constructor](gflow.gflowbranch.md#constructor)

## Properties

### defaultBase

• `Readonly` **defaultBase**: [GitFlowBaseBranchType](../modules/api.md#gitflowbasebranchtype)

Default base of this branch.

#### Inherited from

[GFlowBranch](gflow.gflowbranch.md).[defaultBase](gflow.gflowbranch.md#defaultbase)

___

### logger

• `Protected` `Readonly` **logger**: `Logger`

#### Inherited from

[GFlowBranch](gflow.gflowbranch.md).[logger](gflow.gflowbranch.md#logger)

___

### projectConfig

• `Protected` `Readonly` **projectConfig**: [ProjectConfig](../interfaces/configs.projectconfig.md)

#### Inherited from

[GFlowBranch](gflow.gflowbranch.md).[projectConfig](gflow.gflowbranch.md#projectconfig)

___

### type

• `Readonly` **type**: [GitFlowBranchType](../modules/api.md#gitflowbranchtype)

Specifies the git flow branch type.

#### Inherited from

[GFlowBranch](gflow.gflowbranch.md).[type](gflow.gflowbranch.md#type)

## Methods

### finish

▸ **finish**(`name?`, `msg?`): `Promise`<void\>

Merges and finishes the branch of the branch type '[type](gflow.gflowhotfixbranch.md#type)'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | Name of the branch to be finished. |
| `msg?` | `string` | Message to be set for finishing the branch. |

#### Returns

`Promise`<void\>

#### Overrides

[GFlowBranch](gflow.gflowbranch.md).[finish](gflow.gflowbranch.md#finish)

___

### generateBranchName

▸ **generateBranchName**(`name?`): `Promise`<undefined \| string\>

Generates an default branch name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | A custom name for the branch. |

#### Returns

`Promise`<undefined \| string\>

The generated branch name.

#### Inherited from

[GFlowBranch](gflow.gflowbranch.md).[generateBranchName](gflow.gflowbranch.md#generatebranchname)

___

### generateBranchNameFromConfig

▸ `Protected` **generateBranchNameFromConfig**(`name`): `Promise`<string\>

Gets the branch name including the git-flow configuration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | A given branch name without prefix. |

#### Returns

`Promise`<string\>

The generated name.

#### Inherited from

[GFlowBranch](gflow.gflowbranch.md).[generateBranchNameFromConfig](gflow.gflowbranch.md#generatebranchnamefromconfig)

___

### getConfig

▸ **getConfig**(): `Promise`<[GitFlowBranchConfig](../interfaces/api.gitflowbranchconfig.md)\>

Gets the git flow branch config.

#### Returns

`Promise`<[GitFlowBranchConfig](../interfaces/api.gitflowbranchconfig.md)\>

The configuration of the gitex flow branch.

#### Inherited from

[GFlowBranch](gflow.gflowbranch.md).[getConfig](gflow.gflowbranch.md#getconfig)

___

### list

▸ **list**(): `Promise`<string[]\>

Lists all branches of the type '[type](gflow.gflowhotfixbranch.md#type)'.

#### Returns

`Promise`<string[]\>

The list of branches.

#### Inherited from

[GFlowBranch](gflow.gflowbranch.md).[list](gflow.gflowbranch.md#list)

___

### popStashedChanges

▸ `Protected` **popStashedChanges**(`project`): `Promise`<void\>

Pops the latest stash into to local repository.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `project` | [GitFlowNodeProject](tools.gitflownodeproject.md) | The git project the stash should be popped from. |

#### Returns

`Promise`<void\>

#### Inherited from

[GFlowBranch](gflow.gflowbranch.md).[popStashedChanges](gflow.gflowbranch.md#popstashedchanges)

___

### start

▸ **start**(`name?`, `base?`): `Promise`<string\>

Creates and starts a new hotfix branch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | Name of the branch to be started. |
| `base?` | `string` | Base of the branch should be started from. |

#### Returns

`Promise`<string\>

The name of the hotfix branch.

#### Overrides

[GFlowBranch](gflow.gflowbranch.md).[start](gflow.gflowbranch.md#start)

___

### stashChanges

▸ `Protected` **stashChanges**(`project`): `Promise`<boolean\>

Stashes the current local changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `project` | [GitFlowNodeProject](tools.gitflownodeproject.md) | The git project to be stashed. |

#### Returns

`Promise`<boolean\>

Returns `true` if changes were stashed. Otherwise `false`.

#### Inherited from

[GFlowBranch](gflow.gflowbranch.md).[stashChanges](gflow.gflowbranch.md#stashchanges)

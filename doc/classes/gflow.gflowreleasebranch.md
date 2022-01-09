[gitex-flow](../README.md) / [gflow](../modules/gflow.md) / GFlowReleaseBranch

# Class: GFlowReleaseBranch

[gflow](../modules/gflow.md).GFlowReleaseBranch

This class extending a release branch with some helpful functionality.

## Hierarchy

- [GFlowBranch](gflow.gflowbranch.md)

  ↳ **GFlowReleaseBranch**

## Table of contents

### Constructors

- [constructor](gflow.gflowreleasebranch.md#constructor)

### Properties

- [defaultBase](gflow.gflowreleasebranch.md#defaultbase)
- [logger](gflow.gflowreleasebranch.md#logger)
- [projectConfig](gflow.gflowreleasebranch.md#projectconfig)
- [type](gflow.gflowreleasebranch.md#type)

### Methods

- [finish](gflow.gflowreleasebranch.md#finish)
- [generateBranchName](gflow.gflowreleasebranch.md#generatebranchname)
- [generateBranchNameFromConfig](gflow.gflowreleasebranch.md#generatebranchnamefromconfig)
- [getConfig](gflow.gflowreleasebranch.md#getconfig)
- [list](gflow.gflowreleasebranch.md#list)
- [popStashedChanges](gflow.gflowreleasebranch.md#popstashedchanges)
- [start](gflow.gflowreleasebranch.md#start)
- [stashChanges](gflow.gflowreleasebranch.md#stashchanges)

## Constructors

### constructor

• **new GFlowReleaseBranch**(`gitFlowBranch`, `options?`)

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

Merges and finishes the branch of the branch type '[type](gflow.gflowreleasebranch.md#type)'.

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

Lists all branches of the type '[type](gflow.gflowreleasebranch.md#type)'.

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

Creates and starts a new release branch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | Name of the branch to be started. |
| `base?` | `string` | Base of the branch should be started from. |

#### Returns

`Promise`<string\>

The name of the release branch.

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

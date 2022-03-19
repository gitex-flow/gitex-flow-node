[gitex-flow](../README.md) / [api](../modules/api.md) / GitFlowBranch

# Interface: GitFlowBranch

[api](../modules/api.md).GitFlowBranch

This interface represents the basic functionality of a git flow branch.

## Implemented by

- [`AvhGitFlowBranch`](../classes/avh.AvhGitFlowBranch.md)
- [`GFlowBranch`](../classes/gflow.GFlowBranch.md)

## Table of contents

### Properties

- [defaultBase](api.GitFlowBranch.md#defaultbase)
- [type](api.GitFlowBranch.md#type)

### Methods

- [finish](api.GitFlowBranch.md#finish)
- [generateBranchName](api.GitFlowBranch.md#generatebranchname)
- [getConfig](api.GitFlowBranch.md#getconfig)
- [list](api.GitFlowBranch.md#list)
- [start](api.GitFlowBranch.md#start)

## Properties

### defaultBase

• `Readonly` **defaultBase**: [`GitFlowBaseBranchType`](../modules/api.md#gitflowbasebranchtype)

Default base of this branch.

___

### type

• `Readonly` **type**: [`GitFlowBranchType`](../modules/api.md#gitflowbranchtype)

Specifies the git flow branch type.

## Methods

### finish

▸ **finish**(`name?`, `msg?`): `Promise`<`void`\>

Merges and finishes the branch of the branch type '[type](api.GitFlowBranch.md#type)'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | Name of the branch to be finished. |
| `msg?` | `string` | Message to be set for finishing the branch. |

#### Returns

`Promise`<`void`\>

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

___

### getConfig

▸ **getConfig**(): `Promise`<[`GitFlowBranchConfig`](api.GitFlowBranchConfig.md)\>

Gets the git flow branch config.

#### Returns

`Promise`<[`GitFlowBranchConfig`](api.GitFlowBranchConfig.md)\>

___

### list

▸ **list**(): `Promise`<`string`[]\>

Lists all branches of the type '[type](api.GitFlowBranch.md#type)'.

#### Returns

`Promise`<`string`[]\>

___

### start

▸ **start**(`name?`, `base?`): `Promise`<`string`\>

Creates and starts a new branch of the type '[type](api.GitFlowBranch.md#type)'.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | Name of the branch to be started. |
| `base?` | `string` | Base of the branch should be started from. |

#### Returns

`Promise`<`string`\>

The git reference of the create branch.

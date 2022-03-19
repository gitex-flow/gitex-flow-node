[gitex-flow](../README.md) / [avh](../modules/avh.md) / AvhGitFlowBranch

# Class: AvhGitFlowBranch

[avh](../modules/avh.md).AvhGitFlowBranch

This class implements the basic functionality of a git flow branch.

## Hierarchy

- **`AvhGitFlowBranch`**

  ↳ [`BugfixGitFlowBranch`](avh.BugfixGitFlowBranch.md)

  ↳ [`FeatureGitFlowBranch`](avh.FeatureGitFlowBranch.md)

  ↳ [`HotfixGitFlowBranch`](avh.HotfixGitFlowBranch.md)

  ↳ [`ReleaseGitFlowBranch`](avh.ReleaseGitFlowBranch.md)

  ↳ [`SupportGitFlowBranch`](avh.SupportGitFlowBranch.md)

## Implements

- [`GitFlowBranch`](../interfaces/api.GitFlowBranch.md)

## Table of contents

### Constructors

- [constructor](avh.AvhGitFlowBranch.md#constructor)

### Properties

- [defaultBase](avh.AvhGitFlowBranch.md#defaultbase)
- [type](avh.AvhGitFlowBranch.md#type)

### Methods

- [finish](avh.AvhGitFlowBranch.md#finish)
- [generateBranchName](avh.AvhGitFlowBranch.md#generatebranchname)
- [getConfig](avh.AvhGitFlowBranch.md#getconfig)
- [list](avh.AvhGitFlowBranch.md#list)
- [start](avh.AvhGitFlowBranch.md#start)

## Constructors

### constructor

• **new AvhGitFlowBranch**(`repoPath?`)

Initializes a new instance of this class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `repoPath?` | `string` | The path to the git repository. |

## Properties

### defaultBase

• `Readonly` `Abstract` **defaultBase**: [`GitFlowBaseBranchType`](../modules/api.md#gitflowbasebranchtype)

{@inheritdoc}

#### Implementation of

[GitFlowBranch](../interfaces/api.GitFlowBranch.md).[defaultBase](../interfaces/api.GitFlowBranch.md#defaultbase)

___

### type

• `Readonly` `Abstract` **type**: [`GitFlowBranchType`](../modules/api.md#gitflowbranchtype)

{@inheritdoc}

#### Implementation of

[GitFlowBranch](../interfaces/api.GitFlowBranch.md).[type](../interfaces/api.GitFlowBranch.md#type)

## Methods

### finish

▸ **finish**(`name?`, `msg?`): `Promise`<`void`\>

{@inheritdoc}

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

{@inheritdoc}

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

### getConfig

▸ `Abstract` **getConfig**(): `Promise`<[`GitFlowBranchConfig`](../interfaces/api.GitFlowBranchConfig.md)\>

{@inheritdoc}

#### Returns

`Promise`<[`GitFlowBranchConfig`](../interfaces/api.GitFlowBranchConfig.md)\>

#### Implementation of

[GitFlowBranch](../interfaces/api.GitFlowBranch.md).[getConfig](../interfaces/api.GitFlowBranch.md#getconfig)

___

### list

▸ **list**(): `Promise`<`string`[]\>

{@inheritdoc}

#### Returns

`Promise`<`string`[]\>

The list of the currently opened branch.

#### Implementation of

[GitFlowBranch](../interfaces/api.GitFlowBranch.md).[list](../interfaces/api.GitFlowBranch.md#list)

___

### start

▸ **start**(`name?`, `base?`): `Promise`<`string`\>

{@inheritdoc}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | Name of the branch to be started. |
| `base?` | `string` | Base of the branch should be started from. |

#### Returns

`Promise`<`string`\>

The git reference of the create branch.

#### Implementation of

[GitFlowBranch](../interfaces/api.GitFlowBranch.md).[start](../interfaces/api.GitFlowBranch.md#start)

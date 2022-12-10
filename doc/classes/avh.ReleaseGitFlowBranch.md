[gitex-flow](../README.md) / [avh](../modules/avh.md) / ReleaseGitFlowBranch

# Class: ReleaseGitFlowBranch

[avh](../modules/avh.md).ReleaseGitFlowBranch

This class wraps the release branch of the AVH implementation.

## Hierarchy

- [`AvhGitFlowBranch`](avh.AvhGitFlowBranch.md)

  ↳ **`ReleaseGitFlowBranch`**

## Table of contents

### Constructors

- [constructor](avh.ReleaseGitFlowBranch.md#constructor)

### Properties

- [defaultBase](avh.ReleaseGitFlowBranch.md#defaultbase)
- [type](avh.ReleaseGitFlowBranch.md#type)

### Methods

- [finish](avh.ReleaseGitFlowBranch.md#finish)
- [generateBranchName](avh.ReleaseGitFlowBranch.md#generatebranchname)
- [getConfig](avh.ReleaseGitFlowBranch.md#getconfig)
- [list](avh.ReleaseGitFlowBranch.md#list)
- [start](avh.ReleaseGitFlowBranch.md#start)

## Constructors

### constructor

• **new ReleaseGitFlowBranch**(`repoPath?`, `configProvider?`)

Initializes a new instance of this class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `repoPath?` | `string` | The path to the git repository. |
| `configProvider?` | [`ConfigProvider`](../interfaces/api.ConfigProvider.md)<[`GitFlowConfig`](../interfaces/configs.GitFlowConfig.md)\> | Git flow config provider. |

#### Overrides

[AvhGitFlowBranch](avh.AvhGitFlowBranch.md).[constructor](avh.AvhGitFlowBranch.md#constructor)

## Properties

### defaultBase

• `Readonly` **defaultBase**: [`GitFlowBaseBranchType`](../modules/api.md#gitflowbasebranchtype) = `'develop'`

{@inheritdoc}

#### Overrides

[AvhGitFlowBranch](avh.AvhGitFlowBranch.md).[defaultBase](avh.AvhGitFlowBranch.md#defaultbase)

___

### type

• `Readonly` **type**: [`GitFlowBranchType`](../modules/api.md#gitflowbranchtype) = `'release'`

{@inheritdoc}

#### Overrides

[AvhGitFlowBranch](avh.AvhGitFlowBranch.md).[type](avh.AvhGitFlowBranch.md#type)

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

#### Inherited from

[AvhGitFlowBranch](avh.AvhGitFlowBranch.md).[finish](avh.AvhGitFlowBranch.md#finish)

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

#### Inherited from

[AvhGitFlowBranch](avh.AvhGitFlowBranch.md).[generateBranchName](avh.AvhGitFlowBranch.md#generatebranchname)

___

### getConfig

▸ **getConfig**(): `Promise`<[`GitFlowBranchConfig`](../interfaces/api.GitFlowBranchConfig.md)\>

{@inheritdoc}

#### Returns

`Promise`<[`GitFlowBranchConfig`](../interfaces/api.GitFlowBranchConfig.md)\>

The configuration of the release git flow branch.

#### Overrides

[AvhGitFlowBranch](avh.AvhGitFlowBranch.md).[getConfig](avh.AvhGitFlowBranch.md#getconfig)

___

### list

▸ **list**(): `Promise`<`string`[]\>

{@inheritdoc}

#### Returns

`Promise`<`string`[]\>

The list of the currently opened branch.

#### Inherited from

[AvhGitFlowBranch](avh.AvhGitFlowBranch.md).[list](avh.AvhGitFlowBranch.md#list)

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

#### Inherited from

[AvhGitFlowBranch](avh.AvhGitFlowBranch.md).[start](avh.AvhGitFlowBranch.md#start)
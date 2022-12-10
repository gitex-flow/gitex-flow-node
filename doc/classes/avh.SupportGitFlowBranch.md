[gitex-flow](../README.md) / [avh](../modules/avh.md) / SupportGitFlowBranch

# Class: SupportGitFlowBranch

[avh](../modules/avh.md).SupportGitFlowBranch

This class wraps the support branch of the AVH implementation.

## Hierarchy

- [`AvhGitFlowBranch`](avh.AvhGitFlowBranch.md)

  ↳ **`SupportGitFlowBranch`**

## Table of contents

### Constructors

- [constructor](avh.SupportGitFlowBranch.md#constructor)

### Properties

- [defaultBase](avh.SupportGitFlowBranch.md#defaultbase)
- [type](avh.SupportGitFlowBranch.md#type)

### Methods

- [finish](avh.SupportGitFlowBranch.md#finish)
- [generateBranchName](avh.SupportGitFlowBranch.md#generatebranchname)
- [getConfig](avh.SupportGitFlowBranch.md#getconfig)
- [list](avh.SupportGitFlowBranch.md#list)
- [start](avh.SupportGitFlowBranch.md#start)

## Constructors

### constructor

• **new SupportGitFlowBranch**(`repoPath?`, `configProvider?`)

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

• `Readonly` **defaultBase**: [`GitFlowBaseBranchType`](../modules/api.md#gitflowbasebranchtype) = `'master'`

{@inheritdoc}

#### Overrides

[AvhGitFlowBranch](avh.AvhGitFlowBranch.md).[defaultBase](avh.AvhGitFlowBranch.md#defaultbase)

___

### type

• `Readonly` **type**: [`GitFlowBranchType`](../modules/api.md#gitflowbranchtype) = `'support'`

{@inheritdoc}

#### Overrides

[AvhGitFlowBranch](avh.AvhGitFlowBranch.md).[type](avh.AvhGitFlowBranch.md#type)

## Methods

### finish

▸ **finish**(): `Promise`<`void`\>

{@inheritdoc}

#### Returns

`Promise`<`void`\>

#### Overrides

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

The configuration of the support git flow branch.

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

#### Overrides

[AvhGitFlowBranch](avh.AvhGitFlowBranch.md).[start](avh.AvhGitFlowBranch.md#start)
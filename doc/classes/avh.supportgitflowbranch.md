[gitex-flow](../README.md) / [avh](../modules/avh.md) / SupportGitFlowBranch

# Class: SupportGitFlowBranch

[avh](../modules/avh.md).SupportGitFlowBranch

This class wraps the support branch of the AVH implementation.

## Hierarchy

- [AvhGitFlowBranch](avh.avhgitflowbranch.md)

  ↳ **SupportGitFlowBranch**

## Table of contents

### Constructors

- [constructor](avh.supportgitflowbranch.md#constructor)

### Properties

- [defaultBase](avh.supportgitflowbranch.md#defaultbase)
- [type](avh.supportgitflowbranch.md#type)

### Methods

- [finish](avh.supportgitflowbranch.md#finish)
- [generateBranchName](avh.supportgitflowbranch.md#generatebranchname)
- [getConfig](avh.supportgitflowbranch.md#getconfig)
- [list](avh.supportgitflowbranch.md#list)
- [start](avh.supportgitflowbranch.md#start)

## Constructors

### constructor

• **new SupportGitFlowBranch**(`repoPath?`, `configProvider?`)

Initializes a new instance of this class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `repoPath?` | `string` | The path to the git repository. |
| `configProvider?` | [ConfigProvider](../interfaces/api.configprovider.md)<[GitFlowConfig](../interfaces/configs.gitflowconfig.md)\> | Git flow config provider. |

#### Overrides

[AvhGitFlowBranch](avh.avhgitflowbranch.md).[constructor](avh.avhgitflowbranch.md#constructor)

## Properties

### defaultBase

• `Readonly` **defaultBase**: [GitFlowBaseBranchType](../modules/api.md#gitflowbasebranchtype) = 'master'

{@inheritdoc}

#### Overrides

[AvhGitFlowBranch](avh.avhgitflowbranch.md).[defaultBase](avh.avhgitflowbranch.md#defaultbase)

___

### type

• `Readonly` **type**: [GitFlowBranchType](../modules/api.md#gitflowbranchtype) = 'support'

{@inheritdoc}

#### Overrides

[AvhGitFlowBranch](avh.avhgitflowbranch.md).[type](avh.avhgitflowbranch.md#type)

## Methods

### finish

▸ **finish**(): `Promise`<void\>

{@inheritdoc}

#### Returns

`Promise`<void\>

#### Overrides

[AvhGitFlowBranch](avh.avhgitflowbranch.md).[finish](avh.avhgitflowbranch.md#finish)

___

### generateBranchName

▸ **generateBranchName**(`name?`): `Promise`<undefined \| string\>

{@inheritdoc}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | A custom name for the branch. |

#### Returns

`Promise`<undefined \| string\>

The generated branch name.

#### Inherited from

[AvhGitFlowBranch](avh.avhgitflowbranch.md).[generateBranchName](avh.avhgitflowbranch.md#generatebranchname)

___

### getConfig

▸ **getConfig**(): `Promise`<[GitFlowBranchConfig](../interfaces/api.gitflowbranchconfig.md)\>

{@inheritdoc}

#### Returns

`Promise`<[GitFlowBranchConfig](../interfaces/api.gitflowbranchconfig.md)\>

The configuration of the support git flow branch.

#### Overrides

[AvhGitFlowBranch](avh.avhgitflowbranch.md).[getConfig](avh.avhgitflowbranch.md#getconfig)

___

### list

▸ **list**(): `Promise`<string[]\>

{@inheritdoc}

#### Returns

`Promise`<string[]\>

The list of the currently opened branch.

#### Inherited from

[AvhGitFlowBranch](avh.avhgitflowbranch.md).[list](avh.avhgitflowbranch.md#list)

___

### start

▸ **start**(`name?`, `base?`): `Promise`<string\>

{@inheritdoc}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | Name of the branch to be started. |
| `base?` | `string` | Base of the branch should be started from. |

#### Returns

`Promise`<string\>

The git reference of the create branch.

#### Overrides

[AvhGitFlowBranch](avh.avhgitflowbranch.md).[start](avh.avhgitflowbranch.md#start)

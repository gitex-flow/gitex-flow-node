[gitex-flow](../README.md) / [avh](../modules/avh.md) / BugfixGitFlowBranch

# Class: BugfixGitFlowBranch

[avh](../modules/avh.md).BugfixGitFlowBranch

This class wraps the bugfix branch of the AVH implementation.

## Hierarchy

- [AvhGitFlowBranch](avh.avhgitflowbranch.md)

  ↳ **BugfixGitFlowBranch**

## Table of contents

### Constructors

- [constructor](avh.bugfixgitflowbranch.md#constructor)

### Properties

- [defaultBase](avh.bugfixgitflowbranch.md#defaultbase)
- [type](avh.bugfixgitflowbranch.md#type)

### Methods

- [finish](avh.bugfixgitflowbranch.md#finish)
- [generateBranchName](avh.bugfixgitflowbranch.md#generatebranchname)
- [getConfig](avh.bugfixgitflowbranch.md#getconfig)
- [list](avh.bugfixgitflowbranch.md#list)
- [start](avh.bugfixgitflowbranch.md#start)

## Constructors

### constructor

• **new BugfixGitFlowBranch**(`repoPath?`, `configProvider?`)

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

• `Readonly` **defaultBase**: [GitFlowBaseBranchType](../modules/api.md#gitflowbasebranchtype) = 'develop'

{@inheritdoc}

#### Overrides

[AvhGitFlowBranch](avh.avhgitflowbranch.md).[defaultBase](avh.avhgitflowbranch.md#defaultbase)

___

### type

• `Readonly` **type**: [GitFlowBranchType](../modules/api.md#gitflowbranchtype) = 'bugfix'

{@inheritdoc}

#### Overrides

[AvhGitFlowBranch](avh.avhgitflowbranch.md).[type](avh.avhgitflowbranch.md#type)

## Methods

### finish

▸ **finish**(`name?`, `msg?`): `Promise`<void\>

{@inheritdoc}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name?` | `string` | Name of the branch to be finished. |
| `msg?` | `string` | Message to be set for finishing the branch. |

#### Returns

`Promise`<void\>

#### Inherited from

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

The configuration of the bugfix git flow branch.

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

#### Inherited from

[AvhGitFlowBranch](avh.avhgitflowbranch.md).[start](avh.avhgitflowbranch.md#start)

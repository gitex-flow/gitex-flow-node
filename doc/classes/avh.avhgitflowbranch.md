[gitex-flow](../README.md) / [avh](../modules/avh.md) / AvhGitFlowBranch

# Class: AvhGitFlowBranch

[avh](../modules/avh.md).AvhGitFlowBranch

This class implements the basic functionality of a git flow branch.

## Hierarchy

- **AvhGitFlowBranch**

  ↳ [BugfixGitFlowBranch](avh.bugfixgitflowbranch.md)

  ↳ [FeatureGitFlowBranch](avh.featuregitflowbranch.md)

  ↳ [HotfixGitFlowBranch](avh.hotfixgitflowbranch.md)

  ↳ [ReleaseGitFlowBranch](avh.releasegitflowbranch.md)

  ↳ [SupportGitFlowBranch](avh.supportgitflowbranch.md)

## Implements

- [GitFlowBranch](../interfaces/api.gitflowbranch.md)

## Table of contents

### Constructors

- [constructor](avh.avhgitflowbranch.md#constructor)

### Properties

- [defaultBase](avh.avhgitflowbranch.md#defaultbase)
- [type](avh.avhgitflowbranch.md#type)

### Methods

- [finish](avh.avhgitflowbranch.md#finish)
- [generateBranchName](avh.avhgitflowbranch.md#generatebranchname)
- [getConfig](avh.avhgitflowbranch.md#getconfig)
- [list](avh.avhgitflowbranch.md#list)
- [start](avh.avhgitflowbranch.md#start)

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

• `Readonly` `Abstract` **defaultBase**: [GitFlowBaseBranchType](../modules/api.md#gitflowbasebranchtype)

{@inheritdoc}

#### Implementation of

[GitFlowBranch](../interfaces/api.gitflowbranch.md).[defaultBase](../interfaces/api.gitflowbranch.md#defaultbase)

___

### type

• `Readonly` `Abstract` **type**: [GitFlowBranchType](../modules/api.md#gitflowbranchtype)

{@inheritdoc}

#### Implementation of

[GitFlowBranch](../interfaces/api.gitflowbranch.md).[type](../interfaces/api.gitflowbranch.md#type)

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

#### Implementation of

[GitFlowBranch](../interfaces/api.gitflowbranch.md).[finish](../interfaces/api.gitflowbranch.md#finish)

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

#### Implementation of

[GitFlowBranch](../interfaces/api.gitflowbranch.md).[generateBranchName](../interfaces/api.gitflowbranch.md#generatebranchname)

___

### getConfig

▸ `Abstract` **getConfig**(): `Promise`<[GitFlowBranchConfig](../interfaces/api.gitflowbranchconfig.md)\>

{@inheritdoc}

#### Returns

`Promise`<[GitFlowBranchConfig](../interfaces/api.gitflowbranchconfig.md)\>

#### Implementation of

[GitFlowBranch](../interfaces/api.gitflowbranch.md).[getConfig](../interfaces/api.gitflowbranch.md#getconfig)

___

### list

▸ **list**(): `Promise`<string[]\>

{@inheritdoc}

#### Returns

`Promise`<string[]\>

The list of the currently opened branch.

#### Implementation of

[GitFlowBranch](../interfaces/api.gitflowbranch.md).[list](../interfaces/api.gitflowbranch.md#list)

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

#### Implementation of

[GitFlowBranch](../interfaces/api.gitflowbranch.md).[start](../interfaces/api.gitflowbranch.md#start)

[gitex-flow](../README.md) / [avh](../modules/avh.md) / FeatureGitFlowBranch

# Class: FeatureGitFlowBranch

[avh](../modules/avh.md).FeatureGitFlowBranch

This class wraps the feature branch of the AVH implementation.

## Hierarchy

* [*AvhGitFlowBranch*](avh.avhgitflowbranch.md)

  ↳ **FeatureGitFlowBranch**

## Table of contents

### Constructors

- [constructor](avh.featuregitflowbranch.md#constructor)

### Properties

- [defaultBase](avh.featuregitflowbranch.md#defaultbase)
- [type](avh.featuregitflowbranch.md#type)

### Methods

- [finish](avh.featuregitflowbranch.md#finish)
- [generateBranchName](avh.featuregitflowbranch.md#generatebranchname)
- [getConfig](avh.featuregitflowbranch.md#getconfig)
- [list](avh.featuregitflowbranch.md#list)
- [start](avh.featuregitflowbranch.md#start)

## Constructors

### constructor

\+ **new FeatureGitFlowBranch**(`repoPath?`: *string*, `configProvider?`: [*ConfigProvider*](../interfaces/api.configprovider.md)<[*GitFlowConfig*](../interfaces/configs.gitflowconfig.md)\>): [*FeatureGitFlowBranch*](avh.featuregitflowbranch.md)

Initializes a new instance of this class.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`repoPath?` | *string* | The path to the git repository.   |
`configProvider?` | [*ConfigProvider*](../interfaces/api.configprovider.md)<[*GitFlowConfig*](../interfaces/configs.gitflowconfig.md)\> | Git flow config provider.    |

**Returns:** [*FeatureGitFlowBranch*](avh.featuregitflowbranch.md)

Overrides: [AvhGitFlowBranch](avh.avhgitflowbranch.md)

## Properties

### defaultBase

• `Readonly` **defaultBase**: [*GitFlowBaseBranchType*](../modules/api.md#gitflowbasebranchtype)= 'develop'

{@inheritdoc}

Overrides: [AvhGitFlowBranch](avh.avhgitflowbranch.md).[defaultBase](avh.avhgitflowbranch.md#defaultbase)

___

### type

• `Readonly` **type**: [*GitFlowBranchType*](../modules/api.md#gitflowbranchtype)= 'feature'

{@inheritdoc}

Overrides: [AvhGitFlowBranch](avh.avhgitflowbranch.md).[type](avh.avhgitflowbranch.md#type)

## Methods

### finish

▸ **finish**(`name?`: *string*, `msg?`: *string*): *Promise*<void\>

{@inheritdoc}

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`name?` | *string* | Name of the branch to be finished.   |
`msg?` | *string* | Message to be set for finishing the branch.    |

**Returns:** *Promise*<void\>

Inherited from: [AvhGitFlowBranch](avh.avhgitflowbranch.md)

___

### generateBranchName

▸ **generateBranchName**(`name?`: *string*): *Promise*<undefined \| string\>

{@inheritdoc}

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`name?` | *string* | A custom name for the branch.    |

**Returns:** *Promise*<undefined \| string\>

The generated branch name.

Inherited from: [AvhGitFlowBranch](avh.avhgitflowbranch.md)

___

### getConfig

▸ **getConfig**(): *Promise*<[*GitFlowBranchConfig*](../interfaces/api.gitflowbranchconfig.md)\>

{@inheritdoc}

**Returns:** *Promise*<[*GitFlowBranchConfig*](../interfaces/api.gitflowbranchconfig.md)\>

The configuration of the feature git flow branch.

Overrides: [AvhGitFlowBranch](avh.avhgitflowbranch.md)

___

### list

▸ **list**(): *Promise*<string[]\>

{@inheritdoc}

**Returns:** *Promise*<string[]\>

The list of the currently opened branch.

Inherited from: [AvhGitFlowBranch](avh.avhgitflowbranch.md)

___

### start

▸ **start**(`name?`: *string*, `base?`: *string*): *Promise*<string\>

{@inheritdoc}

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`name?` | *string* | Name of the branch to be started.   |
`base?` | *string* | Base of the branch should be started from.   |

**Returns:** *Promise*<string\>

The git reference of the create branch.

Inherited from: [AvhGitFlowBranch](avh.avhgitflowbranch.md)

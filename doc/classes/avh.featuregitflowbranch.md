[gitex-flow](../README.md) › [avh](../modules/avh.md) › [FeatureGitFlowBranch](avh.featuregitflowbranch.md)

# Class: FeatureGitFlowBranch

This class wraps the feature branch of the AVH implementation.

## Hierarchy

* [AvhGitFlowBranch](avh.avhgitflowbranch.md)

  ↳ **FeatureGitFlowBranch**

## Implements

* [GitFlowBranch](../interfaces/api.gitflowbranch.md)

## Index

### Constructors

* [constructor](avh.featuregitflowbranch.md#constructor)

### Properties

* [defaultBase](avh.featuregitflowbranch.md#readonly-defaultbase)
* [type](avh.featuregitflowbranch.md#readonly-type)

### Methods

* [finish](avh.featuregitflowbranch.md#finish)
* [getConfig](avh.featuregitflowbranch.md#getconfig)
* [list](avh.featuregitflowbranch.md#list)
* [start](avh.featuregitflowbranch.md#start)

## Constructors

###  constructor

\+ **new FeatureGitFlowBranch**(`repoPath?`: undefined | string, `configProvider?`: [ConfigProvider](../interfaces/api.configprovider.md)‹[GitFlowConfig](../interfaces/api.gitflowconfig.md)›): *[FeatureGitFlowBranch](avh.featuregitflowbranch.md)*

*Overrides [AvhGitFlowBranch](avh.avhgitflowbranch.md).[constructor](avh.avhgitflowbranch.md#constructor)*

Initializes a new instance of this class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`repoPath?` | undefined &#124; string | The path to the git repository. |
`configProvider?` | [ConfigProvider](../interfaces/api.configprovider.md)‹[GitFlowConfig](../interfaces/api.gitflowconfig.md)› | Git flow config provider.  |

**Returns:** *[FeatureGitFlowBranch](avh.featuregitflowbranch.md)*

## Properties

### `Readonly` defaultBase

• **defaultBase**: *[GitFlowBaseBranchType](../modules/api.md#gitflowbasebranchtype)* = "develop"

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md).[defaultBase](../interfaces/api.gitflowbranch.md#readonly-defaultbase)*

*Overrides [AvhGitFlowBranch](avh.avhgitflowbranch.md).[defaultBase](avh.avhgitflowbranch.md#readonly-abstract-defaultbase)*

{@inheritdoc}

___

### `Readonly` type

• **type**: *[GitFlowBranchType](../modules/api.md#gitflowbranchtype)* = "feature"

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md).[type](../interfaces/api.gitflowbranch.md#readonly-type)*

*Overrides [AvhGitFlowBranch](avh.avhgitflowbranch.md).[type](avh.avhgitflowbranch.md#readonly-abstract-type)*

{@inheritdoc}

## Methods

###  finish

▸ **finish**(`name?`: undefined | string, `msg?`: undefined | string): *Promise‹void›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

*Inherited from [AvhGitFlowBranch](avh.avhgitflowbranch.md).[finish](avh.avhgitflowbranch.md#finish)*

{@inheritdoc}

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined &#124; string | Name of the branch to be finished. |
`msg?` | undefined &#124; string | Message to be set for finishing the branch.  |

**Returns:** *Promise‹void›*

___

###  getConfig

▸ **getConfig**(): *Promise‹[GitFlowBranchConfig](../interfaces/api.gitflowbranchconfig.md)›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

*Overrides [AvhGitFlowBranch](avh.avhgitflowbranch.md).[getConfig](avh.avhgitflowbranch.md#abstract-getconfig)*

{@inheritdoc}

**Returns:** *Promise‹[GitFlowBranchConfig](../interfaces/api.gitflowbranchconfig.md)›*

___

###  list

▸ **list**(): *Promise‹string[]›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

*Inherited from [AvhGitFlowBranch](avh.avhgitflowbranch.md).[list](avh.avhgitflowbranch.md#list)*

{@inheritdoc}

**Returns:** *Promise‹string[]›*

___

###  start

▸ **start**(`name?`: undefined | string, `base?`: undefined | string): *Promise‹string›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

*Inherited from [AvhGitFlowBranch](avh.avhgitflowbranch.md).[start](avh.avhgitflowbranch.md#start)*

{@inheritdoc}

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined &#124; string | Name of the branch to be started. |
`base?` | undefined &#124; string | Base of the branch should be started from. |

**Returns:** *Promise‹string›*

The git reference of the create branch.

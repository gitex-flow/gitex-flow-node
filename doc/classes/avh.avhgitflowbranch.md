[gitex-flow](../README.md) › [avh](../modules/avh.md) › [AvhGitFlowBranch](avh.avhgitflowbranch.md)

# Class: AvhGitFlowBranch

This class implements the basic functionality of a git flow branch.

## Hierarchy

* **AvhGitFlowBranch**

  ↳ [FeatureGitFlowBranch](avh.featuregitflowbranch.md)

  ↳ [BugfixGitFlowBranch](avh.bugfixgitflowbranch.md)

  ↳ [ReleaseGitFlowBranch](avh.releasegitflowbranch.md)

  ↳ [HotfixGitFlowBranch](avh.hotfixgitflowbranch.md)

  ↳ [SupportGitFlowBranch](avh.supportgitflowbranch.md)

## Implements

* [GitFlowBranch](../interfaces/api.gitflowbranch.md)

## Index

### Constructors

* [constructor](avh.avhgitflowbranch.md#constructor)

### Properties

* [defaultBase](avh.avhgitflowbranch.md#readonly-abstract-defaultbase)
* [type](avh.avhgitflowbranch.md#readonly-abstract-type)

### Methods

* [finish](avh.avhgitflowbranch.md#finish)
* [getConfig](avh.avhgitflowbranch.md#abstract-getconfig)
* [list](avh.avhgitflowbranch.md#list)
* [start](avh.avhgitflowbranch.md#start)

## Constructors

###  constructor

\+ **new AvhGitFlowBranch**(`repoPath?`: undefined | string): *[AvhGitFlowBranch](avh.avhgitflowbranch.md)*

Initializes a new instance of this class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`repoPath?` | undefined &#124; string | The path to the git repository.  |

**Returns:** *[AvhGitFlowBranch](avh.avhgitflowbranch.md)*

## Properties

### `Readonly` `Abstract` defaultBase

• **defaultBase**: *[GitFlowBaseBranchType](../modules/api.md#gitflowbasebranchtype)*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md).[defaultBase](../interfaces/api.gitflowbranch.md#readonly-defaultbase)*

{@inheritdoc}

___

### `Readonly` `Abstract` type

• **type**: *[GitFlowBranchType](../modules/api.md#gitflowbranchtype)*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md).[type](../interfaces/api.gitflowbranch.md#readonly-type)*

{@inheritdoc}

## Methods

###  finish

▸ **finish**(`name?`: undefined | string, `msg?`: undefined | string): *Promise‹void›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

{@inheritdoc}

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined &#124; string | Name of the branch to be finished. |
`msg?` | undefined &#124; string | Message to be set for finishing the branch.  |

**Returns:** *Promise‹void›*

___

### `Abstract` getConfig

▸ **getConfig**(): *Promise‹[GitFlowBranchConfig](../interfaces/api.gitflowbranchconfig.md)›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

{@inheritdoc}

**Returns:** *Promise‹[GitFlowBranchConfig](../interfaces/api.gitflowbranchconfig.md)›*

___

###  list

▸ **list**(): *Promise‹string[]›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

{@inheritdoc}

**Returns:** *Promise‹string[]›*

___

###  start

▸ **start**(`name?`: undefined | string, `base?`: undefined | string): *Promise‹string›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

{@inheritdoc}

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined &#124; string | Name of the branch to be started. |
`base?` | undefined &#124; string | Base of the branch should be started from. |

**Returns:** *Promise‹string›*

The git reference of the create branch.

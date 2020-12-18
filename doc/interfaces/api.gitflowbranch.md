[gitex-flow](../README.md) › [api](../modules/api.md) › [GitFlowBranch](api.gitflowbranch.md)

# Interface: GitFlowBranch

This interface represents the basic functionality of a git flow branch.

## Hierarchy

* **GitFlowBranch**

## Implemented by

* [AvhGitFlowBranch](../classes/avh.avhgitflowbranch.md)
* [BugfixGitFlowBranch](../classes/avh.bugfixgitflowbranch.md)
* [FeatureGitFlowBranch](../classes/avh.featuregitflowbranch.md)
* [GFlowBranch](../classes/gflow.gflowbranch.md)
* [GFlowHotFixBranch](../classes/gflow.gflowhotfixbranch.md)
* [GFlowReleaseBranch](../classes/gflow.gflowreleasebranch.md)
* [HotfixGitFlowBranch](../classes/avh.hotfixgitflowbranch.md)
* [ReleaseGitFlowBranch](../classes/avh.releasegitflowbranch.md)
* [SupportGitFlowBranch](../classes/avh.supportgitflowbranch.md)

## Index

### Properties

* [defaultBase](api.gitflowbranch.md#readonly-defaultbase)
* [type](api.gitflowbranch.md#readonly-type)

### Methods

* [finish](api.gitflowbranch.md#finish)
* [generateBranchName](api.gitflowbranch.md#generatebranchname)
* [getConfig](api.gitflowbranch.md#getconfig)
* [list](api.gitflowbranch.md#list)
* [start](api.gitflowbranch.md#start)

## Properties

### `Readonly` defaultBase

• **defaultBase**: *[GitFlowBaseBranchType](../modules/api.md#gitflowbasebranchtype)*

Default base of this branch.

___

### `Readonly` type

• **type**: *[GitFlowBranchType](../modules/api.md#gitflowbranchtype)*

Specifies the git flow branch type.

## Methods

###  finish

▸ **finish**(`name?`: undefined | string, `msg?`: undefined | string): *Promise‹void›*

Merges and finishes the branch of the branch type '[type](api.gitflowbranch.md#readonly-type)'.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined &#124; string | Name of the branch to be finished. |
`msg?` | undefined &#124; string | Message to be set for finishing the branch.  |

**Returns:** *Promise‹void›*

___

###  generateBranchName

▸ **generateBranchName**(`name?`: undefined | string): *Promise‹string | undefined›*

Generates an default branch name.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined &#124; string | A custom name for the branch.  |

**Returns:** *Promise‹string | undefined›*

___

###  getConfig

▸ **getConfig**(): *Promise‹[GitFlowBranchConfig](api.gitflowbranchconfig.md)›*

Gets the git flow branch config.

**Returns:** *Promise‹[GitFlowBranchConfig](api.gitflowbranchconfig.md)›*

___

###  list

▸ **list**(): *Promise‹string[]›*

Lists all branches of the type '[type](api.gitflowbranch.md#readonly-type)'.

**Returns:** *Promise‹string[]›*

___

###  start

▸ **start**(`name?`: undefined | string, `base?`: undefined | string): *Promise‹string›*

Creates and starts a new branch of the type '[type](api.gitflowbranch.md#readonly-type)'.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined &#124; string | Name of the branch to be started. |
`base?` | undefined &#124; string | Base of the branch should be started from. |

**Returns:** *Promise‹string›*

The git reference of the create branch.

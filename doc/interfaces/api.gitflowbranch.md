[node-git-flow-workflow](../README.md) › [api](../modules/api.md) › [GitFlowBranch](api.gitflowbranch.md)

# Interface: GitFlowBranch

This interface represents the basic functionality of a git flow branch.

## Hierarchy

* **GitFlowBranch**

## Implemented by

* [AvhGitFlowBranch](../classes/avh.avhgitflowbranch.md)
* [GenericAvhGitFlowBranch](../classes/avh.genericavhgitflowbranch.md)

## Index

### Properties

* [type](api.gitflowbranch.md#readonly-type)

### Methods

* [finish](api.gitflowbranch.md#finish)
* [list](api.gitflowbranch.md#list)
* [start](api.gitflowbranch.md#start)

## Properties

### `Readonly` type

• **type**: *[BranchType](../modules/api.md#branchtype)*

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

###  list

▸ **list**(): *Promise‹[GitFlowConfig](api.gitflowconfig.md)›*

Lists all branches of the type '[type](api.gitflowbranch.md#readonly-type)'.

**Returns:** *Promise‹[GitFlowConfig](api.gitflowconfig.md)›*

___

###  start

▸ **start**(`name?`: undefined | string, `base?`: undefined | string): *Promise‹void›*

Creates and starts a new branch of the type '[type](api.gitflowbranch.md#readonly-type)'.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined &#124; string | Name of the branch to be started. |
`base?` | undefined &#124; string | Base of the branch should be started from.  |

**Returns:** *Promise‹void›*

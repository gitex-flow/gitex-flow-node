[g-flow](../README.md) › [gflow](../modules/gflow.md) › [GFlowHotFixBranch](gflow.gflowhotfixbranch.md)

# Class: GFlowHotFixBranch

This class extending a hotfix branch with some helpful functionality.

## Hierarchy

* **GFlowHotFixBranch**

## Implements

* [GitFlowBranch](../interfaces/api.gitflowbranch.md)

## Index

### Constructors

* [constructor](gflow.gflowhotfixbranch.md#constructor)

### Properties

* [type](gflow.gflowhotfixbranch.md#readonly-type)

### Methods

* [finish](gflow.gflowhotfixbranch.md#finish)
* [list](gflow.gflowhotfixbranch.md#list)
* [start](gflow.gflowhotfixbranch.md#start)

## Constructors

###  constructor

\+ **new GFlowHotFixBranch**(`gitFlowBranch`: [GitFlowBranch](../interfaces/api.gitflowbranch.md), `repoPath`: string): *[GFlowHotFixBranch](gflow.gflowhotfixbranch.md)*

Initializes a new instance of this class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gitFlowBranch` | [GitFlowBranch](../interfaces/api.gitflowbranch.md) | Git flow branch to be wrapped. |
`repoPath` | string | Path of the git repository.  |

**Returns:** *[GFlowHotFixBranch](gflow.gflowhotfixbranch.md)*

## Properties

### `Readonly` type

• **type**: *[BranchType](../modules/api.md#branchtype)* = "hotfix"

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md).[type](../interfaces/api.gitflowbranch.md#readonly-type)*

## Methods

###  finish

▸ **finish**(`name?`: undefined | string, `msg?`: undefined | string): *Promise‹void›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

Merges and finishes the branch of the branch type '[type](gflow.gflowhotfixbranch.md#readonly-type)'.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined &#124; string | Name of the branch to be finished. |
`msg?` | undefined &#124; string | Message to be set for finishing the branch.  |

**Returns:** *Promise‹void›*

___

###  list

▸ **list**(): *Promise‹string[]›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

Lists all branches of the type '[type](gflow.gflowhotfixbranch.md#readonly-type)'.

**Returns:** *Promise‹string[]›*

___

###  start

▸ **start**(`name?`: undefined | string, `base?`: undefined | string): *Promise‹string›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

Creates and starts a new branch of the type '[type](gflow.gflowhotfixbranch.md#readonly-type)'.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined &#124; string | Name of the branch to be started. |
`base?` | undefined &#124; string | Base of the branch should be started from.  |

**Returns:** *Promise‹string›*

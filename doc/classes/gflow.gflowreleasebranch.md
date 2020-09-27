[gitex-flow](../README.md) › [gflow](../modules/gflow.md) › [GFlowReleaseBranch](gflow.gflowreleasebranch.md)

# Class: GFlowReleaseBranch

This class extending a release branch with some helpful functionality.

## Hierarchy

* **GFlowReleaseBranch**

## Implements

* [GitFlowBranch](../interfaces/api.gitflowbranch.md)

## Index

### Constructors

* [constructor](gflow.gflowreleasebranch.md#constructor)

### Properties

* [type](gflow.gflowreleasebranch.md#readonly-type)

### Methods

* [finish](gflow.gflowreleasebranch.md#finish)
* [getConfig](gflow.gflowreleasebranch.md#getconfig)
* [list](gflow.gflowreleasebranch.md#list)
* [start](gflow.gflowreleasebranch.md#start)

## Constructors

###  constructor

\+ **new GFlowReleaseBranch**(`gitFlowBranch`: [GitFlowBranch](../interfaces/api.gitflowbranch.md), `options?`: [ProjectConfig](../interfaces/tools.projectconfig.md)): *[GFlowReleaseBranch](gflow.gflowreleasebranch.md)*

Initializes a new instance of this class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gitFlowBranch` | [GitFlowBranch](../interfaces/api.gitflowbranch.md) | Git flow branch to be wrapped. |
`options?` | [ProjectConfig](../interfaces/tools.projectconfig.md) | Git flow node project options.  |

**Returns:** *[GFlowReleaseBranch](gflow.gflowreleasebranch.md)*

## Properties

### `Readonly` type

• **type**: *[BranchType](../modules/api.md#branchtype)* = "release"

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md).[type](../interfaces/api.gitflowbranch.md#readonly-type)*

## Methods

###  finish

▸ **finish**(`name?`: undefined | string, `msg?`: undefined | string): *Promise‹void›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

Merges and finishes the branch of the branch type '[type](gflow.gflowreleasebranch.md#readonly-type)'.

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

Gets the git flow branch config.

**Returns:** *Promise‹[GitFlowBranchConfig](../interfaces/api.gitflowbranchconfig.md)›*

___

###  list

▸ **list**(): *Promise‹string[]›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

Lists all branches of the type '[type](gflow.gflowreleasebranch.md#readonly-type)'.

**Returns:** *Promise‹string[]›*

___

###  start

▸ **start**(`name?`: undefined | string, `base?`: undefined | string): *Promise‹string›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

Creates and starts a new branch of the type '[type](gflow.gflowreleasebranch.md#readonly-type)'.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined &#124; string | Name of the branch to be started. |
`base?` | undefined &#124; string | Base of the branch should be started from.  |

**Returns:** *Promise‹string›*

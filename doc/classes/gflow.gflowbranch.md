[gitex-flow](../README.md) › [gflow](../modules/gflow.md) › [GFlowBranch](gflow.gflowbranch.md)

# Class: GFlowBranch

This class represents an abstract GFlow branch with some basic functionality.

## Hierarchy

* **GFlowBranch**

  ↳ [GFlowReleaseBranch](gflow.gflowreleasebranch.md)

  ↳ [GFlowHotFixBranch](gflow.gflowhotfixbranch.md)

## Implements

* [GitFlowBranch](../interfaces/api.gitflowbranch.md)

## Index

### Constructors

* [constructor](gflow.gflowbranch.md#constructor)

### Properties

* [defaultBase](gflow.gflowbranch.md#readonly-defaultbase)
* [logger](gflow.gflowbranch.md#protected-readonly-logger)
* [projectConfig](gflow.gflowbranch.md#protected-optional-readonly-projectconfig)
* [type](gflow.gflowbranch.md#readonly-type)

### Methods

* [finish](gflow.gflowbranch.md#finish)
* [generateBranchName](gflow.gflowbranch.md#generatebranchname)
* [generateBranchNameFromConfig](gflow.gflowbranch.md#protected-generatebranchnamefromconfig)
* [getConfig](gflow.gflowbranch.md#getconfig)
* [list](gflow.gflowbranch.md#list)
* [start](gflow.gflowbranch.md#start)

## Constructors

###  constructor

\+ **new GFlowBranch**(`gitFlowBranch`: [GitFlowBranch](../interfaces/api.gitflowbranch.md), `options?`: [ProjectConfig](../interfaces/tools.projectconfig.md)): *[GFlowBranch](gflow.gflowbranch.md)*

Initializes a new instance of this class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gitFlowBranch` | [GitFlowBranch](../interfaces/api.gitflowbranch.md) | Git flow branch to be wrapped. |
`options?` | [ProjectConfig](../interfaces/tools.projectconfig.md) | Git flow node project options.  |

**Returns:** *[GFlowBranch](gflow.gflowbranch.md)*

## Properties

### `Readonly` defaultBase

• **defaultBase**: *[GitFlowBaseBranchType](../modules/api.md#gitflowbasebranchtype)*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md).[defaultBase](../interfaces/api.gitflowbranch.md#readonly-defaultbase)*

___

### `Protected` `Readonly` logger

• **logger**: *Logger*

___

### `Protected` `Optional` `Readonly` projectConfig

• **projectConfig**? : *[ProjectConfig](../interfaces/tools.projectconfig.md)*

___

### `Readonly` type

• **type**: *[GitFlowBranchType](../modules/api.md#gitflowbranchtype)*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md).[type](../interfaces/api.gitflowbranch.md#readonly-type)*

## Methods

###  finish

▸ **finish**(`name?`: undefined | string, `msg?`: undefined | string): *Promise‹void›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

Merges and finishes the branch of the branch type '[type](gflow.gflowbranch.md#readonly-type)'.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined &#124; string | Name of the branch to be finished. |
`msg?` | undefined &#124; string | Message to be set for finishing the branch.  |

**Returns:** *Promise‹void›*

___

###  generateBranchName

▸ **generateBranchName**(`name?`: undefined | string): *Promise‹string | undefined›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

Generates an default branch name.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined &#124; string | A custom name for the branch.  |

**Returns:** *Promise‹string | undefined›*

___

### `Protected` generateBranchNameFromConfig

▸ **generateBranchNameFromConfig**(`name`: string): *Promise‹string›*

Gets the branch name including the git-flow configuration.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | A given branch name without prefix.  |

**Returns:** *Promise‹string›*

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

Lists all branches of the type '[type](gflow.gflowbranch.md#readonly-type)'.

**Returns:** *Promise‹string[]›*

___

###  start

▸ **start**(`name?`: undefined | string, `base?`: undefined | string): *Promise‹string›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

Creates and starts a new branch of the type '[type](gflow.gflowbranch.md#readonly-type)'.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined &#124; string | Name of the branch to be started. |
`base?` | undefined &#124; string | Base of the branch should be started from.  |

**Returns:** *Promise‹string›*

[gitex-flow](../README.md) › [gflow](../modules/gflow.md) › [GFlowReleaseBranch](gflow.gflowreleasebranch.md)

# Class: GFlowReleaseBranch

This class extending a release branch with some helpful functionality.

## Hierarchy

* [GFlowBranch](gflow.gflowbranch.md)

  ↳ **GFlowReleaseBranch**

## Implements

* [GitFlowBranch](../interfaces/api.gitflowbranch.md)

## Index

### Constructors

* [constructor](gflow.gflowreleasebranch.md#constructor)

### Properties

* [defaultBase](gflow.gflowreleasebranch.md#readonly-defaultbase)
* [logger](gflow.gflowreleasebranch.md#protected-readonly-logger)
* [projectConfig](gflow.gflowreleasebranch.md#protected-optional-readonly-projectconfig)
* [type](gflow.gflowreleasebranch.md#readonly-type)

### Methods

* [finish](gflow.gflowreleasebranch.md#finish)
* [generateBranchName](gflow.gflowreleasebranch.md#generatebranchname)
* [generateBranchNameFromConfig](gflow.gflowreleasebranch.md#protected-generatebranchnamefromconfig)
* [getConfig](gflow.gflowreleasebranch.md#getconfig)
* [list](gflow.gflowreleasebranch.md#list)
* [start](gflow.gflowreleasebranch.md#start)

## Constructors

###  constructor

\+ **new GFlowReleaseBranch**(`gitFlowBranch`: [GitFlowBranch](../interfaces/api.gitflowbranch.md), `options?`: [ProjectConfig](../interfaces/tools.projectconfig.md)): *[GFlowReleaseBranch](gflow.gflowreleasebranch.md)*

*Overrides [GFlowBranch](gflow.gflowbranch.md).[constructor](gflow.gflowbranch.md#constructor)*

Initializes a new instance of this class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gitFlowBranch` | [GitFlowBranch](../interfaces/api.gitflowbranch.md) | Git flow branch to be wrapped. |
`options?` | [ProjectConfig](../interfaces/tools.projectconfig.md) | Git flow node project options.  |

**Returns:** *[GFlowReleaseBranch](gflow.gflowreleasebranch.md)*

## Properties

### `Readonly` defaultBase

• **defaultBase**: *[GitFlowBaseBranchType](../modules/api.md#gitflowbasebranchtype)*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md).[defaultBase](../interfaces/api.gitflowbranch.md#readonly-defaultbase)*

*Inherited from [GFlowBranch](gflow.gflowbranch.md).[defaultBase](gflow.gflowbranch.md#readonly-defaultbase)*

___

### `Protected` `Readonly` logger

• **logger**: *Logger*

*Inherited from [GFlowBranch](gflow.gflowbranch.md).[logger](gflow.gflowbranch.md#protected-readonly-logger)*

___

### `Protected` `Optional` `Readonly` projectConfig

• **projectConfig**? : *[ProjectConfig](../interfaces/tools.projectconfig.md)*

*Inherited from [GFlowBranch](gflow.gflowbranch.md).[projectConfig](gflow.gflowbranch.md#protected-optional-readonly-projectconfig)*

___

### `Readonly` type

• **type**: *[GitFlowBranchType](../modules/api.md#gitflowbranchtype)*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md).[type](../interfaces/api.gitflowbranch.md#readonly-type)*

*Inherited from [GFlowBranch](gflow.gflowbranch.md).[type](gflow.gflowbranch.md#readonly-type)*

## Methods

###  finish

▸ **finish**(`name?`: undefined | string, `msg?`: undefined | string): *Promise‹void›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

*Overrides [GFlowBranch](gflow.gflowbranch.md).[finish](gflow.gflowbranch.md#finish)*

Merges and finishes the branch of the branch type '[type](gflow.gflowreleasebranch.md#readonly-type)'.

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

*Inherited from [GFlowBranch](gflow.gflowbranch.md).[generateBranchName](gflow.gflowbranch.md#generatebranchname)*

Generates an default branch name.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined &#124; string | A custom name for the branch.  |

**Returns:** *Promise‹string | undefined›*

___

### `Protected` generateBranchNameFromConfig

▸ **generateBranchNameFromConfig**(`name`: string): *Promise‹string›*

*Inherited from [GFlowBranch](gflow.gflowbranch.md).[generateBranchNameFromConfig](gflow.gflowbranch.md#protected-generatebranchnamefromconfig)*

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

*Inherited from [GFlowBranch](gflow.gflowbranch.md).[getConfig](gflow.gflowbranch.md#getconfig)*

Gets the git flow branch config.

**Returns:** *Promise‹[GitFlowBranchConfig](../interfaces/api.gitflowbranchconfig.md)›*

___

###  list

▸ **list**(): *Promise‹string[]›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

*Inherited from [GFlowBranch](gflow.gflowbranch.md).[list](gflow.gflowbranch.md#list)*

Lists all branches of the type '[type](gflow.gflowreleasebranch.md#readonly-type)'.

**Returns:** *Promise‹string[]›*

___

###  start

▸ **start**(`name?`: undefined | string, `base?`: undefined | string): *Promise‹string›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

*Overrides [GFlowBranch](gflow.gflowbranch.md).[start](gflow.gflowbranch.md#start)*

Creates and starts a new branch of the type '[type](gflow.gflowreleasebranch.md#readonly-type)'.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined &#124; string | Name of the branch to be started. |
`base?` | undefined &#124; string | Base of the branch should be started from.  |

**Returns:** *Promise‹string›*

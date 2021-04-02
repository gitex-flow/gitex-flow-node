[gitex-flow](../README.md) / [gflow](../modules/gflow.md) / GFlowBranch

# Class: GFlowBranch

[gflow](../modules/gflow.md).GFlowBranch

This class represents an abstract GFlow branch with some basic functionality.

## Hierarchy

* **GFlowBranch**

  ↳ [*GFlowHotFixBranch*](gflow.gflowhotfixbranch.md)

  ↳ [*GFlowReleaseBranch*](gflow.gflowreleasebranch.md)

## Implements

* [*GitFlowBranch*](../interfaces/api.gitflowbranch.md)

## Table of contents

### Constructors

- [constructor](gflow.gflowbranch.md#constructor)

### Properties

- [defaultBase](gflow.gflowbranch.md#defaultbase)
- [logger](gflow.gflowbranch.md#logger)
- [projectConfig](gflow.gflowbranch.md#projectconfig)
- [type](gflow.gflowbranch.md#type)

### Methods

- [finish](gflow.gflowbranch.md#finish)
- [generateBranchName](gflow.gflowbranch.md#generatebranchname)
- [generateBranchNameFromConfig](gflow.gflowbranch.md#generatebranchnamefromconfig)
- [getConfig](gflow.gflowbranch.md#getconfig)
- [list](gflow.gflowbranch.md#list)
- [start](gflow.gflowbranch.md#start)

## Constructors

### constructor

\+ **new GFlowBranch**(`gitFlowBranch`: [*GitFlowBranch*](../interfaces/api.gitflowbranch.md), `options?`: [*ProjectConfig*](../interfaces/configs.projectconfig.md)): [*GFlowBranch*](gflow.gflowbranch.md)

Initializes a new instance of this class.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`gitFlowBranch` | [*GitFlowBranch*](../interfaces/api.gitflowbranch.md) | Git flow branch to be wrapped.   |
`options?` | [*ProjectConfig*](../interfaces/configs.projectconfig.md) | Git flow node project options.    |

**Returns:** [*GFlowBranch*](gflow.gflowbranch.md)

## Properties

### defaultBase

• `Readonly` **defaultBase**: [*GitFlowBaseBranchType*](../modules/api.md#gitflowbasebranchtype)

Default base of this branch.

Implementation of: [GitFlowBranch](../interfaces/api.gitflowbranch.md).[defaultBase](../interfaces/api.gitflowbranch.md#defaultbase)

___

### logger

• `Protected` `Readonly` **logger**: *Logger*

___

### projectConfig

• `Protected` `Optional` `Readonly` **projectConfig**: [*ProjectConfig*](../interfaces/configs.projectconfig.md)

___

### type

• `Readonly` **type**: [*GitFlowBranchType*](../modules/api.md#gitflowbranchtype)

Specifies the git flow branch type.

Implementation of: [GitFlowBranch](../interfaces/api.gitflowbranch.md).[type](../interfaces/api.gitflowbranch.md#type)

## Methods

### finish

▸ **finish**(`name?`: *string*, `msg?`: *string*): *Promise*<void\>

Merges and finishes the branch of the branch type '[type](gflow.gflowbranch.md#type)'.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`name?` | *string* | Name of the branch to be finished.   |
`msg?` | *string* | Message to be set for finishing the branch.    |

**Returns:** *Promise*<void\>

Implementation of: [GitFlowBranch](../interfaces/api.gitflowbranch.md)

___

### generateBranchName

▸ **generateBranchName**(`name?`: *string*): *Promise*<undefined \| string\>

Generates an default branch name.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`name?` | *string* | A custom name for the branch.    |

**Returns:** *Promise*<undefined \| string\>

The generated branch name.

Implementation of: [GitFlowBranch](../interfaces/api.gitflowbranch.md)

___

### generateBranchNameFromConfig

▸ `Protected`**generateBranchNameFromConfig**(`name`: *string*): *Promise*<string\>

Gets the branch name including the git-flow configuration.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`name` | *string* | A given branch name without prefix.    |

**Returns:** *Promise*<string\>

The generated name.

___

### getConfig

▸ **getConfig**(): *Promise*<[*GitFlowBranchConfig*](../interfaces/api.gitflowbranchconfig.md)\>

Gets the git flow branch config.

**Returns:** *Promise*<[*GitFlowBranchConfig*](../interfaces/api.gitflowbranchconfig.md)\>

The configuration of the gitex flow branch.

Implementation of: [GitFlowBranch](../interfaces/api.gitflowbranch.md)

___

### list

▸ **list**(): *Promise*<string[]\>

Lists all branches of the type '[type](gflow.gflowbranch.md#type)'.

**Returns:** *Promise*<string[]\>

The list of branches.

Implementation of: [GitFlowBranch](../interfaces/api.gitflowbranch.md)

___

### start

▸ **start**(`name?`: *string*, `base?`: *string*): *Promise*<string\>

Creates and starts a new branch of the type '[type](gflow.gflowbranch.md#type)'.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`name?` | *string* | Name of the branch to be started.   |
`base?` | *string* | Base of the branch should be started from.    |

**Returns:** *Promise*<string\>

The name of the started branch.

Implementation of: [GitFlowBranch](../interfaces/api.gitflowbranch.md)

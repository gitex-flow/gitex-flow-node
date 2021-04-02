[gitex-flow](../README.md) / [gflow](../modules/gflow.md) / GFlowReleaseBranch

# Class: GFlowReleaseBranch

[gflow](../modules/gflow.md).GFlowReleaseBranch

This class extending a release branch with some helpful functionality.

## Hierarchy

* [*GFlowBranch*](gflow.gflowbranch.md)

  ↳ **GFlowReleaseBranch**

## Table of contents

### Constructors

- [constructor](gflow.gflowreleasebranch.md#constructor)

### Properties

- [defaultBase](gflow.gflowreleasebranch.md#defaultbase)
- [logger](gflow.gflowreleasebranch.md#logger)
- [projectConfig](gflow.gflowreleasebranch.md#projectconfig)
- [type](gflow.gflowreleasebranch.md#type)

### Methods

- [finish](gflow.gflowreleasebranch.md#finish)
- [generateBranchName](gflow.gflowreleasebranch.md#generatebranchname)
- [generateBranchNameFromConfig](gflow.gflowreleasebranch.md#generatebranchnamefromconfig)
- [getConfig](gflow.gflowreleasebranch.md#getconfig)
- [list](gflow.gflowreleasebranch.md#list)
- [start](gflow.gflowreleasebranch.md#start)

## Constructors

### constructor

\+ **new GFlowReleaseBranch**(`gitFlowBranch`: [*GitFlowBranch*](../interfaces/api.gitflowbranch.md), `options?`: [*ProjectConfig*](../interfaces/configs.projectconfig.md)): [*GFlowReleaseBranch*](gflow.gflowreleasebranch.md)

Initializes a new instance of this class.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`gitFlowBranch` | [*GitFlowBranch*](../interfaces/api.gitflowbranch.md) | Git flow branch to be wrapped.   |
`options?` | [*ProjectConfig*](../interfaces/configs.projectconfig.md) | Git flow node project options.    |

**Returns:** [*GFlowReleaseBranch*](gflow.gflowreleasebranch.md)

Overrides: [GFlowBranch](gflow.gflowbranch.md)

## Properties

### defaultBase

• `Readonly` **defaultBase**: [*GitFlowBaseBranchType*](../modules/api.md#gitflowbasebranchtype)

Default base of this branch.

Inherited from: [GFlowBranch](gflow.gflowbranch.md).[defaultBase](gflow.gflowbranch.md#defaultbase)

___

### logger

• `Protected` `Readonly` **logger**: *Logger*

Inherited from: [GFlowBranch](gflow.gflowbranch.md).[logger](gflow.gflowbranch.md#logger)

___

### projectConfig

• `Protected` `Optional` `Readonly` **projectConfig**: [*ProjectConfig*](../interfaces/configs.projectconfig.md)

Inherited from: [GFlowBranch](gflow.gflowbranch.md).[projectConfig](gflow.gflowbranch.md#projectconfig)

___

### type

• `Readonly` **type**: [*GitFlowBranchType*](../modules/api.md#gitflowbranchtype)

Specifies the git flow branch type.

Inherited from: [GFlowBranch](gflow.gflowbranch.md).[type](gflow.gflowbranch.md#type)

## Methods

### finish

▸ **finish**(`name?`: *string*, `msg?`: *string*): *Promise*<void\>

Merges and finishes the branch of the branch type '[type](gflow.gflowreleasebranch.md#type)'.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`name?` | *string* | Name of the branch to be finished.   |
`msg?` | *string* | Message to be set for finishing the branch.    |

**Returns:** *Promise*<void\>

Overrides: [GFlowBranch](gflow.gflowbranch.md)

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

Inherited from: [GFlowBranch](gflow.gflowbranch.md)

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

Inherited from: [GFlowBranch](gflow.gflowbranch.md)

___

### getConfig

▸ **getConfig**(): *Promise*<[*GitFlowBranchConfig*](../interfaces/api.gitflowbranchconfig.md)\>

Gets the git flow branch config.

**Returns:** *Promise*<[*GitFlowBranchConfig*](../interfaces/api.gitflowbranchconfig.md)\>

The configuration of the gitex flow branch.

Inherited from: [GFlowBranch](gflow.gflowbranch.md)

___

### list

▸ **list**(): *Promise*<string[]\>

Lists all branches of the type '[type](gflow.gflowreleasebranch.md#type)'.

**Returns:** *Promise*<string[]\>

The list of branches.

Inherited from: [GFlowBranch](gflow.gflowbranch.md)

___

### start

▸ **start**(`name?`: *string*, `base?`: *string*): *Promise*<string\>

Creates and starts a new release branch.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`name?` | *string* | Name of the branch to be started.   |
`base?` | *string* | Base of the branch should be started from.    |

**Returns:** *Promise*<string\>

The name of the release branch.

Overrides: [GFlowBranch](gflow.gflowbranch.md)

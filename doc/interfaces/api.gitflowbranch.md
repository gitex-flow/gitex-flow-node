[gitex-flow](../README.md) / [api](../modules/api.md) / GitFlowBranch

# Interface: GitFlowBranch

[api](../modules/api.md).GitFlowBranch

This interface represents the basic functionality of a git flow branch.

## Implemented by

* [*AvhGitFlowBranch*](../classes/avh.avhgitflowbranch.md)
* [*GFlowBranch*](../classes/gflow.gflowbranch.md)

## Table of contents

### Properties

- [defaultBase](api.gitflowbranch.md#defaultbase)
- [type](api.gitflowbranch.md#type)

### Methods

- [finish](api.gitflowbranch.md#finish)
- [generateBranchName](api.gitflowbranch.md#generatebranchname)
- [getConfig](api.gitflowbranch.md#getconfig)
- [list](api.gitflowbranch.md#list)
- [start](api.gitflowbranch.md#start)

## Properties

### defaultBase

• `Readonly` **defaultBase**: [*GitFlowBaseBranchType*](../modules/api.md#gitflowbasebranchtype)

Default base of this branch.

___

### type

• `Readonly` **type**: [*GitFlowBranchType*](../modules/api.md#gitflowbranchtype)

Specifies the git flow branch type.

## Methods

### finish

▸ **finish**(`name?`: *string*, `msg?`: *string*): *Promise*<void\>

Merges and finishes the branch of the branch type '[type](api.gitflowbranch.md#type)'.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`name?` | *string* | Name of the branch to be finished.   |
`msg?` | *string* | Message to be set for finishing the branch.    |

**Returns:** *Promise*<void\>

___

### generateBranchName

▸ **generateBranchName**(`name?`: *string*): *Promise*<undefined \| string\>

Generates an default branch name.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`name?` | *string* | A custom name for the branch.    |

**Returns:** *Promise*<undefined \| string\>

___

### getConfig

▸ **getConfig**(): *Promise*<[*GitFlowBranchConfig*](api.gitflowbranchconfig.md)\>

Gets the git flow branch config.

**Returns:** *Promise*<[*GitFlowBranchConfig*](api.gitflowbranchconfig.md)\>

___

### list

▸ **list**(): *Promise*<string[]\>

Lists all branches of the type '[type](api.gitflowbranch.md#type)'.

**Returns:** *Promise*<string[]\>

___

### start

▸ **start**(`name?`: *string*, `base?`: *string*): *Promise*<string\>

Creates and starts a new branch of the type '[type](api.gitflowbranch.md#type)'.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`name?` | *string* | Name of the branch to be started.   |
`base?` | *string* | Base of the branch should be started from.   |

**Returns:** *Promise*<string\>

The git reference of the create branch.

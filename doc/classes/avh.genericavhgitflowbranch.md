[gflow](../README.md) › [avh](../modules/avh.md) › [GenericAvhGitFlowBranch](avh.genericavhgitflowbranch.md)

# Class: GenericAvhGitFlowBranch

This class implements a generic AVH git flow branch.

## Hierarchy

* [AvhGitFlowBranch](avh.avhgitflowbranch.md)

  ↳ **GenericAvhGitFlowBranch**

## Implements

* [GitFlowBranch](../interfaces/api.gitflowbranch.md)

## Index

### Constructors

* [constructor](avh.genericavhgitflowbranch.md#constructor)

### Properties

* [type](avh.genericavhgitflowbranch.md#readonly-type)

### Methods

* [finish](avh.genericavhgitflowbranch.md#finish)
* [list](avh.genericavhgitflowbranch.md#list)
* [start](avh.genericavhgitflowbranch.md#start)

## Constructors

###  constructor

\+ **new GenericAvhGitFlowBranch**(`type`: [BranchType](../modules/api.md#branchtype), `repoPath?`: undefined | string): *[GenericAvhGitFlowBranch](avh.genericavhgitflowbranch.md)*

*Overrides [AvhGitFlowBranch](avh.avhgitflowbranch.md).[constructor](avh.avhgitflowbranch.md#constructor)*

Initializes a new instance of this class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | [BranchType](../modules/api.md#branchtype) | The type of the branch. |
`repoPath?` | undefined &#124; string | The path to the git repository.  |

**Returns:** *[GenericAvhGitFlowBranch](avh.genericavhgitflowbranch.md)*

## Properties

### `Readonly` type

• **type**: *[BranchType](../modules/api.md#branchtype)*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md).[type](../interfaces/api.gitflowbranch.md#readonly-type)*

*Overrides [AvhGitFlowBranch](avh.avhgitflowbranch.md).[type](avh.avhgitflowbranch.md#readonly-abstract-type)*

## Methods

###  finish

▸ **finish**(`name?`: undefined | string, `msg?`: undefined | string): *Promise‹void›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

*Inherited from [AvhGitFlowBranch](avh.avhgitflowbranch.md).[finish](avh.avhgitflowbranch.md#finish)*

{@inheritdoc}

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

*Inherited from [AvhGitFlowBranch](avh.avhgitflowbranch.md).[list](avh.avhgitflowbranch.md#list)*

{@inheritdoc}

**Returns:** *Promise‹string[]›*

___

###  start

▸ **start**(`name?`: undefined | string, `base?`: undefined | string): *Promise‹string›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

*Inherited from [AvhGitFlowBranch](avh.avhgitflowbranch.md).[start](avh.avhgitflowbranch.md#start)*

{@inheritdoc}

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined &#124; string | Name of the branch to be started. |
`base?` | undefined &#124; string | Base of the branch should be started from. |

**Returns:** *Promise‹string›*

The git reference of the create branch.

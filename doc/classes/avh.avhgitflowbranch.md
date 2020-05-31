[g-flow](../README.md) › [avh](../modules/avh.md) › [AvhGitFlowBranch](avh.avhgitflowbranch.md)

# Class: AvhGitFlowBranch

This class implements the basic functionality of a git flow branch.

## Hierarchy

* **AvhGitFlowBranch**

  ↳ [GenericAvhGitFlowBranch](avh.genericavhgitflowbranch.md)

## Implements

* [GitFlowBranch](../interfaces/api.gitflowbranch.md)

## Index

### Constructors

* [constructor](avh.avhgitflowbranch.md#constructor)

### Properties

* [type](avh.avhgitflowbranch.md#readonly-abstract-type)

### Methods

* [finish](avh.avhgitflowbranch.md#finish)
* [list](avh.avhgitflowbranch.md#list)
* [start](avh.avhgitflowbranch.md#start)

## Constructors

###  constructor

\+ **new AvhGitFlowBranch**(`repoPath?`: undefined | string): *[AvhGitFlowBranch](avh.avhgitflowbranch.md)*

Initializes a new instance of this class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`repoPath?` | undefined &#124; string | The path to the git repository.  |

**Returns:** *[AvhGitFlowBranch](avh.avhgitflowbranch.md)*

## Properties

### `Readonly` `Abstract` type

• **type**: *[BranchType](../modules/api.md#branchtype)*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md).[type](../interfaces/api.gitflowbranch.md#readonly-type)*

{@inheritdoc}

## Methods

###  finish

▸ **finish**(`name?`: undefined | string, `msg?`: undefined | string): *Promise‹void›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

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

{@inheritdoc}

**Returns:** *Promise‹string[]›*

___

###  start

▸ **start**(`name?`: undefined | string, `base?`: undefined | string): *Promise‹string›*

*Implementation of [GitFlowBranch](../interfaces/api.gitflowbranch.md)*

{@inheritdoc}

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name?` | undefined &#124; string | Name of the branch to be started. |
`base?` | undefined &#124; string | Base of the branch should be started from. |

**Returns:** *Promise‹string›*

The git reference of the create branch.

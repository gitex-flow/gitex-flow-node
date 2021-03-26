[gitex-flow](../README.md) / [avh](../modules/avh.md) / BugfixGitFlowBranch

# Class: BugfixGitFlowBranch

[avh](../modules/avh.md).BugfixGitFlowBranch

This class wraps the bugfix branch of the AVH implementation.

## Hierarchy

* [*AvhGitFlowBranch*](avh.avhgitflowbranch.md)

  ↳ **BugfixGitFlowBranch**

## Table of contents

### Constructors

- [constructor](avh.bugfixgitflowbranch.md#constructor)

### Properties

- [defaultBase](avh.bugfixgitflowbranch.md#defaultbase)
- [type](avh.bugfixgitflowbranch.md#type)

### Methods

- [finish](avh.bugfixgitflowbranch.md#finish)
- [generateBranchName](avh.bugfixgitflowbranch.md#generatebranchname)
- [getConfig](avh.bugfixgitflowbranch.md#getconfig)
- [list](avh.bugfixgitflowbranch.md#list)
- [start](avh.bugfixgitflowbranch.md#start)

## Constructors

### constructor

\+ **new BugfixGitFlowBranch**(`repoPath?`: *string*, `configProvider?`: [*ConfigProvider*](../interfaces/api.configprovider.md)<[*GitFlowConfig*](../interfaces/configs.gitflowconfig.md)\>): [*BugfixGitFlowBranch*](avh.bugfixgitflowbranch.md)

Initializes a new instance of this class.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`repoPath?` | *string* | The path to the git repository.   |
`configProvider?` | [*ConfigProvider*](../interfaces/api.configprovider.md)<[*GitFlowConfig*](../interfaces/configs.gitflowconfig.md)\> | Git flow config provider.    |

**Returns:** [*BugfixGitFlowBranch*](avh.bugfixgitflowbranch.md)

Overrides: [AvhGitFlowBranch](avh.avhgitflowbranch.md)

## Properties

### defaultBase

• `Readonly` **defaultBase**: [*GitFlowBaseBranchType*](../modules/api.md#gitflowbasebranchtype)= 'develop'

{@inheritdoc}

Overrides: [AvhGitFlowBranch](avh.avhgitflowbranch.md).[defaultBase](avh.avhgitflowbranch.md#defaultbase)

___

### type

• `Readonly` **type**: [*GitFlowBranchType*](../modules/api.md#gitflowbranchtype)= 'bugfix'

{@inheritdoc}

Overrides: [AvhGitFlowBranch](avh.avhgitflowbranch.md).[type](avh.avhgitflowbranch.md#type)

## Methods

### finish

▸ **finish**(`name?`: *string*, `msg?`: *string*): *Promise*<void\>

{@inheritdoc}

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`name?` | *string* | Name of the branch to be finished.   |
`msg?` | *string* | Message to be set for finishing the branch.    |

**Returns:** *Promise*<void\>

Inherited from: [AvhGitFlowBranch](avh.avhgitflowbranch.md)

___

### generateBranchName

▸ **generateBranchName**(`name?`: *string*): *Promise*<undefined \| string\>

{@inheritdoc}

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`name?` | *string* | A custom name for the branch.    |

**Returns:** *Promise*<undefined \| string\>

The generated branch name.

Inherited from: [AvhGitFlowBranch](avh.avhgitflowbranch.md)

___

### getConfig

▸ **getConfig**(): *Promise*<[*GitFlowBranchConfig*](../interfaces/api.gitflowbranchconfig.md)\>

{@inheritdoc}

**Returns:** *Promise*<[*GitFlowBranchConfig*](../interfaces/api.gitflowbranchconfig.md)\>

The configuration of the bugfix git flow branch.

Overrides: [AvhGitFlowBranch](avh.avhgitflowbranch.md)

___

### list

▸ **list**(): *Promise*<string[]\>

{@inheritdoc}

**Returns:** *Promise*<string[]\>

The list of the currently opened branch.

Inherited from: [AvhGitFlowBranch](avh.avhgitflowbranch.md)

___

### start

▸ **start**(`name?`: *string*, `base?`: *string*): *Promise*<string\>

{@inheritdoc}

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`name?` | *string* | Name of the branch to be started.   |
`base?` | *string* | Base of the branch should be started from.   |

**Returns:** *Promise*<string\>

The git reference of the create branch.

Inherited from: [AvhGitFlowBranch](avh.avhgitflowbranch.md)

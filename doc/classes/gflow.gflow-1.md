[g-flow](../README.md) › [gflow](../modules/gflow.md) › [GFlow](gflow.gflow-1.md)

# Class: GFlow

GitFlow wrapper extending functionality to a common git flow implementation.

## Hierarchy

* **GFlow**

## Implements

* [GitFlow](../interfaces/api.gitflow.md)

## Index

### Constructors

* [constructor](gflow.gflow-1.md#constructor)

### Properties

* [bugfix](gflow.gflow-1.md#bugfix)
* [config](gflow.gflow-1.md#config)
* [feature](gflow.gflow-1.md#feature)
* [hotfix](gflow.gflow-1.md#hotfix)
* [release](gflow.gflow-1.md#release)
* [support](gflow.gflow-1.md#support)

### Methods

* [init](gflow.gflow-1.md#init)
* [version](gflow.gflow-1.md#version)

## Constructors

###  constructor

\+ **new GFlow**(`gitFlow`: [GitFlow](../interfaces/api.gitflow.md), `repoPath?`: undefined | string): *[GFlow](gflow.gflow-1.md)*

Initializes a new instance of this class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gitFlow` | [GitFlow](../interfaces/api.gitflow.md) | GitFlow implementation. |
`repoPath?` | undefined &#124; string | Path of the git repository.  |

**Returns:** *[GFlow](gflow.gflow-1.md)*

## Properties

###  bugfix

• **bugfix**: *[GitFlowBranch](../interfaces/api.gitflowbranch.md)*

*Implementation of [GitFlow](../interfaces/api.gitflow.md).[bugfix](../interfaces/api.gitflow.md#readonly-bugfix)*

___

###  config

• **config**: *[ConfigProvider](../interfaces/api.configprovider.md)‹[GitFlowConfig](../interfaces/api.gitflowconfig.md)›*

*Implementation of [GitFlow](../interfaces/api.gitflow.md).[config](../interfaces/api.gitflow.md#readonly-config)*

___

###  feature

• **feature**: *[GitFlowBranch](../interfaces/api.gitflowbranch.md)*

*Implementation of [GitFlow](../interfaces/api.gitflow.md).[feature](../interfaces/api.gitflow.md#readonly-feature)*

___

###  hotfix

• **hotfix**: *[GitFlowBranch](../interfaces/api.gitflowbranch.md)*

*Implementation of [GitFlow](../interfaces/api.gitflow.md).[hotfix](../interfaces/api.gitflow.md#readonly-hotfix)*

___

###  release

• **release**: *[GitFlowBranch](../interfaces/api.gitflowbranch.md)*

*Implementation of [GitFlow](../interfaces/api.gitflow.md).[release](../interfaces/api.gitflow.md#readonly-release)*

___

###  support

• **support**: *[GitFlowBranch](../interfaces/api.gitflowbranch.md)*

*Implementation of [GitFlow](../interfaces/api.gitflow.md).[support](../interfaces/api.gitflow.md#readonly-support)*

## Methods

###  init

▸ **init**(`config?`: [GitFlowConfig](../interfaces/api.gitflowconfig.md), `force?`: undefined | false | true): *Promise‹void›*

*Implementation of [GitFlow](../interfaces/api.gitflow.md)*

Setup a git repository for git flow ussage.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`config?` | [GitFlowConfig](../interfaces/api.gitflowconfig.md) | The git flow configuration. |
`force?` | undefined &#124; false &#124; true | Force reinitialisation if git flow already initialized.  |

**Returns:** *Promise‹void›*

___

###  version

▸ **version**(): *Promise‹string›*

*Implementation of [GitFlow](../interfaces/api.gitflow.md)*

Provides the version of the git flow implementation.

**Returns:** *Promise‹string›*

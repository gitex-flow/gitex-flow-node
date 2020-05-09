[node-git-flow-workflow](../README.md) › [avh](../modules/avh.md) › [AvhGitFlow](avh.avhgitflow.md)

# Class: AvhGitFlow

Implementation of git flow by [gitflow-avh](https://github.com/petervanderdoes/gitflow-avh).

## Hierarchy

* **AvhGitFlow**

## Implements

* [GitFlow](../interfaces/api.gitflow.md)

## Index

### Constructors

* [constructor](avh.avhgitflow.md#constructor)

### Properties

* [bugfix](avh.avhgitflow.md#readonly-bugfix)
* [config](avh.avhgitflow.md#readonly-config)
* [feature](avh.avhgitflow.md#readonly-feature)
* [hotfix](avh.avhgitflow.md#readonly-hotfix)
* [release](avh.avhgitflow.md#readonly-release)
* [support](avh.avhgitflow.md#readonly-support)

### Methods

* [init](avh.avhgitflow.md#init)
* [version](avh.avhgitflow.md#version)

## Constructors

###  constructor

\+ **new AvhGitFlow**(`repoPath?`: undefined | string): *[AvhGitFlow](avh.avhgitflow.md)*

Initializes a new instance of this class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`repoPath?` | undefined &#124; string | The path to the git repository.  |

**Returns:** *[AvhGitFlow](avh.avhgitflow.md)*

## Properties

### `Readonly` bugfix

• **bugfix**: *[GitFlowBranch](../interfaces/api.gitflowbranch.md)*

*Implementation of [GitFlow](../interfaces/api.gitflow.md).[bugfix](../interfaces/api.gitflow.md#readonly-bugfix)*

___

### `Readonly` config

• **config**: *[ConfigProvider](../interfaces/api.configprovider.md)‹[GitFlowConfig](../interfaces/api.gitflowconfig.md)›*

*Implementation of [GitFlow](../interfaces/api.gitflow.md).[config](../interfaces/api.gitflow.md#readonly-config)*

___

### `Readonly` feature

• **feature**: *[GitFlowBranch](../interfaces/api.gitflowbranch.md)*

*Implementation of [GitFlow](../interfaces/api.gitflow.md).[feature](../interfaces/api.gitflow.md#readonly-feature)*

___

### `Readonly` hotfix

• **hotfix**: *[GitFlowBranch](../interfaces/api.gitflowbranch.md)*

*Implementation of [GitFlow](../interfaces/api.gitflow.md).[hotfix](../interfaces/api.gitflow.md#readonly-hotfix)*

___

### `Readonly` release

• **release**: *[GitFlowBranch](../interfaces/api.gitflowbranch.md)*

*Implementation of [GitFlow](../interfaces/api.gitflow.md).[release](../interfaces/api.gitflow.md#readonly-release)*

___

### `Readonly` support

• **support**: *[GitFlowBranch](../interfaces/api.gitflowbranch.md)*

*Implementation of [GitFlow](../interfaces/api.gitflow.md).[support](../interfaces/api.gitflow.md#readonly-support)*

## Methods

###  init

▸ **init**(`config?`: [GitFlowConfig](../interfaces/api.gitflowconfig.md), `force?`: undefined | false | true): *Promise‹void›*

*Implementation of [GitFlow](../interfaces/api.gitflow.md)*

{@inheritdoc}

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

{@inheritdoc}

**Returns:** *Promise‹string›*

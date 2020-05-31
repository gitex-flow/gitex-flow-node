[gitex-flow](../README.md) › [api](../modules/api.md) › [GitFlow](api.gitflow.md)

# Interface: GitFlow

Specification of the git flow API.

## Hierarchy

* **GitFlow**

## Implemented by

* [AvhGitFlow](../classes/avh.avhgitflow.md)
* [GFlow](../classes/gflow.gflow-1.md)

## Index

### Properties

* [bugfix](api.gitflow.md#readonly-bugfix)
* [config](api.gitflow.md#readonly-config)
* [feature](api.gitflow.md#readonly-feature)
* [hotfix](api.gitflow.md#readonly-hotfix)
* [release](api.gitflow.md#readonly-release)
* [support](api.gitflow.md#readonly-support)

### Methods

* [init](api.gitflow.md#init)
* [version](api.gitflow.md#version)

## Properties

### `Readonly` bugfix

• **bugfix**: *[GitFlowBranch](api.gitflowbranch.md)*

Provides functionality of bugfix branches.

___

### `Readonly` config

• **config**: *[ConfigProvider](api.configprovider.md)‹[GitFlowConfig](api.gitflowconfig.md)›*

Provides functionality to get and set the git flow configuration.

___

### `Readonly` feature

• **feature**: *[GitFlowBranch](api.gitflowbranch.md)*

Provides functionality of feature branches.

___

### `Readonly` hotfix

• **hotfix**: *[GitFlowBranch](api.gitflowbranch.md)*

Provides functionality of hotfix branches.

___

### `Readonly` release

• **release**: *[GitFlowBranch](api.gitflowbranch.md)*

Provides functionality of release branches.

___

### `Readonly` support

• **support**: *[GitFlowBranch](api.gitflowbranch.md)*

Provides functionality of support branches.

## Methods

###  init

▸ **init**(`config?`: [GitFlowConfig](api.gitflowconfig.md), `force?`: undefined | false | true): *Promise‹void›*

Setup a git repository for git flow ussage.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`config?` | [GitFlowConfig](api.gitflowconfig.md) | The git flow configuration. |
`force?` | undefined &#124; false &#124; true | Force reinitialisation if git flow already initialized.  |

**Returns:** *Promise‹void›*

___

###  version

▸ **version**(): *Promise‹string›*

Provides the version of the git flow implementation.

**Returns:** *Promise‹string›*

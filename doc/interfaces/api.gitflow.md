[gitex-flow](../README.md) / [api](../modules/api.md) / GitFlow

# Interface: GitFlow

[api](../modules/api.md).GitFlow

Specification of the git flow API.

## Implemented by

- [AvhGitFlow](../classes/avh.avhgitflow.md)
- [GFlow](../classes/gflow.gflow-1.md)

## Table of contents

### Properties

- [bugfix](api.gitflow.md#bugfix)
- [config](api.gitflow.md#config)
- [feature](api.gitflow.md#feature)
- [hotfix](api.gitflow.md#hotfix)
- [release](api.gitflow.md#release)
- [support](api.gitflow.md#support)

### Methods

- [init](api.gitflow.md#init)
- [version](api.gitflow.md#version)

## Properties

### bugfix

• `Readonly` **bugfix**: [GitFlowBranch](api.gitflowbranch.md)

Provides functionality of bugfix branches.

___

### config

• `Readonly` **config**: [ConfigProvider](api.configprovider.md)<[GitFlowConfig](configs.gitflowconfig.md)\>

Provides functionality to get and set the git flow configuration.

___

### feature

• `Readonly` **feature**: [GitFlowBranch](api.gitflowbranch.md)

Provides functionality of feature branches.

___

### hotfix

• `Readonly` **hotfix**: [GitFlowBranch](api.gitflowbranch.md)

Provides functionality of hotfix branches.

___

### release

• `Readonly` **release**: [GitFlowBranch](api.gitflowbranch.md)

Provides functionality of release branches.

___

### support

• `Readonly` **support**: [GitFlowBranch](api.gitflowbranch.md)

Provides functionality of support branches.

## Methods

### init

▸ **init**(`config?`, `force?`): `Promise`<void\>

Setup a git repository for git flow ussage.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | [GitFlowConfig](configs.gitflowconfig.md) | The git flow configuration. |
| `force?` | `boolean` | Force reinitialisation if git flow already initialized. |

#### Returns

`Promise`<void\>

___

### version

▸ **version**(): `Promise`<string\>

Provides the version of the git flow implementation.

#### Returns

`Promise`<string\>

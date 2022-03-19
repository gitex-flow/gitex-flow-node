[gitex-flow](../README.md) / [api](../modules/api.md) / GitFlow

# Interface: GitFlow

[api](../modules/api.md).GitFlow

Specification of the git flow API.

## Implemented by

- [`AvhGitFlow`](../classes/avh.AvhGitFlow.md)
- [`GFlow`](../classes/gflow.GFlow.md)

## Table of contents

### Properties

- [bugfix](api.GitFlow.md#bugfix)
- [config](api.GitFlow.md#config)
- [feature](api.GitFlow.md#feature)
- [hotfix](api.GitFlow.md#hotfix)
- [release](api.GitFlow.md#release)
- [support](api.GitFlow.md#support)

### Methods

- [init](api.GitFlow.md#init)
- [version](api.GitFlow.md#version)

## Properties

### bugfix

• `Readonly` **bugfix**: [`GitFlowBranch`](api.GitFlowBranch.md)

Provides functionality of bugfix branches.

___

### config

• `Readonly` **config**: [`ConfigProvider`](api.ConfigProvider.md)<[`GitFlowConfig`](configs.GitFlowConfig.md)\>

Provides functionality to get and set the git flow configuration.

___

### feature

• `Readonly` **feature**: [`GitFlowBranch`](api.GitFlowBranch.md)

Provides functionality of feature branches.

___

### hotfix

• `Readonly` **hotfix**: [`GitFlowBranch`](api.GitFlowBranch.md)

Provides functionality of hotfix branches.

___

### release

• `Readonly` **release**: [`GitFlowBranch`](api.GitFlowBranch.md)

Provides functionality of release branches.

___

### support

• `Readonly` **support**: [`GitFlowBranch`](api.GitFlowBranch.md)

Provides functionality of support branches.

## Methods

### init

▸ **init**(`config?`, `force?`): `Promise`<`void`\>

Setup a git repository for git flow ussage.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | [`GitFlowConfig`](configs.GitFlowConfig.md) | The git flow configuration. |
| `force?` | `boolean` | Force reinitialisation if git flow already initialized. |

#### Returns

`Promise`<`void`\>

___

### version

▸ **version**(): `Promise`<`string`\>

Provides the version of the git flow implementation.

#### Returns

`Promise`<`string`\>

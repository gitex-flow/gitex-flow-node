[gitex-flow](../README.md) / [avh](../modules/avh.md) / AvhGitFlow

# Class: AvhGitFlow

[avh](../modules/avh.md).AvhGitFlow

Implementation of git flow by [gitflow-avh](https://github.com/petervanderdoes/gitflow-avh).

## Implements

- [`GitFlow`](../interfaces/api.GitFlow.md)

## Table of contents

### Constructors

- [constructor](avh.AvhGitFlow.md#constructor)

### Properties

- [bugfix](avh.AvhGitFlow.md#bugfix)
- [config](avh.AvhGitFlow.md#config)
- [feature](avh.AvhGitFlow.md#feature)
- [hotfix](avh.AvhGitFlow.md#hotfix)
- [release](avh.AvhGitFlow.md#release)
- [support](avh.AvhGitFlow.md#support)

### Methods

- [init](avh.AvhGitFlow.md#init)
- [version](avh.AvhGitFlow.md#version)

## Constructors

### constructor

• **new AvhGitFlow**(`repoPath?`)

Initializes a new instance of this class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `repoPath?` | `string` | The path to the git repository. |

## Properties

### bugfix

• `Readonly` **bugfix**: [`GitFlowBranch`](../interfaces/api.GitFlowBranch.md)

Provides functionality of bugfix branches.

#### Implementation of

[GitFlow](../interfaces/api.GitFlow.md).[bugfix](../interfaces/api.GitFlow.md#bugfix)

___

### config

• `Readonly` **config**: [`ConfigProvider`](../interfaces/api.ConfigProvider.md)<[`GitFlowConfig`](../interfaces/configs.GitFlowConfig.md)\>

Provides functionality to get and set the git flow configuration.

#### Implementation of

[GitFlow](../interfaces/api.GitFlow.md).[config](../interfaces/api.GitFlow.md#config)

___

### feature

• `Readonly` **feature**: [`GitFlowBranch`](../interfaces/api.GitFlowBranch.md)

Provides functionality of feature branches.

#### Implementation of

[GitFlow](../interfaces/api.GitFlow.md).[feature](../interfaces/api.GitFlow.md#feature)

___

### hotfix

• `Readonly` **hotfix**: [`GitFlowBranch`](../interfaces/api.GitFlowBranch.md)

Provides functionality of hotfix branches.

#### Implementation of

[GitFlow](../interfaces/api.GitFlow.md).[hotfix](../interfaces/api.GitFlow.md#hotfix)

___

### release

• `Readonly` **release**: [`GitFlowBranch`](../interfaces/api.GitFlowBranch.md)

Provides functionality of release branches.

#### Implementation of

[GitFlow](../interfaces/api.GitFlow.md).[release](../interfaces/api.GitFlow.md#release)

___

### support

• `Readonly` **support**: [`GitFlowBranch`](../interfaces/api.GitFlowBranch.md)

Provides functionality of support branches.

#### Implementation of

[GitFlow](../interfaces/api.GitFlow.md).[support](../interfaces/api.GitFlow.md#support)

## Methods

### init

▸ **init**(`config?`, `force?`): `Promise`<`void`\>

{@inheritdoc}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | [`GitFlowConfig`](../interfaces/configs.GitFlowConfig.md) | The git flow configuration. |
| `force?` | `boolean` | Force reinitialisation if git flow already initialized. |

#### Returns

`Promise`<`void`\>

#### Implementation of

[GitFlow](../interfaces/api.GitFlow.md).[init](../interfaces/api.GitFlow.md#init)

___

### version

▸ **version**(): `Promise`<`string`\>

{@inheritdoc}

#### Returns

`Promise`<`string`\>

The AVH git flow version.

#### Implementation of

[GitFlow](../interfaces/api.GitFlow.md).[version](../interfaces/api.GitFlow.md#version)

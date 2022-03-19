[gitex-flow](../README.md) / [gflow](../modules/gflow.md) / GFlow

# Class: GFlow

[gflow](../modules/gflow.md).GFlow

GitFlow wrapper extending functionality to a common git flow implementation.

## Implements

- [`GitFlow`](../interfaces/api.GitFlow.md)

## Table of contents

### Constructors

- [constructor](gflow.GFlow.md#constructor)

### Properties

- [bugfix](gflow.GFlow.md#bugfix)
- [config](gflow.GFlow.md#config)
- [feature](gflow.GFlow.md#feature)
- [hotfix](gflow.GFlow.md#hotfix)
- [options](gflow.GFlow.md#options)
- [release](gflow.GFlow.md#release)
- [support](gflow.GFlow.md#support)

### Methods

- [init](gflow.GFlow.md#init)
- [version](gflow.GFlow.md#version)

## Constructors

### constructor

• **new GFlow**(`gitFlow`, `options?`)

Initializes a new instance of this class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gitFlow` | [`GitFlow`](../interfaces/api.GitFlow.md) | GitFlow implementation. |
| `options?` | [`GFlowConfig`](../interfaces/configs.GFlowConfig.md) | Options for configuring the GFlow. |

## Properties

### bugfix

• **bugfix**: [`GitFlowBranch`](../interfaces/api.GitFlowBranch.md)

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

• **feature**: [`GitFlowBranch`](../interfaces/api.GitFlowBranch.md)

Provides functionality of feature branches.

#### Implementation of

[GitFlow](../interfaces/api.GitFlow.md).[feature](../interfaces/api.GitFlow.md#feature)

___

### hotfix

• **hotfix**: [`GitFlowBranch`](../interfaces/api.GitFlowBranch.md)

Provides functionality of hotfix branches.

#### Implementation of

[GitFlow](../interfaces/api.GitFlow.md).[hotfix](../interfaces/api.GitFlow.md#hotfix)

___

### options

• `Protected` `Readonly` **options**: [`GFlowConfig`](../interfaces/configs.GFlowConfig.md)

___

### release

• **release**: [`GitFlowBranch`](../interfaces/api.GitFlowBranch.md)

Provides functionality of release branches.

#### Implementation of

[GitFlow](../interfaces/api.GitFlow.md).[release](../interfaces/api.GitFlow.md#release)

___

### support

• **support**: [`GitFlowBranch`](../interfaces/api.GitFlowBranch.md)

Provides functionality of support branches.

#### Implementation of

[GitFlow](../interfaces/api.GitFlow.md).[support](../interfaces/api.GitFlow.md#support)

## Methods

### init

▸ **init**(`config?`, `force?`): `Promise`<`void`\>

Setup a git repository for git flow usage.

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

Provides the version of the git flow implementation.

#### Returns

`Promise`<`string`\>

The version of git flow.

#### Implementation of

[GitFlow](../interfaces/api.GitFlow.md).[version](../interfaces/api.GitFlow.md#version)

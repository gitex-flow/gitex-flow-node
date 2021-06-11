[gitex-flow](../README.md) / [gflow](../modules/gflow.md) / GFlow

# Class: GFlow

[gflow](../modules/gflow.md).GFlow

GitFlow wrapper extending functionality to a common git flow implementation.

## Implements

- [GitFlow](../interfaces/api.gitflow.md)

## Table of contents

### Constructors

- [constructor](gflow.gflow-1.md#constructor)

### Properties

- [bugfix](gflow.gflow-1.md#bugfix)
- [config](gflow.gflow-1.md#config)
- [feature](gflow.gflow-1.md#feature)
- [hotfix](gflow.gflow-1.md#hotfix)
- [options](gflow.gflow-1.md#options)
- [release](gflow.gflow-1.md#release)
- [support](gflow.gflow-1.md#support)

### Methods

- [init](gflow.gflow-1.md#init)
- [version](gflow.gflow-1.md#version)

## Constructors

### constructor

• **new GFlow**(`gitFlow`, `options?`)

Initializes a new instance of this class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gitFlow` | [GitFlow](../interfaces/api.gitflow.md) | GitFlow implementation. |
| `options?` | [GFlowConfig](../interfaces/configs.gflowconfig.md) | Options for configuring the GFlow. |

## Properties

### bugfix

• **bugfix**: [GitFlowBranch](../interfaces/api.gitflowbranch.md)

Provides functionality of bugfix branches.

#### Implementation of

[GitFlow](../interfaces/api.gitflow.md).[bugfix](../interfaces/api.gitflow.md#bugfix)

___

### config

• `Readonly` **config**: [ConfigProvider](../interfaces/api.configprovider.md)<[GitFlowConfig](../interfaces/configs.gitflowconfig.md)\>

Provides functionality to get and set the git flow configuration.

#### Implementation of

[GitFlow](../interfaces/api.gitflow.md).[config](../interfaces/api.gitflow.md#config)

___

### feature

• **feature**: [GitFlowBranch](../interfaces/api.gitflowbranch.md)

Provides functionality of feature branches.

#### Implementation of

[GitFlow](../interfaces/api.gitflow.md).[feature](../interfaces/api.gitflow.md#feature)

___

### hotfix

• **hotfix**: [GitFlowBranch](../interfaces/api.gitflowbranch.md)

Provides functionality of hotfix branches.

#### Implementation of

[GitFlow](../interfaces/api.gitflow.md).[hotfix](../interfaces/api.gitflow.md#hotfix)

___

### options

• `Protected` `Readonly` **options**: [GFlowConfig](../interfaces/configs.gflowconfig.md)

___

### release

• **release**: [GitFlowBranch](../interfaces/api.gitflowbranch.md)

Provides functionality of release branches.

#### Implementation of

[GitFlow](../interfaces/api.gitflow.md).[release](../interfaces/api.gitflow.md#release)

___

### support

• **support**: [GitFlowBranch](../interfaces/api.gitflowbranch.md)

Provides functionality of support branches.

#### Implementation of

[GitFlow](../interfaces/api.gitflow.md).[support](../interfaces/api.gitflow.md#support)

## Methods

### init

▸ **init**(`config?`, `force?`): `Promise`<void\>

Setup a git repository for git flow usage.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | [GitFlowConfig](../interfaces/configs.gitflowconfig.md) | The git flow configuration. |
| `force?` | `boolean` | Force reinitialisation if git flow already initialized. |

#### Returns

`Promise`<void\>

#### Implementation of

[GitFlow](../interfaces/api.gitflow.md).[init](../interfaces/api.gitflow.md#init)

___

### version

▸ **version**(): `Promise`<string\>

Provides the version of the git flow implementation.

#### Returns

`Promise`<string\>

The version of git flow.

#### Implementation of

[GitFlow](../interfaces/api.gitflow.md).[version](../interfaces/api.gitflow.md#version)

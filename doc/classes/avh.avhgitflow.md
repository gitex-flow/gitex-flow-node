[gitex-flow](../README.md) / [avh](../modules/avh.md) / AvhGitFlow

# Class: AvhGitFlow

[avh](../modules/avh.md).AvhGitFlow

Implementation of git flow by [gitflow-avh](https://github.com/petervanderdoes/gitflow-avh).

## Implements

- [GitFlow](../interfaces/api.gitflow.md)

## Table of contents

### Constructors

- [constructor](avh.avhgitflow.md#constructor)

### Properties

- [bugfix](avh.avhgitflow.md#bugfix)
- [config](avh.avhgitflow.md#config)
- [feature](avh.avhgitflow.md#feature)
- [hotfix](avh.avhgitflow.md#hotfix)
- [release](avh.avhgitflow.md#release)
- [support](avh.avhgitflow.md#support)

### Methods

- [init](avh.avhgitflow.md#init)
- [version](avh.avhgitflow.md#version)

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

• `Readonly` **bugfix**: [GitFlowBranch](../interfaces/api.gitflowbranch.md)

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

• `Readonly` **feature**: [GitFlowBranch](../interfaces/api.gitflowbranch.md)

Provides functionality of feature branches.

#### Implementation of

[GitFlow](../interfaces/api.gitflow.md).[feature](../interfaces/api.gitflow.md#feature)

___

### hotfix

• `Readonly` **hotfix**: [GitFlowBranch](../interfaces/api.gitflowbranch.md)

Provides functionality of hotfix branches.

#### Implementation of

[GitFlow](../interfaces/api.gitflow.md).[hotfix](../interfaces/api.gitflow.md#hotfix)

___

### release

• `Readonly` **release**: [GitFlowBranch](../interfaces/api.gitflowbranch.md)

Provides functionality of release branches.

#### Implementation of

[GitFlow](../interfaces/api.gitflow.md).[release](../interfaces/api.gitflow.md#release)

___

### support

• `Readonly` **support**: [GitFlowBranch](../interfaces/api.gitflowbranch.md)

Provides functionality of support branches.

#### Implementation of

[GitFlow](../interfaces/api.gitflow.md).[support](../interfaces/api.gitflow.md#support)

## Methods

### init

▸ **init**(`config?`, `force?`): `Promise`<void\>

{@inheritdoc}

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

{@inheritdoc}

#### Returns

`Promise`<string\>

The AVH git flow version.

#### Implementation of

[GitFlow](../interfaces/api.gitflow.md).[version](../interfaces/api.gitflow.md#version)

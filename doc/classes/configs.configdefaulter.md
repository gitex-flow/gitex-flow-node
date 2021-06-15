[gitex-flow](../README.md) / [configs](../modules/configs.md) / ConfigDefaulter

# Class: ConfigDefaulter

[configs](../modules/configs.md).ConfigDefaulter

Sets the defaults of the different kinds of configurations.

## Table of contents

### Constructors

- [constructor](configs.configdefaulter.md#constructor)

### Properties

- [DefaultBumpVersionFiles](configs.configdefaulter.md#defaultbumpversionfiles)
- [DefaultConventionalCommit](configs.configdefaulter.md#defaultconventionalcommit)
- [DefaultVersionFile](configs.configdefaulter.md#defaultversionfile)

### Methods

- [ensureGFlowConfigDefaults](configs.configdefaulter.md#ensuregflowconfigdefaults)
- [ensureGitFlowConfigDefaults](configs.configdefaulter.md#ensuregitflowconfigdefaults)
- [ensureProjectConfigDefaults](configs.configdefaulter.md#ensureprojectconfigdefaults)

## Constructors

### constructor

• **new ConfigDefaulter**()

## Properties

### DefaultBumpVersionFiles

▪ `Static` `Readonly` **DefaultBumpVersionFiles**: `string`[]

___

### DefaultConventionalCommit

▪ `Static` `Readonly` **DefaultConventionalCommit**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `noteKeywords` | `string`[] |
| `referenceActions` | `string`[] |

___

### DefaultVersionFile

▪ `Static` `Readonly` **DefaultVersionFile**: ``"package.json"``

## Methods

### ensureGFlowConfigDefaults

▸ `Static` **ensureGFlowConfigDefaults**(`config?`): [GFlowConfig](../interfaces/configs.gflowconfig.md)

Ensures the defaults of the GFlow configuration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | [GFlowConfig](../interfaces/configs.gflowconfig.md) | The GFlow configuration should be extended with its defaults. |

#### Returns

[GFlowConfig](../interfaces/configs.gflowconfig.md)

The extended GFlow configuration with its defaults.

___

### ensureGitFlowConfigDefaults

▸ `Static` **ensureGitFlowConfigDefaults**(`config?`): [GitFlowConfig](../interfaces/configs.gitflowconfig.md)

Ensures the defaults of the git flow configuration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | [GitFlowConfig](../interfaces/configs.gitflowconfig.md) | The git flow configuration should be extended with its defaults. |

#### Returns

[GitFlowConfig](../interfaces/configs.gitflowconfig.md)

The extended git flow configuration with its defaults.

___

### ensureProjectConfigDefaults

▸ `Static` **ensureProjectConfigDefaults**(`config?`): [ProjectConfig](../interfaces/configs.projectconfig.md)

Ensures the defaults of the project configuration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | [ProjectConfig](../interfaces/configs.projectconfig.md) | The project configuration should be extended with its defaults. |

#### Returns

[ProjectConfig](../interfaces/configs.projectconfig.md)

The extended project configuration with its defaults.

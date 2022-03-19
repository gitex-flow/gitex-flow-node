[gitex-flow](../README.md) / [configs](../modules/configs.md) / ConfigDefaulter

# Class: ConfigDefaulter

[configs](../modules/configs.md).ConfigDefaulter

Sets the defaults of the different kinds of configurations.

## Table of contents

### Constructors

- [constructor](configs.ConfigDefaulter.md#constructor)

### Properties

- [DefaultBumpVersionFiles](configs.ConfigDefaulter.md#defaultbumpversionfiles)
- [DefaultConventionalCommit](configs.ConfigDefaulter.md#defaultconventionalcommit)
- [DefaultVersionFile](configs.ConfigDefaulter.md#defaultversionfile)

### Methods

- [ensureGFlowConfigDefaults](configs.ConfigDefaulter.md#ensuregflowconfigdefaults)
- [ensureGitFlowConfigDefaults](configs.ConfigDefaulter.md#ensuregitflowconfigdefaults)
- [ensureProjectConfigDefaults](configs.ConfigDefaulter.md#ensureprojectconfigdefaults)

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

▸ `Static` **ensureGFlowConfigDefaults**(`config?`): [`GFlowConfig`](../interfaces/configs.GFlowConfig.md)

Ensures the defaults of the GFlow configuration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | [`GFlowConfig`](../interfaces/configs.GFlowConfig.md) | The GFlow configuration should be extended with its defaults. |

#### Returns

[`GFlowConfig`](../interfaces/configs.GFlowConfig.md)

The extended GFlow configuration with its defaults.

___

### ensureGitFlowConfigDefaults

▸ `Static` **ensureGitFlowConfigDefaults**(`config?`): [`GitFlowConfig`](../interfaces/configs.GitFlowConfig.md)

Ensures the defaults of the git flow configuration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | [`GitFlowConfig`](../interfaces/configs.GitFlowConfig.md) | The git flow configuration should be extended with its defaults. |

#### Returns

[`GitFlowConfig`](../interfaces/configs.GitFlowConfig.md)

The extended git flow configuration with its defaults.

___

### ensureProjectConfigDefaults

▸ `Static` **ensureProjectConfigDefaults**(`config?`): [`ProjectConfig`](../interfaces/configs.ProjectConfig.md)

Ensures the defaults of the project configuration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config?` | [`ProjectConfig`](../interfaces/configs.ProjectConfig.md) | The project configuration should be extended with its defaults. |

#### Returns

[`ProjectConfig`](../interfaces/configs.ProjectConfig.md)

The extended project configuration with its defaults.

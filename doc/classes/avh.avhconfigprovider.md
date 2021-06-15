[gitex-flow](../README.md) / [avh](../modules/avh.md) / AvhConfigProvider

# Class: AvhConfigProvider

[avh](../modules/avh.md).AvhConfigProvider

AVH Configuration provider.

## Implements

- [ConfigProvider](../interfaces/api.configprovider.md)<[GitFlowConfig](../interfaces/configs.gitflowconfig.md)\>

## Table of contents

### Constructors

- [constructor](avh.avhconfigprovider.md#constructor)

### Methods

- [get](avh.avhconfigprovider.md#get)
- [set](avh.avhconfigprovider.md#set)

## Constructors

### constructor

• **new AvhConfigProvider**(`repoPath?`)

Initializes a new instance of this class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `repoPath?` | `string` | The path to the git repository. |

## Methods

### get

▸ **get**(): `Promise`<[GitFlowConfig](../interfaces/configs.gitflowconfig.md)\>

{@inheritdoc}

#### Returns

`Promise`<[GitFlowConfig](../interfaces/configs.gitflowconfig.md)\>

The git flow configuration.

#### Implementation of

[ConfigProvider](../interfaces/api.configprovider.md).[get](../interfaces/api.configprovider.md#get)

___

### set

▸ **set**(`config`): `Promise`<void\>

{@inheritdoc}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [GitFlowConfig](../interfaces/configs.gitflowconfig.md) | Git flow config to be set. |

#### Returns

`Promise`<void\>

#### Implementation of

[ConfigProvider](../interfaces/api.configprovider.md).[set](../interfaces/api.configprovider.md#set)

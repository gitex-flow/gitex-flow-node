[gitex-flow](../README.md) / [avh](../modules/avh.md) / AvhConfigProvider

# Class: AvhConfigProvider

[avh](../modules/avh.md).AvhConfigProvider

AVH Configuration provider.

## Implements

- [`ConfigProvider`](../interfaces/api.ConfigProvider.md)<[`GitFlowConfig`](../interfaces/configs.GitFlowConfig.md)\>

## Table of contents

### Constructors

- [constructor](avh.AvhConfigProvider.md#constructor)

### Methods

- [get](avh.AvhConfigProvider.md#get)
- [set](avh.AvhConfigProvider.md#set)

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

▸ **get**(): `Promise`<[`GitFlowConfig`](../interfaces/configs.GitFlowConfig.md)\>

{@inheritdoc}

#### Returns

`Promise`<[`GitFlowConfig`](../interfaces/configs.GitFlowConfig.md)\>

The git flow configuration.

#### Implementation of

[ConfigProvider](../interfaces/api.ConfigProvider.md).[get](../interfaces/api.ConfigProvider.md#get)

___

### set

▸ **set**(`config`): `Promise`<`void`\>

{@inheritdoc}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`GitFlowConfig`](../interfaces/configs.GitFlowConfig.md) | Git flow config to be set. |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ConfigProvider](../interfaces/api.ConfigProvider.md).[set](../interfaces/api.ConfigProvider.md#set)

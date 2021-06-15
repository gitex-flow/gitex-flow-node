[gitex-flow](../README.md) / [api](../modules/api.md) / ConfigProvider

# Interface: ConfigProvider<T\>

[api](../modules/api.md).ConfigProvider

Configuration provider.

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [AvhConfigProvider](../classes/avh.avhconfigprovider.md)

## Table of contents

### Methods

- [get](api.configprovider.md#get)
- [set](api.configprovider.md#set)

## Methods

### get

▸ **get**(): `Promise`<T\>

Gets the current configuration.

#### Returns

`Promise`<T\>

___

### set

▸ **set**(`config`): `Promise`<void\>

Sets a new configuarion.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `T` | Configuration to be set. |

#### Returns

`Promise`<void\>

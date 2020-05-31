[g-flow](../README.md) › [api](../modules/api.md) › [ConfigProvider](api.configprovider.md)

# Interface: ConfigProvider <**T**>

Configuration provider.

## Type parameters

▪ **T**

## Hierarchy

* **ConfigProvider**

## Implemented by

* [AvhConfigProvider](../classes/avh.avhconfigprovider.md)

## Index

### Methods

* [get](api.configprovider.md#get)
* [set](api.configprovider.md#set)

## Methods

###  get

▸ **get**(): *Promise‹T›*

Gets the current configuration.

**Returns:** *Promise‹T›*

___

###  set

▸ **set**(`config`: T): *Promise‹void›*

Sets a new configuarion.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`config` | T | Configuration to be set.  |

**Returns:** *Promise‹void›*

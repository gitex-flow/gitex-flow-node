[g-flow](../README.md) › [avh](../modules/avh.md) › [AvhConfigProvider](avh.avhconfigprovider.md)

# Class: AvhConfigProvider

AVH Configuration provider.

## Hierarchy

* **AvhConfigProvider**

## Implements

* [ConfigProvider](../interfaces/api.configprovider.md)‹[GitFlowConfig](../interfaces/api.gitflowconfig.md)›

## Index

### Constructors

* [constructor](avh.avhconfigprovider.md#constructor)

### Methods

* [get](avh.avhconfigprovider.md#get)
* [set](avh.avhconfigprovider.md#set)

## Constructors

###  constructor

\+ **new AvhConfigProvider**(`repoPath?`: undefined | string): *[AvhConfigProvider](avh.avhconfigprovider.md)*

Initializes a new instance of this class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`repoPath?` | undefined &#124; string | The path to the git repository.  |

**Returns:** *[AvhConfigProvider](avh.avhconfigprovider.md)*

## Methods

###  get

▸ **get**(): *Promise‹[GitFlowConfig](../interfaces/api.gitflowconfig.md)›*

*Implementation of [ConfigProvider](../interfaces/api.configprovider.md)*

{@inheritdoc}

**Returns:** *Promise‹[GitFlowConfig](../interfaces/api.gitflowconfig.md)›*

___

###  set

▸ **set**(`config`: [GitFlowConfig](../interfaces/api.gitflowconfig.md)): *Promise‹void›*

{@inheritdoc}

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`config` | [GitFlowConfig](../interfaces/api.gitflowconfig.md) | Git flow config to be set.  |

**Returns:** *Promise‹void›*

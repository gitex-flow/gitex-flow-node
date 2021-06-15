[gitex-flow](../README.md) / [tools](../modules/tools.md) / GFlowConfigLoader

# Class: GFlowConfigLoader

[tools](../modules/tools.md).GFlowConfigLoader

Loader of the GFlow config file.

## Table of contents

### Constructors

- [constructor](tools.gflowconfigloader.md#constructor)

### Methods

- [load](tools.gflowconfigloader.md#load)

## Constructors

### constructor

• **new GFlowConfigLoader**()

## Methods

### load

▸ `Static` **load**(`projectPath?`): `undefined` \| [GFlowConfig](../interfaces/configs.gflowconfig.md)

Loads the gitex configuration file if exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `projectPath?` | `string` | The path to the repository. (default: process.cwd()) |

#### Returns

`undefined` \| [GFlowConfig](../interfaces/configs.gflowconfig.md)

The configuration from file if it exists.

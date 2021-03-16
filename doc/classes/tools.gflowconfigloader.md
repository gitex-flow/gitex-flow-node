[gitex-flow](../README.md) › [tools](../modules/tools.md) › [GFlowConfigLoader](tools.gflowconfigloader.md)

# Class: GFlowConfigLoader

Loader of the GFlow config file.

## Hierarchy

* **GFlowConfigLoader**

## Index

### Methods

* [load](tools.gflowconfigloader.md#static-load)

## Methods

### `Static` load

▸ **load**(`projectPath?`: undefined | string): *[GFlowConfig](../interfaces/configs.gflowconfig.md) | undefined*

Loads the gitex configuration file if exists.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`projectPath?` | undefined &#124; string | The path to the repository. (default: process.cwd())  |

**Returns:** *[GFlowConfig](../interfaces/configs.gflowconfig.md) | undefined*

The configuration from file if it exists.

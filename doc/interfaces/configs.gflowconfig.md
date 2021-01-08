[gitex-flow](../README.md) › [configs](../modules/configs.md) › [GFlowConfig](configs.gflowconfig.md)

# Interface: GFlowConfig

Options of the GFlow implementation.

## Hierarchy

* **GFlowConfig**

## Index

### Properties

* [gitFlowConfig](configs.gflowconfig.md#optional-gitflowconfig)
* [log4jsConfig](configs.gflowconfig.md#optional-log4jsconfig)
* [projectConfig](configs.gflowconfig.md#optional-projectconfig)

## Properties

### `Optional` gitFlowConfig

• **gitFlowConfig**? : *[GitFlowConfig](configs.gitflowconfig.md)*

The git flow config can be directly set in the GFlow options.
This config will be taken if no other git flow config is given on calling the `init` method.

___

### `Optional` log4jsConfig

• **log4jsConfig**? : *[Log4jsConfig](../modules/configs.md#log4jsconfig)*

The log4js configuration.
For more information see https://log4js-node.github.io/log4js-node/api.html.

___

### `Optional` projectConfig

• **projectConfig**? : *[ProjectConfig](configs.projectconfig.md)*

The configuration of the node project.

[gitex-flow](../README.md) › [gflow](../modules/gflow.md) › [GFlowConfig](gflow.gflowconfig.md)

# Interface: GFlowConfig

Options of the GFlow implementation.

## Hierarchy

* **GFlowConfig**

## Index

### Properties

* [gitFlowConfig](gflow.gflowconfig.md#optional-gitflowconfig)
* [log4jsConfig](gflow.gflowconfig.md#optional-log4jsconfig)
* [projectConfig](gflow.gflowconfig.md#optional-projectconfig)

## Properties

### `Optional` gitFlowConfig

• **gitFlowConfig**? : *[GitFlowConfig](api.gitflowconfig.md)*

The git flow config can be directly set in the GFlow options.
This config will be taken if no other git flow config is given on calling the `init` method.

___

### `Optional` log4jsConfig

• **log4jsConfig**? : *[Log4jsConfig](../modules/gflow.md#log4jsconfig)*

The log4js configuration.
For more information see https://log4js-node.github.io/log4js-node/api.html.

___

### `Optional` projectConfig

• **projectConfig**? : *[ProjectConfig](tools.projectconfig.md)*

The configuration of the node project.

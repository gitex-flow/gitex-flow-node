[gitex-flow](../README.md) / [configs](../modules/configs.md) / GFlowConfig

# Interface: GFlowConfig

[configs](../modules/configs.md).GFlowConfig

Options of the GFlow implementation.

## Table of contents

### Properties

- [gitFlowConfig](configs.GFlowConfig.md#gitflowconfig)
- [log4jsConfig](configs.GFlowConfig.md#log4jsconfig)
- [projectConfig](configs.GFlowConfig.md#projectconfig)

## Properties

### gitFlowConfig

• `Optional` **gitFlowConfig**: [`GitFlowConfig`](configs.GitFlowConfig.md)

The git flow config can be directly set in the GFlow options.
This config will be taken if no other git flow config is given on calling the `init` method.

___

### log4jsConfig

• `Optional` **log4jsConfig**: `Configuration`

The log4js configuration.
For more information see https://log4js-node.github.io/log4js-node/api.html.

___

### projectConfig

• `Optional` **projectConfig**: [`ProjectConfig`](configs.ProjectConfig.md)

The configuration of the node project.

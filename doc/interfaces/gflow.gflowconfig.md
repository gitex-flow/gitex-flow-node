[gitex-flow](../README.md) › [gflow](../modules/gflow.md) › [GFlowConfig](gflow.gflowconfig.md)

# Interface: GFlowConfig

Options of the GFlow implementation.

## Hierarchy

* **GFlowConfig**

## Index

### Properties

* [gitFlowConfig](gflow.gflowconfig.md#optional-gitflowconfig)
* [projectConfig](gflow.gflowconfig.md#projectconfig)

## Properties

### `Optional` gitFlowConfig

• **gitFlowConfig**? : *[GitFlowConfig](api.gitflowconfig.md)*

The git flow config can be directly set in the GFlow options.
This config will be taken if no other git flow config is given on calling the `init` method.

___

###  projectConfig

• **projectConfig**: *[ProjectConfig](tools.projectconfig.md)*

The configuration of the node project.

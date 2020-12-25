[gitex-flow](../README.md) › [tools](../modules/tools.md) › [Utils](tools.utils.md)

# Class: Utils

Provides some utility functions.

## Hierarchy

* **Utils**

## Index

### Methods

* [exec](tools.utils.md#static-exec)
* [getCurrDate](tools.utils.md#static-getcurrdate)
* [printBranches](tools.utils.md#static-printbranches)

## Methods

### `Static` exec

▸ **exec**(`command`: function): *Promise‹void›*

Executes a command and suppresses errors if they are thrown.

**Parameters:**

▪ **command**: *function*

Command to be executed.

▸ (): *Promise‹string | void›*

**Returns:** *Promise‹void›*

___

### `Static` getCurrDate

▸ **getCurrDate**(): *string*

Gets the current date formatted as yyyy-mm-dd.

**Returns:** *string*

date in fomat yyyy-mm-dd.

___

### `Static` printBranches

▸ **printBranches**(`gitFlowBranch`: [GitFlowBranch](../interfaces/api.gitflowbranch.md)): *Promise‹void›*

Prints the branches to the console.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gitFlowBranch` | [GitFlowBranch](../interfaces/api.gitflowbranch.md) | The branch type to be printed.  |

**Returns:** *Promise‹void›*

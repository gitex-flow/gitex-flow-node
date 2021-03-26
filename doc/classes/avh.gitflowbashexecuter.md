[gitex-flow](../README.md) / [avh](../modules/avh.md) / GitFlowBashExecuter

# Class: GitFlowBashExecuter

[avh](../modules/avh.md).GitFlowBashExecuter

Executer for git flow commands via command line.

## Table of contents

### Constructors

- [constructor](avh.gitflowbashexecuter.md#constructor)

### Methods

- [execute](avh.gitflowbashexecuter.md#execute)

## Constructors

### constructor

\+ **new GitFlowBashExecuter**(): [*GitFlowBashExecuter*](avh.gitflowbashexecuter.md)

**Returns:** [*GitFlowBashExecuter*](avh.gitflowbashexecuter.md)

## Methods

### execute

▸ `Static`**execute**(`args`: [*GitFlowCommandArgs*](../interfaces/avh.gitflowcommandargs.md)): *Promise*<string\>

Executes the a git flow command via command line.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`args` | [*GitFlowCommandArgs*](../interfaces/avh.gitflowcommandargs.md) | Arguments for git flow command execution.    |

**Returns:** *Promise*<string\>

The result of the executed command.

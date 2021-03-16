[gitex-flow](../README.md) › [tools](../modules/tools.md) › [Utils](tools.utils.md)

# Class: Utils

Provides some utility functions.

## Hierarchy

* **Utils**

## Index

### Methods

* [deriveChangelogConfig](tools.utils.md#static-derivechangelogconfig)
* [exec](tools.utils.md#static-exec)
* [getCurrDate](tools.utils.md#static-getcurrdate)
* [parseConventionalCommits](tools.utils.md#static-parseconventionalcommits)
* [parseConventionalCommitsViaPipe](tools.utils.md#static-parseconventionalcommitsviapipe)
* [pipe](tools.utils.md#static-pipe)
* [printBranches](tools.utils.md#static-printbranches)
* [printConfig](tools.utils.md#static-printconfig)

## Methods

### `Static` deriveChangelogConfig

▸ **deriveChangelogConfig**(`projectConfig?`: [ProjectConfig](../interfaces/configs.projectconfig.md)): *[ChangelogConfig](../interfaces/configs.changelogconfig.md)*

Derives the [ChangelogConfig](../interfaces/configs.changelogconfig.md) from a given [projectConfig](../interfaces/configs.gflowconfig.md#optional-projectconfig).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`projectConfig?` | [ProjectConfig](../interfaces/configs.projectconfig.md) | The project configuration.  |

**Returns:** *[ChangelogConfig](../interfaces/configs.changelogconfig.md)*

The derived changelog config.

___

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

### `Static` parseConventionalCommits

▸ **parseConventionalCommits**(`commitMessages`: string[], `conventionalCommitConfig?`: [ConventionalCommitConfig](../modules/configs.md#conventionalcommitconfig)): *Promise‹[GitLog](../interfaces/git.gitlog.md)[]›*

Parses conventional commit messages to a [GitLog](../interfaces/git.gitlog.md) array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`commitMessages` | string[] | The commit messages. |
`conventionalCommitConfig?` | [ConventionalCommitConfig](../modules/configs.md#conventionalcommitconfig) | The configuration of the conventional commit parser. |

**Returns:** *Promise‹[GitLog](../interfaces/git.gitlog.md)[]›*

The parsed conventional commit messages as an array of [[GitLogs]].

___

### `Static` parseConventionalCommitsViaPipe

▸ **parseConventionalCommitsViaPipe**(`conventionalCommitConfig?`: [ConventionalCommitConfig](../modules/configs.md#conventionalcommitconfig)): *Transform*

Parses conventional commit messages via a stream.Transform pipe.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`conventionalCommitConfig?` | [ConventionalCommitConfig](../modules/configs.md#conventionalcommitconfig) | The configuration of the conventional commit parser. |

**Returns:** *Transform*

The parsed conventional commit messages as transformed stream.

___

### `Static` pipe

▸ **pipe**(`src`: Readable, `dest`: Writable, `destroy`: boolean): *Promise‹void›*

Pipes a readable stream asynchrounously to a writable stream with error handling.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`src` | Readable | - | The readable source stream. |
`dest` | Writable | - | The writable destination stream. |
`destroy` | boolean | true | Specifies if the streams should be destroyed on finish.  |

**Returns:** *Promise‹void›*

Promise on copying stream properly.

___

### `Static` printBranches

▸ **printBranches**(`gitFlowBranch`: [GitFlowBranch](../interfaces/api.gitflowbranch.md)): *Promise‹void›*

Prints the branches to the console.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gitFlowBranch` | [GitFlowBranch](../interfaces/api.gitflowbranch.md) | The branch type to be printed.  |

**Returns:** *Promise‹void›*

___

### `Static` printConfig

▸ **printConfig**(`gitFlow`: [GFlow](gflow.gflow-1.md)): *Promise‹void›*

Prints the config to the console.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gitFlow` | [GFlow](gflow.gflow-1.md) | The git flow instance the config should be printed.  |

**Returns:** *Promise‹void›*

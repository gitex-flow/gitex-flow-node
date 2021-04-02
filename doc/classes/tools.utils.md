[gitex-flow](../README.md) / [tools](../modules/tools.md) / Utils

# Class: Utils

[tools](../modules/tools.md).Utils

Provides some utility functions.

## Table of contents

### Constructors

- [constructor](tools.utils.md#constructor)

### Methods

- [deriveChangelogConfig](tools.utils.md#derivechangelogconfig)
- [exec](tools.utils.md#exec)
- [getCurrDate](tools.utils.md#getcurrdate)
- [parseConventionalCommits](tools.utils.md#parseconventionalcommits)
- [parseConventionalCommitsViaPipe](tools.utils.md#parseconventionalcommitsviapipe)
- [pipe](tools.utils.md#pipe)
- [printBranches](tools.utils.md#printbranches)
- [printConfig](tools.utils.md#printconfig)

## Constructors

### constructor

\+ **new Utils**(): [*Utils*](tools.utils.md)

**Returns:** [*Utils*](tools.utils.md)

## Methods

### deriveChangelogConfig

▸ `Static`**deriveChangelogConfig**(`projectConfig?`: [*ProjectConfig*](../interfaces/configs.projectconfig.md)): [*ChangelogConfig*](../modules/configs.md#changelogconfig)<Record<string, unknown\>\>

Derives the [ChangelogConfig](../modules/configs.md#changelogconfig) from a given [projectConfig](../interfaces/configs.gflowconfig.md#projectconfig).

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`projectConfig?` | [*ProjectConfig*](../interfaces/configs.projectconfig.md) | The project configuration.    |

**Returns:** [*ChangelogConfig*](../modules/configs.md#changelogconfig)<Record<string, unknown\>\>

The derived changelog config.

___

### exec

▸ `Static`**exec**(`command`: () => *Promise*<string \| void\>): *Promise*<void\>

Executes a command and suppresses errors if they are thrown.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`command` | () => *Promise*<string \| void\> | Command to be executed.    |

**Returns:** *Promise*<void\>

___

### getCurrDate

▸ `Static`**getCurrDate**(): *string*

Gets the current date formatted as yyyy-mm-dd.

**Returns:** *string*

date in fomat yyyy-mm-dd.

___

### parseConventionalCommits

▸ `Static`**parseConventionalCommits**(`commitMessages`: *string*[], `conventionalCommitConfig?`: Options): *Promise*<[*GitLog*](../interfaces/git.gitlog.md)[]\>

Parses conventional commit messages to a [GitLog](../interfaces/git.gitlog.md) array.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`commitMessages` | *string*[] | The commit messages.   |
`conventionalCommitConfig?` | Options | The configuration of the conventional commit parser.   |

**Returns:** *Promise*<[*GitLog*](../interfaces/git.gitlog.md)[]\>

The parsed conventional commit messages as an array of [[GitLogs]].

___

### parseConventionalCommitsViaPipe

▸ `Static`**parseConventionalCommitsViaPipe**(`conventionalCommitConfig?`: Options): *Transform*

Parses conventional commit messages via a stream.Transform pipe.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`conventionalCommitConfig?` | Options | The configuration of the conventional commit parser.   |

**Returns:** *Transform*

The parsed conventional commit messages as transformed stream.

___

### pipe

▸ `Static`**pipe**(`src`: *Readable*, `dest`: *Writable*, `destroy?`: *boolean*): *Promise*<void\>

Pipes a readable stream asynchrounously to a writable stream with error handling.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`src` | *Readable* | - | The readable source stream.   |
`dest` | *Writable* | - | The writable destination stream.   |
`destroy` | *boolean* | true | Specifies if the streams should be destroyed on finish.    |

**Returns:** *Promise*<void\>

Promise on copying stream properly.

___

### printBranches

▸ `Static`**printBranches**(`gitFlowBranch`: [*GitFlowBranch*](../interfaces/api.gitflowbranch.md)): *Promise*<void\>

Prints the branches to the console.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`gitFlowBranch` | [*GitFlowBranch*](../interfaces/api.gitflowbranch.md) | The branch type to be printed.    |

**Returns:** *Promise*<void\>

___

### printConfig

▸ `Static`**printConfig**(`gitFlow`: [*GFlow*](gflow.gflow-1.md)): *Promise*<void\>

Prints the config to the console.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`gitFlow` | [*GFlow*](gflow.gflow-1.md) | The git flow instance the config should be printed.    |

**Returns:** *Promise*<void\>

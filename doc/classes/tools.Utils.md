[gitex-flow](../README.md) / [tools](../modules/tools.md) / Utils

# Class: Utils

[tools](../modules/tools.md).Utils

Provides some utility functions.

## Table of contents

### Constructors

- [constructor](tools.Utils.md#constructor)

### Methods

- [deriveChangelogConfig](tools.Utils.md#derivechangelogconfig)
- [exec](tools.Utils.md#exec)
- [getCurrDate](tools.Utils.md#getcurrdate)
- [parseConventionalCommits](tools.Utils.md#parseconventionalcommits)
- [parseConventionalCommitsViaPipe](tools.Utils.md#parseconventionalcommitsviapipe)
- [pipe](tools.Utils.md#pipe)
- [printBranches](tools.Utils.md#printbranches)
- [printConfig](tools.Utils.md#printconfig)

## Constructors

### constructor

• **new Utils**()

## Methods

### deriveChangelogConfig

▸ `Static` **deriveChangelogConfig**(`projectConfig?`): [`ChangelogConfig`](../modules/configs.md#changelogconfig)<`Record`<`string`, `unknown`\>\>

Derives the [ChangelogConfig](../modules/configs.md#changelogconfig) from a given [projectConfig](../interfaces/configs.GFlowConfig.md#projectconfig).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `projectConfig?` | [`ProjectConfig`](../interfaces/configs.ProjectConfig.md) | The project configuration. |

#### Returns

[`ChangelogConfig`](../modules/configs.md#changelogconfig)<`Record`<`string`, `unknown`\>\>

The derived changelog config.

___

### exec

▸ `Static` **exec**(`command`): `Promise`<`void`\>

Executes a command and suppresses errors if they are thrown.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | () => `Promise`<`string` \| `void`\> | Command to be executed. |

#### Returns

`Promise`<`void`\>

___

### getCurrDate

▸ `Static` **getCurrDate**(): `string`

Gets the current date formatted as yyyy-mm-dd.

#### Returns

`string`

date in fomat yyyy-mm-dd.

___

### parseConventionalCommits

▸ `Static` **parseConventionalCommits**(`commitMessages`, `conventionalCommitConfig?`): `Promise`<[`GitLog`](../interfaces/git.GitLog.md)[]\>

Parses conventional commit messages to a [GitLog](../interfaces/git.GitLog.md) array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commitMessages` | `string`[] | The commit messages. |
| `conventionalCommitConfig?` | `Options` | The configuration of the conventional commit parser. |

#### Returns

`Promise`<[`GitLog`](../interfaces/git.GitLog.md)[]\>

The parsed conventional commit messages as an array of [[GitLogs]].

___

### parseConventionalCommitsViaPipe

▸ `Static` **parseConventionalCommitsViaPipe**(`conventionalCommitConfig?`): `Transform`

Parses conventional commit messages via a stream.Transform pipe.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conventionalCommitConfig?` | `Options` | The configuration of the conventional commit parser. |

#### Returns

`Transform`

The parsed conventional commit messages as transformed stream.

___

### pipe

▸ `Static` **pipe**(`src`, `dest`, `destroy?`): `Promise`<`void`\>

Pipes a readable stream asynchrounously to a writable stream with error handling.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `src` | `Readable` | `undefined` | The readable source stream. |
| `dest` | `Writable` | `undefined` | The writable destination stream. |
| `destroy` | `boolean` | `true` | Specifies if the streams should be destroyed on finish. |

#### Returns

`Promise`<`void`\>

Promise on copying stream properly.

___

### printBranches

▸ `Static` **printBranches**(`gitFlowBranch`): `Promise`<`void`\>

Prints the branches to the console.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gitFlowBranch` | [`GitFlowBranch`](../interfaces/api.GitFlowBranch.md) | The branch type to be printed. |

#### Returns

`Promise`<`void`\>

___

### printConfig

▸ `Static` **printConfig**(`gitFlow`): `Promise`<`void`\>

Prints the config to the console.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gitFlow` | [`GFlow`](gflow.GFlow.md) | The git flow instance the config should be printed. |

#### Returns

`Promise`<`void`\>

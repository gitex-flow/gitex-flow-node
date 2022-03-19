[gitex-flow](../README.md) / [changelog](../modules/changelog.md) / ChangelogWriter

# Class: ChangelogWriter

[changelog](../modules/changelog.md).ChangelogWriter

Builder for a changelog.

## Hierarchy

- **`ChangelogWriter`**

  ↳ [`ConventionalChangelogWriter`](changelog.ConventionalChangelogWriter.md)

  ↳ [`KeepAChangelogWriter`](changelog.KeepAChangelogWriter.md)

## Table of contents

### Constructors

- [constructor](changelog.ChangelogWriter.md#constructor)

### Properties

- [DefaultChangelogFile](changelog.ChangelogWriter.md#defaultchangelogfile)

### Methods

- [createLatestChangelogStream](changelog.ChangelogWriter.md#createlatestchangelogstream)
- [mergeWithChangelog](changelog.ChangelogWriter.md#mergewithchangelog)
- [write](changelog.ChangelogWriter.md#write)
- [getLatestChangelogName](changelog.ChangelogWriter.md#getlatestchangelogname)

## Constructors

### constructor

• **new ChangelogWriter**(`options`)

Initializes a new instance of this class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`ChangelogWriterOptions`](../interfaces/changelog.ChangelogWriterOptions.md) | The options of the instance. |

## Properties

### DefaultChangelogFile

▪ `Static` `Readonly` **DefaultChangelogFile**: ``"CHANGELOG.md"``

## Methods

### createLatestChangelogStream

▸ `Protected` `Abstract` **createLatestChangelogStream**(`context`, `logs`): `Promise`<`Readable`\>

Creates a changelog stream from the commits since the last release.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | [`GitRepositoryContext`](../interfaces/git.GitRepositoryContext.md) | The context information of the git repository. |
| `logs` | [`GitLog`](../interfaces/git.GitLog.md)[] | The conventional git logs since the last release. |

#### Returns

`Promise`<`Readable`\>

___

### mergeWithChangelog

▸ `Protected` `Abstract` **mergeWithChangelog**(`latestChangelogStream`, `changelogPath`, `context?`): `Promise`<`Readable`\>

Merges a changelog stream from the commits since the last release.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `latestChangelogStream` | `Readable` | - |
| `changelogPath` | `string` | - |
| `context?` | [`GitRepositoryContext`](../interfaces/git.GitRepositoryContext.md) | The context information of the git repository. |

#### Returns

`Promise`<`Readable`\>

___

### write

▸ **write**(`context`, `logs`): `Promise`<`void`\>

Writes a changelog.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | [`GitRepositoryContext`](../interfaces/git.GitRepositoryContext.md) | The context information of the git repository. |
| `logs` | [`GitLog`](../interfaces/git.GitLog.md)[] | The conventional git logs since the last release. |

#### Returns

`Promise`<`void`\>

___

### getLatestChangelogName

▸ `Static` **getLatestChangelogName**(`changelogFileName`): `string`

Derives the name of the seperated latest changelog from the main changelog name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `changelogFileName` | `string` | The name of the main changelog. |

#### Returns

`string`

The derived name for the latest changelog.

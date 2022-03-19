[gitex-flow](../README.md) / [changelog](../modules/changelog.md) / KeepAChangelogWriter

# Class: KeepAChangelogWriter

[changelog](../modules/changelog.md).KeepAChangelogWriter

Builder for a changelog from conventional commits in [keep-a-changelog format](https://keepachangelog.com/en/1.0.0/).

## Hierarchy

- [`ChangelogWriter`](changelog.ChangelogWriter.md)

  ↳ **`KeepAChangelogWriter`**

## Table of contents

### Constructors

- [constructor](changelog.KeepAChangelogWriter.md#constructor)

### Properties

- [DefaultChangelogFile](changelog.KeepAChangelogWriter.md#defaultchangelogfile)

### Methods

- [createLatestChangelogStream](changelog.KeepAChangelogWriter.md#createlatestchangelogstream)
- [mergeWithChangelog](changelog.KeepAChangelogWriter.md#mergewithchangelog)
- [write](changelog.KeepAChangelogWriter.md#write)
- [getLatestChangelogName](changelog.KeepAChangelogWriter.md#getlatestchangelogname)

## Constructors

### constructor

• **new KeepAChangelogWriter**(`options`)

Initializes a new instance of this class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`KeepAChangelogWriterOptions`](../interfaces/changelog.KeepAChangelogWriterOptions.md) | The options of the instance. |

#### Overrides

[ChangelogWriter](changelog.ChangelogWriter.md).[constructor](changelog.ChangelogWriter.md#constructor)

## Properties

### DefaultChangelogFile

▪ `Static` `Readonly` **DefaultChangelogFile**: ``"CHANGELOG.md"``

#### Inherited from

[ChangelogWriter](changelog.ChangelogWriter.md).[DefaultChangelogFile](changelog.ChangelogWriter.md#defaultchangelogfile)

## Methods

### createLatestChangelogStream

▸ `Protected` **createLatestChangelogStream**(`context`, `logs`): `Promise`<`Readable`\>

Builds a changelog stream from the commits since the last release.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | [`GitRepositoryContext`](../interfaces/git.GitRepositoryContext.md) | The context information of the git repository. |
| `logs` | [`GitLog`](../interfaces/git.GitLog.md)[] | The conventional git logs since the last release. |

#### Returns

`Promise`<`Readable`\>

The stream of the latest changelog.

#### Overrides

[ChangelogWriter](changelog.ChangelogWriter.md).[createLatestChangelogStream](changelog.ChangelogWriter.md#createlatestchangelogstream)

___

### mergeWithChangelog

▸ `Protected` **mergeWithChangelog**(`latestChangelogStream`, `changelogPath`, `context?`): `Promise`<`Readable`\>

Merges the changelog since the latest release with the main changelog.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `latestChangelogStream` | `Readable` | The stream with the changelogs since the latest release. |
| `changelogPath` | `string` | The file path of the changelog to be merged. |
| `context?` | [`GitRepositoryContext`](../interfaces/git.GitRepositoryContext.md) | The context information of the git repository. |

#### Returns

`Promise`<`Readable`\>

The stream of the merged changelog.

#### Overrides

[ChangelogWriter](changelog.ChangelogWriter.md).[mergeWithChangelog](changelog.ChangelogWriter.md#mergewithchangelog)

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

#### Inherited from

[ChangelogWriter](changelog.ChangelogWriter.md).[write](changelog.ChangelogWriter.md#write)

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

#### Inherited from

[ChangelogWriter](changelog.ChangelogWriter.md).[getLatestChangelogName](changelog.ChangelogWriter.md#getlatestchangelogname)

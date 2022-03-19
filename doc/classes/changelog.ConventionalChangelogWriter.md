[gitex-flow](../README.md) / [changelog](../modules/changelog.md) / ConventionalChangelogWriter

# Class: ConventionalChangelogWriter

[changelog](../modules/changelog.md).ConventionalChangelogWriter

Builder for a changelog from conventional commits.

## Hierarchy

- [`ChangelogWriter`](changelog.ChangelogWriter.md)

  ↳ **`ConventionalChangelogWriter`**

## Table of contents

### Constructors

- [constructor](changelog.ConventionalChangelogWriter.md#constructor)

### Properties

- [DefaultChangelogFile](changelog.ConventionalChangelogWriter.md#defaultchangelogfile)

### Methods

- [createLatestChangelogStream](changelog.ConventionalChangelogWriter.md#createlatestchangelogstream)
- [mergeWithChangelog](changelog.ConventionalChangelogWriter.md#mergewithchangelog)
- [write](changelog.ConventionalChangelogWriter.md#write)
- [getLatestChangelogName](changelog.ConventionalChangelogWriter.md#getlatestchangelogname)

## Constructors

### constructor

• **new ConventionalChangelogWriter**(`options`)

Initializes a new instance of this class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`ConventionalChangelogWriterOptions`](../interfaces/changelog.ConventionalChangelogWriterOptions.md) | The options of the instance. |

#### Overrides

[ChangelogWriter](changelog.ChangelogWriter.md).[constructor](changelog.ChangelogWriter.md#constructor)

## Properties

### DefaultChangelogFile

▪ `Static` `Readonly` **DefaultChangelogFile**: ``"CHANGELOG.md"``

#### Inherited from

[ChangelogWriter](changelog.ChangelogWriter.md).[DefaultChangelogFile](changelog.ChangelogWriter.md#defaultchangelogfile)

## Methods

### createLatestChangelogStream

▸ `Protected` **createLatestChangelogStream**(`context`, `logs`): `Promise`<`Transform`\>

Builds a changelog stream from the commits since the last release.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | [`GitRepositoryContext`](../interfaces/git.GitRepositoryContext.md) | The context information of the git repository. |
| `logs` | [`GitLog`](../interfaces/git.GitLog.md)[] | The conventional git logs since the last release. |

#### Returns

`Promise`<`Transform`\>

The stream of the latest changelog.

#### Overrides

[ChangelogWriter](changelog.ChangelogWriter.md).[createLatestChangelogStream](changelog.ChangelogWriter.md#createlatestchangelogstream)

___

### mergeWithChangelog

▸ `Protected` **mergeWithChangelog**(`latestChangelogStream`, `changelogPath`): `Promise`<`Readable`\>

Merges the changelog since the latest release with the main changelog.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `latestChangelogStream` | `Readable` | The stream with the changelogs since the latest release. |
| `changelogPath` | `string` | The file path of the changelog to be merged. |

#### Returns

`Promise`<`Readable`\>

The stream of the merged changelogs.

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

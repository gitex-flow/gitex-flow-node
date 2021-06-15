[gitex-flow](../README.md) / [changelog](../modules/changelog.md) / ConventionalChangelogWriter

# Class: ConventionalChangelogWriter

[changelog](../modules/changelog.md).ConventionalChangelogWriter

Builder for a changelog from conventional commits.

## Hierarchy

- [ChangelogWriter](changelog.changelogwriter.md)

  ↳ **ConventionalChangelogWriter**

## Table of contents

### Constructors

- [constructor](changelog.conventionalchangelogwriter.md#constructor)

### Properties

- [DefaultChangelogFile](changelog.conventionalchangelogwriter.md#defaultchangelogfile)

### Methods

- [createLatestChangelogStream](changelog.conventionalchangelogwriter.md#createlatestchangelogstream)
- [mergeWithChangelog](changelog.conventionalchangelogwriter.md#mergewithchangelog)
- [write](changelog.conventionalchangelogwriter.md#write)
- [getLatestChangelogName](changelog.conventionalchangelogwriter.md#getlatestchangelogname)

## Constructors

### constructor

• **new ConventionalChangelogWriter**(`options`)

Initializes a new instance of this class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [ConventionalChangelogWriterOptions](../interfaces/changelog.conventionalchangelogwriteroptions.md) | The options of the instance. |

#### Overrides

[ChangelogWriter](changelog.changelogwriter.md).[constructor](changelog.changelogwriter.md#constructor)

## Properties

### DefaultChangelogFile

▪ `Static` `Readonly` **DefaultChangelogFile**: ``"CHANGELOG.md"``

#### Inherited from

[ChangelogWriter](changelog.changelogwriter.md).[DefaultChangelogFile](changelog.changelogwriter.md#defaultchangelogfile)

## Methods

### createLatestChangelogStream

▸ `Protected` **createLatestChangelogStream**(`context`, `logs`): `Promise`<Transform\>

Builds a changelog stream from the commits since the last release.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | [GitRepositoryContext](../interfaces/git.gitrepositorycontext.md) | The context information of the git repository. |
| `logs` | [GitLog](../interfaces/git.gitlog.md)[] | The conventional git logs since the last release. |

#### Returns

`Promise`<Transform\>

The stream of the latest changelog.

#### Overrides

[ChangelogWriter](changelog.changelogwriter.md).[createLatestChangelogStream](changelog.changelogwriter.md#createlatestchangelogstream)

___

### mergeWithChangelog

▸ `Protected` **mergeWithChangelog**(`latestChangelogStream`, `changelogPath`): `Promise`<Readable\>

Merges the changelog since the latest release with the main changelog.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `latestChangelogStream` | `Readable` | The stream with the changelogs since the latest release. |
| `changelogPath` | `string` | The file path of the changelog to be merged. |

#### Returns

`Promise`<Readable\>

The stream of the merged changelogs.

#### Overrides

[ChangelogWriter](changelog.changelogwriter.md).[mergeWithChangelog](changelog.changelogwriter.md#mergewithchangelog)

___

### write

▸ **write**(`context`, `logs`): `Promise`<void\>

Writes a changelog.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | [GitRepositoryContext](../interfaces/git.gitrepositorycontext.md) | The context information of the git repository. |
| `logs` | [GitLog](../interfaces/git.gitlog.md)[] | The conventional git logs since the last release. |

#### Returns

`Promise`<void\>

#### Inherited from

[ChangelogWriter](changelog.changelogwriter.md).[write](changelog.changelogwriter.md#write)

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

[ChangelogWriter](changelog.changelogwriter.md).[getLatestChangelogName](changelog.changelogwriter.md#getlatestchangelogname)

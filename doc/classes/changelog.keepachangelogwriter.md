[gitex-flow](../README.md) › [changelog](../modules/changelog.md) › [KeepAChangelogWriter](changelog.keepachangelogwriter.md)

# Class: KeepAChangelogWriter

Builder for a changelog from conventional commits in [keep-a-changelog format](https://keepachangelog.com/en/1.0.0/).

## Hierarchy

* [ChangelogWriter](changelog.changelogwriter.md)

  ↳ **KeepAChangelogWriter**

## Index

### Constructors

* [constructor](changelog.keepachangelogwriter.md#constructor)

### Properties

* [DefaultChangelogFile](changelog.keepachangelogwriter.md#static-readonly-defaultchangelogfile)

### Methods

* [createLatestChangelogStream](changelog.keepachangelogwriter.md#protected-createlatestchangelogstream)
* [mergeWithChangelog](changelog.keepachangelogwriter.md#protected-mergewithchangelog)
* [write](changelog.keepachangelogwriter.md#write)
* [getLatestChangelogName](changelog.keepachangelogwriter.md#static-getlatestchangelogname)

## Constructors

###  constructor

\+ **new KeepAChangelogWriter**(`options`: [KeepAChangelogWriterOptions](../interfaces/changelog.keepachangelogwriteroptions.md)): *[KeepAChangelogWriter](changelog.keepachangelogwriter.md)*

*Overrides [ChangelogWriter](changelog.changelogwriter.md).[constructor](changelog.changelogwriter.md#constructor)*

Initializes a new instance of this class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [KeepAChangelogWriterOptions](../interfaces/changelog.keepachangelogwriteroptions.md) | The options of the instance.  |

**Returns:** *[KeepAChangelogWriter](changelog.keepachangelogwriter.md)*

## Properties

### `Static` `Readonly` DefaultChangelogFile

▪ **DefaultChangelogFile**: *"CHANGELOG.md"* = "CHANGELOG.md"

*Inherited from [ConventionalChangelogWriter](changelog.conventionalchangelogwriter.md).[DefaultChangelogFile](changelog.conventionalchangelogwriter.md#static-readonly-defaultchangelogfile)*

## Methods

### `Protected` createLatestChangelogStream

▸ **createLatestChangelogStream**(`context`: [GitRepositoryContext](../interfaces/git.gitrepositorycontext.md), `logs`: [GitLog](../interfaces/git.gitlog.md)[]): *Promise‹Readable›*

*Overrides [ChangelogWriter](changelog.changelogwriter.md).[createLatestChangelogStream](changelog.changelogwriter.md#protected-abstract-createlatestchangelogstream)*

Builds a changelog stream from the commits since the last release.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`context` | [GitRepositoryContext](../interfaces/git.gitrepositorycontext.md) | The context information of the git repository. |
`logs` | [GitLog](../interfaces/git.gitlog.md)[] | The conventional git logs since the last release.  |

**Returns:** *Promise‹Readable›*

___

### `Protected` mergeWithChangelog

▸ **mergeWithChangelog**(`latestChangelogStream`: Readable, `changelogPath`: string, `context?`: [GitRepositoryContext](../interfaces/git.gitrepositorycontext.md)): *Promise‹Readable›*

*Overrides [ChangelogWriter](changelog.changelogwriter.md).[mergeWithChangelog](changelog.changelogwriter.md#protected-abstract-mergewithchangelog)*

Merges the changelog since the latest release with the main changelog.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`latestChangelogStream` | Readable | The stream with the changelogs since the latest release. |
`changelogPath` | string | The file path of the changelog to be merged. |
`context?` | [GitRepositoryContext](../interfaces/git.gitrepositorycontext.md) | The context information of the git repository.  |

**Returns:** *Promise‹Readable›*

___

###  write

▸ **write**(`context`: [GitRepositoryContext](../interfaces/git.gitrepositorycontext.md), `logs`: [GitLog](../interfaces/git.gitlog.md)[]): *Promise‹void›*

*Inherited from [ConventionalChangelogWriter](changelog.conventionalchangelogwriter.md).[write](changelog.conventionalchangelogwriter.md#write)*

Writes a changelog.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`context` | [GitRepositoryContext](../interfaces/git.gitrepositorycontext.md) | The context information of the git repository. |
`logs` | [GitLog](../interfaces/git.gitlog.md)[] | The conventional git logs since the last release.  |

**Returns:** *Promise‹void›*

___

### `Static` getLatestChangelogName

▸ **getLatestChangelogName**(`changelogFileName`: string): *string*

*Inherited from [ConventionalChangelogWriter](changelog.conventionalchangelogwriter.md).[getLatestChangelogName](changelog.conventionalchangelogwriter.md#static-getlatestchangelogname)*

Derives the name of the seperated latest changelog from the main changelog name.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`changelogFileName` | string | The name of the main changelog.  |

**Returns:** *string*

The derived name for the latest changelog.

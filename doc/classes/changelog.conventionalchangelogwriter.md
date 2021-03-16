[gitex-flow](../README.md) › [changelog](../modules/changelog.md) › [ConventionalChangelogWriter](changelog.conventionalchangelogwriter.md)

# Class: ConventionalChangelogWriter

Builder for a changelog from conventional commits.

## Hierarchy

* [ChangelogWriter](changelog.changelogwriter.md)

  ↳ **ConventionalChangelogWriter**

## Index

### Constructors

* [constructor](changelog.conventionalchangelogwriter.md#constructor)

### Properties

* [DefaultChangelogFile](changelog.conventionalchangelogwriter.md#static-readonly-defaultchangelogfile)

### Methods

* [createLatestChangelogStream](changelog.conventionalchangelogwriter.md#protected-createlatestchangelogstream)
* [mergeWithChangelog](changelog.conventionalchangelogwriter.md#protected-mergewithchangelog)
* [write](changelog.conventionalchangelogwriter.md#write)
* [getLatestChangelogName](changelog.conventionalchangelogwriter.md#static-getlatestchangelogname)

## Constructors

###  constructor

\+ **new ConventionalChangelogWriter**(`options`: [ConventionalChangelogWriterOptions](../interfaces/changelog.conventionalchangelogwriteroptions.md)): *[ConventionalChangelogWriter](changelog.conventionalchangelogwriter.md)*

*Overrides [ChangelogWriter](changelog.changelogwriter.md).[constructor](changelog.changelogwriter.md#constructor)*

Initializes a new instance of this class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [ConventionalChangelogWriterOptions](../interfaces/changelog.conventionalchangelogwriteroptions.md) | The options of the instance.  |

**Returns:** *[ConventionalChangelogWriter](changelog.conventionalchangelogwriter.md)*

## Properties

### `Static` `Readonly` DefaultChangelogFile

▪ **DefaultChangelogFile**: *"CHANGELOG.md"* = "CHANGELOG.md"

*Inherited from [ConventionalChangelogWriter](changelog.conventionalchangelogwriter.md).[DefaultChangelogFile](changelog.conventionalchangelogwriter.md#static-readonly-defaultchangelogfile)*

## Methods

### `Protected` createLatestChangelogStream

▸ **createLatestChangelogStream**(`context`: [GitRepositoryContext](../interfaces/git.gitrepositorycontext.md), `logs`: [GitLog](../interfaces/git.gitlog.md)[]): *Promise‹Transform›*

*Overrides [ChangelogWriter](changelog.changelogwriter.md).[createLatestChangelogStream](changelog.changelogwriter.md#protected-abstract-createlatestchangelogstream)*

Builds a changelog stream from the commits since the last release.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`context` | [GitRepositoryContext](../interfaces/git.gitrepositorycontext.md) | The context information of the git repository. |
`logs` | [GitLog](../interfaces/git.gitlog.md)[] | The conventional git logs since the last release.  |

**Returns:** *Promise‹Transform›*

___

### `Protected` mergeWithChangelog

▸ **mergeWithChangelog**(`latestChangelogStream`: Readable, `changelogPath`: string): *Promise‹Readable›*

*Overrides [ChangelogWriter](changelog.changelogwriter.md).[mergeWithChangelog](changelog.changelogwriter.md#protected-abstract-mergewithchangelog)*

Merges the changelog since the latest release with the main changelog.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`latestChangelogStream` | Readable | The stream with the changelogs since the latest release. |
`changelogPath` | string | The file path of the changelog to be merged.  |

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

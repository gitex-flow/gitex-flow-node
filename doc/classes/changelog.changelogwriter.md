[gitex-flow](../README.md) › [changelog](../modules/changelog.md) › [ChangelogWriter](changelog.changelogwriter.md)

# Class: ChangelogWriter

Builder for a changelog.

## Hierarchy

* **ChangelogWriter**

  ↳ [ConventionalChangelogWriter](changelog.conventionalchangelogwriter.md)

## Index

### Constructors

* [constructor](changelog.changelogwriter.md#constructor)

### Properties

* [DefaultChangelogFile](changelog.changelogwriter.md#static-readonly-defaultchangelogfile)

### Methods

* [createLatestChangelogStream](changelog.changelogwriter.md#protected-abstract-createlatestchangelogstream)
* [mergeWithChangelog](changelog.changelogwriter.md#protected-abstract-mergewithchangelog)
* [write](changelog.changelogwriter.md#write)
* [getLatestChangelogName](changelog.changelogwriter.md#static-getlatestchangelogname)

## Constructors

###  constructor

\+ **new ChangelogWriter**(`options`: [ChangelogWriterOptions](../interfaces/changelog.changelogwriteroptions.md)): *[ChangelogWriter](changelog.changelogwriter.md)*

Initializes a new instance of this class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [ChangelogWriterOptions](../interfaces/changelog.changelogwriteroptions.md) | The options of the instance.  |

**Returns:** *[ChangelogWriter](changelog.changelogwriter.md)*

## Properties

### `Static` `Readonly` DefaultChangelogFile

▪ **DefaultChangelogFile**: *"CHANGELOG.md"* = "CHANGELOG.md"

## Methods

### `Protected` `Abstract` createLatestChangelogStream

▸ **createLatestChangelogStream**(`context`: [GitRepositoryContext](../interfaces/git.gitrepositorycontext.md), `logs`: [GitLog](../interfaces/git.gitlog.md)[]): *Promise‹Readable›*

Creates a changelog stream from the commits since the last release.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`context` | [GitRepositoryContext](../interfaces/git.gitrepositorycontext.md) | The context information of the git repository. |
`logs` | [GitLog](../interfaces/git.gitlog.md)[] | The conventional git logs since the last release.  |

**Returns:** *Promise‹Readable›*

___

### `Protected` `Abstract` mergeWithChangelog

▸ **mergeWithChangelog**(`latestChangelogStream`: Readable, `changelogPath`: string): *Promise‹Readable›*

Merges a changelog stream from the commits since the last release.

**Parameters:**

Name | Type |
------ | ------ |
`latestChangelogStream` | Readable |
`changelogPath` | string |

**Returns:** *Promise‹Readable›*

___

###  write

▸ **write**(`context`: [GitRepositoryContext](../interfaces/git.gitrepositorycontext.md), `logs`: [GitLog](../interfaces/git.gitlog.md)[]): *Promise‹void›*

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

Derives the name of the seperated latest changelog from the main changelog name.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`changelogFileName` | string | The name of the main changelog.  |

**Returns:** *string*

The derived name for the latest changelog.

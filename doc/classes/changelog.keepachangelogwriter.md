[gitex-flow](../README.md) / [changelog](../modules/changelog.md) / KeepAChangelogWriter

# Class: KeepAChangelogWriter

[changelog](../modules/changelog.md).KeepAChangelogWriter

Builder for a changelog from conventional commits in [keep-a-changelog format](https://keepachangelog.com/en/1.0.0/).

## Hierarchy

* [*ChangelogWriter*](changelog.changelogwriter.md)

  ↳ **KeepAChangelogWriter**

## Table of contents

### Constructors

- [constructor](changelog.keepachangelogwriter.md#constructor)

### Properties

- [DefaultChangelogFile](changelog.keepachangelogwriter.md#defaultchangelogfile)

### Methods

- [createLatestChangelogStream](changelog.keepachangelogwriter.md#createlatestchangelogstream)
- [mergeWithChangelog](changelog.keepachangelogwriter.md#mergewithchangelog)
- [write](changelog.keepachangelogwriter.md#write)
- [getLatestChangelogName](changelog.keepachangelogwriter.md#getlatestchangelogname)

## Constructors

### constructor

\+ **new KeepAChangelogWriter**(`options`: [*KeepAChangelogWriterOptions*](../interfaces/changelog.keepachangelogwriteroptions.md)): [*KeepAChangelogWriter*](changelog.keepachangelogwriter.md)

Initializes a new instance of this class.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`options` | [*KeepAChangelogWriterOptions*](../interfaces/changelog.keepachangelogwriteroptions.md) | The options of the instance.    |

**Returns:** [*KeepAChangelogWriter*](changelog.keepachangelogwriter.md)

Overrides: [ChangelogWriter](changelog.changelogwriter.md)

## Properties

### DefaultChangelogFile

▪ `Static` `Readonly` **DefaultChangelogFile**: *CHANGELOG.md*= 'CHANGELOG.md'

Inherited from: [ChangelogWriter](changelog.changelogwriter.md).[DefaultChangelogFile](changelog.changelogwriter.md#defaultchangelogfile)

## Methods

### createLatestChangelogStream

▸ `Protected`**createLatestChangelogStream**(`context`: [*GitRepositoryContext*](../interfaces/git.gitrepositorycontext.md), `logs`: [*GitLog*](../interfaces/git.gitlog.md)[]): *Promise*<Readable\>

Builds a changelog stream from the commits since the last release.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`context` | [*GitRepositoryContext*](../interfaces/git.gitrepositorycontext.md) | The context information of the git repository.   |
`logs` | [*GitLog*](../interfaces/git.gitlog.md)[] | The conventional git logs since the last release.    |

**Returns:** *Promise*<Readable\>

The stream of the latest changelog.

Overrides: [ChangelogWriter](changelog.changelogwriter.md)

___

### mergeWithChangelog

▸ `Protected`**mergeWithChangelog**(`latestChangelogStream`: *Readable*, `changelogPath`: *string*, `context?`: [*GitRepositoryContext*](../interfaces/git.gitrepositorycontext.md)): *Promise*<Readable\>

Merges the changelog since the latest release with the main changelog.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`latestChangelogStream` | *Readable* | The stream with the changelogs since the latest release.   |
`changelogPath` | *string* | The file path of the changelog to be merged.   |
`context?` | [*GitRepositoryContext*](../interfaces/git.gitrepositorycontext.md) | The context information of the git repository.    |

**Returns:** *Promise*<Readable\>

The stream of the merged changelog.

Overrides: [ChangelogWriter](changelog.changelogwriter.md)

___

### write

▸ **write**(`context`: [*GitRepositoryContext*](../interfaces/git.gitrepositorycontext.md), `logs`: [*GitLog*](../interfaces/git.gitlog.md)[]): *Promise*<void\>

Writes a changelog.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`context` | [*GitRepositoryContext*](../interfaces/git.gitrepositorycontext.md) | The context information of the git repository.   |
`logs` | [*GitLog*](../interfaces/git.gitlog.md)[] | The conventional git logs since the last release.    |

**Returns:** *Promise*<void\>

Inherited from: [ChangelogWriter](changelog.changelogwriter.md)

___

### getLatestChangelogName

▸ `Static`**getLatestChangelogName**(`changelogFileName`: *string*): *string*

Derives the name of the seperated latest changelog from the main changelog name.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`changelogFileName` | *string* | The name of the main changelog.    |

**Returns:** *string*

The derived name for the latest changelog.

Inherited from: [ChangelogWriter](changelog.changelogwriter.md)

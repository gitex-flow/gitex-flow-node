[gitex-flow](../README.md) › [changelog](../modules/changelog.md) › [KeepAChangelogWriterOptions](changelog.keepachangelogwriteroptions.md)

# Interface: KeepAChangelogWriterOptions

Options of the KeepAChangelogWriter.

## Hierarchy

* [ChangelogWriterOptions](changelog.changelogwriteroptions.md)

  ↳ **KeepAChangelogWriterOptions**

## Index

### Properties

* [basePath](changelog.keepachangelogwriteroptions.md#optional-basepath)
* [changelogFileName](changelog.keepachangelogwriteroptions.md#optional-changelogfilename)
* [description](changelog.keepachangelogwriteroptions.md#optional-description)
* [storeLatestChangelog](changelog.keepachangelogwriteroptions.md#optional-storelatestchangelog)
* [title](changelog.keepachangelogwriteroptions.md#optional-title)

## Properties

### `Optional` basePath

• **basePath**? : *undefined | string*

*Inherited from [ConventionalChangelogWriterOptions](changelog.conventionalchangelogwriteroptions.md).[basePath](changelog.conventionalchangelogwriteroptions.md#optional-basepath)*

Path to the node project folder / git repository.

___

### `Optional` changelogFileName

• **changelogFileName**? : *undefined | string*

*Inherited from [ConventionalChangelogWriterOptions](changelog.conventionalchangelogwriteroptions.md).[changelogFileName](changelog.conventionalchangelogwriteroptions.md#optional-changelogfilename)*

Specifies the name of the changelog.

*DEFAULT*: CHANGELOG.md

___

### `Optional` description

• **description**? : *undefined | string*

The description of the changelog.

___

### `Optional` storeLatestChangelog

• **storeLatestChangelog**? : *undefined | false | true*

*Inherited from [ConventionalChangelogWriterOptions](changelog.conventionalchangelogwriteroptions.md).[storeLatestChangelog](changelog.conventionalchangelogwriteroptions.md#optional-storelatestchangelog)*

Set this flag to keep the changelog of the latest release as [changelogFileName](changelog.keepachangelogwriteroptions.md#optional-changelogfilename).latest.md.
This file can be useful for some other tools which processes the release information (ex. gitlab).

___

### `Optional` title

• **title**? : *undefined | string*

The title of the changelog.
*DEFAULT*: 'Changelog'

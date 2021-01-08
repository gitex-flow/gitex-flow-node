[gitex-flow](../README.md) › [changelog](../modules/changelog.md) › [ConventionalChangelogWriterOptions](changelog.conventionalchangelogwriteroptions.md)

# Interface: ConventionalChangelogWriterOptions

Options of the ConventionalChangelogBuilder.

## Hierarchy

* [ChangelogWriterOptions](changelog.changelogwriteroptions.md)

  ↳ **ConventionalChangelogWriterOptions**

## Index

### Properties

* [basePath](changelog.conventionalchangelogwriteroptions.md#optional-basepath)
* [changelogFileName](changelog.conventionalchangelogwriteroptions.md#optional-changelogfilename)
* [conventionalChangelogPresent](changelog.conventionalchangelogwriteroptions.md#optional-conventionalchangelogpresent)
* [storeLatestChangelog](changelog.conventionalchangelogwriteroptions.md#optional-storelatestchangelog)

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

### `Optional` conventionalChangelogPresent

• **conventionalChangelogPresent**? : *undefined | string*

Specifies the conventional commit format.
The selectable options are:
- angular (default)
- atom
- ember
- eslint
- jquery
- jshint

For more infomation check out the documentation of the
[conventional-changelog-preset-loader](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-preset-loader).
This loader is used to load the corresponding present.

___

### `Optional` storeLatestChangelog

• **storeLatestChangelog**? : *undefined | false | true*

*Inherited from [ConventionalChangelogWriterOptions](changelog.conventionalchangelogwriteroptions.md).[storeLatestChangelog](changelog.conventionalchangelogwriteroptions.md#optional-storelatestchangelog)*

Set this flag to keep the changelog of the latest release as [changelogFileName](changelog.conventionalchangelogwriteroptions.md#optional-changelogfilename).latest.md.
This file can be useful for some other tools which processes the release information (ex. gitlab).

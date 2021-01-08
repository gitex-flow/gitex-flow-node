[gitex-flow](../README.md) › [changelog](../modules/changelog.md) › [ChangelogWriterOptions](changelog.changelogwriteroptions.md)

# Interface: ChangelogWriterOptions

Options of the ChangelogWriter.

## Hierarchy

* **ChangelogWriterOptions**

  ↳ [ConventionalChangelogWriterOptions](changelog.conventionalchangelogwriteroptions.md)

  ↳ [ChangelogConfig](configs.changelogconfig.md)

## Index

### Properties

* [basePath](changelog.changelogwriteroptions.md#optional-basepath)
* [changelogFileName](changelog.changelogwriteroptions.md#optional-changelogfilename)
* [storeLatestChangelog](changelog.changelogwriteroptions.md#optional-storelatestchangelog)

## Properties

### `Optional` basePath

• **basePath**? : *undefined | string*

Path to the node project folder / git repository.

___

### `Optional` changelogFileName

• **changelogFileName**? : *undefined | string*

Specifies the name of the changelog.

*DEFAULT*: CHANGELOG.md

___

### `Optional` storeLatestChangelog

• **storeLatestChangelog**? : *undefined | false | true*

Set this flag to keep the changelog of the latest release as [changelogFileName](changelog.changelogwriteroptions.md#optional-changelogfilename).latest.md.
This file can be useful for some other tools which processes the release information (ex. gitlab).

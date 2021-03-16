[gitex-flow](../README.md) › [configs](../modules/configs.md) › [ChangelogConfig](configs.changelogconfig.md)

# Interface: ChangelogConfig

Configuration for the changelog creation.

## Hierarchy

* [ChangelogWriterOptions](changelog.changelogwriteroptions.md)

  ↳ **ChangelogConfig**

## Index

### Properties

* [basePath](configs.changelogconfig.md#optional-basepath)
* [changelogFileName](configs.changelogconfig.md#optional-changelogfilename)
* [storeLatestChangelog](configs.changelogconfig.md#optional-storelatestchangelog)
* [type](configs.changelogconfig.md#type)

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

### `Optional` storeLatestChangelog

• **storeLatestChangelog**? : *undefined | false | true*

*Inherited from [ConventionalChangelogWriterOptions](changelog.conventionalchangelogwriteroptions.md).[storeLatestChangelog](changelog.conventionalchangelogwriteroptions.md#optional-storelatestchangelog)*

Set this flag to keep the changelog of the latest release as [changelogFileName](configs.changelogconfig.md#optional-changelogfilename).latest.md.
This file can be useful for some other tools which processes the release information (ex. gitlab).

___

###  type

• **type**: *[ChangelogType](../enums/changelog.changelogtype.md) | string*

The type of the changelog.
This option indicates which type of changelog should be parsed and generated.

[gitex-flow](../README.md) / [changelog](../modules/changelog.md) / ConventionalChangelogWriterOptions

# Interface: ConventionalChangelogWriterOptions

[changelog](../modules/changelog.md).ConventionalChangelogWriterOptions

Options of the ConventionalChangelogBuilder.

## Hierarchy

* [*ChangelogWriterOptions*](changelog.changelogwriteroptions.md)

  ↳ **ConventionalChangelogWriterOptions**

## Table of contents

### Properties

- [basePath](changelog.conventionalchangelogwriteroptions.md#basepath)
- [changelogFileName](changelog.conventionalchangelogwriteroptions.md#changelogfilename)
- [conventionalChangelogPresent](changelog.conventionalchangelogwriteroptions.md#conventionalchangelogpresent)
- [storeLatestChangelog](changelog.conventionalchangelogwriteroptions.md#storelatestchangelog)

## Properties

### basePath

• `Optional` **basePath**: *string*

Path to the node project folder / git repository.

Inherited from: [ChangelogWriterOptions](changelog.changelogwriteroptions.md).[basePath](changelog.changelogwriteroptions.md#basepath)

___

### changelogFileName

• `Optional` **changelogFileName**: *string*

Specifies the name of the changelog.

*DEFAULT*: CHANGELOG.md

Inherited from: [ChangelogWriterOptions](changelog.changelogwriteroptions.md).[changelogFileName](changelog.changelogwriteroptions.md#changelogfilename)

___

### conventionalChangelogPresent

• `Optional` **conventionalChangelogPresent**: *string*

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

### storeLatestChangelog

• `Optional` **storeLatestChangelog**: *boolean*

Set this flag to keep the changelog of the latest release as [changelogFileName](changelog.conventionalchangelogwriteroptions.md#changelogfilename).latest.md.
This file can be useful for some other tools which processes the release information (ex. gitlab).

Inherited from: [ChangelogWriterOptions](changelog.changelogwriteroptions.md).[storeLatestChangelog](changelog.changelogwriteroptions.md#storelatestchangelog)

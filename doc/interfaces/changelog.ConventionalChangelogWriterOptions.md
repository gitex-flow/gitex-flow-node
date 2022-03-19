[gitex-flow](../README.md) / [changelog](../modules/changelog.md) / ConventionalChangelogWriterOptions

# Interface: ConventionalChangelogWriterOptions

[changelog](../modules/changelog.md).ConventionalChangelogWriterOptions

Options of the ConventionalChangelogBuilder.

## Hierarchy

- [`ChangelogWriterOptions`](changelog.ChangelogWriterOptions.md)

  ↳ **`ConventionalChangelogWriterOptions`**

## Table of contents

### Properties

- [basePath](changelog.ConventionalChangelogWriterOptions.md#basepath)
- [changelogFileName](changelog.ConventionalChangelogWriterOptions.md#changelogfilename)
- [conventionalChangelogPresent](changelog.ConventionalChangelogWriterOptions.md#conventionalchangelogpresent)
- [storeLatestChangelog](changelog.ConventionalChangelogWriterOptions.md#storelatestchangelog)

## Properties

### basePath

• `Optional` **basePath**: `string`

Path to the node project folder / git repository.

#### Inherited from

[ChangelogWriterOptions](changelog.ChangelogWriterOptions.md).[basePath](changelog.ChangelogWriterOptions.md#basepath)

___

### changelogFileName

• `Optional` **changelogFileName**: `string`

Specifies the name of the changelog.

*DEFAULT*: CHANGELOG.md

#### Inherited from

[ChangelogWriterOptions](changelog.ChangelogWriterOptions.md).[changelogFileName](changelog.ChangelogWriterOptions.md#changelogfilename)

___

### conventionalChangelogPresent

• `Optional` **conventionalChangelogPresent**: `string`

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

• `Optional` **storeLatestChangelog**: `boolean`

Set this flag to keep the changelog of the latest release as [changelogFileName](changelog.ConventionalChangelogWriterOptions.md#changelogfilename).latest.md.
This file can be useful for some other tools which processes the release information (ex. gitlab).

#### Inherited from

[ChangelogWriterOptions](changelog.ChangelogWriterOptions.md).[storeLatestChangelog](changelog.ChangelogWriterOptions.md#storelatestchangelog)

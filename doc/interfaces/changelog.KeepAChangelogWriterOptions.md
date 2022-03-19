[gitex-flow](../README.md) / [changelog](../modules/changelog.md) / KeepAChangelogWriterOptions

# Interface: KeepAChangelogWriterOptions

[changelog](../modules/changelog.md).KeepAChangelogWriterOptions

Options of the KeepAChangelogWriter.

## Hierarchy

- [`ChangelogWriterOptions`](changelog.ChangelogWriterOptions.md)

  ↳ **`KeepAChangelogWriterOptions`**

## Table of contents

### Properties

- [basePath](changelog.KeepAChangelogWriterOptions.md#basepath)
- [changelogFileName](changelog.KeepAChangelogWriterOptions.md#changelogfilename)
- [description](changelog.KeepAChangelogWriterOptions.md#description)
- [storeLatestChangelog](changelog.KeepAChangelogWriterOptions.md#storelatestchangelog)
- [title](changelog.KeepAChangelogWriterOptions.md#title)

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

### description

• `Optional` **description**: `string`

The description of the changelog.

___

### storeLatestChangelog

• `Optional` **storeLatestChangelog**: `boolean`

Set this flag to keep the changelog of the latest release as [changelogFileName](changelog.KeepAChangelogWriterOptions.md#changelogfilename).latest.md.
This file can be useful for some other tools which processes the release information (ex. gitlab).

#### Inherited from

[ChangelogWriterOptions](changelog.ChangelogWriterOptions.md).[storeLatestChangelog](changelog.ChangelogWriterOptions.md#storelatestchangelog)

___

### title

• `Optional` **title**: `string`

The title of the changelog.
*DEFAULT*: 'Changelog'

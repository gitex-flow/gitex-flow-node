[gitex-flow](../README.md) / [changelog](../modules/changelog.md) / KeepAChangelogWriterOptions

# Interface: KeepAChangelogWriterOptions

[changelog](../modules/changelog.md).KeepAChangelogWriterOptions

Options of the KeepAChangelogWriter.

## Hierarchy

- [ChangelogWriterOptions](changelog.changelogwriteroptions.md)

  ↳ **KeepAChangelogWriterOptions**

## Table of contents

### Properties

- [basePath](changelog.keepachangelogwriteroptions.md#basepath)
- [changelogFileName](changelog.keepachangelogwriteroptions.md#changelogfilename)
- [description](changelog.keepachangelogwriteroptions.md#description)
- [storeLatestChangelog](changelog.keepachangelogwriteroptions.md#storelatestchangelog)
- [title](changelog.keepachangelogwriteroptions.md#title)

## Properties

### basePath

• `Optional` **basePath**: `string`

Path to the node project folder / git repository.

#### Inherited from

[ChangelogWriterOptions](changelog.changelogwriteroptions.md).[basePath](changelog.changelogwriteroptions.md#basepath)

___

### changelogFileName

• `Optional` **changelogFileName**: `string`

Specifies the name of the changelog.

*DEFAULT*: CHANGELOG.md

#### Inherited from

[ChangelogWriterOptions](changelog.changelogwriteroptions.md).[changelogFileName](changelog.changelogwriteroptions.md#changelogfilename)

___

### description

• `Optional` **description**: `string`

The description of the changelog.

___

### storeLatestChangelog

• `Optional` **storeLatestChangelog**: `boolean`

Set this flag to keep the changelog of the latest release as [changelogFileName](changelog.keepachangelogwriteroptions.md#changelogfilename).latest.md.
This file can be useful for some other tools which processes the release information (ex. gitlab).

#### Inherited from

[ChangelogWriterOptions](changelog.changelogwriteroptions.md).[storeLatestChangelog](changelog.changelogwriteroptions.md#storelatestchangelog)

___

### title

• `Optional` **title**: `string`

The title of the changelog.
*DEFAULT*: 'Changelog'

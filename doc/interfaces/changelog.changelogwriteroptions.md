[gitex-flow](../README.md) / [changelog](../modules/changelog.md) / ChangelogWriterOptions

# Interface: ChangelogWriterOptions

[changelog](../modules/changelog.md).ChangelogWriterOptions

Options of the ChangelogWriter.

## Hierarchy

- **ChangelogWriterOptions**

  ↳ [ConventionalChangelogWriterOptions](changelog.conventionalchangelogwriteroptions.md)

  ↳ [KeepAChangelogWriterOptions](changelog.keepachangelogwriteroptions.md)

## Table of contents

### Properties

- [basePath](changelog.changelogwriteroptions.md#basepath)
- [changelogFileName](changelog.changelogwriteroptions.md#changelogfilename)
- [storeLatestChangelog](changelog.changelogwriteroptions.md#storelatestchangelog)

## Properties

### basePath

• `Optional` **basePath**: `string`

Path to the node project folder / git repository.

___

### changelogFileName

• `Optional` **changelogFileName**: `string`

Specifies the name of the changelog.

*DEFAULT*: CHANGELOG.md

___

### storeLatestChangelog

• `Optional` **storeLatestChangelog**: `boolean`

Set this flag to keep the changelog of the latest release as [changelogFileName](changelog.changelogwriteroptions.md#changelogfilename).latest.md.
This file can be useful for some other tools which processes the release information (ex. gitlab).

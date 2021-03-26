[gitex-flow](../README.md) / [configs](../modules/configs.md) / ChangelogConfig

# Interface: ChangelogConfig

[configs](../modules/configs.md).ChangelogConfig

Configuration for the changelog creation.

## Hierarchy

* [*ChangelogWriterOptions*](changelog.changelogwriteroptions.md)

  ↳ **ChangelogConfig**

## Table of contents

### Properties

- [basePath](configs.changelogconfig.md#basepath)
- [changelogFileName](configs.changelogconfig.md#changelogfilename)
- [storeLatestChangelog](configs.changelogconfig.md#storelatestchangelog)
- [type](configs.changelogconfig.md#type)

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

### storeLatestChangelog

• `Optional` **storeLatestChangelog**: *boolean*

Set this flag to keep the changelog of the latest release as [changelogFileName](configs.changelogconfig.md#changelogfilename).latest.md.
This file can be useful for some other tools which processes the release information (ex. gitlab).

Inherited from: [ChangelogWriterOptions](changelog.changelogwriteroptions.md).[storeLatestChangelog](changelog.changelogwriteroptions.md#storelatestchangelog)

___

### type

• **type**: *string*

The type of the changelog.
This option indicates which type of changelog should be parsed and generated.

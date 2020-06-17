[gitex-flow](../README.md) › [tools](../modules/tools.md) › [ProjectConfig](tools.projectconfig.md)

# Interface: ProjectConfig

Options of the git flow node project.

## Hierarchy

* **ProjectConfig**

## Index

### Properties

* [bumpVersionFiles](tools.projectconfig.md#optional-bumpversionfiles)
* [changelogFileName](tools.projectconfig.md#optional-changelogfilename)
* [conventionalChangelogPresent](tools.projectconfig.md#optional-conventionalchangelogpresent)
* [projectPath](tools.projectconfig.md#projectpath)
* [storeLatestChangelog](tools.projectconfig.md#optional-storelatestchangelog)
* [versionFile](tools.projectconfig.md#optional-versionfile)

## Properties

### `Optional` bumpVersionFiles

• **bumpVersionFiles**? : *string[]*

Specifies the JSON files containing a version attribute to be overwritten if the version changes.
*DEFAULTS*: 'package.json' and 'package-lock.json'

___

### `Optional` changelogFileName

• **changelogFileName**? : *undefined | string*

Specifies the name of the changelog.
*DEFAULTS*: CHANGELOG.md

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

###  projectPath

• **projectPath**: *string*

Path to the node project folder / git repository.

___

### `Optional` storeLatestChangelog

• **storeLatestChangelog**? : *undefined | false | true*

Set this flag to keep the changelog of the latest release as [changelogFileName](tools.projectconfig.md#optional-changelogfilename).latest.md.
This file can be useful for some other tools which processes the release information (ex. gitlab).

___

### `Optional` versionFile

• **versionFile**? : *undefined | string*

Specifies the primary version file containing the version of the project.
*DEFAULTS*: 'package.json'

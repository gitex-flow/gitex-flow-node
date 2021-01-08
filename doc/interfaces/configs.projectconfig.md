[gitex-flow](../README.md) › [configs](../modules/configs.md) › [ProjectConfig](configs.projectconfig.md)

# Interface: ProjectConfig

Options of the git flow node project.

## Hierarchy

* **ProjectConfig**

## Index

### Properties

* [autoStash](configs.projectconfig.md#optional-autostash)
* [bumpVersionFiles](configs.projectconfig.md#optional-bumpversionfiles)
* [changelog](configs.projectconfig.md#optional-changelog)
* [changelogFileName](configs.projectconfig.md#optional-changelogfilename)
* [conventionalChangelogPresent](configs.projectconfig.md#optional-conventionalchangelogpresent)
* [projectPath](configs.projectconfig.md#projectpath)
* [storeLatestChangelog](configs.projectconfig.md#optional-storelatestchangelog)
* [versionFile](configs.projectconfig.md#optional-versionfile)

## Properties

### `Optional` autoStash

• **autoStash**? : *undefined | false | true*

Auto stashes the uncommited changes on starting a git flow branch.
After the git flow branch was created, the latest stash is popped.
*DEFAULTS*: true

___

### `Optional` bumpVersionFiles

• **bumpVersionFiles**? : *string[]*

Specifies the JSON files containing a version attribute to be overwritten if the version changes.
*DEFAULTS*: 'package.json' and 'package-lock.json'

___

### `Optional` changelog

• **changelog**? : *[ChangelogConfig](configs.changelogconfig.md)*

Set the configuration of the changelog.

*DEFAULTS*:
```JSON
{
   type: 'ConventionalChangelog',
   changelogFileName: 'CHANGELOG.md',
   storeLatestChangelog: false,
   conventionalChangelogPresent: 'angular'
}
```

___

### `Optional` changelogFileName

• **changelogFileName**? : *undefined | string*

Specifies the name of the changelog.
*DEFAULTS*: CHANGELOG.md

**`deprecated`** This property was moved to the option `changelog`. This property will be removed in version 3.*.

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

**`deprecated`** This property was moved to the option `changelog`. This property will be removed in version 3.*.

___

###  projectPath

• **projectPath**: *string*

Path to the node project folder / git repository.

___

### `Optional` storeLatestChangelog

• **storeLatestChangelog**? : *undefined | false | true*

Set this flag to keep the changelog of the latest release as [changelogFileName](configs.projectconfig.md#optional-changelogfilename).latest.md.
This file can be useful for some other tools which processes the release information (ex. gitlab).

**`deprecated`** This property was moved to the option `changelog`. This property will be removed in version 3.*.

___

### `Optional` versionFile

• **versionFile**? : *undefined | string*

Specifies the primary version file containing the version of the project.
*DEFAULTS*: 'package.json'

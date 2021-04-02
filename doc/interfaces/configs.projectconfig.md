[gitex-flow](../README.md) / [configs](../modules/configs.md) / ProjectConfig

# Interface: ProjectConfig

[configs](../modules/configs.md).ProjectConfig

Options of the git flow node project.

## Table of contents

### Properties

- [autoStash](configs.projectconfig.md#autostash)
- [bumpVersionFiles](configs.projectconfig.md#bumpversionfiles)
- [changelog](configs.projectconfig.md#changelog)
- [changelogFileName](configs.projectconfig.md#changelogfilename)
- [conventionalChangelogPresent](configs.projectconfig.md#conventionalchangelogpresent)
- [conventionalCommit](configs.projectconfig.md#conventionalcommit)
- [projectPath](configs.projectconfig.md#projectpath)
- [storeLatestChangelog](configs.projectconfig.md#storelatestchangelog)
- [versionFile](configs.projectconfig.md#versionfile)

## Properties

### autoStash

• `Optional` **autoStash**: *boolean*

Auto stashes the uncommited changes on starting a git flow branch.
After the git flow branch was created, the latest stash is popped.
*DEFAULTS*: true

___

### bumpVersionFiles

• `Optional` **bumpVersionFiles**: *string*[]

Specifies the JSON files containing a version attribute to be overwritten if the version changes.
*DEFAULTS*: 'package.json' and 'package-lock.json'

___

### changelog

• `Optional` **changelog**: [*ChangelogConfig*](../modules/configs.md#changelogconfig)<Record<string, unknown\>\>

Sets the configuration of the changelog.

*DEFAULTS*:
```JSON
{
   "type": "ConventionalChangelog",
   "changelogFileName": "CHANGELOG.md",
   "storeLatestChangelog": false,
   "conventionalChangelogPresent": "angular"
}
```

___

### changelogFileName

• `Optional` **changelogFileName**: *string*

Specifies the name of the changelog.
*DEFAULTS*: CHANGELOG.md

**`deprecated`** This property was moved to the option `changelog`. This property will be removed in version 3.*.

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

**`deprecated`** This property was moved to the option `changelog`. This property will be removed in version 3.*.

___

### conventionalCommit

• `Optional` **conventionalCommit**: Options

Sets the conventional commit [options of conventional-commits-parser](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-commits-parser#options)

Additional *DEFAULTS*:
```JSON
 {
   "referenceActions": [
"close",
"closes",
"closed",
"fix",
"fixes",
"fixed",
"resolve",
"resolves",
"resolved",
"refs",
"references"
],
"noteKeywords": ["BREAKING CHANGE", "SECURITY", "REMOVED"]
}
```

___

### projectPath

• **projectPath**: *string*

Path to the node project folder / git repository.

___

### storeLatestChangelog

• `Optional` **storeLatestChangelog**: *boolean*

Set this flag to keep the changelog of the latest release as [changelogFileName](configs.projectconfig.md#changelogfilename).latest.md.
This file can be useful for some other tools which processes the release information (ex. gitlab).

**`deprecated`** This property was moved to the option `changelog`. This property will be removed in version 3.*.

___

### versionFile

• `Optional` **versionFile**: *string*

Specifies the primary version file containing the version of the project.
*DEFAULTS*: 'package.json'

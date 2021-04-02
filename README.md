![logo-banner](./assets/gitex-flow-logo-banner.svg)

**gitex-flow** is a [git flow](https://nvie.com/posts/a-successful-git-branching-model/) extension that adds some automation and features to the standardized process.
It also represents a tool chain for a continuous release strategy that automates as many work steps as possible.

> :interrobang:
> If you are using [visual studio code](https://code.visualstudio.com/) you can simply use the official [vscode extension](https://marketplace.visualstudio.com/items?itemName=gitex-flow.gitex-flow-vscode) of gitex-flow.

# Table of content

- [Table of content](#table-of-content)
- [Introduction](#introduction)
- [Features](#features)
- [User documentation](#user-documentation)
  - [Prerequisite](#prerequisite)
  - [Installation](#installation)
    - [As a global reference](#as-a-global-reference)
    - [As a project dependency](#as-a-project-dependency)
  - [Initialization](#initialization)
  - [Configuation](#configuation)
  - [Conventional commits guideline](#conventional-commits-guideline)
  - [Changelog generator](#changelog-generator)
  - [Git flow branches](#git-flow-branches)
    - [Feature](#feature)
    - [Bugfix](#bugfix)
    - [Release](#release)
    - [Hotfix](#hotfix)
    - [Support](#support)
- [Developer documentation (API)](#developer-documentation-api)
- [Troubleshooting](#troubleshooting)

# Introduction

In my experience as a software developer, one of the most important parts of a software project is a precisely defined and largely automated release and deployment process.
Modern software projects often involve multiple autonomous projects (e.g. microservices), each with their own release cycles.
Git flow offers a standardized release strategy that helps you get this problem under control.

In addition, using git flow covers some common requirements and allows other project management issues to be automated:

1. **Easy creation of frequent releases**:
   Continous and frequent releases are mostly an essential part of the project requirement, especially for agile projects.
   A deployment can be very error prune and time intense.
   For this reason, it is worth investing in a deployment process that is as simple as possible.

2. **Simplifies the automation of build tasks**:
   The standardization of releases allows easier automation of versioning (e.g. semantic versioning) and build tasks (e.g. building npm packages or executables).

3. **Good scaling for different team sizes**:
   When a project gets bigger, more complicated or several developers are working on it, a defined release process becomes more and more important.

4. **Keep the user informed about changes and features**:
   Frequent releases makes it harder for users to track the new versions and their changes.
   Transparency is important in increasing the acceptance of the software and allows to participate the user into the software project.

# Features

**gitex-flow** is fully compatible with **git flow**.
This means that gitex-flow uses the same commands as git flow, but with additional functionality:

1. Automatic calculation of versions for release and hotfix branches using [semantic versioning (SemVer)](https://semver.org/) and BREAKING CHANGE flag of [conventional commits](#conventional-commits-guideline).
2. Automatic dumping of npm project versions (`package.json`, `package-lock.json`).
3. Automatic creation of a changelog for each version by [conventional commits](#conventional-commits-guideline).

# User documentation

**gitex-flow** can be used as a npm package in your **node.js** project.
You can install them either as global or project reference.

## Prerequisite

- [git](https://git-scm.com/downloads) is installed
- [git-flow (AVH edition)](https://github.com/petervanderdoes/gitflow-avh) is installed
- [node.js](https://nodejs.org/en/) is installed

## Installation

### As a global reference

```
#> npm install -g gitex-flow
```

### As a project dependency

You can also install gitex-flow as a npm development dependency in your project:

```
#> npm install --save-dev gitex-flow
```

To integrate the gitex workflow into your project, add the following lines to the `scripts` section of your `package.json`:

```javascript
"scripts": {
    ...
    "init": "gitex-flow init",
    "feature:start": "gitex-flow feature start",
    "feature:finish": "gitex-flow feature finish",
    "release:start": "gitex-flow release start",
    "release:finish": "gitex-flow release finish",
    "hotfix:start": "gitex-flow hotfix start",
    "hotfix:finish": "gitex-flow hotfix finish",
    "bugfix:start": "gitex-flow bugfix start",
    "bugfix:finish": "gitex-flow bugfix finish",
    "support:start": "gitex-flow support start",
    "support:finish": "gitex-flow support finish"
    ...
}
```

## Initialization

Once after the installation or after cloning a new local repository you have to initialize it by executing the following command:

```
#> gitex-flow init
```

or if it was installed as a project dependency

```
#> npm run init
```

> For reasons of simplicity, I only use the global installation for the following documentation examples.

## Configuation

To configure **gitex-flow** you can create a configuration file `.gitex[[-flow][.json]]`.
The following JSON shows the schema and the default values of the configuration:

```javascript
{
  "gitFlowConfig": {
    "masterBranch": "master",
    "developBranch": "develop",
    "featureBranchPrefix": "feature",
    "bugfixBranchPrefix": "bugfix",
    "releaseBranchPrefix": "release",
    "hotfixBranchPrefix": "hotfix",
    "supportBranchPrefix": "support",
    "versionTagPrefix": null
  },
  "projectConfig": {
    "projectPath": "./",
    "autoStash": true,
    "changelogFileName": "CHANGELOG.md",       // @deprecated
    "storeLatestChangelog": false,             // @deprecated
    "conventionalChangelogPresent": "angular", // @deprecated
    "changelog": {
      "type": "ConventionalChangelog",
      "changelogFileName": "CHANGELOG.md",
      "storeLatestChangelog": false,
      "conventionalChangelogPresent": "angular"
    },
    "conventionalCommit": {
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
        "references",
      ],
      "noteKeywords": ["BREAKING CHANGE", "SECURITY", "REMOVED"],
      // *for all options visit documentation of conventional-commits-parser
    },
    "versionFile": "package.json",
    "bumpVersionFiles": [
      "package.json",
      "package-lock.json"
    ]
  },
  "log4jsConfig": {
    "appenders": { "console": { "type": "console" } },
    "categories": { "default": { "appenders": ["console"], "level": "info" } }
  },
}

```

Further information on the [available configurations](doc/interfaces/gflow.gflowconfig.md) can be found in the API documentation.

For all options of the `conventionalCommit` block visit the project of the underlying [conventional-commits-parser](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-commits-parser#options).

To show the loaded git flow configuration you can execute the command:

```shell
#> gitex-flow config
```

## Conventional commits guideline

To use gitex flow properly, you have to follow the [conventional commits guideline](https://www.conventionalcommits.org/en/v1.0.0/).

An example for a matching conventional angular commit message:

```
feat(gflow): Implemented automatic naming when creating branches

The name of the release and hotfix branch is set automatically when it is created.

closes #5
```

or

```
feat(config): Made gitex-flow configurable

Added configuration data structure and introduced optional config file '.gitex'.

BREAKING CHANGE: Adapted API by adding an options to the affected modules (classes).

closes #10
```

or

```
fix(service): Removed support of unencrypted HTTP protocol

This unencrypted protocol has led to several vulnerabilities in the framework.

SECURITY: Only encrypted protocols are now allowed
BREAKING CHANGE: Removed HTTP endpoint in web service.

closes #941, refs #1094, #1100
```

## Changelog generator

Gitex flow provides a modular changelog generator.
The framework provides some useful default implementations that you can easily configure in the `changelog` block of the `projectConfig` section.
All implementations of the changelog generator have the following common options:

- `basePath`: the base folder containing the changelog file (default: `projectConfig.projectPath` otherwise `process.cwd()`)
- `changelogFileName`: The name of the changelog (default: `CHANGELOG.md`)
- `storeLatestChangelog`: Keep the changelog of the latest version as a separate file named `CHANGELOG.latest.md` (default: `false`)

Depending on the implementation there may be additional properties.

| Type                    | Description                                                                                                                 | Options                                                                                              | Note      |
| ----------------------- | :-------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :-------- |
| `None`                  | Deactivates the changelog generator.                                                                                        | -                                                                                                    |           |
| `ConventionalChangelog` | Implementation of the [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) generator. | [ConventionalChangelogWriterOptions](doc/interfaces/changelog.conventionalchangelogwriteroptions.md) | `default` |
| `KeepAChangelog`        | Implementation of the [keep-a-changelog](https://keepachangelog.com/en/1.0.0/) generator.                                   | [KeepAChangelogWriterOptions](doc/interfaces/changelog.keepachangelogwriteroptions.md)               |           |

## Git flow branches

Git flow offers five branches for different use cases.
For some branch types several branches can be active at the same time (_features_, _bugfixes_, _support-branches_). For others (_release_, _hotfix_) only one.

### Feature

Features are branches based on the develop branch to add new functionality to the application. Feature branches can exist over many releases and can be updated regularly with the latest changes of the develop branch.

**List active features**

```shell
#> gitex-flow feature
```

**Start feature**

I recommend to use the issue reference of the corresponding ticket system as the feature name (ex. #42).

```shell
#> gitex-flow feature start <name>
```

**Finish feature**

The name does not need to be specified if the feature branch has already been checked out.

```shell
#> gitex-flow feature finish [name]
```

### Bugfix

Bugfix branches are similar to feature branches, but intented for bug fixing.
This is useful for bugs which are not fixable as a hotfix (breaking change, low prio bug).

**List active bugfixes**

```shell
#> gitex-flow bugfix
```

**Start bugfix**

I recommend to use the issue reference of the corresponding ticket system as the bugfix name (ex. #42).

```shell
#> gitex-flow bugfix start <name>
```

**Finish bugfix**

The name does not need to be specified if the bugfix branch has already been checked out.

```shell
#> gitex-flow bugfix finish [name]
```

### Release

Releases are branches that are based on the develop branch, which freezes the current code and marks a feature stop.
The code from the release branch can be published to the consolidation (test) system.
Only bugfixes are allowed to be commited on the release branch.
If the release is stable, the release branch can be finished and merged into the master branch.

**List active release**

```shell
#> gitex-flow release
```

**Start release**

When starting a release, gitex-flow automatically updates the versions in `package.json` and `package-lock.json` and updates the changelog based on the commits since the last release.

By default, a release is always a minor release. However, in case there has been a BREAKING CHANGE since the last release, it is treated as a major release.

If no custom name is specified for the release, then gitex-flow uses the calculated version as the name.

```shell
#> gitex-flow release start [name]
```

**Finish release**

The name does not need to be specified if the release branch has already been checked out.

```shell
#> gitex-flow release finish [name]
```

### Hotfix

Hotfixes are bug fixes based on a released version.

**List active hotfix**

```shell
#> gitex-flow hotfix
```

**Start hotfix**

When starting a hotfix, gitex-flow automatically updates the versions in `package.json` and `package-lock.json`.

A hotfix is always a patch.
It's not allowed to commit breaking changes or new features on a hotfix branch.

If no custom name is specified for the hotfix, then gitex-flow uses patch version as the name.

```shell
#> gitex-flow hotfix start [name]
```

**Finish hotfix**

After the bugfixes commited to the hotfix branch the changelog can be updated.

The name does not need to be specified if the release branch has already been checked out.

```shell
#> gitex-flow hotfix finish [name]
```

### Support

Support branches are based on a released version to provide long term support of a program version.

**List active support**

```shell
#> gitex-flow support
```

**Start support**

As default the base of a new support branch is the `master` branch.

```shell
#> gitex-flow support start <name> [base]
```

**Finish support**

> :interrobang:
> Some git flow implementations do not support finishing support branches.

The name does not need to be specified if the release branch has already been checked out.

```shell
#> gitex-flow support finish [name]
```

# Developer documentation (API)

If you like to use **gitex-flow** in your code, you can use the typescript API.

**gitex-flow** is implemented as a wrapper of an arbitary **git flow** implementation.

```typescript
import { AvhGitFlow, GFlow, GFlowConfig } from 'gitex-flow';

// Options with default values
const gFlowConfig: GFlowConfig = {
  gitFlowConfig: {
    masterBranch: 'master',
    developBranch: 'develop',
    featureBranchPrefix: 'feature',
    bugfixBranchPrefix: 'bugfix',
    releaseBranchPrefix: 'release',
    hotfixBranchPrefix: 'hotfix',
    supportBranchPrefix: 'support',
    versionTagPrefix: undefined,
  },
  projectConfig: {
    projectPath: './',
    autoStash: true,
    changelogFileName: 'CHANGELOG.md', // @deprecated
    storeLatestChangelog: false, // @deprecated
    conventionalChangelogPresent: 'angular', // @deprecated
    changelog: {
      type: 'ConventionalChangelog',
      changelogFileName: 'CHANGELOG.md',
      storeLatestChangelog: false,
      conventionalChangelogPresent: 'angular',
    },
    conventionalCommit: {
      referenceActions: [
        'close',
        'closes',
        'closed',
        'fix',
        'fixes',
        'fixed',
        'resolve',
        'resolves',
        'resolved',
        'refs',
        'references',
      ],
      noteKeywords: ['BREAKING CHANGE', 'SECURITY', 'REMOVED'],
    },
    versionFile: 'package.json',
    bumpVersionFiles: ['package.json', 'package-lock.json'],
  },
  log4jsConfig: {
    appenders: { console: { type: 'console' } },
    categories: { default: { appenders: ['console'], level: 'info' } },
  },
};

const gitFlow = new AvhGitFlow();
const gFlow = new GFlow(gitFlow, gFlowConfig);
// ...
```

The full API documentation can be found [here](doc/README.md).

# Troubleshooting

1. Executing the `gitex-flow [...]` command results in the following error:

   > _Branches '\<branch>' and 'origin/\<branch>' have diverged._
   >
   > _Fatal: And branch '\<branch>' may be fast-forwarded_

   **Reason**: The executed command affects a branch where the local and remote state of the git repository have diverged.

   **Problem**: This problem cannot be solved automatically, because the solution depends heavily on the state of the local git repository.

   **Solution**: Make sure that the affected local branch is up to date. In most cases this is easy (e.t. `git pull --rebase`), but there are also cases where a manual merge is necessary.

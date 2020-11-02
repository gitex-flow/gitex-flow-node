![logo-banner](./assets/gitex-flow-logo-banner.svg)

**gitex-flow** is a [git flow](https://nvie.com/posts/a-successful-git-branching-model/) extension, extending git flow by some additional features.
It also represents a tool chain for a continuous release strategy that automates as many work steps as possible.

This project provides a [node.js](https://nodejs.org/en/) implementation of gitex-flow that is tailored for use in a npm project.

## Table of content

- [Table of content](#table-of-content)
- [Introduction](#introduction)
  - [Additional features compared to the standard git flow](#additional-features-compared-to-the-standard-git-flow)
- [User documentation](#user-documentation)
  - [Prerequisite](#prerequisite)
  - [Installation](#installation)
    - [Global](#global)
    - [Project dependency](#project-dependency)
  - [Initialization](#initialization)
  - [Configuation](#configuation)
  - [Usage / Workflow](#usage--workflow)
    - [Commit message convention](#commit-message-convention)
    - [Feature](#feature)
    - [BugFix](#bugfix)
    - [Release](#release)
      - [Extension features](#extension-features)
    - [HotFix](#hotfix)
      - [Extension features](#extension-features-1)
    - [Support](#support)
- [Developer documentation (API)](#developer-documentation-api)

## Introduction

In my experience as a software developer, one of the most important parts of a software project is a precisely defined and largely automated release and deployment process.
Modern software projects often consist of several autonomous projects (ex. micro services), each with their own release cycles.
Git flow offers a standardized release strategy that helps you get this problem under control.

In addition, using Git Flow covers some common requirements and allows other project management issues to be automated:

1. **Easy creation of frequent releases**:
   Continous and frequent releases are mostly an essential part of the project requirement, especially for agile projects.
   A deployment can be very error prune and time intense.
   For this reason, it is worth investing in making the deployment process as simple as possible.

2. **Simplifies the automation of build tasks**:
   The standardization of releases simplifies the automation of versioning (ex. semantic versioning) and build tasks (ex. building npm packages or executables).

3. **Scales well for different team sizes**:
   When a project gets bigger and more complicated or several developers work on it, a defined release process becomes more and more important.

4. **Keep the user informed about changes and features**:
   Frequent releases carry the risk that the user loses track of the versions and their changes.
   Transparency is important in increasing the acceptance of the software and allows to participate the user into the software project.

### Additional features compared to the standard git flow

1. Automatic calculation of next versions for release and hotfix branches by using [semantic versioning (SemVer)](https://semver.org/) and the BREAKING CHANGE flag of [conventional commits](#commit-message-convention).
2. Automatic dumping of the npm project versions (package.json, package-lock.json).
3. Automatic generation of a changelog for each version by [conventional commits](#commit-message-convention).

## User documentation

If you like to use **gitex-flow** in your **node.js** project you can use **gitex-flow** as a npm script.

### Prerequisite

- [git](https://git-scm.com/downloads) is installed
- [git-flow (AVH edition)](https://github.com/petervanderdoes/gitflow-avh) is installed
- [node.js](https://nodejs.org/en/) is installed

### Installation

#### Global

```
#> npm install -g gitex-flow
```

#### Project dependency

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

### Initialization

Once after the installation or after cloning a new local repository you have to initialize it by executing the following command:

```
#> gitex-flow init
```

or if it was installed as a project dependency

```
#> npm run init
```

### Configuation

To configure **gitex-flow** you can create a configuration file `.gitex`.
The following JSON shows the schema and the default values of the configuration:

```JSON
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
    "changelogFileName": "CHANGELOG.md",
    "storeLatestChangelog": false,
    "conventionalChangelogPresent": "angular",
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

### Usage / Workflow

**gitex-flow** is fully compatible with **git flow**.
This means that gitex-flow uses the same commands that you know from git flow, but with additional functionality.

#### Commit message convention

In order to be able to take full advantage of **gitex-flow**, it is worth following some conventions.

To generate the changelogs, gitex-flow uses parts of the [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) framework.
You can select your desired present by setting the option `conventionalChangelogPresent` of the [project settings](doc/interfaces/tools.projectconfig.md).
The default present is `angular`.

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

#### Feature

Features are branches that are based on the develop branch, which add new functionality to the program.
Feature branches can exist across many releases and can be updated regularly with the latest changes the develop branch.

```shell
#> npm run feature:start -- <name>
...
#> npm run feature:finish -- <name>
```

#### BugFix

Bugfix branches are similar to feature branches, but are used for fixing bugs.
This is useful for bugs which are not fixable as a hotfix (breaking change, low prio bug).

```shell
#> npm run bugfix:start -- <name>
...
#> npm run bugfix:finish -- <name>
```

#### Release

Releases are branches that are based on the develop branch, which freezes the current code and mark a feature stop.
The code from the release branch can be published to the consolidation (test) system.
Only bugfixes are allowed to be commited on the release branch.
If the release is stable, the release branch can be finished and merged into the master branch.

```shell
#> npm run release:start -- [name]
...
#> npm run release:finish -- [name]
```

##### Extension features

- If no name is set, the branch name is generated automatically with the next minor semantic version string based on the latest released version.
- If the release is started, the version from `package.json` is updated
- If the release is started, the `CHANGELOG.md` is updated with the changes since the last release

#### HotFix

Hotfixes are bug fixes based on a released version.

```shell
#> npm run hotfix:start -- [name]
...
#> npm run hotfix:finish -- [name]
```

##### Extension features

- If no name is set, the branch name is generated automatically with the next minor semantic version string based on the latest released version.
- If the hotfix is started, the version from `package.json` is updated
- Before the hotfix is finished, the `CHANGELOG.md` is updated with the bugfixs are mode on the hotfix branch

#### Support

Support branches are based on a released version to provide long term support of a program version.

```shell
#> npm run support:start -- <name> <base>
...
#> npm run support:finish -- <name> <base>
```

## Developer documentation (API)

If you like to use **gitex-flow** in your code, you can use the typescript gitex-flow API.

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
    changelogFileName: 'CHANGELOG.md',
    storeLatestChangelog: false,
    conventionalChangelogPresent: 'angular',
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

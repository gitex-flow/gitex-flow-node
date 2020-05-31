# g-flow

g-flow is a [node.js](https://nodejs.org/en/) framework extending [git flow](https://nvie.com/posts/a-successful-git-branching-model/) that provides an all-in-one approach to a release and deployment strategy and process.
The framework offers automated tools that allow you to embed the release strategy in your development process.

## Table of content

- [g-flow](#g-flow)
  - [Table of content](#table-of-content)
  - [Introduction](#introduction)
    - [Criterias of a deployment process](#criterias-of-a-deployment-process)
    - [Differentiation from other projects](#differentiation-from-other-projects)
  - [User documentation](#user-documentation)
    - [Prerequisite](#prerequisite)
    - [Installation](#installation)
    - [Usage / Workflow](#usage--workflow)
      - [Feature](#feature)
      - [BugFix](#bugfix)
      - [Release](#release)
        - [Extension features](#extension-features)
      - [HotFix](#hotfix)
        - [Extension features](#extension-features-1)
      - [Support](#support)
  - [Developer documentation (API)](#developer-documentation-api)

## Introduction

In my experience as software developer, one of the most important parts of a software project is a precisely defined and largely automated release and deployment process.

Continous deployments are mostly an essential part of the project requirements, especially for agile projects.
A deployment can be very error prune and time expensive.
For this reason, it is worth investing in making the deployment process as simple as possible.
Another common and important requirement is to notify the user of changes from one version to another.
Transparency is important in increasing the acceptance of the software and allows to participate the user into the software project.

When a project gets bigger and more complicated or several developers work on it, a defined release process becomes more and more important.
For this reason, it's advisable to think about the release process as early as possible in the project.

### Criterias of a deployment process

The following list defines some criterias of a release and deployment process:

1. Deployed versions can be recovered.
2. Deployed versions can be fixed.
3. Deployed versions do not influence each other.
4. Current development should not influence deployed versions.
5. Changes between versions should be captured in a changelog.
6. All versions should have a standardized version numbers.
7. Integration of the release process in the IDE.

### Differentiation from other projects

For any listed criteria exist some suitable solutions and principles:

**[git-flow](https://nvie.com/posts/a-successful-git-branching-model/)**: A git deployment strategy.

**[semantic versioning (SemVer)](https://semver.org/)**: A semantic version strategy.

**[conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)**: A git commit message standard.

**[standard-version](https://github.com/conventional-changelog/standard-version)**: A tool providing automated versioning and changelog generation designed for [github flow](https://guides.github.com/introduction/flow/).

Additionally there are some very helpful articles about this topic:

- [How to generate Changelog using Conventional Commits](https://medium.com/jobtome-engineering/how-to-generate-changelog-using-conventional-commits-10be40f5826c)
- [Releasing JS library on GitHub with git-flow and conventional-commits](http://digital-cult.com/releasing-js-library-github-git-flow-conventional-commits/)
- [Using standard-version in git-flow](https://github.com/devdigital/git-flow-standard-version)

| No. | Criteria                                                    | git-flow | SemVer | Conventional commits | standard-version |
| :-- | :---------------------------------------------------------- | :------: | :----: | :------------------: | :--------------: |
| 1   | Deployed versions can be recovered.                         |    ✔     |        |                      |                  |
| 2   | Deployed versions can be fixed.                             |    ✔     |        |                      |                  |
| 3   | Deployed versions do not influence each other.              |    ✔     |        |                      |                  |
| 4   | Current development should not influence deployed versions. |    ✔     |        |                      |                  |
| 5   | Changes between versions should be captured as a changelog. |          |        |                      |        ✔         |
| 6   | All versions should have a standardized version numbers.    |          |   ✔    |                      |        ✔         |
| 7   | Integration of the release process in the IDE.              |    ✔     |        |          ✔           |                  |

The aim of this project is to offer a well-coordinated overall concept that integrates all of the listed principles and tools into the **git flow** workflow.

## User documentation

If you like to use **g-flow** in your **node.js** project you can use **g-flow** as a npm script.

### Prerequisite

- [git](https://git-scm.com/downloads) is installed
- [git-flow](https://github.com/petervanderdoes/gitflow-avh) is installed
- [node.js](https://nodejs.org/en/) is installed

### Installation

```
#> npm install --save-dev g-flow
```

After installation add the following lines to the `scripts` section in your `package.json` of your project:

```javascript
"scripts": {
    ...
    "feature:start": "g-flow feature start",
    "feature:finish": "g-flow feature finish",
    "release:start": "g-flow release start",
    "release:finish": "g-flow release finish",
    "hotfix:start": "g-flow hotfix start",
    "hotfix:finish": "g-flow hotfix finish",
    "bugfix:start": "g-flow bugfix start",
    "bugfix:finish": "g-flow bugfix finish",
    "support:start": "g-flow support start",
    "support:finish": "g-flow support finish"
    ...
}
```

### Usage / Workflow

**g-flow** has mostly the same commands and API as **git flow**.
There are only some simplifying changens and functional extensions which are fully backward compatible.

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

Support branches are based on a released version to provide long time support of a program version.

```shell
#> npm run support:start -- <name> <base>
...
#> npm run support:finish -- <name> <base>
```

## Developer documentation (API)

If you like to use **g-flow** in your code, you can use the typescript g-flow API.

**g-flow** is implemented as a wrapper of a arbitary **git flow** implementation.

```typescript
import { AvhGitFlow, GFlow } from 'g-flow';

const gitFlow = new AvhGitFlow();
const gflow = new GFlow(gitFlow);
// ...
```

The full API documentation can be found [here](doc/README.md).

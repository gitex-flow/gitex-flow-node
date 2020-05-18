# node-git-flow-workflow

This project provides an all-in-one approach with automated tools that embed the release strategy into the development process.

## Table of content

- [node-git-flow-workflow](#node-git-flow-workflow)
  - [Table of content](#table-of-content)
  - [Introduction](#introduction)
    - [Criterias](#criterias)
    - [Differentiation to other projects](#differentiation-to-other-projects)
  - [API documentation](#api-documentation)

## Introduction

In my experience as software developer, one of the most important part of a software project is a precisely defined and largely automated release and deployment process.

Continous deployments are mostly an essential part of the project requirement, especially for agile projects.
A deployment can be very error prune and time expensive.
For this reason, it is worth investing in making the deployment process as simple as possible.
Another common and important requirement is to notify the user of changes from one version to another.
Transparency is important in increasing the acceptance of the software and to involve the user into the software project.

When a project gets bigger and more complicated or several developers work on it, a defined release process becomes more and more important.
For this reason, it's advisable to think about the release process as early as possible in the project.

### Criterias

The following list defines some criterias of a release and deployment process:

1. Deployed versions can be recovered.
2. Deployed versions can be fixed.
3. Deployed versions not influence each other.
4. Current development should not influence deployed versions.
5. Changes between versions should be captured as a changelog.
6. All versions should have a standardized version number.
7. Integration of release process in IDE.

### Differentiation to other projects

For any listed criterias exists some suitable solutions and principles:

**[git-flow](https://nvie.com/posts/a-successful-git-branching-model/)**: A git deployment strategy.

**[semantic versioning (SemVer)](https://semver.org/)**: A semantic version strategy.

**[conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)**: A git commit message standard.

**[standard-version](https://github.com/conventional-changelog/standard-version)**: A tool providing automated versioning and changelog generation.

Additionally there are some very helpful article about this topic:

- [How to generate Changelog using Conventional Commits](https://medium.com/jobtome-engineering/how-to-generate-changelog-using-conventional-commits-10be40f5826c)
- [Releasing JS library on GitHub with git-flow and conventional-commits](http://digital-cult.com/releasing-js-library-github-git-flow-conventional-commits/)
- [Using standard-version in git-flow](https://github.com/devdigital/git-flow-standard-version)

| No. | Criteria                                                    | git-flow | SemVer | Conventional commits | standard-version |
| :-- | :---------------------------------------------------------- | :------: | :----: | :------------------: | :--------------: |
| 1   | Deployed versions can be recovered.                         |    ✔     |        |                      |                  |
| 2   | Deployed versions can be fixed.                             |    ✔     |        |                      |                  |
| 3   | Deployed versions not influence each other.                 |    ✔     |        |                      |                  |
| 4   | Current development should not influence deployed versions. |    ✔     |        |                      |                  |
| 5   | Changes between versions should be captured as a changelog. |          |        |                      |        ✔         |
| 6   | All versions should have a standardized version number.     |          |   ✔    |                      |        ✔         |
| 7   | Integration of release process in IDE.                      |    ✔     |        |          ✔           |                  |

The aim of this project to offer a well-coordinated overall concept that integrates all of the listed principles and tools.

## API documentation

The API documentation can be found [here](doc/README.md).

[gitex-flow](../README.md) / [tools](../modules/tools.md) / GitFlowSemVers

# Class: GitFlowSemVers

[tools](../modules/tools.md).GitFlowSemVers

Representing an API for handling git flow SemVer.

## Table of contents

### Constructors

- [constructor](tools.gitflowsemvers.md#constructor)

### Methods

- [calculateBranchVersion](tools.gitflowsemvers.md#calculatebranchversion)

## Constructors

### constructor

\+ **new GitFlowSemVers**(`basePath?`: *string*): [*GitFlowSemVers*](tools.gitflowsemvers.md)

Initializes a new instance of this class.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`basePath?` | *string* | Base path of the project folder.    |

**Returns:** [*GitFlowSemVers*](tools.gitflowsemvers.md)

## Methods

### calculateBranchVersion

▸ **calculateBranchVersion**(`type`: [*GitFlowBranchType*](../modules/api.md#gitflowbranchtype), `version?`: *string*): *Promise*<undefined \| string\>

Calculates the version of the branch created from the current branch.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`type` | [*GitFlowBranchType*](../modules/api.md#gitflowbranchtype) | Type of the branch should be created.   |
`version?` | *string* | A optional custom version to be used.    |

**Returns:** *Promise*<undefined \| string\>

The calculated branch version.

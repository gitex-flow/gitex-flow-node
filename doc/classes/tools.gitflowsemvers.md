[gitex-flow](../README.md) › [tools](../modules/tools.md) › [GitFlowSemVers](tools.gitflowsemvers.md)

# Class: GitFlowSemVers

Representing an API for handling git flow SemVer.

## Hierarchy

* **GitFlowSemVers**

## Index

### Constructors

* [constructor](tools.gitflowsemvers.md#constructor)

### Methods

* [calculateBranchVersion](tools.gitflowsemvers.md#calculatebranchversion)

## Constructors

###  constructor

\+ **new GitFlowSemVers**(`basePath?`: undefined | string): *[GitFlowSemVers](tools.gitflowsemvers.md)*

Initializes a new instance of this class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`basePath?` | undefined &#124; string | Base path of the project folder.  |

**Returns:** *[GitFlowSemVers](tools.gitflowsemvers.md)*

## Methods

###  calculateBranchVersion

▸ **calculateBranchVersion**(`type`: [GitFlowBranchType](../modules/api.md#gitflowbranchtype), `version?`: undefined | string): *Promise‹string›*

Calculates the version of the branch created from the current branch.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | [GitFlowBranchType](../modules/api.md#gitflowbranchtype) | Type of the branch should be created. |
`version?` | undefined &#124; string | A optional custom version to be used.  |

**Returns:** *Promise‹string›*

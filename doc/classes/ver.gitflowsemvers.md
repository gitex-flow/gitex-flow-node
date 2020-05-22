[gflow](../README.md) › [ver](../modules/ver.md) › [GitFlowSemVers](ver.gitflowsemvers.md)

# Class: GitFlowSemVers

Representing an API for handling git flow SemVer.

## Hierarchy

* **GitFlowSemVers**

## Index

### Constructors

* [constructor](ver.gitflowsemvers.md#constructor)

### Properties

* [packageJson](ver.gitflowsemvers.md#static-readonly-packagejson)
* [packageLockJson](ver.gitflowsemvers.md#static-readonly-packagelockjson)

### Methods

* [commitVersion](ver.gitflowsemvers.md#commitversion)
* [getBranchVersion](ver.gitflowsemvers.md#getbranchversion)
* [getVersion](ver.gitflowsemvers.md#getversion)

## Constructors

###  constructor

\+ **new GitFlowSemVers**(`basePath?`: undefined | string): *[GitFlowSemVers](ver.gitflowsemvers.md)*

Initializes a new instance of this class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`basePath?` | undefined &#124; string | Base path of the project folder.  |

**Returns:** *[GitFlowSemVers](ver.gitflowsemvers.md)*

## Properties

### `Static` `Readonly` packageJson

▪ **packageJson**: *"package.json"* = "package.json"

___

### `Static` `Readonly` packageLockJson

▪ **packageLockJson**: *"package-lock.json"* = "package-lock.json"

## Methods

###  commitVersion

▸ **commitVersion**(`version`: string): *Promise‹void›*

 Writes the version and commits the changes in the git repository.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`version` | string | Version to commit.  |

**Returns:** *Promise‹void›*

___

###  getBranchVersion

▸ **getBranchVersion**(`type`: [BranchType](../modules/api.md#branchtype)): *Promise‹string›*

Gets the version of the branch created from the current branch.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`type` | [BranchType](../modules/api.md#branchtype) | Type of the branch should be created.  |

**Returns:** *Promise‹string›*

___

###  getVersion

▸ **getVersion**(): *Promise‹string›*

Gets the version of the current branch.

**Returns:** *Promise‹string›*

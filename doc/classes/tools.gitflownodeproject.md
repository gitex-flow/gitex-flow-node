[g-flow](../README.md) › [tools](../modules/tools.md) › [GitFlowNodeProject](tools.gitflownodeproject.md)

# Class: GitFlowNodeProject

Representing an API for handling git flow SemVer.

## Hierarchy

* **GitFlowNodeProject**

## Index

### Constructors

* [constructor](tools.gitflownodeproject.md#constructor)

### Properties

* [changelogFile](tools.gitflownodeproject.md#static-readonly-changelogfile)
* [packageJson](tools.gitflownodeproject.md#static-readonly-packagejson)
* [packageLockJson](tools.gitflownodeproject.md#static-readonly-packagelockjson)

### Methods

* [commitChanges](tools.gitflownodeproject.md#commitchanges)
* [getVersion](tools.gitflownodeproject.md#getversion)
* [updateChangelog](tools.gitflownodeproject.md#updatechangelog)
* [writeVersion](tools.gitflownodeproject.md#writeversion)

## Constructors

###  constructor

\+ **new GitFlowNodeProject**(`basePath?`: undefined | string): *[GitFlowNodeProject](tools.gitflownodeproject.md)*

Initializes a new instance of this class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`basePath?` | undefined &#124; string | Base path of the project folder.  |

**Returns:** *[GitFlowNodeProject](tools.gitflownodeproject.md)*

## Properties

### `Static` `Readonly` changelogFile

▪ **changelogFile**: *"CHANGELOG.md"* = "CHANGELOG.md"

___

### `Static` `Readonly` packageJson

▪ **packageJson**: *"package.json"* = "package.json"

___

### `Static` `Readonly` packageLockJson

▪ **packageLockJson**: *"package-lock.json"* = "package-lock.json"

## Methods

###  commitChanges

▸ **commitChanges**(`commitFiles?`: string[]): *Promise‹void›*

Commits the changes of the git repository.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`commitFiles?` | string[] | Files to be commited.  |

**Returns:** *Promise‹void›*

___

###  getVersion

▸ **getVersion**(): *Promise‹string›*

Gets the current version from the package.json.

**Returns:** *Promise‹string›*

___

###  updateChangelog

▸ **updateChangelog**(`version?`: undefined | string, `name?`: undefined | string): *Promise‹void›*

Updates the changelog with the changes since the last release.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`version?` | undefined &#124; string | Version the changelog is created for. |
`name?` | undefined &#124; string | Name of the release.  |

**Returns:** *Promise‹void›*

___

###  writeVersion

▸ **writeVersion**(`version`: string): *Promise‹void›*

 Writes the version and commits the changes in the git repository.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`version` | string | Version to commit.  |

**Returns:** *Promise‹void›*

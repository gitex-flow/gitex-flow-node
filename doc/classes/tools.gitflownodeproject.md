[gitex-flow](../README.md) › [tools](../modules/tools.md) › [GitFlowNodeProject](tools.gitflownodeproject.md)

# Class: GitFlowNodeProject

Representing an API for handling git flow SemVer.

## Hierarchy

* **GitFlowNodeProject**

## Index

### Constructors

* [constructor](tools.gitflownodeproject.md#constructor)

### Properties

* [DefaultBumpVersionFiles](tools.gitflownodeproject.md#static-readonly-defaultbumpversionfiles)
* [DefaultChangelogFile](tools.gitflownodeproject.md#static-readonly-defaultchangelogfile)
* [DefaultLatestChangelogFile](tools.gitflownodeproject.md#static-readonly-defaultlatestchangelogfile)
* [DefaultVersionFile](tools.gitflownodeproject.md#static-readonly-defaultversionfile)

### Methods

* [checkoutBranch](tools.gitflownodeproject.md#checkoutbranch)
* [commitChanges](tools.gitflownodeproject.md#commitchanges)
* [getCurrentBranch](tools.gitflownodeproject.md#getcurrentbranch)
* [getVersion](tools.gitflownodeproject.md#getversion)
* [updateChangelog](tools.gitflownodeproject.md#updatechangelog)
* [writeVersion](tools.gitflownodeproject.md#writeversion)

## Constructors

###  constructor

\+ **new GitFlowNodeProject**(`options?`: [ProjectConfig](../interfaces/tools.projectconfig.md)): *[GitFlowNodeProject](tools.gitflownodeproject.md)*

Initializes a new instance of this class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | [ProjectConfig](../interfaces/tools.projectconfig.md) | Options of the git flow node project instance.  |

**Returns:** *[GitFlowNodeProject](tools.gitflownodeproject.md)*

## Properties

### `Static` `Readonly` DefaultBumpVersionFiles

▪ **DefaultBumpVersionFiles**: *string[]* = [GitFlowNodeProject.DefaultVersionFile, 'package-lock.json']

___

### `Static` `Readonly` DefaultChangelogFile

▪ **DefaultChangelogFile**: *"CHANGELOG.md"* = "CHANGELOG.md"

___

### `Static` `Readonly` DefaultLatestChangelogFile

▪ **DefaultLatestChangelogFile**: *"CHANGELOG.latest.md"* = "CHANGELOG.latest.md"

___

### `Static` `Readonly` DefaultVersionFile

▪ **DefaultVersionFile**: *"package.json"* = "package.json"

## Methods

###  checkoutBranch

▸ **checkoutBranch**(`branchName`: string): *Promise‹void›*

Checks out the given branch of the project.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`branchName` | string | Name of the branch to be checked out.  |

**Returns:** *Promise‹void›*

___

###  commitChanges

▸ **commitChanges**(`commitVersionFiles`: boolean, `commitChangelog`: boolean): *Promise‹void›*

Commits the changes of the git repository.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`commitVersionFiles` | boolean | true | Indicates if the defined version files should be committed if they exists. |
`commitChangelog` | boolean | true | Indicates if the changelog should be committed.  |

**Returns:** *Promise‹void›*

___

###  getCurrentBranch

▸ **getCurrentBranch**(): *Promise‹string›*

Gets the current branch.

**Returns:** *Promise‹string›*

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

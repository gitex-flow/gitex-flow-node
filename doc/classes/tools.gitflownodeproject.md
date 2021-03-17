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
* [DefaultVersionFile](tools.gitflownodeproject.md#static-readonly-defaultversionfile)

### Methods

* [checkoutBranch](tools.gitflownodeproject.md#checkoutbranch)
* [commitChanges](tools.gitflownodeproject.md#commitchanges)
* [getCurrentBranch](tools.gitflownodeproject.md#getcurrentbranch)
* [getVersion](tools.gitflownodeproject.md#getversion)
* [popLatestStash](tools.gitflownodeproject.md#poplateststash)
* [stash](tools.gitflownodeproject.md#stash)
* [updateChangelog](tools.gitflownodeproject.md#updatechangelog)
* [writeVersion](tools.gitflownodeproject.md#writeversion)

## Constructors

###  constructor

\+ **new GitFlowNodeProject**(`options?`: [ProjectConfig](../interfaces/configs.projectconfig.md)): *[GitFlowNodeProject](tools.gitflownodeproject.md)*

Initializes a new instance of this class.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options?` | [ProjectConfig](../interfaces/configs.projectconfig.md) | Options of the git flow node project instance.  |

**Returns:** *[GitFlowNodeProject](tools.gitflownodeproject.md)*

## Properties

### `Static` `Readonly` DefaultBumpVersionFiles

▪ **DefaultBumpVersionFiles**: *string[]* = [GitFlowNodeProject.DefaultVersionFile, 'package-lock.json']

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

▸ **commitChanges**(`commitVersionFiles`: boolean, `commitChangelog`: boolean): *Promise‹string›*

Commits the changes of the git repository.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`commitVersionFiles` | boolean | true | Indicates if the defined version files should be committed if they exists. |
`commitChangelog` | boolean | true | Indicates if the changelog should be committed.  |

**Returns:** *Promise‹string›*

The hash of the commit.

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

###  popLatestStash

▸ **popLatestStash**(): *Promise‹void›*

Pops stash with a given name.

**Returns:** *Promise‹void›*

___

###  stash

▸ **stash**(): *Promise‹boolean›*

Stashes the uncommited changes from the current branch.

**Returns:** *Promise‹boolean›*

___

###  updateChangelog

▸ **updateChangelog**(`changelogConfig`: [ChangelogConfig](../interfaces/configs.changelogconfig.md), `version?`: undefined | string, `name?`: undefined | string): *Promise‹void›*

Updates the changelog with the changes since the last release.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`changelogConfig` | [ChangelogConfig](../interfaces/configs.changelogconfig.md) | The changelog configuration. |
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

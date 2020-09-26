[gitex-flow](../README.md) › [avh](../modules/avh.md) › [AvhBranchListParser](avh.avhbranchlistparser.md)

# Class: AvhBranchListParser

Parser of the AVH branch list retrieved by 'git flow <branchName> list'.

## Hierarchy

* **AvhBranchListParser**

## Index

### Methods

* [parse](avh.avhbranchlistparser.md#static-parse)

## Methods

### `Static` parse

▸ **parse**(`list`: string): *Promise‹string[]›*

Parses the shell answer of AVH implementation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`list` | string | List retrived by the shell command 'git flow <branchName> list'.  |

**Returns:** *Promise‹string[]›*

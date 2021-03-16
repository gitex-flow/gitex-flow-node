[gitex-flow](../README.md) › [git](../modules/git.md) › [GitReference](git.gitreference.md)

# Interface: GitReference

Represents a git reference.

## Hierarchy

* **GitReference**

## Index

### Properties

* [action](git.gitreference.md#action)
* [issue](git.gitreference.md#optional-issue)
* [owner](git.gitreference.md#optional-owner)
* [prefix](git.gitreference.md#prefix)
* [raw](git.gitreference.md#raw)
* [repository](git.gitreference.md#optional-repository)

## Properties

###  action

• **action**: *string*

The action of the reference (ex. closes).

___

### `Optional` issue

• **issue**? : *undefined | string*

The issue number without prefix.

___

### `Optional` owner

• **owner**? : *string | null*

The owner of the referenced issue.

___

###  prefix

• **prefix**: *string*

The prefix of the issue number without issue number.

___

###  raw

• **raw**: *string*

The raw issue number.

___

### `Optional` repository

• **repository**? : *string | null*

The repository the referenced issue.

[gitex-flow](../README.md) / [git](../modules/git.md) / GitReference

# Interface: GitReference

[git](../modules/git.md).GitReference

Represents a git reference.

## Table of contents

### Properties

- [action](git.gitreference.md#action)
- [issue](git.gitreference.md#issue)
- [owner](git.gitreference.md#owner)
- [prefix](git.gitreference.md#prefix)
- [raw](git.gitreference.md#raw)
- [repository](git.gitreference.md#repository)

## Properties

### action

• **action**: *string*

The action of the reference (ex. closes).

___

### issue

• `Optional` **issue**: *string*

The issue number without prefix.

___

### owner

• `Optional` **owner**: *null* \| *string*

The owner of the referenced issue.

___

### prefix

• **prefix**: *string*

The prefix of the issue number without issue number.

___

### raw

• **raw**: *string*

The raw issue number.

___

### repository

• `Optional` **repository**: *null* \| *string*

The repository the referenced issue.

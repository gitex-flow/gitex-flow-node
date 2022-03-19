[gitex-flow](../README.md) / [git](../modules/git.md) / GitReference

# Interface: GitReference

[git](../modules/git.md).GitReference

Represents a git reference.

## Table of contents

### Properties

- [action](git.GitReference.md#action)
- [issue](git.GitReference.md#issue)
- [owner](git.GitReference.md#owner)
- [prefix](git.GitReference.md#prefix)
- [raw](git.GitReference.md#raw)
- [repository](git.GitReference.md#repository)

## Properties

### action

• **action**: `string`

The action of the reference (ex. closes).

___

### issue

• `Optional` **issue**: `string`

The issue number without prefix.

___

### owner

• `Optional` **owner**: ``null`` \| `string`

The owner of the referenced issue.

___

### prefix

• **prefix**: `string`

The prefix of the issue number without issue number.

___

### raw

• **raw**: `string`

The raw issue number.

___

### repository

• `Optional` **repository**: ``null`` \| `string`

The repository the referenced issue.

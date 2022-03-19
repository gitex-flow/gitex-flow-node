[gitex-flow](../README.md) / [git](../modules/git.md) / GitLog

# Interface: GitLog

[git](../modules/git.md).GitLog

Represents the parsed properties of a conventional commit git log.

## Table of contents

### Properties

- [body](git.GitLog.md#body)
- [footer](git.GitLog.md#footer)
- [hash](git.GitLog.md#hash)
- [header](git.GitLog.md#header)
- [mentions](git.GitLog.md#mentions)
- [merge](git.GitLog.md#merge)
- [notes](git.GitLog.md#notes)
- [references](git.GitLog.md#references)
- [revert](git.GitLog.md#revert)
- [scope](git.GitLog.md#scope)
- [subject](git.GitLog.md#subject)
- [type](git.GitLog.md#type)

## Properties

### body

• `Optional` **body**: `string`

The body of the conventional commit message (long description).

___

### footer

• `Optional` **footer**: `string`

The footer of the conventional commit message (containing references).

___

### hash

• **hash**: `string`

The hash of of the referenced commit.

___

### header

• **header**: `string`

The whole conventional commit message.

___

### mentions

• `Optional` **mentions**: `string`

Mentioned contributer.

___

### merge

• `Optional` **merge**: `string`

The merge text of the commit message.

___

### notes

• **notes**: [`GitNote`](git.GitNote.md)[]

Parsed footer notes (ex. BREAKING CHANGE)

___

### references

• `Optional` **references**: [`GitReference`](git.GitReference.md)[]

Parsed footer references (ex. closes #39)

___

### revert

• `Optional` **revert**: `string`

States if the commit is a revert commit.

___

### scope

• `Optional` **scope**: `string`

Conventional commit scope (group).

___

### subject

• **subject**: `string`

The conventional commit message without the type and scope.

___

### type

• **type**: `string`

Conventional commit type.

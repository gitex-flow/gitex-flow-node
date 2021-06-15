[gitex-flow](../README.md) / [git](../modules/git.md) / GitLog

# Interface: GitLog

[git](../modules/git.md).GitLog

Represents the parsed properties of a conventional commit git log.

## Table of contents

### Properties

- [body](git.gitlog.md#body)
- [footer](git.gitlog.md#footer)
- [hash](git.gitlog.md#hash)
- [header](git.gitlog.md#header)
- [mentions](git.gitlog.md#mentions)
- [merge](git.gitlog.md#merge)
- [notes](git.gitlog.md#notes)
- [references](git.gitlog.md#references)
- [revert](git.gitlog.md#revert)
- [scope](git.gitlog.md#scope)
- [subject](git.gitlog.md#subject)
- [type](git.gitlog.md#type)

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

• **notes**: [GitNote](git.gitnote.md)[]

Parsed footer notes (ex. BREAKING CHANGE)

___

### references

• `Optional` **references**: [GitReference](git.gitreference.md)[]

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

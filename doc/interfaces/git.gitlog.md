[g-flow](../README.md) › [git](../modules/git.md) › [GitLog](git.gitlog.md)

# Interface: GitLog

Represents the parsed properties of a conventional commit git log.

## Hierarchy

* **GitLog**

## Index

### Properties

* [body](git.gitlog.md#optional-body)
* [footer](git.gitlog.md#optional-footer)
* [hash](git.gitlog.md#hash)
* [header](git.gitlog.md#header)
* [mentions](git.gitlog.md#optional-mentions)
* [merge](git.gitlog.md#optional-merge)
* [notes](git.gitlog.md#notes)
* [references](git.gitlog.md#optional-references)
* [revert](git.gitlog.md#optional-revert)
* [scope](git.gitlog.md#optional-scope)
* [subject](git.gitlog.md#subject)
* [type](git.gitlog.md#type)

## Properties

### `Optional` body

• **body**? : *undefined | string*

The body of the conventional commit message (long description).

___

### `Optional` footer

• **footer**? : *undefined | string*

The footer of the conventional commit message (containing references).

___

###  hash

• **hash**: *string*

The hash of of the referenced commit.

___

###  header

• **header**: *string*

The whole conventional commit message.

___

### `Optional` mentions

• **mentions**? : *undefined | string*

Mentioned contributer.

___

### `Optional` merge

• **merge**? : *undefined | string*

The merge text of the commit message.

___

###  notes

• **notes**: *[GitNote](git.gitnote.md)[]*

Parsed footer notes (ex. BREAKING CHANGE)

___

### `Optional` references

• **references**? : *[GitReference](git.gitreference.md)[]*

Parsed footer references (ex. closes #39)

___

### `Optional` revert

• **revert**? : *undefined | string*

States if the commit is a revert commit.

___

### `Optional` scope

• **scope**? : *undefined | string*

Conventional commit scope (group).

___

###  subject

• **subject**: *string*

The conventional commit message without the type and scope.

___

###  type

• **type**: *string*

Conventional commit type.

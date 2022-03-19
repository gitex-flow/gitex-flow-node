[gitex-flow](../README.md) / [avh](../modules/avh.md) / AvhBranchListParser

# Class: AvhBranchListParser

[avh](../modules/avh.md).AvhBranchListParser

Parser of the AVH branch list retrieved by 'git flow <branchName> list'.

## Table of contents

### Constructors

- [constructor](avh.AvhBranchListParser.md#constructor)

### Methods

- [parse](avh.AvhBranchListParser.md#parse)

## Constructors

### constructor

• **new AvhBranchListParser**()

## Methods

### parse

▸ `Static` **parse**(`list`): `Promise`<`string`[]\>

Parses the shell answer of AVH implementation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `list` | `string` | List retrived by the shell command 'git flow <branchName> list'. |

#### Returns

`Promise`<`string`[]\>

The branch list.

[gitex-flow](../README.md) / [@types](../modules/_types.md) / Release

# Class: Release

[@types](../modules/_types.md).Release

## Table of contents

### Constructors

- [constructor](_types.release.md#constructor)

### Methods

- [addChange](_types.release.md#addchange)

## Constructors

### constructor

• **new Release**(`version`, `date`, `description?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `string` |
| `date` | `string` \| `Date` |
| `description?` | `string` |

## Methods

### addChange

▸ **addChange**(`type`, `change`): [Release](_types.release.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [ChangeType](../modules/_types.md#changetype) |
| `change` | `string` \| [Change](_types.change.md) |

#### Returns

[Release](_types.release.md)

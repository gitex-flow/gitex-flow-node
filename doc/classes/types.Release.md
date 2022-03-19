[gitex-flow](../README.md) / [@types](../modules/types.md) / Release

# Class: Release

[@types](../modules/types.md).Release

## Table of contents

### Constructors

- [constructor](types.Release.md#constructor)

### Methods

- [addChange](types.Release.md#addchange)

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

▸ **addChange**(`type`, `change`): [`Release`](types.Release.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`ChangeType`](../modules/types.md#changetype) |
| `change` | `string` \| [`Change`](types.Change.md) |

#### Returns

[`Release`](types.Release.md)

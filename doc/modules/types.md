[gitex-flow](../README.md) / @types

# Module: @types

## Table of contents

### Classes

- [Change](../classes/types.Change.md)
- [Changelog](../classes/types.Changelog.md)
- [Release](../classes/types.Release.md)

### Type aliases

- [ChangeType](types.md#changetype)

### Functions

- [parser](types.md#parser)

## Type aliases

### ChangeType

Ƭ **ChangeType**: ``"added"`` \| ``"changed"`` \| ``"deprecated"`` \| ``"removed"`` \| ``"fixed"`` \| ``"security"``

## Functions

### parser

▸ **parser**(`changelog`): [`Changelog`](../classes/types.Changelog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `changelog` | `string` |

#### Returns

[`Changelog`](../classes/types.Changelog.md)

[gitex-flow](../README.md) / [@types](../modules/types.md) / Changelog

# Class: Changelog

[@types](../modules/types.md).Changelog

## Table of contents

### Constructors

- [constructor](types.Changelog.md#constructor)

### Properties

- [head](types.Changelog.md#head)
- [releases](types.Changelog.md#releases)
- [url](types.Changelog.md#url)

### Methods

- [addRelease](types.Changelog.md#addrelease)
- [toString](types.Changelog.md#tostring)

## Constructors

### constructor

• **new Changelog**(`title?`, `description?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `title?` | `string` |
| `description?` | `string` |

## Properties

### head

• `Optional` **head**: `string`

___

### releases

• **releases**: [`Release`](types.Release.md)[]

___

### url

• `Optional` **url**: `string`

## Methods

### addRelease

▸ **addRelease**(`release`): [`Changelog`](types.Changelog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `release` | [`Release`](types.Release.md) |

#### Returns

[`Changelog`](types.Changelog.md)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

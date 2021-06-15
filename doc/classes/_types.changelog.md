[gitex-flow](../README.md) / [@types](../modules/_types.md) / Changelog

# Class: Changelog

[@types](../modules/_types.md).Changelog

## Table of contents

### Constructors

- [constructor](_types.changelog.md#constructor)

### Properties

- [head](_types.changelog.md#head)
- [releases](_types.changelog.md#releases)
- [url](_types.changelog.md#url)

### Methods

- [addRelease](_types.changelog.md#addrelease)
- [toString](_types.changelog.md#tostring)

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

• **releases**: [Release](_types.release.md)[]

___

### url

• `Optional` **url**: `string`

## Methods

### addRelease

▸ **addRelease**(`release`): [Changelog](_types.changelog.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `release` | [Release](_types.release.md) |

#### Returns

[Changelog](_types.changelog.md)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

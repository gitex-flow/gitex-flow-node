[gitex-flow](../README.md) / [changelog](../modules/changelog.md) / ChangelogWriterFactory

# Class: ChangelogWriterFactory

[changelog](../modules/changelog.md).ChangelogWriterFactory

A factory to create [ChangelogWriter](changelog.ChangelogWriter.md) from a [ChangelogConfig](../modules/configs.md#changelogconfig).

## Table of contents

### Constructors

- [constructor](changelog.ChangelogWriterFactory.md#constructor)

### Methods

- [create](changelog.ChangelogWriterFactory.md#create)

## Constructors

### constructor

• **new ChangelogWriterFactory**()

## Methods

### create

▸ `Static` **create**<`T`\>(`changelogConfig`): `undefined` \| [`ChangelogWriter`](changelog.ChangelogWriter.md)

Creates an instance of a [ChangelogWriter](changelog.ChangelogWriter.md) from a [ChangelogConfig](../modules/configs.md#changelogconfig).

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `changelogConfig` | [`ChangelogConfig`](../modules/configs.md#changelogconfig)<`T`\> | The changelog configuration to be used. |

#### Returns

`undefined` \| [`ChangelogWriter`](changelog.ChangelogWriter.md)

The instance of the created ChangelogWriter or `undefined`.

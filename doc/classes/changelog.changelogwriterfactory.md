[gitex-flow](../README.md) › [changelog](../modules/changelog.md) › [ChangelogWriterFactory](changelog.changelogwriterfactory.md)

# Class: ChangelogWriterFactory

A factory to create [ChangelogWriter](changelog.changelogwriter.md) from a [ChangelogConfig](../interfaces/configs.changelogconfig.md).

## Hierarchy

* **ChangelogWriterFactory**

## Index

### Methods

* [create](changelog.changelogwriterfactory.md#static-create)

## Methods

### `Static` create

▸ **create**(`changelogConfig`: [ChangelogConfig](../interfaces/configs.changelogconfig.md)): *[ChangelogWriter](changelog.changelogwriter.md) | undefined*

Creates an instance of a [ChangelogWriter](changelog.changelogwriter.md) from a [ChangelogConfig](../interfaces/configs.changelogconfig.md).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`changelogConfig` | [ChangelogConfig](../interfaces/configs.changelogconfig.md) | The changelog configuration to be used.  |

**Returns:** *[ChangelogWriter](changelog.changelogwriter.md) | undefined*

The instance of the created ChangelogWriter or `undefined`.

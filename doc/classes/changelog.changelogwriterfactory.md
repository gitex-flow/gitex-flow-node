[gitex-flow](../README.md) / [changelog](../modules/changelog.md) / ChangelogWriterFactory

# Class: ChangelogWriterFactory

[changelog](../modules/changelog.md).ChangelogWriterFactory

A factory to create [ChangelogWriter](changelog.changelogwriter.md) from a [ChangelogConfig](../interfaces/configs.changelogconfig.md).

## Table of contents

### Constructors

- [constructor](changelog.changelogwriterfactory.md#constructor)

### Methods

- [create](changelog.changelogwriterfactory.md#create)

## Constructors

### constructor

\+ **new ChangelogWriterFactory**(): [*ChangelogWriterFactory*](changelog.changelogwriterfactory.md)

**Returns:** [*ChangelogWriterFactory*](changelog.changelogwriterfactory.md)

## Methods

### create

▸ `Static`**create**(`changelogConfig`: [*ChangelogConfig*](../interfaces/configs.changelogconfig.md)): *undefined* \| [*ChangelogWriter*](changelog.changelogwriter.md)

Creates an instance of a [ChangelogWriter](changelog.changelogwriter.md) from a [ChangelogConfig](../interfaces/configs.changelogconfig.md).

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`changelogConfig` | [*ChangelogConfig*](../interfaces/configs.changelogconfig.md) | The changelog configuration to be used.    |

**Returns:** *undefined* \| [*ChangelogWriter*](changelog.changelogwriter.md)

The instance of the created ChangelogWriter or `undefined`.

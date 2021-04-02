[gitex-flow](../README.md) / [changelog](../modules/changelog.md) / ChangelogWriterFactory

# Class: ChangelogWriterFactory

[changelog](../modules/changelog.md).ChangelogWriterFactory

A factory to create [ChangelogWriter](changelog.changelogwriter.md) from a [ChangelogConfig](../modules/configs.md#changelogconfig).

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

▸ `Static`**create**<T\>(`changelogConfig`: [*ChangelogConfig*](../modules/configs.md#changelogconfig)<T\>): *undefined* \| [*ChangelogWriter*](changelog.changelogwriter.md)

Creates an instance of a [ChangelogWriter](changelog.changelogwriter.md) from a [ChangelogConfig](../modules/configs.md#changelogconfig).

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`changelogConfig` | [*ChangelogConfig*](../modules/configs.md#changelogconfig)<T\> | The changelog configuration to be used.    |

**Returns:** *undefined* \| [*ChangelogWriter*](changelog.changelogwriter.md)

The instance of the created ChangelogWriter or `undefined`.

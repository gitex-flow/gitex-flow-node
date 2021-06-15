[gitex-flow](../README.md) / [changelog](../modules/changelog.md) / ProjectChangelog

# Class: ProjectChangelog

[changelog](../modules/changelog.md).ProjectChangelog

A changelog manager that provides functions for viewing, generating and updating changelogs.

## Table of contents

### Constructors

- [constructor](changelog.projectchangelog.md#constructor)

### Methods

- [show](changelog.projectchangelog.md#show)
- [update](changelog.projectchangelog.md#update)

## Constructors

### constructor

• **new ProjectChangelog**(`options?`)

Initializes a new instance of this class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [ProjectConfig](../interfaces/configs.projectconfig.md) | Options of the git flow node project instance. |

## Methods

### show

▸ **show**(): `Promise`<void\>

Prints the changelog to the console.

#### Returns

`Promise`<void\>

___

### update

▸ **update**(`version?`, `name?`): `Promise`<void\>

Updates the changelog with the changes since the last release.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `version?` | `string` | Version the changelog is created for. |
| `name?` | `string` | Name of the release. |

#### Returns

`Promise`<void\>

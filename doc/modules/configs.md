[gitex-flow](../README.md) / configs

# Module: configs

## Table of contents

### Interfaces

- [GFlowConfig](../interfaces/configs.GFlowConfig.md)
- [GitFlowConfig](../interfaces/configs.GitFlowConfig.md)
- [ProjectConfig](../interfaces/configs.ProjectConfig.md)

### Type aliases

- [ChangelogConfig](configs.md#changelogconfig)
- [ConventionalCommitConfig](configs.md#conventionalcommitconfig)
- [Log4jsConfig](configs.md#log4jsconfig)

## Type aliases

### ChangelogConfig

Ƭ **ChangelogConfig**<`T`\>: `T` & { `type`: [`ChangelogType`](../enums/changelog.ChangelogType.md) \| `string`  }

Configuration for the changelog creation.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ChangelogWriterOptions`](../interfaces/changelog.ChangelogWriterOptions.md) |

___

### ConventionalCommitConfig

Ƭ **ConventionalCommitConfig**: `Options`

___

### Log4jsConfig

Ƭ **Log4jsConfig**: `Configuration`

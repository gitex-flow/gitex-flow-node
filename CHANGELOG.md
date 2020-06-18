# 2.0.0 (2020-06-18)

### Bug Fixes

- **gitex-flow:** Set current user as default git author for auto-commits ([0dbe3ac](https://github.com/CuddlySheep/gitex-flow-node/commits/0dbe3ac6e4eba4ed262fc15aaddce87fd33b393b)), closes [#15](https://github.com/CuddlySheep/gitex-flow-node/issues/15)

### Features

- **config:** Added option to store latest changelog as a seperate file ([40a412b](https://github.com/CuddlySheep/gitex-flow-node/commits/40a412b31ac710dc543b4106836fee2b09ba6e6d)), closes [#13](https://github.com/CuddlySheep/gitex-flow-node/issues/13)
- **config:** Made gitex-flow configurable ([8871211](https://github.com/CuddlySheep/gitex-flow-node/commits/8871211c3c6e870ba2dab98f7ad1dd5627709925)), closes [#10](https://github.com/CuddlySheep/gitex-flow-node/issues/10)
- **project:** Added postinstall script to execute 'git flow init' after installation ([321592a](https://github.com/CuddlySheep/gitex-flow-node/commits/321592aed53ebeacb0fa405ce724239442c395b1)), closes [#9](https://github.com/CuddlySheep/gitex-flow-node/issues/9)

### Performance Improvements

- **tests:** Introduced git repository caching to improve unit test performance ([ec2b911](https://github.com/CuddlySheep/gitex-flow-node/commits/ec2b911010bf178f8d58b0ddc1293343eb70c1d8)), closes [#14](https://github.com/CuddlySheep/gitex-flow-node/issues/14)

### BREAKING CHANGES

- **gitex-flow:** The author name and email are now optional. The order of parameter of the commit method has been changed.
- **config:** Adapted API by adding an options to the affected modules (classes).

## 1.0.5 (2020-06-16)

### Bug Fixes

- **logging:** Suppressed call stack on console error output ([478bba9](https://github.com/CuddlySheep/gitex-flow-node/commits/478bba9a8e96251643486212269d7387cec62ec4)), closes [#12](https://github.com/CuddlySheep/gitex-flow-node/issues/12)

## 1.0.4 (2020-05-31)

### Bug Fixes

- **project:** Fix some project references ([b3e039b](https://github.com/CuddlySheep/gitex-flow-node/commits/b3e039b03d6dbb9556a07e52be6ce0554d99b32d))

## 1.0.3 (2020-05-31)

### Bug Fixes

- **project:** Added shebang in Cli.ts for unix execution ([65b8b10](https://github.com/CuddlySheep/gitex-flow-node/commits/65b8b10a9e92d4ab59f2ca368fb7d87499206ce8))

## 1.0.2 (2020-05-31)

### Bug Fixes

- **project:** Added build files to the npm package content ([c266680](https://github.com/CuddlySheep/gitex-flow-node/commits/c26668024e0e0459421414596f7004f1e9da26dd))

## 1.0.1 (2020-05-31)

### Bug Fixes

- **gitex-flow:** Remove undefined 'name' variable in Cli.ts ([d9c8261](https://github.com/CuddlySheep/gitex-flow-node/commits/d9c8261f5411b1d5092ecafc8b8f30761821ecec))

# 1.0.0 (2020-05-29)

### Features

- **architecture:** Implemented the basic architecture with gitflow-avh example ([158dda5](https://github.com/CuddlySheep/gitex-flow-node/commits/158dda5e5f4903c355903fff9edf6ad6ea1ebca5)), closes [#1](https://github.com/CuddlySheep/gitex-flow-node/issues/1)
- **gitex-flow:** Implemented auto-generated changelogs at releases and hotfixes ([44ffe01](https://github.com/CuddlySheep/gitex-flow-node/commits/44ffe01eac8a66be9be0c90187d9a4df8dd3c1e4)), closes [#7](https://github.com/CuddlySheep/gitex-flow-node/issues/7)
- **gitex-flow:** Implemented automatic branch naming on branch creation ([b37d91b](https://github.com/CuddlySheep/gitex-flow-node/commits/b37d91bbefba230d383cb458869653ad8ff402bb)), closes [#5](https://github.com/CuddlySheep/gitex-flow-node/issues/5)
- **gitex-flow:** Recognizing BREAKING CHANGES in commit messages for major versioning ([1f481bc](https://github.com/CuddlySheep/gitex-flow-node/commits/1f481bcce4d191ab9c93491e5b80f3214ed6b8e4)), closes [#5](https://github.com/CuddlySheep/gitex-flow-node/issues/5)

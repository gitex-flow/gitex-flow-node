# 2.3.0 (2021-03-26)


### Features

* **changelog:** Added 'REMOVED' to valid keywords in conventional commit messages ([f27cfcb](https://github.com/gitex-flow/gitex-flow-node/commits/f27cfcb3390d48b166a2afffbb23087f8d6d8790))
* **changelog:** Added writer with keep-a-changelog convension ([ffcf68f](https://github.com/gitex-flow/gitex-flow-node/commits/ffcf68fdf0e53e46887955e2cb4f531d997fed21)), closes [#34](https://github.com/gitex-flow/gitex-flow-node/issues/34)
* **gitex-flow:** Added automatic stashing before creating a git flow branch ([e6ac420](https://github.com/gitex-flow/gitex-flow-node/commits/e6ac42002a348cc9cb27981dd3417001b330494a)), closes [#30](https://github.com/gitex-flow/gitex-flow-node/issues/30)
* **gitex-flow:** Added command to print the git flow config to the console ([0e50532](https://github.com/gitex-flow/gitex-flow-node/commits/0e5053232a088a2515c28d0a7a48b8596aabbdad)), closes [#43](https://github.com/gitex-flow/gitex-flow-node/issues/43)
* **gitex-flow:** Listed all active branches on executing base command ([af48dff](https://github.com/gitex-flow/gitex-flow-node/commits/af48dff6db666cbeac268a6c373e9464f889c117)), closes [#42](https://github.com/gitex-flow/gitex-flow-node/issues/42)



## 2.2.2 (2021-03-17)


### Bug Fixes

* **gitex-flow:** Ensured that there a no uncommited changes before finishing a hotfix ([d079571](https://github.com/gitex-flow/gitex-flow-node/commits/d07957142f45e46a8b8bfecbc149ab5ad9c1723f)), closes [#48](https://github.com/gitex-flow/gitex-flow-node/issues/48)
* **tools:** Fixed approval of invalid version strings in semantic version validation ([494eb02](https://github.com/gitex-flow/gitex-flow-node/commits/494eb027e9934ef7981afd218449019265a1c5d3)), closes [#47](https://github.com/gitex-flow/gitex-flow-node/issues/47)



## 2.2.1 (2020-12-21)


### Bug Fixes

* **config:** Added missing project path parameter to config loader ([aeb4285](https://github.com/gitex-flow/gitex-flow-node/commits/aeb42857ddc2780f86829ae19d095ff3f53619bf)), closes [#41](https://github.com/gitex-flow/gitex-flow-node/issues/41)



# 2.2.0 (2020-12-18)


### Bug Fixes

* **support:** Used default base as fallback for support branches ([58a87f8](https://github.com/gitex-flow/gitex-flow-node/commits/58a87f8aaf89cf1af292e3acfbe3bf4c4a69940d)), closes [#40](https://github.com/gitex-flow/gitex-flow-node/issues/40)


### Features

* **api:** Introduced new method generateBranchName ([86550f9](https://github.com/gitex-flow/gitex-flow-node/commits/86550f9b81be254631ab38c89a4ac7331d72898b)), closes [#39](https://github.com/gitex-flow/gitex-flow-node/issues/39)
* **api:** Triggered error if repository is already initialized on init ([9436818](https://github.com/gitex-flow/gitex-flow-node/commits/9436818c18eec8e13944eae5ac7453253d997d4f)), closes [#38](https://github.com/gitex-flow/gitex-flow-node/issues/38)



## 2.1.5 (2020-12-09)


### Bug Fixes

* **release:** Fixed build scripts for supporting node.js 12.x, 14.x and 15.x ([c598b9a](https://github.com/gitex-flow/gitex-flow-node/commits/c598b9a604a7906f9405702ffc5cd7edb1438ee1))



## 2.1.4 (2020-12-09)


### Bug Fixes

* **release:** Fixed deprecated import of simple-git ([9655505](https://github.com/gitex-flow/gitex-flow-node/commits/9655505e726721067a3561b710cb05bb492b3055)), closes [#34](https://github.com/gitex-flow/gitex-flow-node/issues/34)



## 2.1.3 (2020-12-06)


### Bug Fixes

* **security:** Updated npm dependencies due to security issues ([74b31de](https://github.com/gitex-flow/gitex-flow-node/commits/74b31dec48c6c713fc802b8571708e0b0a8c7a45)), closes [#36](https://github.com/gitex-flow/gitex-flow-node/issues/36)



## 2.1.2 (2020-11-02)


### Bug Fixes

* **gitex-flow:** Fixed error if custom hotfix or release branch name is not a SemVer string ([c495914](https://github.com/gitex-flow/gitex-flow-node/commits/c4959146fc2823255f32e07b98225eebbc84e144)), closes [#33](https://github.com/gitex-flow/gitex-flow-node/issues/33)
* **logging:** Fixed spelling mistake ([39d390f](https://github.com/gitex-flow/gitex-flow-node/commits/39d390fba7c4607fc8f8d0dbdba00c269715e0d0)), closes [#32](https://github.com/gitex-flow/gitex-flow-node/issues/32)



## 2.1.1 (2020-11-02)


### Bug Fixes

* **client:** Added input argument to the support branch to set branch base ([04d5f09](https://github.com/gitex-flow/gitex-flow-node/commits/04d5f093c555df76df63980fd4a5ebdda5713c0c))
* **client:** Added optional input arguments for custom release and hotfix names ([18612df](https://github.com/gitex-flow/gitex-flow-node/commits/18612dfa643a17bf88d71f48f5a76032d6372521)), closes [#31](https://github.com/gitex-flow/gitex-flow-node/issues/31)



# 2.1.0 (2020-10-18)


### Bug Fixes

* **project:** Fixed branch pattern in node-ci.yml file ([f9f051a](https://github.com/gitex-flow/gitex-flow-node/commits/f9f051a622b798a537339d250e4bfb3cb4baa13d))


### Features

* **logging:** Improved logging by introducing log4js ([7fa2599](https://github.com/gitex-flow/gitex-flow-node/commits/7fa25999b18a74e0f226beac7e9d8e7cb4863de3)), closes [#29](https://github.com/gitex-flow/gitex-flow-node/issues/29)



## 2.0.6 (2020-10-17)


### Bug Fixes

* **release:** Fixed wrong version calculation if release branch is finished from another branch ([349142c](https://github.com/CuddlySheep/gitex-flow-node/commits/349142cd7d9a998f4bbf6c40011db292d4d98bab)), closes [#28](https://github.com/CuddlySheep/gitex-flow-node/issues/28)



## 2.0.5 (2020-09-27)


### Bug Fixes

* **gitex-flow:** Corrected automatic commit message (Update -> Updated) ([7d71a6e](https://github.com/CuddlySheep/gitex-flow-node/commits/7d71a6e88139ca232d0bc19d8b1925e71d924948))
* **hotfix:** Fixed the problem finishing a hotfix branch from another branch ([43ff471](https://github.com/CuddlySheep/gitex-flow-node/commits/43ff4717b89fa27f3b3e3039e084eacde81516ff)), closes [#26](https://github.com/CuddlySheep/gitex-flow-node/issues/26) [#23](https://github.com/CuddlySheep/gitex-flow-node/issues/23)
* **versioning:** Activated indent detection when writting version files ([813bc64](https://github.com/CuddlySheep/gitex-flow-node/commits/813bc64cef9e58524725c3a65c1d4b0e69c49963)), closes [#27](https://github.com/CuddlySheep/gitex-flow-node/issues/27)



## 2.0.4 (2020-08-02)

### Bug Fixes

- **security:** Updated project dependencies due to a security issue in lib dot-prop ([744110f](https://github.com/gitex-flow/gitex-flow-node/commits/744110ffa22720153e9c4caf8fd140fcc9131201)), closes [#22](https://github.com/gitex-flow/gitex-flow-node/issues/22)

## 2.0.3 (2020-07-26)

### Bug Fixes

- **security:** Updated project dependencies due to security issues in lib 'lodash'closes [#21](https://github.com/gitex-flow/gitex-flow-node/issues/21) ([fcc1e7c](https://github.com/gitex-flow/gitex-flow-node/commits/fcc1e7cbfe773e8c08c91f6b71f3fef9813f24a8))

## 2.0.2 (2020-06-27)

### Reverts

- **project:** Changed postinstall to common init script due to problems on installation ([796994a](https://github.com/gitex-flow/gitex-flow-node/commits/796994a59e612b405060e88e462531f263fa2a89)), closes [#20](https://github.com/gitex-flow/gitex-flow-node/issues/20)

## 2.0.1 (2020-06-18)

### Bug Fixes

- **config:** Implemented other possible config file names and ensure projectPath is set ([583a012](https://github.com/gitex-flow/gitex-flow-node/commits/583a012f7f9e0387492b2fd5ae4a4fd807ea75d7)), closes [#18](https://github.com/gitex-flow/gitex-flow-node/issues/18) [#17](https://github.com/gitex-flow/gitex-flow-node/issues/17)
- **docu:** Corrected example code for API usage ([69581c9](https://github.com/gitex-flow/gitex-flow-node/commits/69581c9779dcd55bf44642644ad4c7bc1cca88a3)), closes [#19](https://github.com/gitex-flow/gitex-flow-node/issues/19)

# 2.0.0 (2020-06-18)

### Bug Fixes

- **gitex-flow:** Set current user as default git author for auto-commits ([0dbe3ac](https://github.com/gitex-flow/gitex-flow-node/commits/0dbe3ac6e4eba4ed262fc15aaddce87fd33b393b)), closes [#15](https://github.com/gitex-flow/gitex-flow-node/issues/15)

### Features

- **config:** Added option to store latest changelog as a seperate file ([40a412b](https://github.com/gitex-flow/gitex-flow-node/commits/40a412b31ac710dc543b4106836fee2b09ba6e6d)), closes [#13](https://github.com/gitex-flow/gitex-flow-node/issues/13)
- **config:** Made gitex-flow configurable ([8871211](https://github.com/gitex-flow/gitex-flow-node/commits/8871211c3c6e870ba2dab98f7ad1dd5627709925)), closes [#10](https://github.com/gitex-flow/gitex-flow-node/issues/10)
- **project:** Added postinstall script to execute 'git flow init' after installation ([321592a](https://github.com/gitex-flow/gitex-flow-node/commits/321592aed53ebeacb0fa405ce724239442c395b1)), closes [#9](https://github.com/gitex-flow/gitex-flow-node/issues/9)

### Performance Improvements

- **tests:** Introduced git repository caching to improve unit test performance ([ec2b911](https://github.com/gitex-flow/gitex-flow-node/commits/ec2b911010bf178f8d58b0ddc1293343eb70c1d8)), closes [#14](https://github.com/gitex-flow/gitex-flow-node/issues/14)

### BREAKING CHANGES

- **gitex-flow:** The author name and email are now optional. The order of parameter of the commit method has been changed.
- **config:** Adapted API by adding an options to the affected modules (classes).

## 1.0.5 (2020-06-16)

### Bug Fixes

- **logging:** Suppressed call stack on console error output ([478bba9](https://github.com/gitex-flow/gitex-flow-node/commits/478bba9a8e96251643486212269d7387cec62ec4)), closes [#12](https://github.com/gitex-flow/gitex-flow-node/issues/12)

## 1.0.4 (2020-05-31)

### Bug Fixes

- **project:** Fix some project references ([b3e039b](https://github.com/gitex-flow/gitex-flow-node/commits/b3e039b03d6dbb9556a07e52be6ce0554d99b32d))

## 1.0.3 (2020-05-31)

### Bug Fixes

- **project:** Added shebang in Cli.ts for unix execution ([65b8b10](https://github.com/gitex-flow/gitex-flow-node/commits/65b8b10a9e92d4ab59f2ca368fb7d87499206ce8))

## 1.0.2 (2020-05-31)

### Bug Fixes

- **project:** Added build files to the npm package content ([c266680](https://github.com/gitex-flow/gitex-flow-node/commits/c26668024e0e0459421414596f7004f1e9da26dd))

## 1.0.1 (2020-05-31)

### Bug Fixes

- **gitex-flow:** Remove undefined 'name' variable in Cli.ts ([d9c8261](https://github.com/gitex-flow/gitex-flow-node/commits/d9c8261f5411b1d5092ecafc8b8f30761821ecec))

# 1.0.0 (2020-05-29)

### Features

- **architecture:** Implemented the basic architecture with gitflow-avh example ([158dda5](https://github.com/gitex-flow/gitex-flow-node/commits/158dda5e5f4903c355903fff9edf6ad6ea1ebca5)), closes [#1](https://github.com/gitex-flow/gitex-flow-node/issues/1)
- **gitex-flow:** Implemented auto-generated changelogs at releases and hotfixes ([44ffe01](https://github.com/gitex-flow/gitex-flow-node/commits/44ffe01eac8a66be9be0c90187d9a4df8dd3c1e4)), closes [#7](https://github.com/gitex-flow/gitex-flow-node/issues/7)
- **gitex-flow:** Implemented automatic branch naming on branch creation ([b37d91b](https://github.com/gitex-flow/gitex-flow-node/commits/b37d91bbefba230d383cb458869653ad8ff402bb)), closes [#5](https://github.com/gitex-flow/gitex-flow-node/issues/5)
- **gitex-flow:** Recognizing BREAKING CHANGES in commit messages for major versioning ([1f481bc](https://github.com/gitex-flow/gitex-flow-node/commits/1f481bcce4d191ab9c93491e5b80f3214ed6b8e4)), closes [#5](https://github.com/gitex-flow/gitex-flow-node/issues/5)

import { resolve, join } from 'path';
import { AvhGitFlow } from '../src/avh/AvhGitFlow';
import { GitFlowTester } from './GitFlowTester';
import { GFlow } from '../src/gflow/GFlow';
import { assert } from 'chai';
import { pathExists, readFile } from 'fs-extra';
import { GFlowConfig } from '../src/configs/GFlowConfig';

const testRepoPath = resolve(join('.', 'test_repo'));

describe('Test gFlow implementation', function () {
  this.timeout(0);

  this.afterAll(async () => {
    await GitFlowTester.clearCache();
  });

  it('git flow version', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.assertVersion();
    await tester.dispose();
  });

  it('git flow init with defaults', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.assertInit();
    await tester.dispose();
  });

  it('git flow init with custom settings', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.assertInit({
      featureBranchPrefix: 'feat/',
      bugfixBranchPrefix: 'fix/',
      supportBranchPrefix: 'supp/',
      versionTagPrefix: 'v',
    });
    await tester.dispose();
  });

  it('git flow re-init', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.assertInit();
    await tester.assertInit(
      {
        featureBranchPrefix: 'feat/',
        bugfixBranchPrefix: 'fix/',
        supportBranchPrefix: 'supp/',
        versionTagPrefix: 'v',
      },
      true,
    );
    await tester.dispose();
  });

  it('git flow feature "#1"', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.init();
    const branch = tester.selectBranch('feature');
    const branchName = await branch.start('#1');
    assert.equal(branchName, 'feature/#1');
    assert.deepStrictEqual(await branch.list(), ['#1']);
    await branch.commit('feature.txt', 'feat(scope): Added feature.txt');
    await branch.finish();
    assert.deepStrictEqual(await branch.list(), []);
    await tester.dispose();
  });

  it('git flow bugfix "#2', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.init();
    const branch = tester.selectBranch('bugfix');
    const branchName = await branch.start('#2');
    assert.equal(branchName, 'bugfix/#2');
    assert.deepStrictEqual(await branch.list(), ['#2']);
    await branch.commit('bugfix.txt', 'fix(scope): Added bugfix.txt');
    await branch.finish();
    assert.deepStrictEqual(await branch.list(), []);
    await tester.dispose();
  });

  it('git flow release "1.0.0" (auto-version)', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.init();
    const branch = tester.selectBranch('release');
    const branchName = await branch.start();
    assert.equal(branchName, 'release/1.0.0');
    assert.deepStrictEqual(await branch.list(), ['1.0.0']);
    await branch.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');
    await branch.finish();
    assert.deepStrictEqual(await branch.list(), []);
    await tester.dispose();
  });

  it('git flow release "1.0.0" to "1.1.0" (auto-version)', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.init();

    const release100 = tester.selectBranch('release');
    let branchName = await release100.start();
    assert.equal(branchName, 'release/1.0.0');
    assert.deepStrictEqual(await release100.list(), ['1.0.0']);
    await release100.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');

    const feature1 = tester.selectBranch('feature');
    branchName = await feature1.start('#1');
    assert.equal(branchName, 'feature/#1');
    assert.deepStrictEqual(await feature1.list(), ['#1']);
    await feature1.commit('feature_2.txt', 'feat(scope): Added feature_2.txt');
    await feature1.finish();
    assert.deepStrictEqual(await feature1.list(), []);

    await release100.finish();
    assert.deepStrictEqual(await release100.list(), []);

    const feature2 = tester.selectBranch('feature');
    branchName = await feature2.start('#2');
    assert.equal(branchName, 'feature/#2');
    assert.deepStrictEqual(await feature2.list(), ['#2']);
    await feature2.commit('feature_3.txt', 'feat(scope): Added feature_3.txt');
    await feature2.finish();
    assert.deepStrictEqual(await feature2.list(), []);

    const release110 = tester.selectBranch('release');
    branchName = await release110.start();
    assert.equal(branchName, 'release/1.1.0');
    assert.deepStrictEqual(await release110.list(), ['1.1.0']);
    await release110.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');
    await release110.finish();
    assert.deepStrictEqual(await release110.list(), []);

    await tester.dispose();
  });

  it('git flow release "1.0.0" to "2.0.0" (auto-version, Breacking Change)', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.init();

    const release100 = tester.selectBranch('release');
    let branchName = await release100.start();
    assert.equal(branchName, 'release/1.0.0');
    await release100.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');

    const feature1 = tester.selectBranch('feature');
    branchName = await feature1.start('#1');
    assert.equal(branchName, 'feature/#1');
    await feature1.commit(
      'feature_2.txt',
      'feat(scope): Added feature_2.txt\n\nBREAKING CHANGE: API changes\n\ncloses #42',
    );
    await feature1.finish();

    await release100.finish();

    const feature2 = tester.selectBranch('feature');
    branchName = await feature2.start('#2');
    assert.equal(branchName, 'feature/#2');
    await feature2.commit('feature_3.txt', 'feat(scope): Added feature_3.txt');
    await feature2.finish();

    const release200 = tester.selectBranch('release');
    branchName = await release200.start();
    assert.equal(branchName, 'release/2.0.0');
    await release200.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');
    await assertChangelog('release_changelog.md');
    await release200.finish();

    await tester.dispose();
  });

  it('git flow hotfix "1.0.1" (auto-version)', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.init();

    const release = tester.selectBranch('release');
    let branchName = await release.start();
    assert.equal(branchName, 'release/1.0.0');
    await release.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');
    await release.finish();

    const hotfix = tester.selectBranch('hotfix');
    branchName = await hotfix.start();
    assert.equal(branchName, 'hotfix/1.0.1');
    await hotfix.commit('hotfix_bugfix.txt', 'fix(scope): Added hotfix_bugfix.txt');
    await hotfix.finish();

    await tester.dispose();
  });

  it('git flow hotfix "1.0.1" to "1.0.2" (auto-version)', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.init();

    const release = tester.selectBranch('release');
    let branchName = await release.start();
    assert.equal(branchName, 'release/1.0.0');
    await release.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');
    await release.finish();

    const hotfix1 = tester.selectBranch('hotfix');
    branchName = await hotfix1.start();
    assert.equal(branchName, 'hotfix/1.0.1');
    await hotfix1.commit('hotfix_bugfix.txt', 'fix(scope): Added hotfix_bugfix.txt');
    await hotfix1.finish();

    const hotfix2 = tester.selectBranch('hotfix');
    branchName = await hotfix2.start();
    assert.equal(branchName, 'hotfix/1.0.2');
    await hotfix2.commit('hotfix_bugfix_2.txt', 'fix(scope): Added hotfix_bugfix_2.txt');
    await hotfix2.finish();

    await assertChangelog('hotfix_changelog.md');

    await tester.dispose();
  });

  it('git flow support "1.0.0-lts"', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.init();
    const branch = tester.selectBranch('support');
    const branchName = await branch.start('1.0.0-lts', 'master');
    assert.equal(branchName, 'support/1.0.0-lts');
    assert.deepStrictEqual(await branch.list(), ['1.0.0-lts']);
    await branch.commit('support_feature.txt', 'feat(scope): Added support_feature.txt');
    await tester.dispose();
  });

  it('git flow prerelease 1.0.0-alpha.0 and 1.0.0-alpha.1 on develop', async function () {
    const gFlow = createGitFlow();
    const tester = new GitFlowTester(gFlow, testRepoPath);
    await tester.init();

    await gFlow.alpha.start('develop');
    assert.deepStrictEqual(await gFlow.alpha.list(), ['1.0.0-alpha.0']);

    const feature1 = tester.selectBranch('feature');
    await feature1.start('#1');
    await feature1.commit('feature.txt', 'feat(scope): Added feature.txt');
    await feature1.finish();

    await gFlow.alpha.start('develop');
    assert.deepStrictEqual(await gFlow.alpha.list(), ['1.0.0-alpha.0', '1.0.0-alpha.1']);

    await tester.dispose();
  });

  it('git flow prerelease 1.0.0-alpha.0 and 1.0.0-alpha.1 on a feature branch', async function () {
    const gFlow = createGitFlow();
    const tester = new GitFlowTester(gFlow, testRepoPath);
    await tester.init();

    const feature1 = tester.selectBranch('feature');
    await feature1.start('#1');

    await gFlow.alpha.start('feature/#1');
    assert.deepStrictEqual(await gFlow.alpha.list(), ['1.0.0-alpha.0']);

    await feature1.commit('feature.txt', 'feat(scope): Added feature.txt');

    await gFlow.alpha.start('feature/#1');
    assert.deepStrictEqual(await gFlow.alpha.list(), ['1.0.0-alpha.0', '1.0.0-alpha.1']);

    await tester.dispose();
  });

  it('git flow prerelease 1.0.0-alpha.0 and 1.0.0-alpha.1 on a bugfix branch', async function () {
    const gFlow = createGitFlow();
    const tester = new GitFlowTester(gFlow, testRepoPath);
    await tester.init();

    const feature1 = tester.selectBranch('bugfix');
    await feature1.start('#1');

    await gFlow.alpha.start('bugfix/#1');
    assert.deepStrictEqual(await gFlow.alpha.list(), ['1.0.0-alpha.0']);

    await feature1.commit('feature.txt', 'feat(scope): Added feature.txt');

    await gFlow.alpha.start('bugfix/#1');
    assert.deepStrictEqual(await gFlow.alpha.list(), ['1.0.0-alpha.0', '1.0.0-alpha.1']);

    await tester.dispose();
  });

  it('git flow prerelease 1.0.0-beta.0 and 1.0.0-beta.1 on a release branch', async function () {
    const gFlow = createGitFlow();
    const tester = new GitFlowTester(gFlow, testRepoPath);
    await tester.init();

    const release = tester.selectBranch('release');
    await release.start();
    await gFlow.beta.start('release/1.0.0');
    assert.deepStrictEqual(await gFlow.beta.list(), ['1.0.0-beta.0']);
    await release.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');
    await gFlow.beta.start('release/1.0.0');
    assert.deepStrictEqual(await gFlow.beta.list(), ['1.0.0-beta.0', '1.0.0-beta.1']);

    await tester.dispose();
  });

  it('git flow prerelease 1.0.0-beta.0 and 1.0.0-beta.1 on a hotfix branch', async function () {
    const gFlow = createGitFlow();
    const tester = new GitFlowTester(gFlow, testRepoPath);
    await tester.init();

    const release = tester.selectBranch('release');
    await release.start();
    await release.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');
    await release.finish();

    const hotfix = tester.selectBranch('hotfix');
    await hotfix.start();
    await gFlow.beta.start('hotfix/1.0.1');
    assert.deepStrictEqual(await gFlow.beta.list(), ['1.0.1-beta.0']);
    await hotfix.commit('hotfix_bugfix.txt', 'fix(scope): Added hotfix_bugfix.txt');
    await gFlow.beta.start('hotfix/1.0.1');
    assert.deepStrictEqual(await gFlow.beta.list(), ['1.0.1-beta.0', '1.0.1-beta.1']);
    await hotfix.finish();

    await tester.dispose();
  });

  it('git flow integration run', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.init();

    const feature1 = tester.selectBranch('feature');
    await feature1.start('#1');
    await feature1.commit('feature.txt', 'feat(scope): Added feature.txt');

    const bugfix1 = tester.selectBranch('bugfix');
    await bugfix1.start('#2');
    await bugfix1.commit('bugfix.txt', 'fix(scope): Added bugfix.txt');

    const feature2 = tester.selectBranch('feature');
    await feature2.start('#3');
    await feature2.commit('feature_2.txt', 'feat(scope): Added feature_2.txt');

    assert.deepStrictEqual(await feature1.list(), ['#1', '#3']);
    assert.deepStrictEqual(await feature2.list(), ['#1', '#3']);
    assert.deepStrictEqual(await bugfix1.list(), ['#2']);

    await feature1.finish('#1');
    await feature2.finish('#3');
    await bugfix1.finish('#2');

    const release = tester.selectBranch('release');
    const branchName = await release.start('1.0.0');
    assert.equal(branchName, 'release/1.0.0');
    await release.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');
    await release.finish();

    const support = tester.selectBranch('support');
    await support.start('1.0.0-lts', 'master');
    await support.commit('support_feature.txt', 'feat(scope): Added support_feature.txt');

    await tester.dispose();
  });

  it('[bugfix #23] git flow hotfix "1.0.1" (auto-version, from other branch)', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.init();

    const release = tester.selectBranch('release');
    let branchName = await release.start();
    assert.equal(branchName, 'release/1.0.0');
    await release.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');
    await release.finish();

    const hotfix1 = tester.selectBranch('hotfix');
    branchName = await hotfix1.start();
    assert.equal(branchName, 'hotfix/1.0.1');
    await hotfix1.commit('hotfix_bugfix.txt', 'fix(scope): Added hotfix_bugfix.txt');
    await tester.checkoutDevelopBranch();
    await hotfix1.finish();

    const hotfix2 = tester.selectBranch('hotfix');
    branchName = await hotfix2.start();
    assert.equal(branchName, 'hotfix/1.0.2');
    await hotfix2.commit('hotfix_bugfix.txt', 'fix(scope): Added hotfix_bugfix.txt');
    await tester.checkoutDevelopBranch();
    await hotfix2.finish();

    await tester.dispose();
  });

  it('[bugfix #27] git flow release "1.0.0" (auto-version, rewritten package.json)', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.init();

    const release1Branch = tester.selectBranch('release');
    const release1BranchName = await release1Branch.start();
    assert.equal(release1BranchName, 'release/1.0.0');
    await release1Branch.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');
    await release1Branch.finish();
    await assertPackageJson('package.json');

    const release2Branch = tester.selectBranch('release');
    const release2BranchName = await release2Branch.start();
    assert.equal(release2BranchName, 'release/1.1.0');
    await release2Branch.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');
    await release2Branch.finish();
    await assertPackageJson('package_1_1_0.json');

    await tester.dispose();
  });

  it('[bugfix #28] git flow release "1.0.0" (auto-version, from other branch)', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.init();

    const release1Branch = tester.selectBranch('release');
    const release1BranchName = await release1Branch.start();
    assert.equal(release1BranchName, 'release/1.0.0');
    await release1Branch.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');
    await release1Branch.finish();

    const feature1 = tester.selectBranch('feature');
    await feature1.start('#1');
    await feature1.commit('feature.txt', 'feat(scope): Added feature.txt');

    const release2Branch = tester.selectBranch('release');
    const release2BranchName = await release2Branch.start();
    assert.equal(release2BranchName, 'release/1.1.0');
    await release2Branch.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');
    await tester.checkoutBranch('feature/#1');
    await release2Branch.finish();

    await feature1.finish('#1');

    await tester.dispose();
  });

  it('[feature #45] git flow release "1.0.0" (without generating changelog)', async function () {
    const tester = new GitFlowTester(
      createGitFlow(
        JSON.parse(`{
          "projectConfig": {
            "projectPath": "${testRepoPath}",
            "changelog": {
              "type": "None"
            }
          }
        }`),
      ),
      testRepoPath,
    );
    await tester.init();

    const release1Branch = tester.selectBranch('release');
    const release1BranchName = await release1Branch.start();
    assert.equal(release1BranchName, 'release/1.0.0');
    assert.isFalse(
      await pathExists(join(testRepoPath, 'CHANGELOG.md')),
      'The file CHANGELOG.md exists but should not.',
    );

    await tester.dispose();
  });

  it('[bugfix #66] should successfully calculate next version if non-semver tags exists', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.init();

    const release1Branch = tester.selectBranch('release');
    const release1BranchName = await release1Branch.start();
    assert.equal(release1BranchName, 'release/1.0.0');
    await release1Branch.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');
    await release1Branch.finish();

    await tester.checkoutDevelopBranch();
    await tester.commitTestFileToCurrentBranch('feature.txt', 'feat(scope): Added feature.txt');
    await tester.addTagToCurrentBranch('custom_tag');

    const hotfix = tester.selectBranch('hotfix');
    const branchName = await hotfix.start();
    assert.equal(branchName, 'hotfix/1.0.1');
  });

  it('[bugfix #79] should also generate changelog for version 1.0.0', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.init();

    const feature1 = tester.selectBranch('feature');
    await feature1.start('#1');
    await feature1.commit('feature.txt', 'feat(scope): Added feature.txt');
    await feature1.finish('#1');

    const release = tester.selectBranch('release');
    const branchName = await release.start('1.0.0');
    assert.equal(branchName, 'release/1.0.0');
    await assertChangelog('release_1.0.0_changelog.md');

    await tester.dispose();
  });
});

function createGitFlow(config?: GFlowConfig): GFlow {
  const avhGitFlow = new AvhGitFlow(testRepoPath);
  config = config ?? {};
  config.projectConfig = config.projectConfig ?? {
    projectPath: testRepoPath,
  };
  config.projectConfig.projectPath = testRepoPath;
  return new GFlow(avhGitFlow, config);
}

async function assertPackageJson(fileName: string): Promise<void> {
  const changelog = await readFile(join(testRepoPath, 'package.json'), 'utf8');
  const refChangelog = await readFile(join(__dirname, 'files', fileName), 'utf8');
  assert.equal(changelog, refChangelog);
}

async function assertChangelog(fileName: string): Promise<void> {
  const changelog = await readFile(join(testRepoPath, 'CHANGELOG.md'), 'utf8');
  // remove all text in brackets (hash values and dates are not unique)
  const cleanedChangelog = changelog.replace(/(\([^)]+\)\)?)/g, '').trim();
  const refChangelog = await readFile(join(__dirname, 'files', fileName), 'utf8');
  assert.equal(cleanedChangelog, refChangelog);
}

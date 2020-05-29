import { resolve, join } from 'path';
import { AvhGitFlow } from '../src/avh/AvhGitFlow';
import { GitFlow } from '../src/api/GitFlow';
import { GitFlowTester } from './GitFlowTester';
import { GFlow } from '../src/gflow/GFlow';
import { assert } from 'chai';
import { readFile } from 'fs-extra';

const testRepoPath = resolve(join('.', 'test_repo'));

describe('Test gFlow implementation', function () {
  this.timeout(0);

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
    await branch.commit('feature.txt', 'feat(scope): Added feature.txt');
    await branch.finish();
    await tester.dispose();
  });

  it('git flow bugfix "#2', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.init();
    const branch = tester.selectBranch('bugfix');
    const branchName = await branch.start('#2');
    assert.equal(branchName, 'bugfix/#2');
    await branch.commit('bugfix.txt', 'fix(scope): Added bugfix.txt');
    await branch.finish();
    await tester.dispose();
  });

  it('git flow release "1.0.0" (auto-version)', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.init();
    const branch = tester.selectBranch('release');
    const branchName = await branch.start();
    assert.equal(branchName, 'release/1.0.0');
    await branch.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');
    await branch.finish(undefined, '1.0.0');
    await tester.dispose();
  });

  it('git flow release "1.0.0" to "1.1.0" (auto-version)', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.init();

    const release110 = tester.selectBranch('release');
    let branchName = await release110.start();
    assert.equal(branchName, 'release/1.0.0');
    await release110.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');

    const feature1 = tester.selectBranch('feature');
    branchName = await feature1.start('#1');
    assert.equal(branchName, 'feature/#1');
    await feature1.commit('feature_2.txt', 'feat(scope): Added feature_2.txt');
    await feature1.finish();

    await release110.finish('1.0.0', '1.0.0');

    const feature2 = tester.selectBranch('feature');
    branchName = await feature2.start('#2');
    assert.equal(branchName, 'feature/#2');
    await feature2.commit('feature_3.txt', 'feat(scope): Added feature_3.txt');
    await feature2.finish();

    const release120 = tester.selectBranch('release');
    branchName = await release120.start();
    assert.equal(branchName, 'release/1.1.0');
    await release120.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');
    await release120.finish(undefined, '1.1.0');

    await tester.dispose();
  });

  it('git flow release "1.0.0" to "2.0.0" (auto-version, Breacking Change)', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.init();

    const release110 = tester.selectBranch('release');
    let branchName = await release110.start();
    assert.equal(branchName, 'release/1.0.0');
    await release110.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');

    const feature1 = tester.selectBranch('feature');
    branchName = await feature1.start('#1');
    assert.equal(branchName, 'feature/#1');
    await feature1.commit(
      'feature_2.txt',
      'feat(scope): Added feature_2.txt\n\nBREAKING CHANGE: API changes\n\ncloses #42',
    );
    await feature1.finish();

    await release110.finish('1.0.0', '1.0.0');

    const feature2 = tester.selectBranch('feature');
    branchName = await feature2.start('#2');
    assert.equal(branchName, 'feature/#2');
    await feature2.commit('feature_3.txt', 'feat(scope): Added feature_3.txt');
    await feature2.finish();

    const release120 = tester.selectBranch('release');
    branchName = await release120.start();
    assert.equal(branchName, 'release/2.0.0');
    await release120.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');
    await assertChangelog('release_changelog.md');
    await release120.finish(undefined, '2.0.0');

    await tester.dispose();
  });

  it('git flow hotfix "1.0.1" (auto-version)', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.init();

    const release = tester.selectBranch('release');
    let branchName = await release.start();
    assert.equal(branchName, 'release/1.0.0');
    await release.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');
    await release.finish(undefined, '1.0.0');

    const hotfix = tester.selectBranch('hotfix');
    branchName = await hotfix.start();
    assert.equal(branchName, 'hotfix/1.0.1');
    await hotfix.commit('hotfix_bugfix.txt', 'fix(scope): Added hotfix_bugfix.txt');
    await hotfix.finish(undefined, '1.0.1');

    await tester.dispose();
  });

  it('git flow hotfix "1.0.1" to "1.0.2" (auto-version)', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.init();

    const release = tester.selectBranch('release');
    let branchName = await release.start();
    assert.equal(branchName, 'release/1.0.0');
    await release.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');
    await release.finish(undefined, '1.0.0');

    const hotfix1 = tester.selectBranch('hotfix');
    branchName = await hotfix1.start();
    assert.equal(branchName, 'hotfix/1.0.1');
    await hotfix1.commit('hotfix_bugfix.txt', 'fix(scope): Added hotfix_bugfix.txt');
    await hotfix1.finish(undefined, '1.0.1');

    const hotfix2 = tester.selectBranch('hotfix');
    branchName = await hotfix2.start();
    assert.equal(branchName, 'hotfix/1.0.2');
    await hotfix2.commit('hotfix_bugfix_2.txt', 'fix(scope): Added hotfix_bugfix_2.txt');
    await hotfix2.finish(undefined, '1.0.2');

    await assertChangelog('hotfix_changelog.md');

    await tester.dispose();
  });

  it('git flow support "1.0.0-lts"', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.init();
    const branch = tester.selectBranch('support');
    const branchName = await branch.start('1.0.0-lts', 'master');
    assert.equal(branchName, 'support/1.0.0-lts');
    await branch.commit('support_feature.txt', 'feat(scope): Added support_feature.txt');
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

    await feature1.finish('#1');
    await bugfix1.finish('#2');

    const release = tester.selectBranch('release');
    const branchName = await release.start('1.0.0');
    assert.equal(branchName, 'release/1.0.0');
    await release.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');
    await release.finish('1.0.0', '1.0.0');

    const support = tester.selectBranch('support');
    await support.start('1.0.0-lts', 'master');
    await support.commit('support_feature.txt', 'feat(scope): Added support_feature.txt');

    await tester.dispose();
  });
});

function createGitFlow(): GitFlow {
  const avhGitFlow = new AvhGitFlow(testRepoPath);
  const gFlow = new GFlow(avhGitFlow, testRepoPath);
  return gFlow;
}

async function assertChangelog(fileName: string): Promise<void> {
  const changelog = await readFile(join(testRepoPath, 'CHANGELOG.md'), 'utf8');
  // remove all text in brackets (hash values and dates are not unique)
  const cleanedChangelog = changelog.replace(/(\([^)]+\)\)?)/g, '').trim();
  const refChangelog = await readFile(join(__dirname, 'files', fileName), 'utf8');
  assert.equal(cleanedChangelog, refChangelog);
}

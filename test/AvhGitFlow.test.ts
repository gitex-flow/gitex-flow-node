import { resolve, join } from 'path';
import { AvhGitFlow } from '../src/avh/AvhGitFlow';
import { GitFlow } from '../src/api/GitFlow';
import { GitFlowTester } from './GitFlowTester';
import { assert } from 'chai';
import { AvhBranchListParser } from '../src/avh/AvhBranchListParser';

const testRepoPath = resolve(join('.', 'test_repo'));

describe('Test AVH git flow implementation', function () {
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

  it('git flow release "1.0.0"', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.init();
    const branch = tester.selectBranch('release');
    const branchName = await branch.start('1.0.0');
    assert.equal(branchName, 'release/1.0.0');
    assert.deepStrictEqual(await branch.list(), ['1.0.0']);
    await branch.commit('release_bugfix.txt', 'fix(scope): Added release_bugfix.txt');
    await branch.finish('1.0.0', '1.0.0');
    assert.deepStrictEqual(await branch.list(), []);
    await tester.dispose();
  });

  it('git flow hotfix "1.0.1"', async function () {
    const tester = new GitFlowTester(createGitFlow(), testRepoPath);
    await tester.init();
    const branch = tester.selectBranch('hotfix');
    const branchName = await branch.start('1.0.1');
    assert.equal(branchName, 'hotfix/1.0.1');
    assert.deepStrictEqual(await branch.list(), ['1.0.1']);
    await branch.commit('hotfix_bugfix.txt', 'fix(scope): Added hotfix_bugfix.txt');
    await branch.finish('1.0.1', '1.0.1');
    assert.deepStrictEqual(await branch.list(), []);
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

    assert.deepStrictEqual(await feature1.list(), []);
    assert.deepStrictEqual(await feature2.list(), []);
    assert.deepStrictEqual(await bugfix1.list(), []);

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

  it('Validate AVH branch list parser', async function () {
    let result = await AvhBranchListParser.parse('  1.0.0');
    assert.deepStrictEqual(result, ['1.0.0']);

    result = await AvhBranchListParser.parse('* 1.0.0\n  1.0.1');
    assert.deepStrictEqual(result, ['1.0.0', '1.0.1']);

    result = await AvhBranchListParser.parse('  1.0.0\n* 1.0.1');
    assert.deepStrictEqual(result, ['1.0.0', '1.0.1']);

    result = await AvhBranchListParser.parse('  #1\n* #2');
    assert.deepStrictEqual(result, ['#1', '#2']);
  });
});

function createGitFlow(): GitFlow {
  return new AvhGitFlow(testRepoPath);
}

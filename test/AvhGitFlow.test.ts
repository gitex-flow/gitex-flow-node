import { assert } from 'chai';
import { Repository, Commit, Reference, Signature, Oid } from 'nodegit';
import { resolve, join } from 'path';
import { copyFile, emptyDir, rmdir } from 'fs-extra';
import { AvhGitFlow } from '../src/avh/AvhGitFlow';

const testRepoPath = resolve(join('.', 'test_repo'));
const fileFolderPath = resolve(join(__dirname, 'files'));
const author = Signature.now('test', 'test@test.com');

describe('Test overall git flow workflow', function () {
  /**
   * Before all unit tests are running, create a new test git repository.
   */
  before(async function () {
    const repo = await createTestRepo(testRepoPath);
    await copyAndCommitFile(repo, 'package.json', 'chore(project): Added package.json');
    const gitFlow = new AvhGitFlow(testRepoPath);
    await gitFlow.init();
  });

  /**
   * After all unit tests have run, delete the test git repository.
   */
  this.afterAll(async function () {
    await emptyDir(testRepoPath);
    await rmdir(testRepoPath);
  });

  it('git flow version', async function () {
    const gitFlow = new AvhGitFlow(testRepoPath);
    const version = await gitFlow.version();
    assert.match(version, /^[0-9]+.[0-9]+.[0-9]+.*/);
  });

  it('git flow init with custom settings', async function () {
    const gitFlow = new AvhGitFlow(testRepoPath);
    await gitFlow.init(
      {
        featureBranchPrefix: 'feat/',
        bugfixBranchPrefix: 'fix/',
        supportBranchPrefix: 'supp/',
        versionTagPrefix: 'v',
      },
      true,
    );
    const config = await gitFlow.config.get();
    assert.equal(config.masterBranch, 'master');
    assert.equal(config.developBranch, 'develop');
    assert.equal(config.featureBranchPrefix, 'feat/');
    assert.equal(config.bugfixBranchPrefix, 'fix/');
    assert.equal(config.releaseBranchName, 'release/');
    assert.equal(config.hotfixBranchPrefix, 'hotfix/');
    assert.equal(config.supportBranchPrefix, 'supp/');
    assert.equal(config.versionTagPrefix, 'v');
  });

  it('git flow init with defaults', async function () {
    const gitFlow = new AvhGitFlow(testRepoPath);
    await gitFlow.init(undefined, true);
    const config = await gitFlow.config.get();
    assert.equal(config.masterBranch, 'master');
    assert.equal(config.developBranch, 'develop');
    assert.equal(config.featureBranchPrefix, 'feature/');
    assert.equal(config.bugfixBranchPrefix, 'bugfix/');
    assert.equal(config.releaseBranchName, 'release/');
    assert.equal(config.hotfixBranchPrefix, 'hotfix/');
    assert.equal(config.supportBranchPrefix, 'support/');
    assert.isUndefined(config.versionTagPrefix);
  });

  it('git flow feature start "#1"', async function () {
    const gitFlow = new AvhGitFlow(testRepoPath);
    await gitFlow.feature.start('#1');
    const repo = await openTestRepo(testRepoPath);
    await copyAndCommitFile(repo, 'feature.txt', 'feat(scope): Added feature.txt', 'refs/heads/feature/#1');
  });

  it('git flow bugfix start "#2"', async function () {
    const gitFlow = new AvhGitFlow(testRepoPath);
    await gitFlow.bugfix.start('#2');
    const repo = await openTestRepo(testRepoPath);
    await copyAndCommitFile(repo, 'bugfix.txt', 'fix(scope): Added bugfix.txt', 'refs/heads/bugfix/#2');
  });

  it('git flow feature finish "#1"', async function () {
    const gitFlow = new AvhGitFlow(testRepoPath);
    if (!(await refExists(testRepoPath, 'refs/heads/feature/#1'))) {
      await gitFlow.feature.start('#1');
    }
    await gitFlow.feature.finish('#1');
  });

  it('git flow bugfix finish "#2"', async function () {
    const gitFlow = new AvhGitFlow(testRepoPath);
    if (!(await refExists(testRepoPath, 'refs/heads/bugfix/#2'))) {
      await gitFlow.bugfix.start('#2');
    }
    await gitFlow.bugfix.finish('#2');
  });

  it('git flow release start "1.0.0"', async function () {
    const gitFlow = new AvhGitFlow(testRepoPath);
    await gitFlow.release.start('1.0.0');
    const repo = await openTestRepo(testRepoPath);
    await copyAndCommitFile(
      repo,
      'release_bugfix.txt',
      'fix(scope): Added release_bugfix.txt',
      'refs/heads/release/1.0.0',
    );
  });

  it('git flow release finish "1.0.0"', async function () {
    const gitFlow = new AvhGitFlow(testRepoPath);
    if (!(await refExists(testRepoPath, 'refs/heads/release/1.0.0'))) {
      await gitFlow.release.start('1.0.0');
    }
    await gitFlow.release.finish('1.0.0', '1.0.0');
  });

  it('git flow support start "1.0.0-lts"', async function () {
    const gitFlow = new AvhGitFlow(testRepoPath);
    await gitFlow.support.start('1.0.0-lts', 'master');
    const repo = await openTestRepo(testRepoPath);
    await copyAndCommitFile(
      repo,
      'support_feature.txt',
      'feat(scope): Added support_feature.txt',
      'refs/heads/support/1.0.0-lts',
    );
  });
});

async function createTestRepo(repoPath: string): Promise<Repository> {
  await emptyDir(repoPath);
  return await Repository.init(repoPath, 0);
}

async function openTestRepo(repoPath: string): Promise<Repository> {
  return await Repository.open(repoPath);
}

async function refExists(repoPath: string, ref: string): Promise<boolean> {
  const repo = await openTestRepo(testRepoPath);
  const refList = await Reference.list(repo);
  return refList.includes(ref);
}

async function copyAndCommitFile(
  repo: Repository,
  relSrcFilePath: string,
  message: string,
  updateRef?: string,
): Promise<Oid> {
  await copyFileToRepo(relSrcFilePath);
  const index = await repo.refreshIndex();
  await index.addByPath(relSrcFilePath);
  await index.write();
  const oid = await index.writeTree();
  let parents: Commit[] = [];
  if (updateRef) {
    const commitID = await Reference.nameToId(repo, updateRef);
    const commit = await repo.getCommit(commitID);
    parents = [commit];
  }
  return await repo.createCommit(updateRef ?? 'HEAD', author, author, message, oid, parents);
}

async function copyFileToRepo(relSrcFilePath: string): Promise<void> {
  const src = join(fileFolderPath, relSrcFilePath);
  const dest = join(testRepoPath, relSrcFilePath);
  await copyFile(src, dest);
}

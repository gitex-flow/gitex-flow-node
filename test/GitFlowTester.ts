import { GitFlow } from '../src/api/GitFlow';
import { tmpdir } from 'os';
import { assert } from 'chai';
import { TestGitRepository } from './TestGitRepository';
import { GitFlowConfig } from '../src/api/GitFlowConfig';
import { GitFlowBranchType, GitFlowBranch, GitFlowBaseBranchType } from '../src/api/branches/GitFlowBranch';
import { join } from 'path';
import { pathExists, copy, ensureDir, emptyDir, rmdir } from 'fs-extra';
import { GitFlowBranchConfig } from '../src/api/GitFlowBranchConfig';

/**
 * Tester for some standard git flow tests.
 */
export class GitFlowTester {
  private static readonly CachedGitFlowRepo = join(tmpdir(), 'GitFlowRepoTemplate');

  private readonly gitFlow: GitFlow;
  private readonly repo: TestGitRepository;

  /**
   * Initializes a new instance of this class.
   *
   * @param gitFlow - Git flow implementation to be tested.
   * @param testRepoPath - Path the test repo is saved to.
   */
  constructor(gitFlow: GitFlow, testRepoPath: string) {
    this.gitFlow = gitFlow;
    this.repo = new TestGitRepository(testRepoPath);
  }

  public async init(): Promise<void> {
    await this.dispose();
    await GitFlowTester.ensureGitFlowRepo(this.gitFlow, this.repo);
  }

  public async dispose(): Promise<void> {
    await this.repo.remove();
  }

  public static async clearCache(): Promise<void> {
    await emptyDir(GitFlowTester.CachedGitFlowRepo);
    await rmdir(GitFlowTester.CachedGitFlowRepo);
  }

  public async assertVersion(): Promise<void> {
    const version = await this.gitFlow.version();
    assert.match(version, /^[0-9]+.[0-9]+.[0-9]+.*/);
  }

  public async assertInit(config?: GitFlowConfig, force?: boolean): Promise<void> {
    await this.repo.ensure();
    await this.gitFlow.init(config, force);
    const activeConfig = await this.gitFlow.config.get();
    assert.equal(activeConfig.masterBranch, config?.masterBranch ?? 'master');
    assert.equal(activeConfig.developBranch, config?.developBranch ?? 'develop');
    assert.equal(activeConfig.featureBranchPrefix, config?.featureBranchPrefix ?? 'feature/');
    assert.equal(activeConfig.bugfixBranchPrefix, config?.bugfixBranchPrefix ?? 'bugfix/');
    assert.equal(activeConfig.releaseBranchPrefix, config?.releaseBranchPrefix ?? 'release/');
    assert.equal(activeConfig.hotfixBranchPrefix, config?.hotfixBranchPrefix ?? 'hotfix/');
    assert.equal(activeConfig.supportBranchPrefix, config?.supportBranchPrefix ?? 'support/');
    assert.equal(activeConfig.versionTagPrefix, config?.versionTagPrefix);
  }

  public async checkoutDevelopBranch(): Promise<void> {
    await this.checkoutBranch('develop');
  }

  public async checkoutBranch(branchName: string): Promise<void> {
    await this.repo.checkout(branchName);
  }

  public selectBranch(type: GitFlowBranchType): TestBranch {
    switch (type) {
      case 'bugfix':
        return new TestBranch(this.gitFlow.bugfix, this.repo);
      case 'feature':
        return new TestBranch(this.gitFlow.feature, this.repo);
      case 'hotfix':
        return new TestBranch(this.gitFlow.hotfix, this.repo);
      case 'release':
        return new TestBranch(this.gitFlow.release, this.repo);
      case 'support':
        return new TestBranch(this.gitFlow.support, this.repo);
      default:
        throw new Error(`Type "${type}" is not supported.`);
    }
  }

  private static async ensureGitFlowRepo(gitFlow: GitFlow, repo: TestGitRepository): Promise<void> {
    const cachePath = GitFlowTester.CachedGitFlowRepo;
    if (await pathExists(cachePath)) {
      await copy(cachePath, repo.getRepoPath());
    } else {
      await repo.commitTestFile('package.json', 'chore(project): Added package.json');
      await gitFlow.init();
      await ensureDir(cachePath);
      await copy(repo.getRepoPath(), cachePath);
    }
  }
}

/**
 * A GitFlowBranch with some extended functionality for easier unit tests.
 */
export class TestBranch implements GitFlowBranch {
  private branch: GitFlowBranch;
  private repo: TestGitRepository;
  private branchName?: string;

  public type: GitFlowBranchType;

  public defaultBase: GitFlowBaseBranchType;

  /**
   * Initializes a new instance of this class.
   *
   * @param branch - Branch to be wrapped.
   * @param repo - The test repo.
   */
  constructor(branch: GitFlowBranch, repo: TestGitRepository) {
    this.branch = branch;
    this.repo = repo;
    this.type = branch.type;
    this.defaultBase = branch.defaultBase;
  }

  public getConfig(): Promise<GitFlowBranchConfig> {
    return this.branch.getConfig();
  }

  public list(): Promise<string[]> {
    return this.branch.list();
  }

  public async start(name?: string | undefined, base?: string | undefined): Promise<string> {
    this.branchName = await this.branch.start(name, base);
    return this.branchName;
  }

  public async finish(name?: string | undefined, msg?: string | undefined): Promise<void> {
    await this.branch.finish(name, msg);
  }

  public async commit(fileName: string, msg: string): Promise<void> {
    if (!this.branchName) {
      throw new Error('Branch was not started.');
    }
    await this.repo.checkout(this.branchName);
    await this.repo.commitTestFile(fileName, msg);
  }
}

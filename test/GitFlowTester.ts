import { GitFlow } from '../src/api/GitFlow';
import { assert } from 'chai';
import { TestGitRepository } from './TestGitRepository';
import { GitFlowConfig } from '../src/api/GitFlowConfig';
import { BranchType, GitFlowBranch } from '../src/api/branches/GitFlowBranch';

/**
 * Tester for some standard git flow tests.
 */
export class GitFlowTester {
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
    await this.repo.remove();
    await this.repo.commitTestFile('package.json', 'chore(project): Added package.json');
    await this.gitFlow.init();
  }

  public async dispose(): Promise<void> {
    await this.repo.remove();
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
    assert.equal(activeConfig.releaseBranchName, config?.releaseBranchName ?? 'release/');
    assert.equal(activeConfig.hotfixBranchPrefix, config?.hotfixBranchPrefix ?? 'hotfix/');
    assert.equal(activeConfig.supportBranchPrefix, config?.supportBranchPrefix ?? 'support/');
    assert.equal(activeConfig.versionTagPrefix, config?.versionTagPrefix);
  }

  public selectBranch(type: BranchType): TestBranch {
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
        throw new Error(`Type ${type} is not supported.`);
    }
  }
}

/**
 * A GitFlowBranch with some extended functionality for easier unit tests.
 */
export class TestBranch implements GitFlowBranch {
  private branch: GitFlowBranch;
  private repo: TestGitRepository;
  private ref?: string;

  public type: BranchType;

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
  }

  public list(): Promise<string[]> {
    return this.branch.list();
  }

  public async start(name?: string | undefined, base?: string | undefined): Promise<string> {
    this.ref = await this.branch.start(name, base);
    console.log(this.ref);
    return this.ref;
  }

  public async finish(name?: string | undefined, msg?: string | undefined): Promise<void> {
    await this.branch.finish(name, msg);
  }

  public async commit(fileName: string, msg: string): Promise<void> {
    if (!this.ref) {
      throw new Error('Branch was not started.');
    }
    await this.repo.checkout(this.ref);
    await this.repo.commitTestFile(fileName, msg);
  }
}

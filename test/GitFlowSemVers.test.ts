import { assert } from 'chai';
import { GitFlowSemVers } from '../src/tools/GitFlowSemVers';

describe('Test semantic versioning', function () {
  it('should exclusively allow semantic versions', async function () {
    const semVer = new GitFlowSemVers();
    assert.isUndefined(await semVer.calculateBranchVersion('release', '#37'));
    assert.isUndefined(await semVer.calculateBranchVersion('release', '1.2'));
    assert.isUndefined(await semVer.calculateBranchVersion('release', '4,3'));
    assert.equal(await semVer.calculateBranchVersion('release', '1.2.3'), '1.2.3');

    assert.isUndefined(await semVer.calculateBranchVersion('hotfix', '#37'));
    assert.isUndefined(await semVer.calculateBranchVersion('hotfix', '1.2'));
    assert.isUndefined(await semVer.calculateBranchVersion('hotfix', '4,3'));
    assert.equal(await semVer.calculateBranchVersion('hotfix', '1.2.3'), '1.2.3');

    assert.equal(await semVer.calculateBranchVersion('feature', '1.2.3'), '1.2.3');
    assert.equal(await semVer.calculateBranchVersion('feature', '#37'), '#37');

    assert.equal(await semVer.calculateBranchVersion('bugfix', '1.2.3'), '1.2.3');
    assert.equal(await semVer.calculateBranchVersion('bugfix', '#37'), '#37');

    assert.equal(await semVer.calculateBranchVersion('support', '1.2.3'), '1.2.3');
    assert.equal(await semVer.calculateBranchVersion('support', '#37'), '#37');
  });
});

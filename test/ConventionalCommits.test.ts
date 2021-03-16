import { assert } from 'chai';
import { Utils } from '../src/tools/Utils';

describe('Test ConventionCommits implementation', function () {
  it('should parse complex conventional commit messages', async function () {
    const logs = await Utils.parseConventionalCommits([
      `fix(service): Removed support of unencrypted HTTP protocol
      
      This unencrypted protocol has led to several vulnerabilities in the framework.
      
      SECURITY: Only encrypted protocols are now allowed
      BREAKING CHANGE: Removed HTTP endpoint in web service.
      
      closes #941, refs #1094, #1100
      `,
    ]);

    assert.equal(logs[0].type, 'fix');
    assert.equal(logs[0].scope, 'service');
    assert.equal(logs[0].subject, 'Removed support of unencrypted HTTP protocol');
    assert.isNull(logs[0].merge);
    assert.deepStrictEqual(logs[0].notes, [
      {
        title: 'SECURITY',
        text: 'Only encrypted protocols are now allowed',
      },
      {
        title: 'BREAKING CHANGE',
        text: 'Removed HTTP endpoint in web service.\n      ',
      },
    ]);
    assert.deepStrictEqual(logs[0].references, [
      {
        action: 'closes',
        owner: null,
        repository: null,
        issue: '941',
        raw: '#941',
        prefix: '#',
      },
      {
        action: 'refs',
        owner: null,
        repository: null,
        issue: '1094',
        raw: '#1094',
        prefix: '#',
      },
      {
        action: 'refs',
        owner: null,
        repository: null,
        issue: '1100',
        raw: ', #1100',
        prefix: '#',
      },
    ]);
  });
});

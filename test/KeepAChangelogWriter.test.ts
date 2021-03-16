import { assert } from 'chai';
import { emptyDir, readFile, remove } from 'fs-extra';
import { join, resolve } from 'path';
import { KeepAChangelogWriter } from '../src/changelog/KeepAChangelogWriter';
import { Utils } from '../src/tools/Utils';

const testTmpPath = resolve(join('.', 'test_tmp'));
const changelogPath = join(testTmpPath, 'CHANGELOG.md');

describe('Test Keep-A-Changelog writer implementation', function () {
  this.beforeAll(async () => {
    await emptyDir(testTmpPath);
  });

  this.afterAll(async () => {
    await remove(testTmpPath);
  });

  it('should create, parse and append changelog', async function () {
    const logs = await Utils.parseConventionalCommits([
      `feat(test): Added feature test.txt

      closes #78`,
      `fix(test): Fixed errors in test.txt

      closes #80`,
      `fix(service): Removed support of unencrypted HTTP protocol

      This unencrypted protocol has led to several vulnerabilities in the framework.
      
      SECURITY: Only encrypted protocols are now allowed
      BREAKING CHANGE: Removed HTTP endpoint in web service.
      
      closes #941, refs #1094, #1100`,
      `Merge tag '1.4.4' into develop

      1.4.4 1.4.4`,
    ]);
    const writer = new KeepAChangelogWriter({
      basePath: testTmpPath,
    });
    await writer.write(
      {
        version: '1.0.0',
        title: 'Test project',
        repoUrl: 'https://github.com/gitex-flow/gitex-flow-node',
      },
      [logs[0]],
    );
    assert.equal(
      await readFile(changelogPath, 'utf8'),
      await readFile(resolve(join(__dirname, 'files', 'KaC_1_0_0.md')), 'utf8'),
    );

    await writer.write(
      {
        version: '1.0.1',
        title: 'Test project',
        repoUrl: 'https://github.com/gitex-flow/gitex-flow-node',
      },
      [logs[1]],
    );
    assert.equal(
      await readFile(changelogPath, 'utf8'),
      await readFile(resolve(join(__dirname, 'files', 'KaC_1_1_0.md')), 'utf8'),
    );

    await writer.write(
      {
        version: '2.0.0',
        title: 'Test project',
        repoUrl: 'https://github.com/gitex-flow/gitex-flow-node',
      },
      [logs[2]],
    );
    assert.equal(
      await readFile(changelogPath, 'utf8'),
      await readFile(resolve(join(__dirname, 'files', 'KaC_2_0_0.md')), 'utf8'),
    );
    await writer.write(
      {
        version: '2.0.1',
        title: 'Test project',
        repoUrl: 'https://github.com/gitex-flow/gitex-flow-node',
      },
      [logs[3]],
    );
    assert.equal(
      await readFile(changelogPath, 'utf8'),
      await readFile(resolve(join(__dirname, 'files', 'KaC_2_0_1.md')), 'utf8'),
    );
  });
});

import { readFile } from 'fs-extra';
import { join } from 'path';
import { ChangelogWriterFactory } from '.';
import { ChangelogConfig } from '../configs';
import { ConfigDefaulter } from '../configs/ConfigDefaulter';
import { ProjectConfig } from '../configs/ProjectConfig';
import { GitRepository } from '../git';
import { GitFlowNodeProject } from '../tools';
import { ChangelogWriterOptions } from './ChangelogWriter';

/**
 * A changelog manager that provides functions for viewing, generating and updating changelogs.
 */
export class ProjectChangelog {
  private options: ProjectConfig;

  /**
   * Initializes a new instance of this class.
   *
   * @param options - Options of the git flow node project instance.
   */
  constructor(options?: ProjectConfig) {
    this.options = ConfigDefaulter.ensureProjectConfigDefaults(options);
  }

  /**
   * Prints the changelog to the console.
   */
  public async show(): Promise<void> {
    const changelogConfig = this.options.changelog as ChangelogConfig<ChangelogWriterOptions>;
    const changelogPath = join(this.options.projectPath, changelogConfig.changelogFileName ?? 'CHANGELOG.md');
    const changelog = await readFile(changelogPath, 'utf8');
    console.info(changelog);
  }

  /**
   * Prints the unreleased changes as a changelog to the console.
   */
  public async showUnreleasedChanges(): Promise<void> {
    let unreleasedChangelog = 'No changes available.';
    const changelogConfig = this.options.changelog as ChangelogConfig<ChangelogWriterOptions>;
    const changelogWriter = ChangelogWriterFactory.create(changelogConfig);
    if (changelogWriter) {
      const gitRepository = new GitRepository(this.options);
      const logs = await gitRepository.getLogsSinceLastRelease();
      const project = new GitFlowNodeProject(this.options);
      const context = await project.getContext('Unreleased Changes');
      unreleasedChangelog = await changelogWriter.getUnreleasedChangelog(context, logs);
    }
    console.info(unreleasedChangelog);
  }

  /**
   * Updates the changelog with the changes since the last release.
   *
   * @param version - Version the changelog is created for.
   * @param name - Name of the release.
   */
  public async update(version?: string, name?: string): Promise<void> {
    const changelogConfig = this.options.changelog as ChangelogConfig<ChangelogWriterOptions>;
    const changelogWriter = ChangelogWriterFactory.create(changelogConfig);
    if (changelogWriter) {
      const gitRepository = new GitRepository(this.options);
      const logs = await gitRepository.getLogsSinceLastRelease();
      const project = new GitFlowNodeProject(this.options);
      const context = await project.getContext(version, name);
      await changelogWriter.write(context, logs);
    }
  }
}

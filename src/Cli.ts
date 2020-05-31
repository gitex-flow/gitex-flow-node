import { Command } from 'commander';
import { AvhGitFlow } from './avh/AvhGitFlow';
import { GFlow } from './gflow/GFlow';

const command = new Command('git flow');
const gitFlow = new AvhGitFlow();
const gFlow = new GFlow(gitFlow);

// Init command
command.command('init').action(async () => {
  await gFlow.init();
});

// Feature command
const feature = command.command('feature');
feature.command('start <name>').action(async (name: string) => {
  await gFlow.feature.start(name);
});
feature.command('finish [name]').action(async (name: string) => {
  await gFlow.feature.finish(name);
});

// BugFix command
const bugfix = command.command('bugfix');
bugfix.command('start <name>').action(async (name: string) => {
  await gFlow.bugfix.start(name);
});
bugfix.command('finish [name]').action(async (name: string) => {
  await gFlow.bugfix.finish(name);
});

// Release command
const release = command.command('release');
release.command('start').action(async () => {
  await gFlow.release.start();
});
release.command('finish').action(async () => {
  await gFlow.release.finish();
});

// HotFix command
const hotfix = command.command('hotfix');
hotfix.command('start').action(async () => {
  await gFlow.hotfix.start();
});
hotfix.command('finish').action(async () => {
  await gFlow.hotfix.finish();
});

// support command
const support = command.command('support');
support.command('start <name>').action(async (name: string) => {
  await gFlow.support.start(name);
});
support.command('finish [name]').action(async (name: string) => {
  await gFlow.support.finish(name);
});

command.parse(process.argv);

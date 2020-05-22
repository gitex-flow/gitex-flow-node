import { Command } from 'commander';
import { AvhGitFlow } from './avh/AvhGitFlow';

const command = new Command('git flow');
const gitFlow = new AvhGitFlow();

// Feature command
const feature = command.command('feature');
feature.command('start <name>').action(async (name: string) => {
  await gitFlow.feature.start(name);
});
feature.command('finish [name]').action(async (name: string) => {
  await gitFlow.feature.finish(name);
});

// BugFix command
const bugfix = command.command('bugfix');
bugfix.command('start <name>').action(async (name: string) => {
  await gitFlow.bugfix.start(name);
});
bugfix.command('finish [name]').action(async (name: string) => {
  await gitFlow.bugfix.finish(name);
});

// Release command
const release = command.command('release');
release.command('start').action(async () => {
  await gitFlow.release.start();
});
release.command('finish').action(async () => {
  await gitFlow.release.finish();
});

// HotFix command
const hotfix = command.command('hotfix');
hotfix.command('start').action(async () => {
  await gitFlow.hotfix.start(name);
});
hotfix.command('finish').action(async () => {
  await gitFlow.hotfix.finish(name);
});

// support command
const support = command.command('support');
support.command('start <name>').action(async (name: string) => {
  await gitFlow.support.start(name);
});
support.command('finish [name]').action(async (name: string) => {
  await gitFlow.support.finish(name);
});

command.parse(process.argv);

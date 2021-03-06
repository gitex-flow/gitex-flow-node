#!/usr/bin/env node

import { Command } from 'commander';
import { AvhGitFlow } from './avh/AvhGitFlow';
import { GFlow } from './gflow/GFlow';
import { Utils } from './tools/Utils';
import { GFlowConfigLoader } from './tools/GFlowConfigLoader';

const command = new Command('git flow');
const gitFlow = new AvhGitFlow();

const gFlowConfig = GFlowConfigLoader.load();

const gFlow = new GFlow(gitFlow, gFlowConfig);

// Init command
command.command('init').action(async () => {
  await Utils.exec(() => gFlow.init());
});

// Config command
command.command('config').action(async () => {
  await Utils.exec(() => Utils.printConfig(gFlow));
});

// Feature command
const feature = command.command('feature').action(async () => {
  await Utils.exec(() => Utils.printBranches(gFlow.feature));
});
feature.command('start <name>').action(async (name: string) => {
  await Utils.exec(() => gFlow.feature.start(name));
});
feature.command('finish [name]').action(async (name?: string) => {
  await Utils.exec(() => gFlow.feature.finish(name));
});

// BugFix command
const bugfix = command.command('bugfix').action(async () => {
  await Utils.exec(() => Utils.printBranches(gFlow.bugfix));
});
bugfix.command('start <name>').action(async (name: string) => {
  await Utils.exec(() => gFlow.bugfix.start(name));
});
bugfix.command('finish [name]').action(async (name?: string) => {
  await Utils.exec(() => gFlow.bugfix.finish(name));
});

// Release command
const release = command.command('release').action(async () => {
  await Utils.exec(() => Utils.printBranches(gFlow.release));
});
release.command('start [name]').action(async (name?: string) => {
  await Utils.exec(() => gFlow.release.start(name));
});
release.command('finish [name]').action(async (name?: string) => {
  await Utils.exec(() => gFlow.release.finish(name));
});

// HotFix command
const hotfix = command.command('hotfix').action(async () => {
  await Utils.exec(() => Utils.printBranches(gFlow.hotfix));
});
hotfix.command('start [name]').action(async (name?: string) => {
  await Utils.exec(() => gFlow.hotfix.start(name));
});
hotfix.command('finish [name]').action(async (name?: string) => {
  await Utils.exec(() => gFlow.hotfix.finish(name));
});

// support command
const support = command.command('support').action(async () => {
  await Utils.exec(() => Utils.printBranches(gFlow.support));
});
support.command('start <name> [base]').action(async (name: string, base?: string) => {
  await Utils.exec(() => gFlow.support.start(name, base));
});
support.command('finish [name]').action(async (name?: string) => {
  await Utils.exec(() => gFlow.support.finish(name));
});

command.parse(process.argv);

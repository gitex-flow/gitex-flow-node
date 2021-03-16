declare module 'keep-a-changelog' {
  export type ChangeType = 'added' | 'changed' | 'deprecated' | 'removed' | 'fixed' | 'security';
  
  export class Change {
    constructor(title: string, description?: string);
  }
  export class Changelog {
    releases: Release[];
    head?: string;
    url?: string;
    constructor(title?: string, description?: string);
    addRelease(release: Release): Changelog;
    toString(): string;
  }
  export class Release {
    constructor(version: string, date: Date | string, description?: string)
    addChange(type: ChangeType, change: Change | string): Release;
  }
  export function parser(changelog: string): Changelog;
}
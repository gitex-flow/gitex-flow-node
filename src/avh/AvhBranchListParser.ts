/**
 * Parser of the AVH branch list retrieved by 'git flow <branchName> list'.
 */
export class AvhBranchListParser {
  /**
   * Parses the shell answer of AVH implementation.
   *
   * @param list - List retrived by the shell command 'git flow <branchName> list'.
   *
   * @returns The branch list.
   */
  public static async parse(list: string): Promise<string[]> {
    // No '*' branches exists
    if (list.startsWith('No ')) {
      return [];
    }
    const matches = list.match(/^[\s\\*]{2}.+$/gm);
    return matches?.map((m) => m.substr(2)) ?? [];
  }
}

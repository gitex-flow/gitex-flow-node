/**
 * Configuration of a git flow instance.
 */
export interface GitFlowConfig {
  masterBranch?: string;
  developBranch?: string;
  featureBranchPrefix?: string;
  bugfixBranchPrefix?: string;
  releaseBranchPrefix?: string;
  hotfixBranchPrefix?: string;
  supportBranchPrefix?: string;
  versionTagPrefix?: string;
}

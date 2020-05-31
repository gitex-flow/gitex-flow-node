import { BranchType } from '../../api/branches/GitFlowBranch';
import { AvhGitFlowBranch } from './AvhGitFlowBranch';

/**
 * This class implements a generic AVH git flow branch.
 */
export class GenericAvhGitFlowBranch extends AvhGitFlowBranch {
  public readonly type: BranchType;

  /**
   * Initializes a new instance of this class.
   *
   * @param type - The type of the branch.
   * @param repoPath - The path to the git repository.
   */
  constructor(type: BranchType, repoPath?: string) {
    super(repoPath);
    this.type = type;
  }
}

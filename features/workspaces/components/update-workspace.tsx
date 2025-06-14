import { Workspace } from "../types";
import { UpdateWorkspaceForm } from "./update-workspace-form";
import { WorkspaceAvatar } from "./workspace-avatar";

export function UpdateWorkspace({ workspace }: { workspace: Workspace }) {
  return (
    <div className="space-y-2">
      <div className="space-y-0.5">
        <h2 className="text-xl">Workspace info</h2>
        <p className="text-sm font-light">Update workspace name.</p>
      </div>
      <WorkspaceAvatar className="size-16 text-2xl" name={workspace.name} />
      <UpdateWorkspaceForm workspace={workspace} />
    </div>
  );
}

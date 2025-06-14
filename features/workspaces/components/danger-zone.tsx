import { Workspace } from "../types";
import { DeleteWorkspaceForm } from "./delete-workspace-form";

export function DangerZone({ workspace }: { workspace: Workspace }) {
  return (
    <div className="space-y-2">
      <div className="space-y-0.5">
        <h2 className="text-xl text-destructive">Danger Zone</h2>
        <p className="text-sm font-light text-destructive">
          Delete your workspace. This action cannot be undone.
        </p>
      </div>
      <DeleteWorkspaceForm workspaceId={workspace.id} />
    </div>
  )
}

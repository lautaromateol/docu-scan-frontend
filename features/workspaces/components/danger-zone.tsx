import { AlertTriangle, Trash } from "lucide-react";
import { Workspace } from "../types";
import { DeleteWorkspaceForm } from "./delete-workspace-form";

export function DangerZone({ workspace }: { workspace: Workspace }) {
  return (
    <div className="space-y-3 p-4 rounded-md border-t-4 border-t-destructive/60 shadow-card border border-border bg-card">
      <div className="flex items-center gap-x-2">
        <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-2">
          <AlertTriangle className="text-destructive" />
        </div>
        <div className="space-y-0.5">
          <p className="text-xl font-semibold text-destructive">Danger Zone</p>
          <p className="text-sm md:text-base text-muted-foreground">
            Irreversible actions that will permanently affect your workspace and
            all associated data.
          </p>
        </div>
      </div>
      <div className="rounded-md bg-destructive/10 border border-destructive/20 space-y-4 p-4">
        <div className="space-y-0.5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-destructive">Delete Workspace</p>
            <div className="flex items-center gap-x-1 text-xs text-destructive">
              <AlertTriangle className="size-4" />
              Irreversible Action
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            This action cannot be undone and will immediately:
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-6 text-muted-foreground text-sm">
          <div className="flex flex-col gap-y-3">
            <li>Permanently delete all workspace data</li>
            <li>Remove all team members immediately</li>
          </div>
          <div className="flex flex-col gap-y-3">
            <li>Cancel active subscriptions</li>
            <li>Delete all projects and files</li>
          </div>
        </ul>
        <DeleteWorkspaceForm workspaceId={workspace.id} />
      </div>
    </div>
  );
}

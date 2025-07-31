import { AlertTriangle, Trash } from "lucide-react";
import { Workspace } from "../types";
import { DeleteWorkspaceForm } from "./delete-workspace-form";

export function DangerZone({ workspace }: { workspace: Workspace }) {
  return (
    <div className="space-y-3 p-4 rounded-md border-rose-700 border-t-4 shadow-md">
      <div className="flex items-center gap-x-2">
        <div className="rounded-lg border border-indigo-200 p-2">
          <AlertTriangle className="text-rose-600" />
        </div>
        <div className="space-y-0.5">
          <p className="text-xl font-semibold text-rose-700">Danger Zone</p>
          <p className="text-base text-gray-500">
            Irreversible actions that will permanently affect your workspace and
            all associated data.
          </p>
        </div>
      </div>
      <div className="rounded-md bg-rose-100 space-y-4 p-4">
        <div className="space-y-0.5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-red-700">Delete Workspace</p>
            <div className="flex items-center gap-x-1 text-xs text-red-700">
              <AlertTriangle className="size-4" />
              Irreversible Action
            </div>
          </div>
          <p className="text-sm text-gray-500">
            This action cannot be undone and will immediately:
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-6 text-gray-500 text-sm">
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

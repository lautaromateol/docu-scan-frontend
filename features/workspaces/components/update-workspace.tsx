import { Sparkles } from "lucide-react";
import { Workspace } from "../types";
import { UpdateWorkspaceForm } from "./update-workspace-form";
import { WorkspaceAvatar } from "./workspace-avatar";

export function UpdateWorkspace({ workspace }: { workspace: Workspace }) {
  return (
    <div className="space-y-3 p-4 rounded-md hover:border hover:border-t-4 border-indigo-700 border-t-4 shadow transition-all hover:shadow-indigo-300 hover:shadow-md hover:scale-101">
      <div className="flex items-center gap-x-2">
        <div className="rounded-lg border border-indigo-200 p-2">
          <Sparkles className="text-indigo-600" />
        </div>
        <div className="space-y-0.5">
          <p className="text-xl font-semibold">Workspace Identity</p>
          <p className="text-sm md:text-base text-gray-500">
            Define your workspace identity and make it recognizable to your team
            members.
          </p>
        </div>
      </div>
      <WorkspaceAvatar
        className="size-12 md:size-14 lg:size-16 text-lg md:text-xl lg:text-2xl"
        name={workspace.name}
      />
      <UpdateWorkspaceForm workspace={workspace} />
      <p className="text-xs text-gray-600">
        This name will appear in invitations and throughout the workspace
        interface.
      </p>
    </div>
  );
}

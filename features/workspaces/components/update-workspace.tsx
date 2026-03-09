import { Sparkles } from "lucide-react";
import { Workspace } from "../types";
import { UpdateWorkspaceForm } from "./update-workspace-form";
import { WorkspaceAvatar } from "./workspace-avatar";

export function UpdateWorkspace({ workspace }: { workspace: Workspace }) {
  return (
    <div className="space-y-3 p-4 rounded-md border-t-4 border-t-primary/60 border border-border shadow-card bg-card transition-all duration-200 hover:shadow-modal hover:border-primary/30">
      <div className="flex items-center gap-x-2">
        <div className="rounded-lg border border-primary/20 bg-primary/10 p-2">
          <Sparkles className="text-primary" />
        </div>
        <div className="space-y-0.5">
          <p className="text-xl font-semibold">Workspace Identity</p>
          <p className="text-sm md:text-base text-muted-foreground">
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
      <p className="text-xs text-muted-foreground">
        This name will appear in invitations and throughout the workspace
        interface.
      </p>
    </div>
  );
}

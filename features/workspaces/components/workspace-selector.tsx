"use client"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Workspace } from "../types";
import { useWorkspaceId } from "../hooks/use-workspace-id";
import { useRouter } from "next/navigation";

interface WorkspaceSelectorProps {
  workspaces: Workspace[];
}

export function WorkspaceSelector({ workspaces }: WorkspaceSelectorProps) {
  const workspaceId = useWorkspaceId();
  const router = useRouter();

  function onValueChange(workspaceId: string) {
    router.push(`/dashboard/workspace/${workspaceId}`);
  }

  return (
    <Select value={workspaceId} onValueChange={onValueChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select a workspace" />
      </SelectTrigger>
      <SelectContent>
        {workspaces.map((workspace) => (
          <SelectItem value={workspace.id} key={workspace.id}>
            <div className="flex items-center gap-x-4">
              <div className="flex items-center justify-center rounded-full bg-primary/15 text-primary font-medium size-6">
                {workspace.name.at(0)?.toUpperCase()}
              </div>
              <p className="text-sm font-light">{workspace.name}</p>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

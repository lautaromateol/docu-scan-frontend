
import { getWorkspaces } from "@/features/workspaces/actions/get-workspaces";
import { CreateWorkspaceButton } from "@/features/workspaces/components/create-workspace-button";
import { WorkspaceSelector } from "@/features/workspaces/components/workspace-selector";
import { UploadContractButton } from "@/features/contracts/components/upload-contract-button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export async function Navbar() {
  const workspaces = await getWorkspaces();

  return (
    <header className="h-14 px-4 flex items-center justify-between border-b border-border bg-background shadow-card">
      <SidebarTrigger />
      <div className="flex items-center gap-x-0.5">
        <UploadContractButton />
        <CreateWorkspaceButton />
        <WorkspaceSelector workspaces={workspaces} />
      </div>
    </header>
  );
}

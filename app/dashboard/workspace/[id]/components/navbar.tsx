import { redirect } from "next/navigation";
import { MemberAvatar } from "@/features/members/components/member-avatar";
import { getUser } from "@/features/users/actions/get-user";
import { getWorkspaces } from "@/features/workspaces/actions/get-workspaces";
import { CreateWorkspaceButton } from "@/features/workspaces/components/create-workspace-button";
import { WorkspaceSelector } from "@/features/workspaces/components/workspace-selector";
import { UploadContractButton } from "@/features/contracts/components/upload-contract-button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export async function Navbar() {
  const user = await getUser();
  const workspaces = await getWorkspaces();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <header className="h-14 p-4 flex items-center justify-between border-b shadow-xs">
      <SidebarTrigger />
      <div className="flex items-center gap-x-6">
        <div className="flex items-center gap-x-0.5">
          <UploadContractButton />
          <CreateWorkspaceButton />
          <WorkspaceSelector workspaces={workspaces} />
        </div>
        <MemberAvatar
          name={user.name}
          pictureUrl={user.pictureUrl}
          className="size-10"
        />
      </div>
    </header>
  );
}

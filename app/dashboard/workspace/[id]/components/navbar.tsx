import { redirect } from "next/navigation";
import { MemberAvatar } from "@/features/members/components/member-avatar";
import { getUser } from "@/features/users/actions/get-user";
import { getWorkspaces } from "@/features/workspaces/actions/get-workspaces";
import { CreateWorkspaceButton } from "@/features/workspaces/components/create-workspace-button";
import { WorkspaceSelector } from "@/features/workspaces/components/workspace-selector";

export async function Navbar() {
  const user = await getUser();
  const workspaces = await getWorkspaces();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <header className="h-14 p-4 flex items-center justify-end border-b shadow-xs">
      <div className="flex items-center gap-x-6">
        <div className="flex items-center gap-x-0.5">
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

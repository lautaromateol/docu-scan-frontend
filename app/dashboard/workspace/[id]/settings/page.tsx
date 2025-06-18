import { Separator } from "@/components/ui/separator";
import { getWorkspace } from "@/features/workspaces/actions/get-workspace";
import { DangerZone } from "@/features/workspaces/components/danger-zone";
import { InviteMembers } from "@/features/workspaces/components/invite-members";
import { UpdateWorkspace } from "@/features/workspaces/components/update-workspace";

export default async function WorkspaceSettingsPage({ params }: any) {
  const { id } = await params;
  const workspace = await getWorkspace(id);

  if (!workspace) {
    throw new Error();
  }

  return (
    <div className="space-y-6">
      <div className="space-y-0.5">
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-base font-light">
          Update your workspace name, invite members and more.
        </p>
      </div>
      <Separator className="w-full" />
      <UpdateWorkspace workspace={workspace} /> 
      <InviteMembers workspace={workspace} />
      <DangerZone workspace={workspace} />
    </div>
  );
}

import { getWorkspace } from "@/features/workspaces/actions/get-workspace";
import { DangerZone } from "@/features/workspaces/components/danger-zone";
import { InviteMembers } from "@/features/workspaces/components/invite-members";
import { UpdateWorkspace } from "@/features/workspaces/components/update-workspace";
import { Settings } from "lucide-react";

export default async function WorkspaceSettingsPage({ params }: any) {
  const { id } = await params;
  const workspace = await getWorkspace(id);

  if (!workspace) {
    throw new Error();
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-3 mx-auto w-1/2">
        <div className="rounded-lg shadow-md p-2 md:p-4 bg-gradient-to-r from-indigo-700 to-indigo-900 w-auto">
          <Settings className="text-white" />
        </div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">Workspace Settings</h1>
        <p className="text-lg md:text-xl text-gray-600 md:text-center">
          Customize your workspace, manage team access, and configure security
          settings with enterprise-grade controls.
        </p>
      </div>
      <UpdateWorkspace workspace={workspace} />
      <InviteMembers workspace={workspace} />
      <DangerZone workspace={workspace} />
    </div>
  );
}

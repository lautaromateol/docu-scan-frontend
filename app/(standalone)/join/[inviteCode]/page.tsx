import { getWorkspaceInfo } from "@/features/workspaces/actions/get-workspace-info";
import { JoinWorkspaceForm } from "@/features/workspaces/components/join-workspace-form";
import { WorkspaceAvatar } from "@/features/workspaces/components/workspace-avatar";

export default async function JoinPage({ params }: any) {
  const { inviteCode } = await params;

  const workspace = await getWorkspaceInfo(inviteCode);

  if (!workspace) {
    return (
      <div className="space-y-8">
        <div className="space-y-0.5">
          <h2 className="text-3xl font-medium text-center">404.</h2>
          <p className="text-slate-500 font-light text-sm text-center">
            This workspace does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="space-y-0.5">
        <h2 className="text-3xl font-medium text-center">
          You have been invited to join a workspace.
        </h2>
        <p className="text-slate-500 font-light text-sm text-center">
          Accept the invitation and start working now with your team-mates.
        </p>
      </div>
      <div className="flex items-center gap-x-2 justify-center">
        <WorkspaceAvatar className="size-16 text-2xl" name={workspace.name} />
        <p className="text-xl font-semibold">{workspace.name}</p>
      </div>
      <JoinWorkspaceForm inviteCode={inviteCode} workspaceId={workspace.id} />
    </div>
  );
}

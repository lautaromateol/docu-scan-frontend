import { ResponsiveModal } from "@/components/responsive-modal";
import { CreateWorkspaceForm } from "@/features/workspaces/components/create-workspace-form";
import { useOpenCreateWorkspace } from "../hooks/use-open-create-workspace";

export function CreateWorkspaceModal() {
  const { isOpen, close } = useOpenCreateWorkspace();

  if (isOpen) {
    return (
      <ResponsiveModal
        title="Create workspace"
        description="Invite your team-mates or colleagues to start working together now."
        open={isOpen}
        onOpenChange={close}
      >
        <CreateWorkspaceForm />
      </ResponsiveModal>
    );
  }
}

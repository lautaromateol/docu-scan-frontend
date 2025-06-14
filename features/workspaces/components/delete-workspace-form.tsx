"use client";
import { Button } from "@/components/ui/button";
import { useDeleteWorkspace } from "../hooks/use-delete-workspace";
import { useConfirm } from "@/hooks/use-confirm";

export function DeleteWorkspaceForm({ workspaceId }: { workspaceId: string }) {
  const { deleteWorkspace, isDeletingWorkspace } =
    useDeleteWorkspace(workspaceId);

  const [ConfirmationDialog, confirm] = useConfirm(
    "Delete workspace",
    "This action cannot be undone."
  );

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const ok = await confirm();
        if (ok) {
          deleteWorkspace();
        }
      }}
    >
      <ConfirmationDialog />
      <Button
        variant="destructive"
        className="w-1/3 mt-2"
        disabled={isDeletingWorkspace}
      >
        Delete workspace
      </Button>
    </form>
  );
}

import { useMutation } from "@tanstack/react-query";
import { createWorkspace as createWorkspaceAction } from "../actions/create-workspace";
import { CreateWorkspace, Workspace } from "../types";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type ResponseType = {
  success: boolean;
  statusCode: number;
  workspace: Workspace;
};

export function useCreateWorkspace() {
  const router = useRouter();

  const {
    mutate: createWorkspace,
    isPending: isCreatingWorkspace,
    isError,
    error,
  } = useMutation<ResponseType, Error, CreateWorkspace>({
    mutationFn: async (workspace) => {
      const data = await createWorkspaceAction(workspace);

      if (data.statusCode !== 201) {
        throw new Error(
          data.message ?? "There was an error creating the workspace."
        );
      }

      return data;
    },
    onSuccess: (data) => {
      if (data.statusCode === 201) {
        toast.success("Workspace created successfully.")
        router.push(`/dashboard/workspace/${data.workspace.id}`);
      }
    },
  });

  return { createWorkspace, isCreatingWorkspace, isError, error }
}

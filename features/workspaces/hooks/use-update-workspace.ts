import { useMutation } from "@tanstack/react-query";
import { updateWorkspace as updateWorkspaceAction } from "../actions/update-workspace";
import { UpdateWorkspace, Workspace } from "../types";
import { toast } from "sonner";

type ResponseType = {
  success: boolean;
  statusCode: number;
  workspace: Workspace;
};

export function useUpdateWorkspace(id: string) {

  const {
    mutate: updateWorkspace,
    isPending: isUpdatingWorkspace,
    isError,
    error,
  } = useMutation<ResponseType, Error, UpdateWorkspace>({
    mutationFn: async (workspace) => {
      const data = await updateWorkspaceAction(id, workspace);

      if (data.statusCode !== 200) {
        throw new Error(
          data.message ?? "There was an error updating the workspace."
        );
      }

      return data;
    },
    onSuccess: (data) => {
      if (data.statusCode === 200) {
        toast.success("Workspace updated successfully.")
      }
    },
  });

  return { updateWorkspace, isUpdatingWorkspace, isError, error }
}

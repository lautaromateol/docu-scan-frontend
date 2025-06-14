import { useMutation } from "@tanstack/react-query";
import { deleteWorkspace as deleteWorkspaceAction } from "../actions/delete-workspace";
import { Workspace } from "../types";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type ResponseType = {
  success: boolean;
  statusCode: number;
  message?: string;
};

export function useDeleteWorkspace(workspaceId: string) {
  const router = useRouter();

  const {
    mutate: deleteWorkspace,
    isPending: isDeletingWorkspace,
    isError,
    error,
  } = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const data = await deleteWorkspaceAction(workspaceId);

      if (data.statusCode !== 200) {
        throw new Error(
          data.message ?? "There was an error deleting the workspace."
        );
      }

      return data;
    },
    onSuccess: (data) => {
      if (data.statusCode === 200) {
        toast.success(
          data.message ?? "You have deleted the workspace successfully."
        );
        router.push("/dashboard");
      }
    },
    onError: (error) => toast.error(error.message)
  });

  return { deleteWorkspace, isDeletingWorkspace, isError, error };
}

import { useMutation } from "@tanstack/react-query";
import { joinWorkspace as joinWorkspaceAction } from "../actions/join-workspace";
import { Workspace } from "../types";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type ResponseType = {
  success: boolean;
  statusCode: number;
  message?: string;
};

export function useJoinWorkspace(inviteCode: string, workspaceId: string) {
  const router = useRouter();

  const {
    mutate: joinWorkspace,
    isPending: isJoiningWorkspace,
    isError,
    error,
  } = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const data = await joinWorkspaceAction(inviteCode, workspaceId);

      if (data.statusCode !== 200) {
        throw new Error(
          data.message ?? "There was an error joining the workspace."
        );
      }

      return data;
    },
    onSuccess: (data) => {
      if (data.statusCode === 200) {
        toast.success(
          data.message ?? "You have joined the workspace successfully."
        );
        router.push(`/dashboard/workspace/${workspaceId}`);
      }
    },
  });

  return { joinWorkspace, isJoiningWorkspace, isError, error };
}

import { useMutation } from "@tanstack/react-query";
import { updateMemberRole as updateMemberRoleAction } from "../actions/update-member-role";
import { toast } from "sonner";

type ResponseType = {
  statusCode: number;
  message?: string;
};

export function useUpdateMemberRole(memberId: string, workspaceId: string) {
  const {
    mutate: updateMemberRole,
    isPending: isUpdatingMemberRole,
    isError,
    error,
  } = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const data = await updateMemberRoleAction(memberId, workspaceId);

      if (data.statusCode !== 200) {
        throw new Error(
          data.message ?? "There was an error updating the member role."
        );
      }

      return data;
    },
    onSuccess: (data) => {
      if (data.statusCode === 200) {
        toast.success(
          data.message ?? "You have updated the member role successfully."
        );
      }
    },
    onError: (error) => toast.error(error.message)
  });

  return { updateMemberRole, isUpdatingMemberRole, isError, error };
}

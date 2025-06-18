import { useMutation } from "@tanstack/react-query";
import { deleteMember as deleteMemberAction } from "../actions/delete-member";
import { toast } from "sonner";

type ResponseType = {
  success: boolean;
  statusCode: number;
  message?: string;
};

export function useDeleteMember(memberId: string, workspaceId: string) {
  const {
    mutate: deleteMember,
    isPending: isDeletingMember,
    isError,
    error,
  } = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const data = await deleteMemberAction(memberId, workspaceId);

      if (data.statusCode !== 200) {
        throw new Error(
          data.message ?? "There was an error deleting the member."
        );
      }

      return data;
    },
    onSuccess: (data) => {
      if (data.statusCode === 200) {
        toast.success(
          data.message ?? "You have deleted the member successfully."
        );
      }
    },
    onError: (error) => toast.error(error.message)
  });

  return { deleteMember, isDeletingMember, isError, error };
}

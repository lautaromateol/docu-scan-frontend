import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { uploadContract as uploadContractAction } from "../actions/upload-contract";
import { Contract } from "../types";

type ResponseType = {
  statusCode: number;
  contract: Contract;
};

export function useUploadContract(workspaceId: string) {
  const router = useRouter();

  const { mutate: uploadContract, isPending: isUploadingContract } =
    useMutation<ResponseType, Error, File>({
      mutationFn: async (file) => {
        const data = await uploadContractAction({ file, workspaceId });

        if (data.statusCode !== 200) {
          throw new Error("There was an error uploading your contract.");
        }

        return data;
      },
      onSuccess: (data) => {
        if (data.statusCode === 200) {
          router.push(`/dashboard/workspace/${workspaceId}/contracts/${data.contract.id}`);
        }
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });

  return { uploadContract, isUploadingContract };
}

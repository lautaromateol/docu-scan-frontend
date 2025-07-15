import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { uploadContract as uploadContractAction } from "../actions/upload-contract";

type ResponseType = {
  statusCode: number;
  text: string;
}

export function useUploadContract() {
  const { mutate: uploadContract, isPending: isUploadingContract } = useMutation<ResponseType, Error, File>({
    mutationFn: async (file) => {
      const data = await uploadContractAction(file)

      if(data.statusCode !== 200) {
        throw new Error(data.message ?? "There was an error uploading your contract.")
      }

      return data
    },
    onError: (error) => {
      toast.error(error.message)
    } 
  })

  return { uploadContract, isUploadingContract }
}
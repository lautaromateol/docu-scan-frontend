import { ResponsiveModal } from "@/components/responsive-modal";
import { UploadContract } from "./upload-contract";
import { useOpenUploadContract } from "../hooks/use-open-upload-contract-modal";

export function UploadContractModal() {

  const { isOpen, close } = useOpenUploadContract()

  return (
    <ResponsiveModal className="min-w-4xl" open={isOpen} onOpenChange={close} title="Upload contract" visuallyHidden>
      <UploadContract />
    </ResponsiveModal>
  )
}

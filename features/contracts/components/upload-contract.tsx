"use client";
import { useState } from "react";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { FileUpload } from "./file-upload";
import { useUploadContract } from "../hooks/use-upload-contract";
import { useOpenUploadContract } from "../hooks/use-open-upload-contract-modal";

export function UploadContract() {
  const [files, setFiles] = useState<File[]>([]);
  const workspaceId = useWorkspaceId();

  const { close } = useOpenUploadContract();

  const { uploadContract, isUploadingContract } =
    useUploadContract(workspaceId);

  function handleUploadContract() {
    uploadContract(files[0], {
      onSuccess: () => close(),
    });
  }

  return (
    <div className="w-full h-full p-4 space-y-6">
      <div className="space-y-0.5">
        <h1 className="text-2xl font-semibold">Upload contract</h1>
        <p className="text-base font-light">Upload file</p>
      </div>
      <FileUpload files={files} setFiles={setFiles} />
      {isUploadingContract && (
        <div className="flex items-center justify-center">
          <Loader className="size-16 animate-spin" />
        </div>
      )}
      <div className="flex items-center justify-end gap-x-2">
        <Button
          disabled={!files.length}
          onClick={handleUploadContract}
          variant="outline"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

"use client"
import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";
import { useOpenUploadContract } from "../hooks/use-open-upload-contract-modal";

export function UploadContractButton() {

  const { open } = useOpenUploadContract()

  return (
    <Button onClick={open}>
      Upload Contract
      <UploadIcon />
    </Button>
  );
}

"use client";
import { PlusCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useOpenCreateWorkspace } from "../hooks/use-open-create-workspace";

export function CreateWorkspaceButton() {
  const { open } = useOpenCreateWorkspace();

  return (
    <Button variant="ghost" onClick={open}>
      <PlusCircleIcon className="text-indigo-800" />
    </Button>
  );
}

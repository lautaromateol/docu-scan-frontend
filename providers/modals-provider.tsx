"use client";
import { useEffect, useState } from "react";
import { CreateWorkspaceModal } from "@/features/workspaces/components/create-workspace-modal";

export function ModalsProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (isMounted) {
    return (
      <>
        <CreateWorkspaceModal />
      </>
    );
  }
}

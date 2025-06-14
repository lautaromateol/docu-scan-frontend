"use client";
import { Button } from "@/components/ui/button";
import { useJoinWorkspace } from "../hooks/use-join-workspace";

export function JoinWorkspaceForm({
  inviteCode,
  workspaceId,
}: {
  inviteCode: string;
  workspaceId: string;
}) {
  const { joinWorkspace, isJoiningWorkspace } = useJoinWorkspace(
    inviteCode,
    workspaceId
  );

  return (
    <form
      className="flex justify-center"
      onSubmit={(e) => {
        e.preventDefault();
        joinWorkspace();
      }}
    >
      <Button className="w-3/4" disabled={isJoiningWorkspace}>
        Join workspace
      </Button>
    </form>
  );
}

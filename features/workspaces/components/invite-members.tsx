"use client"
import { Input } from "@/components/ui/input";
import { Workspace } from "../types";
import { Button } from "@/components/ui/button";
import { Clipboard } from "lucide-react";
import { toast } from "sonner";

interface InviteMembersProps {
  workspace: Workspace;
}

export function InviteMembers({ workspace }: InviteMembersProps) {

  const inviteLink = `${window.location.origin}/join/${workspace.inviteCode}`

  function handleCopyToClipboard() {
    navigator.clipboard.writeText(inviteLink).then(() => toast.success("Invite code copied to clipboard."))
  }

  return (
    <div className="space-y-2 p-4 bg-slate-50 rounded">
      <div className="space-y-0.5">
        <h2 className="text-xl">Invite members</h2>
        <p className="text-sm font-light">
          Invite members to join your workspace.
        </p>
      </div>
      <div className="flex items-center gap-x-2">
        <Input disabled value={inviteLink} />
        <Button onClick={handleCopyToClipboard} className="size-8" variant="outline">
          <Clipboard className="size-5" />
        </Button>
      </div>
    </div>
  );
}

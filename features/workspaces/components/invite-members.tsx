"use client";
import { Input } from "@/components/ui/input";
import { Workspace } from "../types";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clipboard, Link, Shield } from "lucide-react";
import { toast } from "sonner";

interface InviteMembersProps {
  workspace: Workspace;
}

export function InviteMembers({ workspace }: InviteMembersProps) {
  const inviteLink = `${window.location.origin}/join/${workspace.inviteCode}`;

  function handleCopyToClipboard() {
    navigator.clipboard
      .writeText(inviteLink)
      .then(() => toast.success("Invite code copied to clipboard."));
  }

  return (
    <div className="space-y-3 p-4 rounded-md border-indigo-700 border-t-4 shadow-md">
      <div className="flex items-center gap-x-2">
        <div className="rounded-lg border border-indigo-200 p-2">
          <Link className="text-indigo-600" />
        </div>
        <div className="space-y-0.5">
          <p className="text-xl font-semibold">Team Access</p>
          <p className="text-base text-gray-500">
            Share your workspace securely with team members using invitation
            codes.
          </p>
        </div>
      </div>
      <div className="bg-indigo-100/50 border-indigo-500 rounded-md p-4 space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">Invite Code</p>
          <div className="flex items-center gap-x-1 text-xs">
            <Shield className="size-4" />
            Secure & Encrypted.
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <Input disabled value={inviteLink} className="bg-indigo-100" />
          <Button
            onClick={handleCopyToClipboard}
            className="size-8"
            variant="outline"
          >
            <Clipboard className="size-5" />
          </Button>
        </div>
        <div className="rounded-md p-4 space-y-2 bg-indigo-200 border border-indigo-300">
          <div className="flex items-center gap-x-1">
            <AlertTriangle className="size-4" />
            <p className="text-xs font-medium">Security Notice</p>
          </div>
          <p className="text-xs">
            This code grants full access to your workspace. Only share it with
            trusted team members and consider regenerating it periodically for
            enhanced security.
          </p>
        </div>
      </div>
    </div>
  );
}

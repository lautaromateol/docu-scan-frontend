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
    <div className="space-y-3 p-4 rounded-md border-t-4 border-t-primary/60 shadow-card border border-border bg-card">
      <div className="flex items-center gap-x-2">
        <div className="rounded-lg border border-primary/20 bg-primary/10 p-2">
          <Link className="text-primary" />
        </div>
        <div className="space-y-0.5">
          <p className="text-xl font-semibold">Team Access</p>
          <p className="text-sm md:text-base text-muted-foreground">
            Share your workspace securely with team members using invitation
            codes.
          </p>
        </div>
      </div>
      <div className="bg-primary/5 border border-primary/20 rounded-md p-4 space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">Invite Code</p>
          <div className="flex items-center gap-x-1 text-xs text-muted-foreground">
            <Shield className="size-4" />
            Secure & Encrypted.
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <Input disabled value={inviteLink} className="bg-secondary/50" />
          <Button
            onClick={handleCopyToClipboard}
            className="size-8"
            variant="outline"
          >
            <Clipboard className="size-5" />
          </Button>
        </div>
        <div className="rounded-md p-4 space-y-2 bg-warning/10 border border-warning/20">
          <div className="flex items-center gap-x-1">
            <AlertTriangle className="size-4 text-warning" />
            <p className="text-xs font-medium text-warning">Security Notice</p>
          </div>
          <p className="text-xs text-muted-foreground">
            This code grants full access to your workspace. Only share it with
            trusted team members and consider regenerating it periodically for
            enhanced security.
          </p>
        </div>
      </div>
    </div>
  );
}

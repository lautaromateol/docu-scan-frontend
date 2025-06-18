"use client";
import { MoreHorizontal, Trash, User as UserIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Member } from "../types";
import { useConfirm } from "@/hooks/use-confirm";
import { useDeleteMember } from "../hooks/use-delete-member";
import { useUpdateMemberRole } from "../hooks/use-update-member-role";

interface MembersDropdownProps {
  member: Member;
}

export function MembersDropdown({ member }: MembersDropdownProps) {
  const { deleteMember, isDeletingMember } = useDeleteMember(
    member.id,
    member.workspaceId
  );

  const { updateMemberRole, isUpdatingMemberRole } = useUpdateMemberRole(
    member.id,
    member.workspaceId
  )

  const [ConfirmDelete, confirm] = useConfirm(
    "Remove member",
    "Are you sure that you want to remove this member from the workspace? This action cannot be undone."
  );

  function handleUpdateMember() {
    updateMemberRole()
  }

  async function handleDeleteMember() {
    const ok = await confirm();

    if(ok) {
      deleteMember()
    }
  }

  return (
    <DropdownMenu>
      <ConfirmDelete />
      <DropdownMenuTrigger className="cursor-pointer">
        <MoreHorizontal />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem disabled={isUpdatingMemberRole} onClick={handleUpdateMember}>
          <div className="flex items-center justify-between w-full">
            <p className="text-sm font-light">Make admin</p>
            <UserIcon />
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled={isDeletingMember} onClick={handleDeleteMember}>
          <div className="flex items-center gap-x-4">
            <p className="text-sm font-light text-destructive">
              Remove from workspace
            </p>
            <Trash className="text-destructive" />
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

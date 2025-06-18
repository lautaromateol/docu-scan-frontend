import { getUser } from "@/features/users/actions/get-user";
import { Member } from "../types";
import { MemberAvatar } from "./member-avatar";
import { MembersDropdown } from "./members-dropdown";
import { redirect } from "next/navigation";

interface MembersProps {
  members: Member[];
}

export async function Members({ members }: MembersProps) {
  const user = await getUser();

  if (!user) {
    redirect("/sign-in");
  }

  const me = members.find((member) => member.userId === user.id)

  return (
    <div className="space-y-4">
      {members.map((member) => {
        const showDropdown = (member.userId !== user.id) && member.role !== "ADMIN" && me?.role === "ADMIN" 

        return (
          <div className="flex items-center justify-between" key={member.id}>
            <div className="flex items-center gap-x-2">
              <MemberAvatar
                className="size-12 text-base"
                name={member.user.name}
                pictureUrl={member.user.pictureUrl}
              />
              <div className="space-y-0.5">
                <p className="text-sm font-medium">{member.user.name} - <span className="capitalize">{member.role}</span></p>
                <p className="text-xs font-light">{member.user.email}</p>
              </div>
            </div>
            {showDropdown && <MembersDropdown member={member} />}
          </div>
        );
      })}
    </div>
  );
}

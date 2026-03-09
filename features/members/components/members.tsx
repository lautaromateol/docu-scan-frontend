import { format } from "date-fns";
import { redirect } from "next/navigation";
import { Calendar, Mail, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getUser } from "@/features/users/actions/get-user";
import { MemberAvatar } from "./member-avatar";
import { MembersDropdown } from "./members-dropdown";
import { Member } from "../types";

interface MembersProps {
  members: Member[];
}

export async function Members({ members }: MembersProps) {
  const user = await getUser();

  if (!user) {
    redirect("/sign-in");
  }

  const me = members.find((member) => member.userId === user.id);

  return (
    <div className="space-y-6 rounded-md shadow-card border border-border bg-card p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <Users className="text-primary" />
          <p className="text-lg md:text-xl font-semibold">Members List</p>
        </div>
        <Badge variant="secondary" className="rounded-full shadow-card text-sm font-medium">
          {members.length} members
        </Badge>
      </div>
      <div className="space-y-4">
        {members.map((member) => {
          const showDropdown =
            member.userId !== user.id &&
            member.role !== "ADMIN" &&
            me?.role === "ADMIN";

          return (
            <div className="flex items-center justify-between" key={member.id}>
              <div className="flex items-center gap-x-2">
                <MemberAvatar
                  className="size-12 text-base"
                  name={member.user.name}
                  pictureUrl={member.user.pictureUrl}
                />
                <div className="space-y-1">
                  <div className="flex items-center gap-x-2">
                    <p className="text-sm md:text-base font-semibold">
                      {member.user.name}
                    </p>
                    <Badge variant="default" className="rounded-full shadow-card font-medium text-sm capitalize">
                      {member.role.toLowerCase()}
                    </Badge>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-x-2">
                    <div className="flex items-center gap-x-1 text-sm text-muted-foreground">
                      <Mail className="size-4" />
                      {member.user.email}
                    </div>
                    <div className="flex items-center gap-x-1 text-sm text-muted-foreground">
                      <Calendar className="size-4" />
                      Joined: {format(new Date(member.createdAt), "dd/MM/yy")}
                    </div>
                  </div>
                </div>
              </div>
              {showDropdown && <MembersDropdown member={member} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

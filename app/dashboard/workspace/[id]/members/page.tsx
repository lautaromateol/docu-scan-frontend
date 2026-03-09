import { getMembers } from "@/features/members/actions/get-members";
import { Members } from "@/features/members/components/members";
import { Users } from "lucide-react";

export default async function MembersPage({ params }: any) {
  const { id } = await params;

  const members = await getMembers(id);

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-3 mx-0 md:mx-auto w-full md:w-1/2">
        <div className="rounded-lg shadow-card p-2 md:p-4 bg-primary/10 border border-primary/20 w-auto">
          <Users className="text-primary" />
        </div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">Workspace Members</h1>
        <p className="text-lg md:text-xl text-muted-foreground md:text-center">
          Manage your workspace team members, and configure roles.
        </p>
      </div>
      <Members members={members} />
    </div>
  );
}

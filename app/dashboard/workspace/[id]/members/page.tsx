import { getMembers } from "@/features/members/actions/get-members";
import { Members } from "@/features/members/components/members";
import { Users } from "lucide-react";

export default async function MembersPage({ params }: any) {
  const { id } = await params;

  const members = await getMembers(id);

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-3 mx-auto w-1/2">
        <div className="rounded-lg shadow-md p-2 md:p-4 bg-gradient-to-r from-indigo-700 to-indigo-900 w-auto">
          <Users className="text-white" />
        </div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">Workspace Members</h1>
        <p className="text-lg md:text-xl text-gray-600 md:text-center">
          Manage your workspace team members, and configure roles.
        </p>
      </div>
      <Members members={members} />
    </div>
  );
}

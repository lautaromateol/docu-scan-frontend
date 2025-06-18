import { Separator } from "@/components/ui/separator";
import { getMembers } from "@/features/members/actions/get-members";
import { Members } from "@/features/members/components/members";

export default async function MembersPage({ params }: any) {
  const { id } = await params;

  const members = await getMembers(id);

  return (
    <div className="space-y-8">
      <div className="space-y-0.5">
        <h1 className="text-2xl font-semibold">Members</h1>
        <p className="text-base font-light">
          Review and manage the members of your workspace.
        </p>
      </div>
      <Separator />
      <Members members={members} />
    </div>
  );
}

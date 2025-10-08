import { KPIs } from "@/features/analytics/components/kpis";
import { UpcomingContractsTable } from "@/features/analytics/components/upcoming-contracts";
import { DeadlinesTable } from "@/features/analytics/components/upcoming-deadlines";
import { getKpis } from "@/features/analytics/kpis/get-kpis";
import { getWorkspace } from "@/features/workspaces/actions/get-workspace";

export default async function WorkspaceIdPage({ params }: any) {
  const { id } = await params;

  const workspace = await getWorkspace(id);

  if (!workspace) {
    throw new Error();
  }

  const kpis = await getKpis({ workspaceId: id });

  if (!kpis) return null;

  return (
    <div className="space-y-12">
      <KPIs kpis={kpis} />
      <DeadlinesTable deadlines={kpis.upcomingDeadlines} />
      <UpcomingContractsTable contracts={kpis.upcomingContracts} />
    </div>
  );
}

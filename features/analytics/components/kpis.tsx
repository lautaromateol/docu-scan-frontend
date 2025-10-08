import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  File,
  Grid,
  Info,
  PieChart,
  Users,
} from "lucide-react";
import { KPICard } from "./kpi";
import { KPIS } from "../types";

export async function KPIs({ kpis }: { kpis: KPIS }) {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <div className="flex items-center gap-x-2">
          <div className="rounded-lg border bg-indigo-100 p-2">
            <PieChart className="text-indigo-700 size-8" />
          </div>
          <p className="text-3xl font-semibold">KPI's</p>
        </div>
        <span className="text-sm text-slate-700">
          Review key analytics about your contracts.
        </span>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <KPICard
          title="Total contracts"
          description="All contracts in system."
          icon={File}
          metric={kpis.totalContracts}
        />
        <KPICard
          title="Active parties"
          description="Unique contracting parties."
          icon={Users}
          metric={kpis.activeParties}
        />
        <KPICard
          title="Termination clauses"
          description="All the termination clauses in system."
          icon={AlertCircle}
          metric={kpis.terminationClauses}
        />
        <KPICard
          title="Total obligations"
          description="All obligations in system."
          icon={AlertTriangle}
          metric={kpis.totalObligations}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <KPICard
          title="Obligations by type"
          description="Primary, Accessory, Conditional, Recurring."
          icon={AlertOctagon}
          obligationsByTipe={kpis.obligationsByType}
        />
        <KPICard
          title="Contracts by category"
          description="Transfer, Use, Service, Guarantee, Transfer."
          icon={Grid}
          contractsByCategory={kpis.contractsByCategory}
        />
        <KPICard
          title="Contracts by status"
          description="Draft, Signed, Expired, Terminated."
          icon={Info}
          contractsByStatus={kpis.contractsByStatus}
        />
      </div>
    </div>
  );
}

import { AlertTriangle, Calendar, X } from "lucide-react";
import { TerminationClause } from "../types";
import { Badge } from "@/components/ui/badge";

interface ContractTerminationClauseProps {
  clause: TerminationClause;
}

export function ContractTerminationClause({
  clause,
}: ContractTerminationClauseProps) {
  return (
    <div className="rounded-lg shadow border px-3 py-2">
      <div className="space-y-2">
        <p className="text-lg font-medium">{clause.description}</p>
        <div className="flex items-center gap-x-2">
          <div className="rounded-lg p-2 bg-indigo-200 text-indigo-700">
            <Calendar />
          </div>
          <div className="space-y-0.5">
            <p className="text-sm font-medium">
              {clause.noticePeriodDays
                ? `${clause.noticePeriodDays} days`
                : "Unknown"}
            </p>
            <p className="text-xs text-gray-400">Notice period days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

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
    <div className="rounded-lg shadow-md px-3 py-2">
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-x-2">
            <div className="rounded-lg bg-gradient-to-r from-rose-500 to-rose-700 p-4">
              <X className="text-white" />
            </div>
            <Badge className="rounded-full bg-rose-200 text-rose-700 space-x-0.5 text-xs font-medium capitalize">
              <AlertTriangle />
              {clause.cause?.toLowerCase()}
            </Badge>
          </div>
          <p className="text-lg font-semibold">{clause.description}</p>
        </div>
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

import { Calendar, Check } from "lucide-react";
import { ContractDeadline as ContractDeadlineType } from "../types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { isAfter } from "date-fns";

interface ContractDeadlineProps {
  deadline: ContractDeadlineType;
}

export function ContractDeadline({ deadline }: ContractDeadlineProps) {
  return (
    <div className="rounded-lg shadow border py-2 px-3">
      <div className="space-y-2">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <div className="rounded-lg bg-gradient-to-r from-indigo-700 to-indigo-900 p-2">
                <Check className="text-white" />
              </div>
              <Badge className="rounded-lg text-xs font-medium bg-indigo-200 text-indigo-700 capitalize">
                {deadline.type.toLowerCase()}
              </Badge>
            </div>
            <Badge
              className={cn(
                "rounded-full text-xs",
                isAfter(new Date(), new Date(deadline.date))
                  ? "bg-green-200 text-green-700"
                  : "bg-red-200 text-red-700"
              )}
            >
              {isAfter(new Date(), new Date(deadline.date))
                ? "In time"
                : "Expired"}
            </Badge>
          </div>
          <p className="text-lg font-semibold">{deadline.description}</p>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="rounded-lg p-1 bg-indigo-200 text-indigo-700">
            <Calendar />
          </div>
          <div className="space-y-0.5">
            <p className="text-sm font-medium">
              {deadline.date
                ? new Date(deadline.date).toDateString()
                : "Unknown"}
            </p>
            <p className="text-xs text-gray-400">Due date</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import {
  AlertTriangle,
  Calendar,
  CircleAlert,
  RefreshCcw,
  User,
} from "lucide-react";
import { Obligation } from "../types";
import { Badge } from "@/components/ui/badge";
import { isAfter } from "date-fns";
import { cn } from "@/lib/utils";

interface ContractObligationProps {
  obligation: Obligation;
}

export function ContractObligation({ obligation }: ContractObligationProps) {
  return (
    <div className="rounded-lg shadow border py-2 px-3">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div className="rounded-lg shadow-md bg-gradient-to-r from-indigo-700 to-indigo-900 p-2">
              <CircleAlert className="text-white" />
            </div>
            <Badge className="bg-indigo-200 text-indigo-700 rounded-full text-xs capitalize">
              {obligation.type.toLowerCase()}
            </Badge>
            <Badge
              className={cn(
                "rounded-full text-xs",
                obligation.dueDate
                  ? isAfter(new Date(), new Date(obligation.dueDate))
                    ? "bg-green-200 text-green-700"
                    : "bg-red-200 text-red-700"
                  : "bg-green-200 text-green-700"
              )}
            >
              {obligation.dueDate
                ? isAfter(new Date(), new Date(obligation.dueDate))
                  ? "In time"
                  : "Expired"
                : "In time"}
            </Badge>
          </div>
          {obligation.dueDate ? (
            isAfter(new Date(), new Date(obligation.dueDate)) ? null : (
              <div className="rounded-full bg-red-200 text-red-700 p-2">
                <AlertTriangle />
              </div>
            )
          ) : null}
        </div>
        <div className="space-y-1">
          <p className="text-lg font-semibold">{obligation.description}</p>
          <div className="flex items-center gap-x-2">
            <div className="flex items-center gap-x-1">
              <div className="rounded-md p-1 bg-gray-200 text-gray-500">
                <User className="size-4" />
              </div>
              <p className="text-sm text-gray-500 font-medium">Responsible:</p>
            </div>
            <p className="text-sm font-medium">{obligation.party.name}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex items-center gap-x-2">
            <div className="rounded-lg p-2 bg-indigo-200 text-indigo-700">
              <Calendar />
            </div>
            <div className="space-y-0.5">
              <p className="text-sm font-medium">
                {obligation.dueDate
                  ? new Date(obligation.dueDate).toDateString()
                  : "Unknown"}
              </p>
              <p className="text-xs text-gray-400">Due date</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="rounded-lg p-2 bg-purple-200 text-purple-700">
              <RefreshCcw />
            </div>
            <div className="space-y-0.5">
              <p className="text-sm font-medium capitalize">
                {obligation.recurrence ? obligation.recurrence.toLowerCase() : "Unknown"}
              </p>
              <p className="text-xs text-gray-400">Recurrence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

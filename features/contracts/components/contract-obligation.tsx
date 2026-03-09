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

interface ContractObligationProps {
  obligation: Obligation;
}

export function ContractObligation({ obligation }: ContractObligationProps) {
  return (
    <div className="rounded-lg shadow-card border border-border bg-card py-2 px-3">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div className="rounded-lg shadow-card bg-primary/10 border border-primary/20 p-2">
              <CircleAlert className="text-primary" />
            </div>
            <Badge variant="default" className="rounded-full text-xs capitalize">
              {obligation.type.toLowerCase()}
            </Badge>
            <Badge
              variant={
                obligation.dueDate
                  ? isAfter(new Date(), new Date(obligation.dueDate))
                    ? "success"
                    : "destructive"
                  : "success"
              }
              className="rounded-full text-xs"
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
              <div className="rounded-full bg-destructive/15 text-destructive border border-destructive/20 p-2">
                <AlertTriangle />
              </div>
            )
          ) : null}
        </div>
        <div className="space-y-1">
          <p className="text-base md:text-lg font-semibold">{obligation.description}</p>
          <div className="flex items-center gap-x-2">
            <div className="flex items-center gap-x-1">
              <div className="rounded-md p-1 bg-secondary text-muted-foreground">
                <User className="size-4" />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground font-medium">Responsible:</p>
            </div>
            <p className="text-xs md:text-sm font-medium">{obligation.party.name}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex items-center gap-x-2">
            <div className="rounded-lg p-2 bg-primary/10 text-primary border border-primary/20">
              <Calendar />
            </div>
            <div className="space-y-0.5">
              <p className="text-xs md:text-sm font-medium">
                {obligation.dueDate
                  ? new Date(obligation.dueDate).toDateString()
                  : "Unknown"}
              </p>
              <p className="text-xs text-muted-foreground">Due date</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="rounded-lg p-2 bg-info/10 text-info border border-info/20">
              <RefreshCcw />
            </div>
            <div className="space-y-0.5">
              <p className="text-xs md:text-sm font-medium capitalize">
                {obligation.recurrence ? obligation.recurrence.toLowerCase() : "Unknown"}
              </p>
              <p className="text-xs text-muted-foreground">Recurrence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

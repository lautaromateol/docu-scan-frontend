import { Calendar, Check } from "lucide-react";
import { ContractDeadline as ContractDeadlineType } from "../types";
import { Badge } from "@/components/ui/badge";
import { isBefore } from "date-fns";

interface ContractDeadlineProps {
  deadline: ContractDeadlineType;
}

export function ContractDeadline({ deadline }: ContractDeadlineProps) {
  return (
    <div className="rounded-lg shadow-card border border-border bg-card py-2 px-3">
      <div className="space-y-2">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <div className="rounded-lg bg-primary/10 border border-primary/20 p-2">
                <Check className="text-primary" />
              </div>
              <Badge variant="default" className="rounded-lg text-xs font-medium capitalize">
                {deadline.type.toLowerCase()}
              </Badge>
            </div>
            <Badge
              variant={
                isBefore(new Date(), new Date(deadline.date))
                  ? "success"
                  : "destructive"
              }
              className="rounded-full text-xs"
            >
              {isBefore(new Date(), new Date(deadline.date))
                ? "In time"
                : "Expired"}
            </Badge>
          </div>
          <p className="text-lg font-semibold">{deadline.description}</p>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="rounded-lg p-1 bg-primary/10 text-primary border border-primary/20">
            <Calendar />
          </div>
          <div className="space-y-0.5">
            <p className="text-sm font-medium">
              {deadline.date
                ? new Date(deadline.date).toDateString()
                : "Unknown"}
            </p>
            <p className="text-xs text-muted-foreground">Due date</p>
          </div>
        </div>
      </div>
    </div>
  );
}

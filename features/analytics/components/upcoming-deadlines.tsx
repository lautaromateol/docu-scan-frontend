import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calendar, FileText, CalendarCheck } from "lucide-react";
import { differenceInDays, format } from "date-fns";
import { es } from "date-fns/locale";
import { UpcomingDeadline } from "../types";
import { Card } from "@/components/ui/card";

interface DeadlinesTableProps {
  deadlines: UpcomingDeadline[];
}

export const DeadlinesTable = ({ deadlines }: DeadlinesTableProps) => {
  const sortedDeadlines = [...deadlines].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const getUrgencyBadge = (days: number) => {
    if (days < 0) {
      return (
        <Badge variant="destructive" className="text-xs">
          Vencido
        </Badge>
      );
    }
    if (days === 0) {
      return (
        <Badge variant="destructive" className="text-xs">
          Hoy
        </Badge>
      );
    }
    if (days <= 7) {
      return (
        <Badge variant="destructive" className="text-xs">
          {days}d
        </Badge>
      );
    }
    if (days <= 15) {
      return (
        <Badge className="bg-warning text-warning-foreground text-xs">
          {days}d
        </Badge>
      );
    }
    return (
      <Badge variant="secondary" className="text-xs">
        {days}d
      </Badge>
    );
  };

  const criticalCount = sortedDeadlines.filter((d) => {
    const daysRemaining = differenceInDays(new Date(d.date), new Date());
    return daysRemaining <= 7 && daysRemaining >= 0;
  }).length;

  if (deadlines.length === 0) {
    return (
      <Card className="p-12 text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="rounded-full bg-muted p-3">
            <FileText className="h-6 w-6 text-muted-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              No deadlines close to due date
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              We didn't find deadlines that expires in the next 30 days.
            </p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <div className="flex items-center gap-x-2">
          <div className="rounded-lg border bg-indigo-100 p-2">
            <CalendarCheck className="text-indigo-700 size-8" />
          </div>
          <p className="text-3xl font-semibold">Upcoming Deadlines</p>
        </div>
        <span className="text-sm text-slate-700">
          Review contract's deadlines near to due date.
        </span>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-semibold">Contract</TableHead>
              <TableHead className="font-semibold">Deadline</TableHead>
              <TableHead className="font-semibold">Date</TableHead>
              <TableHead className="font-semibold">Type</TableHead>
              <TableHead className="font-semibold">Category</TableHead>
              <TableHead className="font-semibold text-right">Days</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedDeadlines.map((deadline) => {
              const deadlineDate = new Date(deadline.date);
              const daysRemaining = differenceInDays(deadlineDate, new Date());
              const isUrgent = daysRemaining <= 7 && daysRemaining >= 0;

              return (
                <TableRow
                  key={deadline.id}
                  className={`${
                    isUrgent
                      ? "bg-destructive/5 hover:bg-destructive/10"
                      : "hover:bg-muted/50"
                  } transition-colors`}
                >
                  <TableCell className="font-medium max-w-xs">
                    <div className="flex items-start gap-2">
                      <FileText className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="font-medium text-sm truncate">
                          {deadline.contract.title}
                        </div>
                        <div className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                          {deadline.description}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">
                    {deadline.description.length > 40
                      ? deadline.description.substring(0, 40) + "..."
                      : deadline.description}
                  </TableCell>
                  <TableCell className="text-sm whitespace-nowrap">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5 text-primary" />
                      {format(deadlineDate, "dd MMM yyyy", { locale: es })}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs font-normal">
                      {deadline.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {deadline.contract.category}
                  </TableCell>
                  <TableCell className="text-right">
                    {getUrgencyBadge(daysRemaining)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <div className="flex items-center gap-6 mt-4 pt-4 border-t text-xs text-muted-foreground px-4 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-destructive" />
            <span>
              Critical (≤7 days):{" "}
              <strong className="text-foreground">{criticalCount}</strong>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-warning" />
            <span>
              Soon (8-15 days):{" "}
              <strong className="text-foreground">
                {
                  sortedDeadlines.filter((d) => {
                    const days = differenceInDays(new Date(d.date), new Date());
                    return days > 7 && days <= 15;
                  }).length
                }
              </strong>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span>
              Normal ({">"}15 days):{" "}
              <strong className="text-foreground">
                {
                  sortedDeadlines.filter((d) => {
                    const days = differenceInDays(new Date(d.date), new Date());
                    return days > 15;
                  }).length
                }
              </strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

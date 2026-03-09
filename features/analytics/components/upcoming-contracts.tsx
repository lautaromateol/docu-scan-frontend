"use client";
import {
  getDaysUntilExpiration,
  getCategoryLabel,
  getStatusLabel,
  formatDate,
} from "@/lib/contract-utils";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertCircle,
  Calendar,
  FileText,
  Clock,
} from "lucide-react";
import { Contract } from "@/features/contracts/types";
import { differenceInDays } from "date-fns";

type ContractFixed = Omit<Contract, "endDate"> & {
  endDate: string;
};

interface ExpiringContractsTableProps {
  contracts: ContractFixed[];
}

export function UpcomingContractsTable({
  contracts,
}: ExpiringContractsTableProps) {
  const sortedContracts = [...contracts].sort((a, b) => {
    return new Date(a.endDate).getTime() - new Date(b.endDate).getTime();
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
        <Badge variant="warning" className="text-xs">
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

  const criticalCount = sortedContracts.filter((d) => {
    const daysRemaining = differenceInDays(new Date(d.endDate), new Date());
    return daysRemaining <= 7 && daysRemaining >= 0;
  }).length;

  if (contracts.length === 0) {
    return (
      <Card className="p-12 text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="rounded-full bg-muted p-3">
            <FileText className="h-6 w-6 text-muted-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              No contracts close to due date
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              We didn't find contracts that expires in the next 30 days.
            </p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-x-2">
          <div className="rounded-lg border border-warning/30 bg-warning/10 p-2">
            <AlertCircle className="text-warning size-8" />
          </div>
          <p className="text-3xl font-semibold text-foreground">Contracts close to due date</p>
        </div>
        <span className="text-sm text-muted-foreground">
          Review contract's near to due date.
        </span>
      </div>

      {/* Table Card */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-semibold">Contract</TableHead>
              <TableHead className="font-semibold">Category</TableHead>
              <TableHead className="font-semibold">State</TableHead>
              <TableHead className="font-semibold">End Date</TableHead>
              <TableHead className="font-semibold text-right">Days</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedContracts.map((contract) => {
              const daysLeft = getDaysUntilExpiration(contract.endDate!);
              const isUrgent = daysLeft <= 7 && daysLeft >= 0;

              return (
                <TableRow
                  key={contract.id}
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
                          {contract.title}
                        </div>
                        {contract.descriptionSummary && (
                          <div className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                            {contract.descriptionSummary}
                          </div>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs font-normal">
                      {getCategoryLabel(contract.category)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={contract.status === "SIGNED" ? "success" : "secondary"}
                      className="text-xs font-normal"
                    >
                      {getStatusLabel(contract.status)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm whitespace-nowrap">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5 text-primary" />
                      {formatDate(contract.endDate!)}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    {getUrgencyBadge(daysLeft)}
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
                  sortedContracts.filter((d) => {
                    const days = differenceInDays(
                      new Date(d.endDate),
                      new Date()
                    );
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
                  sortedContracts.filter((d) => {
                    const days = differenceInDays(
                      new Date(d.endDate),
                      new Date()
                    );
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
}
import { Badge } from "@/components/ui/badge";
import { Contract } from "../types";
import { Building, Calendar, FileText, Pen, Scale } from "lucide-react";
import { format } from "date-fns";
import { Separator } from "@/components/ui/separator";

export function ContractPageHeader({ contract }: { contract: Contract }) {
  return (
    <header className="flex flex-col md:grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="rounded-lg shadow-card bg-primary/10 border border-primary/20 p-4">
            <FileText className="text-primary" />
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold capitalize">
                {contract.title.toLowerCase()}
              </h1>
              <div className="flex items-center gap-x-2">
                <Badge variant="default" className="rounded-full shadow-card px-2 capitalize text-sm">
                  {contract.category.toLowerCase()}
                </Badge>
                <Badge
                  variant={
                    contract.status === "DRAFT"
                      ? "warning"
                      : contract.status === "SIGNED"
                      ? "success"
                      : contract.status === "EXPIRED"
                      ? "destructive"
                      : "secondary"
                  }
                  className="flex items-center gap-x-1 rounded-full shadow-card px-2 capitalize text-sm"
                >
                  <Pen />
                  {contract.status?.toLowerCase()}
                </Badge>
              </div>
            </div>
            <div className="text-lg text-muted-foreground">
              {contract.descriptionSummary}
            </div>
            <div className="flex items-center gap-x-3">
              <div className="rounded-lg p-2 shadow-card border border-border bg-card">
                <div className="flex items-center gap-x-2">
                  <div className="rounded-lg bg-primary/10 border border-primary/20 p-3">
                    <Building className="text-primary size-5" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium">Jurisdiction</p>
                    <p className="text-sm text-muted-foreground">{contract.jurisdiction}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg p-2 shadow-card border border-border bg-card">
                <div className="flex items-center gap-x-2">
                  <div className="rounded-lg bg-info/10 border border-info/20 p-3">
                    <Scale className="text-info size-5" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium">Governing Law</p>
                    <p className="text-sm text-muted-foreground">{contract.governingLaw}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 rounded-lg space-y-4 shadow-card border border-border bg-card">
        <div className="bg-primary/10 h-14 rounded-t-lg border-b border-border px-4 py-2">
          <div className="flex items-center gap-x-2">
            <div className="rounded-lg shadow-card bg-primary/20 border border-primary/30 p-2">
              <Calendar className="text-primary" />
            </div>
            <p className="text-lg font-semibold">Important dates</p>
          </div>
        </div>
        <div className="space-y-2 px-4">
          <p className="text-sm font-medium uppercase text-muted-foreground tracking-wider">
            Signing date
          </p>
          <p className="text-base">
            {contract.signingDate
              ? format(contract.signingDate, "dd/MM/yy")
              : "Unknown"}
          </p>
        </div>
        <Separator />
        <div className="space-y-2 px-4">
          <p className="text-sm font-medium uppercase text-muted-foreground tracking-wider">
            Start date
          </p>
          <p className="text-base">
            {contract.startDate
              ? format(contract.startDate, "dd/MM/yy")
              : "Unknown"}
          </p>
        </div>
        <Separator />
        <div className="space-y-2 px-4 pb-4">
          <p className="text-sm font-medium uppercase text-muted-foreground tracking-wider">
            End date
          </p>
          <p className="text-base">
            {contract.endDate
              ? format(contract.endDate, "dd/MM/yy")
              : "Unknown"}
          </p>
        </div>
      </div>
    </header>
  );
}

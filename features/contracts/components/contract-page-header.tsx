import { Badge } from "@/components/ui/badge";
import { Contract } from "../types";
import { cn } from "@/lib/utils";
import { Building, Calendar, FileText, Pen, Scale } from "lucide-react";
import { format } from "date-fns";
import { Separator } from "@/components/ui/separator";

export function ContractPageHeader({ contract }: { contract: Contract }) {
  return (
    <header className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <div className="flex items-start gap-x-4">
          <div className="rounded-lg shadow-sm bg-gradient-to-r from-indigo-500 to-indigo-600 p-4">
            <FileText className="text-white" />
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold capitalize">
                {contract.title.toLowerCase()}
              </h1>
              <div className="flex items-center gap-x-2">
                <Badge className="rounded-full bg-indigo-100 text-indigo-700 shadow-sm px-2 capitalize text-sm">
                  {contract.category.toLowerCase()}
                </Badge>
                <Badge
                  className={cn(
                    "flex items-center gap-x-1 rounded-full shadow-sm px-2 capitalize text-sm",
                    contract.status === "DRAFT"
                      ? "bg-yellow-100 text-yellow-700"
                      : contract.status === "SIGNED"
                      ? "bg-green-100 text-green-700"
                      : contract.status === "EXPIRED"
                      ? "bg-red-100 text-green-700"
                      : "bg-rose-100 text-rose-700"
                  )}
                >
                  <Pen />
                  {contract.status?.toLowerCase()}
                </Badge>
              </div>
            </div>
            <div className="text-lg text-slate-700">
              {contract.descriptionSummary}
            </div>
            <div className="flex items-center gap-x-3">
              <div className="rounded-lg p-2 shadow-sm border bg-white">
                <div className="flex items-center gap-x-2">
                  <div className="rounded-lg bg-indigo-50/80 p-3">
                    <Building className="text-indigo-600 size-5" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium">Jurisdiction</p>
                    <p className="text-sm">{contract.jurisdiction}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg p-2 shadow-sm border bg-white">
                <div className="flex items-center gap-x-2">
                  <div className="rounded-lg bg-indigo-50/80 p-3">
                    <Scale className="text-indigo-600 size-5" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium">Governing Law</p>
                    <p className="text-sm">{contract.governingLaw}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 rounded-lg space-y-4 shadow-lg">
        <div className="bg-indigo-50 h-14 rounded-lg shadow-sm px-4 py-2">
          <div className="flex items-center gap-x-2">
            <div className="rounded-lg shadow-sm bg-gradient-to-r from-indigo-500 to-indigo-600 p-2">
              <Calendar className="text-white" />
            </div>
            <p className="text-lg font-semibold">Important dates</p>
          </div>
        </div>
        <div className="space-y-2 px-4">
          <p className="text-sm font-medium uppercase text-slate-500">
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
          <p className="text-sm font-medium uppercase text-slate-500">
            Start date
          </p>
          <p className="text-base">
            {contract.startDate
              ? format(contract.startDate, "dd/MM/yy")
              : "Unknown"}
          </p>
        </div>
        <Separator />
        <div className="space-y-2 px-4 pb-2">
          <p className="text-sm font-medium uppercase text-slate-500">
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

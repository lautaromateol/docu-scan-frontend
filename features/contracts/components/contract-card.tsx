"use client";
import Link from "next/link";
import { format, formatDistanceToNow } from "date-fns";
import { Calendar, Eye, FileText, MapPin, Pen, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Contract } from "../types";

export function ContractCard({ contract }: { contract: Contract }) {
  const workspaceId = useWorkspaceId();

  return (
    <div className="p-6 space-y-6 bg-white/70 backdrop-blur-sm rounded-xl border border-indigo-100 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <div className="rounded-lg p-2 flex items-center justify-center bg-indigo-100">
              <FileText className="text-indigo-700" />
            </div>
            <p className="text-xl font-semibold capitalize">
              {contract.title.toLowerCase()}
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <Badge className="rounded-full bg-indigo-100 text-indigo-700 border-indigo-700 px-2 capitalize text-xs">
              {contract.category.toLowerCase()}
            </Badge>
            <Badge
              className={cn(
                "rounded-full px-2 capitalize text-xs",
                contract.status === "DRAFT"
                  ? "bg-yellow-100 border-yellow-700 text-yellow-700"
                  : contract.status === "SIGNED"
                  ? "bg-green-100 border-green-700 text-green-700"
                  : contract.status === "EXPIRED"
                  ? "bg-red-100 border-red-700 text-green-700"
                  : "bg-rose-100 border-rose-700 text-rose-700"
              )}
            >
              {contract.status?.toLowerCase()}
            </Badge>
          </div>
        </div>
        <Link
          href={`/dashboard/workspace/${workspaceId}/contracts/${contract.id}`}
        >
          <Button variant="secondary">
            <Eye />
            View in detail
          </Button>
        </Link>
      </div>
      <div className="rounded bg-slate-50 border border-slate-200 shadow p-4">
        <p className="text-base font-light">{contract.descriptionSummary}</p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="rounded p-2 bg-indigo-50/80 border border-indigo-200">
          <div className="flex items-center gap-x-3">
            <div className="rounded-lg p-2 flex items-center justify-center bg-indigo-200">
              <Pen className="text-indigo-700" />
            </div>
            <div className="space-y-0.5">
              <p className="text-xs font-medium text-slate-500">Signing date</p>
              <p className="text-sm font-medium">
                {contract.signingDate
                  ? format(contract.signingDate, "dd/MM/yy")
                  : "Unknown"}
              </p>
            </div>
          </div>
        </div>
        <div className="rounded p-2 bg-green-50/80 border border-green-200">
          <div className="flex items-center gap-x-3">
            <div className="rounded-lg p-2 flex items-center justify-center bg-green-200">
              <Calendar className="text-green-700" />
            </div>
            <div className="space-y-0.5">
              <p className="text-xs font-medium text-slate-500">Period</p>
              <p className="text-sm font-medium">
                {contract.startDate && contract.endDate
                  ? `${format(contract.startDate, "dd/MM/yy")} - ${format(
                      contract.endDate,
                      "dd/MM/yy"
                    )}`
                  : "Unknown"}
              </p>
            </div>
          </div>
        </div>
        <div className="rounded p-2 bg-purple-50/80 border border-purple-200">
          <div className="flex items-center gap-x-3">
            <div className="rounded-lg p-2 flex items-center justify-center bg-purple-200">
              <User className="text-purple-700" />
            </div>
            <div className="space-y-0.5">
              <p className="text-xs font-medium text-slate-500">
                Involved parties
              </p>
              <p className="text-sm font-medium">{contract.parties?.length}</p>
            </div>
          </div>
        </div>
        <div className="rounded p-2 bg-orange-50/80 border border-orange-200">
          <div className="flex items-center gap-x-3">
            <div className="rounded-lg p-2 flex items-center justify-center bg-orange-200">
              <FileText className="text-orange-700" />
            </div>
            <div className="space-y-0.5">
              <p className="text-xs font-medium text-slate-500">Obligations</p>
              <p className="text-sm font-medium">
                {contract.obligations?.length} defined
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <MapPin className="text-indigo-700" />
          <p className="text-sm font-semibold text-slate-600">
            {contract.jurisdiction}
          </p>
        </div>
        <p className="text-sm">
          Created {formatDistanceToNow(contract.createdAt, { addSuffix: true })}
        </p>
      </div>
    </div>
  );
}

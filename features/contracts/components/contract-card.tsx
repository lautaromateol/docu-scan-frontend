"use client";
import Link from "next/link";
import { format, formatDistanceToNow } from "date-fns";
import {
  Calendar,
  Eye,
  FileText,
  MapPin,
  Pen,
  User,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Contract } from "../types";
import { ContractCardInfo } from "./contract-card-info";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ContractCard({ contract }: { contract: Contract }) {
  const workspaceId = useWorkspaceId();

  return (
    <div className="p-6 space-y-6 bg-white/70 backdrop-blur-sm rounded-xl border border-indigo-100 shadow-sm">
      <div className="flex flex-col md:flex-row space-y-6 md:items-center md:justify-between">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <div className="rounded-lg p-2 flex items-center justify-center bg-indigo-100">
              <FileText className="text-indigo-700" />
            </div>
            <p className="text-lg md:text-xl font-semibold capitalize">
              {contract.title.toLowerCase()}
            </p>
          </div>
          <div className="flex items-center mx-auto md:mx-0 gap-x-2">
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
          className="w-full md:w-auto"
        >
          <Button className="w-full md:w-auto" variant="secondary">
            <Eye />
            View in detail
          </Button>
        </Link>
      </div>
      <div className="rounded bg-slate-50 border border-slate-200 shadow p-4">
        <p className="text-sm md:text-base font-light">
          {contract.descriptionSummary}
        </p>
      </div>
      <div className="hidden md:grid grid-cols-4 gap-4">
        <ContractCardInfo
          icon={Pen}
          data={
            contract.signingDate
              ? format(contract.signingDate, "dd/MM/yy")
              : "Unknown"
          }
          title="Signing date"
          variant="indigo"
        />
        <ContractCardInfo
          icon={Calendar}
          data={
            contract.startDate && contract.endDate
              ? `${format(contract.startDate, "dd/MM/yy")} - ${format(
                  contract.endDate,
                  "dd/MM/yy"
                )}`
              : "Unknown"
          }
          title="Period"
          variant="green"
        />
        <ContractCardInfo
          data={contract.parties?.length.toFixed() ?? ""}
          title="Involved parties"
          icon={Users}
          variant="green"
        />
        <ContractCardInfo
          icon={FileText}
          title="Obligations"
          data={`${contract.obligations?.length} defined`}
          variant="orange"
        />
      </div>
      <Carousel className="md:hidden">
        <CarouselContent>
          <CarouselItem>
            <ContractCardInfo
              icon={Pen}
              data={
                contract.signingDate
                  ? format(contract.signingDate, "dd/MM/yy")
                  : "Unknown"
              }
              title="Signing date"
              variant="indigo"
            />
          </CarouselItem>
          <CarouselItem>
            <ContractCardInfo
              icon={Calendar}
              data={
                contract.startDate && contract.endDate
                  ? `${format(contract.startDate, "dd/MM/yy")} - ${format(
                      contract.endDate,
                      "dd/MM/yy"
                    )}`
                  : "Unknown"
              }
              title="Period"
              variant="green"
            />
          </CarouselItem>
          <CarouselItem>
            <ContractCardInfo
              data={contract.parties?.length.toFixed() ?? ""}
              title="Involved parties"
              icon={Users}
              variant="green"
            />
          </CarouselItem>
          <CarouselItem>
            <ContractCardInfo
              icon={FileText}
              title="Obligations"
              data={`${contract.obligations?.length} defined`}
              variant="orange"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
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

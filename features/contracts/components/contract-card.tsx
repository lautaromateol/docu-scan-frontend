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
    <div className="p-6 space-y-6 bg-card rounded-xl border border-border shadow-card transition-all duration-200 hover:border-primary/20 hover:-translate-y-0.5 hover:shadow-modal">
      <div className="flex flex-col md:flex-row space-y-6 md:items-center md:justify-between">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <div className="rounded-lg p-2 flex items-center justify-center bg-primary/10 border border-primary/20">
              <FileText className="text-primary" />
            </div>
            <p className="text-lg md:text-xl font-semibold capitalize">
              {contract.title.toLowerCase()}
            </p>
          </div>
          <div className="flex items-center mx-auto md:mx-0 gap-x-2">
            <Badge variant="default" className="rounded-full px-2 capitalize text-xs">
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
              className="rounded-full px-2 capitalize text-xs"
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
      <div className="rounded-lg bg-secondary/50 border border-border p-4">
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
          <MapPin className="text-primary size-4" />
          <p className="text-sm font-medium text-muted-foreground">
            {contract.jurisdiction}
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          Created {formatDistanceToNow(contract.createdAt, { addSuffix: true })}
        </p>
      </div>
    </div>
  );
}

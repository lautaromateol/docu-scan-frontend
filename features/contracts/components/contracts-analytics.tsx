import { AlertTriangle, Check, FileClock, Pen } from "lucide-react";
import { Contract } from "../types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ContractAnalytic } from "./contract-analytic";

interface ContractsAnalyticsProps {
  contracts: Contract[];
}

export function ContractsAnalytics({ contracts }: ContractsAnalyticsProps) {
  return (
    <>
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
        <ContractAnalytic
          contracts={contracts}
          icon={Pen}
          status="SIGNED"
          title="Signed Contracts"
          variant="success"
        />
        <ContractAnalytic
          contracts={contracts}
          icon={FileClock}
          status="DRAFT"
          title="Drafted Contracts"
          variant="warn"
        />
        <ContractAnalytic
          contracts={contracts}
          icon={AlertTriangle}
          status="EXPIRED"
          title="Expired Contracts"
          variant="danger"
        />
        <ContractAnalytic
          contracts={contracts}
          icon={Check}
          status="TERMINATED"
          title="Terminated Contracts"
        />
      </div>

      <Carousel className="md:hidden">
        <CarouselContent>
          <CarouselItem className="basis-full">
            <ContractAnalytic
              contracts={contracts}
              icon={Pen}
              status="SIGNED"
              title="Signed Contracts"
              variant="success"
            />
          </CarouselItem>
          <CarouselItem className="basis-full">
            <ContractAnalytic
              contracts={contracts}
              icon={FileClock}
              status="DRAFT"
              title="Drafted Contracts"
              variant="warn"
            />
          </CarouselItem>
          <CarouselItem className="basis-full">
            <ContractAnalytic
              contracts={contracts}
              icon={AlertTriangle}
              status="EXPIRED"
              title="Expired Contracts"
              variant="danger"
            />
          </CarouselItem>
          <CarouselItem className="basis-full">
            <ContractAnalytic
              contracts={contracts}
              icon={Check}
              status="TERMINATED"
              title="Terminated Contracts"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}

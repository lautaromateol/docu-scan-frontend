import { Contract } from "../types";
import { Users, FileText, Scale, Clock, AlertTriangle } from "lucide-react";
import { ContractCarouselItem } from "./contract-carousel-item";
import { ContractParty } from "./contract-party";
import { ContractObligation } from "./contract-obligation";
import { ContractClause } from "./contract-clause";
import { ContractDeadline } from "./contract-deadline";
import { ContractTerminationClause } from "./contract-termination-clause";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ContractCarousel({ contract }: { contract: Contract }) {
  return (
    <div className="md:hidden">
      <Carousel>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselContent>
          <ContractCarouselItem
            title="Involved Parties"
            value="parties"
            description="Entities and persons involved in this agreement"
            length={contract.parties?.length ?? 0}
            icon={<Users />}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
              {contract.parties?.map((party) => (
                <ContractParty party={party} key={party.id} />
              ))}
            </div>
          </ContractCarouselItem>
          <ContractCarouselItem
            title="Defined Obligations"
            value="obligations"
            description="Obligations established for the parties involved in the contract."
            length={contract.obligations?.length ?? 0}
            icon={<FileText />}
          >
            {contract.obligations?.map((obligation) => (
              <ContractObligation obligation={obligation} key={obligation.id} />
            ))}
          </ContractCarouselItem>
          <ContractCarouselItem
            title="Clauses"
            value="clauses"
            description="Terms and conditons established in the contract."
            length={contract.clauses?.length ?? 0}
            icon={<Scale />}
          >
            {contract.clauses?.map((clause) => (
              <ContractClause
                clause={clause}
                variant={clause.clauseType}
                key={clause.id}
              />
            ))}
          </ContractCarouselItem>
          <ContractCarouselItem
            title="Important Deadlines"
            value="deadlines"
            description="Critical contract deadlines and deadlines."
            length={contract.deadlines?.length ?? 0}
            icon={<Clock />}
          >
            <div className="grid grid-cols-2 gap-12">
              {contract.deadlines?.map((deadline) => (
                <ContractDeadline deadline={deadline} key={deadline.id} />
              ))}
            </div>
          </ContractCarouselItem>
          <ContractCarouselItem
            title="Termination Clauses"
            value="termination clauses"
            description="Terms and conditions to finish the contract."
            length={contract.terminationClauses?.length ?? 0}
            icon={<AlertTriangle />}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {contract.terminationClauses?.map((clause) => (
                <ContractTerminationClause clause={clause} key={clause.id} />
              ))}
            </div>
          </ContractCarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}

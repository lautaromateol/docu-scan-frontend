import { Contract } from "../types";
import { Users, FileText, Scale, Clock, AlertTriangle } from "lucide-react";
import { ContractTab } from "./contract-tab";
import { ContractParty } from "./contract-party";
import { ContractObligation } from "./contract-obligation";
import { ContractClause } from "./contract-clause";
import { ContractDeadline } from "./contract-deadline";
import { ContractTerminationClause } from "./contract-termination-clause";

export function ContractTabs({ contract }: { contract: Contract }) {
  return (
    <>
      <ContractTab
        title="Involved Parties"
        value="parties"
        description="Entities and persons involved in this agreement"
        length={contract.parties?.length ?? 0}
        icon={<Users />}
      >
        <div className="grid grid-cols-2 gap-12">
          {contract.parties?.map((party) => (
            <ContractParty party={party} key={party.id} />
          ))}
        </div>
      </ContractTab>
      <ContractTab
        title="Defined Obligations"
        value="obligations"
        description="Obligations established for the parties involved in the contract."
        length={contract.obligations?.length ?? 0}
        icon={<FileText />}
      >
        {contract.obligations?.map((obligation) => (
          <ContractObligation obligation={obligation} key={obligation.id} />
        ))}
      </ContractTab>
      <ContractTab
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
      </ContractTab>
      <ContractTab
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
      </ContractTab>

      <ContractTab
        title="Termination Clauses"
        value="termination clauses"
        description="Terms and conditions to finish the contract."
        length={contract.terminationClauses?.length ?? 0}
        icon={<AlertTriangle />}
      >
        <div className="grid grid-cols-2 gap-12">
          {contract.terminationClauses?.map((clause) => (
            <ContractTerminationClause clause={clause} key={clause.id} />
          ))}
        </div>
      </ContractTab>
    </>
  );
}

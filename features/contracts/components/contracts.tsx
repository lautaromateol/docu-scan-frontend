import { Contract } from "../types";
import { ContractCard } from "./contract";

export function Contracts({ contracts }: { contracts: Contract[] }) {
  return <div className="space-y-2">
    {contracts.map((contract) => (
      <ContractCard key={contract.id} contract={contract}/>
    ))}
  </div>;
}

import { Contract } from "../types";
import { ContractPageHeader } from "./contract-page-header";
import { ContractPageTabs } from "./contract-page-tabs";

export function ContractPage({ contract }: { contract: Contract }) {
  return (
    <div className="flex flex-col space-y-8">
      <ContractPageHeader contract={contract} />
      <ContractPageTabs contract={contract} />
    </div>
  );
}

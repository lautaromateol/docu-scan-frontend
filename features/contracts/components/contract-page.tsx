import { Contract } from "../types";
import { ContractCarousel } from "./contract-carousel";
import { ContractPageBreadcrumbs } from "./contract-page-breadcrumbs";
import { ContractPageHeader } from "./contract-page-header";
import { ContractPageTabs } from "./contract-page-tabs";

export function ContractPage({ contract }: { contract: Contract }) {
  return (
    <div className="flex flex-col space-y-8">
      <ContractPageBreadcrumbs contract={contract} />
      <ContractPageHeader contract={contract} />
      <ContractPageTabs contract={contract} />
      <ContractCarousel contract={contract} />
    </div>
  );
}

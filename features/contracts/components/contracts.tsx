"use client";
import { AlertCircle } from "lucide-react";
import { Contract } from "../types";
import { ContractCard } from "./contract-card";
import { UploadContractButton } from "./upload-contract-button";
import { useState } from "react";
import { ContractsSearchBar } from "./contracts-searchbar";
import { ContractsAnalytics } from "./contracts-analytics";

export function Contracts({ contracts }: { contracts: Contract[] }) {
  const [filters, setFilters] = useState({
    search: "",
    status: "all",
  });

  const filteredContracts = contracts.filter((contract) => {
    const match =
      contract.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      contract.descriptionSummary
        ?.toLowerCase()
        .includes(filters.search.toLowerCase()) ||
      contract.jurisdiction
        ?.toLowerCase()
        .includes(filters.search.toLowerCase());

    const matchStatus =
      contract.status === filters.status || filters.status === "all";

    return match && matchStatus;
  });

  if (contracts.length === 0) {
    return (
      <div className="mx-auto w-1/2 flex flex-col items-center gap-y-2 mt-20 rounded-lg p-4 border border-border bg-card shadow-card">
        <div className="rounded-full p-4 bg-warning/10 border border-warning/20 w-auto">
          <AlertCircle className="text-warning" />
        </div>
        <div className="space-y-0.5 text-center">
          <p className="text-lg font-medium">
            You have not uploaded any contract yet!
          </p>
          <p className="text-sm">
            Upload a contract and start working with our contract-analyzor IA.
          </p>
        </div>
        <UploadContractButton />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <ContractsAnalytics contracts={contracts} />
      <ContractsSearchBar filters={filters} setFilters={setFilters} />
      <div className="space-y-2">
        {filteredContracts.map((contract) => (
          <ContractCard key={contract.id} contract={contract} />
        ))}
      </div>
    </div>
  );
}

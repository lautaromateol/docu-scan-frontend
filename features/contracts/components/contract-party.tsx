import { Building2 } from "lucide-react";
import { ContractParty as ContractPartyType } from "../types";
import { Badge } from "@/components/ui/badge";

interface ContractPartyProps {
  party: ContractPartyType;
}

export function ContractParty({ party }: ContractPartyProps) {
  return (
    <div className="rounded-lg shadow-md py-2 px-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <div className="rounded-lg bg-gradient-to-r from-indigo-700 to-indigo-900 p-2">
            <Building2 className="text-white" />
          </div>
          <div className="space-y-0.5">
            <p className="text-lg font-medium">{party.name}</p>
            <p className="text-sm text-gray-500">
              Identifier: {party.identifier}
            </p>
          </div>
        </div>
        <Badge className="rounded-full bg-indigo-200 text-indigo-700 font-medium text-xs">
          {party.role}
        </Badge>
      </div>
    </div>
  );
}

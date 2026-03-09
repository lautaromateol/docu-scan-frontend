import { Building2 } from "lucide-react";
import { ContractParty as ContractPartyType } from "../types";
import { Badge } from "@/components/ui/badge";

interface ContractPartyProps {
  party: ContractPartyType;
}

export function ContractParty({ party }: ContractPartyProps) {
  return (
    <div className="rounded-lg shadow-card border border-border bg-card py-2 px-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <div className="rounded-lg bg-primary/10 border border-primary/20 p-2">
            <Building2 className="text-primary" />
          </div>
          <div className="space-y-0.5">
            <p className="text-lg font-medium">{party.name}</p>
            <p className="text-sm text-muted-foreground">
              Identifier: {party.identifier}
            </p>
          </div>
        </div>
        <Badge variant="default" className="rounded-full font-medium text-xs">
          {party.role}
        </Badge>
      </div>
    </div>
  );
}

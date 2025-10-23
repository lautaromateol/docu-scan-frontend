import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Contract } from "../types";
import { cloneElement, JSX } from "react";
import { AlertTriangle, Clock, FileText, Scale, User } from "lucide-react";
import { ContractTabs } from "./contract-tabs";

export function ContractPageTabs({ contract }: { contract: Contract }) {
  return (
    <div className="hidden md:block w-full">
      <Tabs defaultValue="parties">
        <TabsList className="w-full">
          <TabsTrigger value="parties">
            <ContractTab title="Parties" icon={<User />} />
          </TabsTrigger>
          <TabsTrigger value="obligations">
            <ContractTab title="Obligations" icon={<FileText />} />
          </TabsTrigger>
          <TabsTrigger value="clauses">
            <ContractTab title="Clauses" icon={<Scale />} />
          </TabsTrigger>
          <TabsTrigger value="deadlines">
            <ContractTab title="Deadlines" icon={<Clock />} />
          </TabsTrigger>
          <TabsTrigger value="termination clauses">
            <ContractTab title="Termination Clauses" icon={<AlertTriangle />} />
          </TabsTrigger>
        </TabsList>
        <ContractTabs contract={contract} />
      </Tabs>
    </div>
  );
}

function ContractTab({ title, icon }: { title: string; icon: JSX.Element }) {
  return (
    <div className="flex items-center gap-x-2">
      {cloneElement(icon)}
      {title}
    </div>
  );
}

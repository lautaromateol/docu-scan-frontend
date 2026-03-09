import { getContracts } from "@/features/contracts/actions/get-contracts";
import { Contracts } from "@/features/contracts/components/contracts";
import { File } from "lucide-react";

export default async function ContractsPage({ params }: any) {
  const { id } = await params;

  const contracts = await getContracts(id);

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-3 mx-0 md:mx-auto w-full md:w-1/2">
        <div className="rounded-lg shadow-card p-2 md:p-4 bg-primary/10 border border-primary/20 w-auto">
          <File className="text-primary" />
        </div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Contracts</h1>
        <p className="text-lg md:text-xl text-muted-foreground md:text-center">
          Review and manage the uploaded contracts of your workspace.
        </p>
      </div>
      <Contracts contracts={contracts} />
    </div>
  );
}

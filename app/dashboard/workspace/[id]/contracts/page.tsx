import { getContracts } from "@/features/contracts/actions/get-contracts";
import { Contracts } from "@/features/contracts/components/contracts";
import { File } from "lucide-react";

export default async function ContractsPage({ params }: any) {
  const { id } = await params;

  const contracts = await getContracts(id);

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-3 mx-auto w-1/2">
        <div className="rounded-lg shadow-md p-2 md:p-4 bg-gradient-to-r from-indigo-700 to-indigo-900 w-auto">
          <File className="text-white" />
        </div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Contracts</h1>
        <p className="text-lg md:text-xl text-gray-600 text-center">
          Review and manage the uploaded contracts of your workspace.
        </p>
      </div>
      <Contracts contracts={contracts} />
    </div>
  );
}

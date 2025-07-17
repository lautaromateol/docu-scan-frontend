import { Separator } from "@/components/ui/separator";
import { getContracts } from "@/features/contracts/actions/get-contracts";
import { Contracts } from "@/features/contracts/components/contracts";

export default async function ContractsPage({ params }: any) {
  const { id } = await params;

  const contracts = await getContracts(id);

  return (
    <div className="space-y-8">
      <div className="space-y-0.5">
        <h1 className="text-2xl font-semibold">Contracts</h1>
        <p className="text-base font-light">
          Review and manage the uploaded contracts of your workspace.
        </p>
      </div>
      <Separator />
      <Contracts contracts={contracts} />
    </div>
  );
}

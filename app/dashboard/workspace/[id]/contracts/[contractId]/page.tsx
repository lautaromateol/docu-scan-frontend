import { notFound } from "next/navigation";
import { getContract } from "@/features/contracts/actions/get-contract";
import { ContractPage } from "@/features/contracts/components/contract-page";

export default async function ContractIdPage({ params }: { params: any }) {

  const { contractId, id } = await params

  const contract = await getContract({ contractId, workspaceId: id })

  if(!contract) {
    notFound()
  }

  return <ContractPage contract={contract} />;
}

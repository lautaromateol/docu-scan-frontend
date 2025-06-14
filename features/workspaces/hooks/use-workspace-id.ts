import { useParams } from "next/navigation";

export function useWorkspaceId() {
  const params = useParams()
  const workspaceId = params.id

  return workspaceId as string
}
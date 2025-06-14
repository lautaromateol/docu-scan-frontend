import { redirect } from "next/navigation";
import { getToken } from "@/actions/auth/get-token";
import { getWorkspaces } from "@/features/workspaces/actions/get-workspaces";

export default async function DashboardPage() {
  const payload = await getToken();

  if (!payload) {
    redirect("/sign-in");
  }

  const workspaces = await getWorkspaces();

  if (workspaces.length === 0) {
    redirect("/create-workspace");
  } else {
    redirect(`/dashboard/workspace/${workspaces[0].id}`)
  }
}

import { getToken } from "@/actions/auth/get-token";
import { getWorkspaces } from "@/features/workspaces/actions/get-workspaces";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { token } = await getToken();

  if (!token) {
    redirect("/sign-in");
  }

  const { workspaces } = await getWorkspaces();

  if (workspaces.length === 0) {
    redirect("/create-workspace");
  }

  return <>{children}</>;
}

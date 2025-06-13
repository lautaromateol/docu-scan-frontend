import { getToken } from "@/actions/auth/get-token";
import { API_URL } from "@/lib/constants";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = await getToken();

  if (!token) {
    redirect("/sign-in");
  }

  return <>{children}</>;
}

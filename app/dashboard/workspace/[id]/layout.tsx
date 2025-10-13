import { SidebarProvider } from "@/components/ui/sidebar";
import { Navbar } from "./components/navbar";
import { AppSidebar } from "./components/sidebar";
import { getUser } from "@/features/users/actions/get-user";
import { redirect } from "next/navigation";
import { getMembers } from "@/features/members/actions/get-members";

export default async function DashboardIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const { id } = await params;

  const user = await getUser();
  const members = await getMembers(id);

  if (!user) {
    redirect("/sign-in");
  }

  const me = members.find((member) => member.userId === user.id);

  if (!me) {
    throw new Error();
  }

  return (
    <SidebarProvider>
      <div className="w-full flex">
        <div className="hidden lg:block">
          <AppSidebar
            user={{
              email: user.email,
              name: user.name,
              image: user.pictureUrl,
              role: me.role,
            }}
          />
        </div>
        <div className="flex flex-col w-full">
          <Navbar />
          <main className="flex-1 p-8">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}

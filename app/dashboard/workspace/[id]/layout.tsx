import { SidebarProvider } from "@/components/ui/sidebar";
import { Navbar } from "./components/navbar";
import { AppSidebar } from "./components/sidebar";

export default async function DashboardIdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="w-full flex">
        <div className="hidden lg:block">
          <AppSidebar />
        </div>
        <div className="flex flex-col w-full">
          <Navbar />
          <main className="flex-1 p-8">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}

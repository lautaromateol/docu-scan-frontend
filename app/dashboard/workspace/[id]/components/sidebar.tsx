"use client";
import {
  File,
  Grid2X2,
  Settings,
  User,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { NavItem } from "./nav-item";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

export function AppSidebar() {
  const id = useWorkspaceId();

  const routes = [
    {
      title: "Dashboard",
      href: `/dashboard/workspace/${id}`,
      icon: <Grid2X2 />,
    },
    {
      title: "Contracts",
      href: `/dashboard/workspace/${id}/contracts`,
      icon: <File />,
    },
    {
      title: "Settings",
      href: `/dashboard/workspace/${id}/settings`,
      icon: <Settings />,
    },
    {
      title: "Members",
      href: `/dashboard/workspace/${id}/members`,
      icon: <User />,
    },
  ];

  return (
    <Sidebar>
      <SidebarContent className="bg-white border-r shadow-xs">
        <SidebarGroup className="px-0 py-4">
          <SidebarGroupContent>
            <SidebarMenu>
              {routes.map((route) => (
                <NavItem
                  key={route.href}
                  href={route.href}
                  icon={route.icon}
                  title={route.title}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

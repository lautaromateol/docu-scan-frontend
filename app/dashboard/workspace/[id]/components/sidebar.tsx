"use client";
import { File, Grid2X2, Settings, User } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { NavItem } from "./nav-item";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";
import { Separator } from "@/components/ui/separator";

export function AppSidebar() {
  const id = useWorkspaceId();

  const mainNavigation = [
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
  ];

  const workspaceNavigation = [
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
    <Sidebar className="border-r shadow-xs">
      <SidebarContent className="px-4 py-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Main
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavigation.map((item) => (
                <NavItem
                  key={item.href}
                  icon={item.icon}
                  href={item.href}
                  title={item.title}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator />
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Workspace
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {workspaceNavigation.map((item) => (
                <NavItem
                  key={item.href}
                  icon={item.icon}
                  href={item.href}
                  title={item.title}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

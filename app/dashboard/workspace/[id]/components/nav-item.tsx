"use client";
import Link from "next/link";
import { cloneElement, JSX } from "react";
import { usePathname } from "next/navigation";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  title: string;
  icon: JSX.Element;
}

export function NavItem({ href, title, icon }: NavItemProps) {
  const pathname = usePathname();

  const active =
    pathname.split(`/`).includes(href.split("/")[4]) ||
    (pathname.split("/").length === 4 && title === "Dashboard");

  return (
    <SidebarMenuItem
      className={cn(
        active && "from-indigo-800 to-indigo-700 rounded-lg text-white",
        "bg-gradient-to-r rounded-lg",
      )}
    >
      <SidebarMenuButton asChild>
        <Link href={href}>
          {cloneElement(icon, { className: "size-20" })}
          <p
            className={cn(
              "text-sm font-light",
              active && "text-white"
            )}
          >
            {title}
          </p>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

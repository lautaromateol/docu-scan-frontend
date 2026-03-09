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
        "rounded-lg",
        active && "bg-primary/15 border border-primary/20",
      )}
    >
      <SidebarMenuButton asChild>
        <Link href={href}>
          {cloneElement(icon, { className: "size-20" })}
          <p
            className={cn(
              "text-sm font-light text-muted-foreground",
              active && "text-primary font-medium"
            )}
          >
            {title}
          </p>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

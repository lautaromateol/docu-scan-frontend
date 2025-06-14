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

  const pathname = usePathname()

  return (
    <SidebarMenuItem className={cn(pathname === href && "border-l-4 border-indigo-800 bg-indigo-100", "hover:border-l-4 hover:border-indigo-800 hover:bg-indigo-100")}>
      <SidebarMenuButton asChild>
        <Link href={href}>
          {cloneElement(icon, { className: "size-20" })}
          <p className={cn("text-sm font-light hover:text-indigo-800", pathname === href && "text-indigo-800")}>{title}</p>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

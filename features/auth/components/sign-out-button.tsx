"use client";
import { Button } from "@/components/ui/button";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { ArrowRightSquare } from "lucide-react";
import { useSignOut } from "../hooks/use-sign-out";

export function SignOutButton() {
  const { signOut, isSigningOut } = useSignOut();

  return (
    <Button
      disabled={isSigningOut}
      onClick={() => signOut()}
      asChild
      variant="ghost"
    >
      <SidebarMenuButton>
        <ArrowRightSquare className="size-20" />
        <p className="text-sm font-light">Sign Out</p>
      </SidebarMenuButton>
    </Button>
  );
}

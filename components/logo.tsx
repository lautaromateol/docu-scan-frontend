import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export function Logo({
  variant = "default",
}: {
  variant?: "default" | "landing";
}) {
  return (
    <div className="flex items-center gap-x-2">
      <div className="relative h-8 w-12">
        <Image
          src={variant === "default" ? "/logo.svg" : "/logo-indigo.svg"}
          alt="Docuscan logo"
          fill
        />
      </div>
      <p
        className={cn(
          "text-3xl font-extrabold",
          variant === "landing" ? "text-indigo-700" : "text-white"
        )}
      >
        Docuscan
      </p>
    </div>
  );
}

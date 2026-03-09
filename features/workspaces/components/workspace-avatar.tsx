import Image from "next/image";
import { cn } from "@/lib/utils";

interface WorkspaceAvatarProps {
  name: string;
  className?: string;
}

export function WorkspaceAvatar({ name, className }: WorkspaceAvatarProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-primary/15 text-primary font-medium size-6",
        className
      )}
    >
      {name.at(0)?.toUpperCase()}
    </div>
  );
}

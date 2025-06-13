import Image from "next/image";
import { cn } from "@/lib/utils";

interface MemberAvatarProps {
  name: string;
  pictureUrl?: string;
  className?: string;
}

export function MemberAvatar({ name, pictureUrl, className }: MemberAvatarProps) {
  if (pictureUrl) {
    return (
      <div className={cn(
        "size-6 rounded-full relative overflow-hidden",
        className
      )}>
        <Image src={pictureUrl} alt={name} fill />
      </div>
    )
  }

  return (
    <div className={cn(
      "flex items-center justify-center rounded-full bg-indigo-100 text-indigo-800 font-medium size-6",
      className
    )}>
      {name.at(0)?.toUpperCase()}
    </div>
  )
}
import { MemberAvatar } from "@/features/members/components/member-avatar";

interface UserProfileCardProps {
  user: {
    name: string;
    email: string;
    role: string;
    image?: string;
  };
}

export function UserProfileCard({ user }: UserProfileCardProps) {
  return (
    <div className="pt-3 px-3">
      <div className="flex items-center gap-3">
        <MemberAvatar
          className="size-10"
          name={user.name}
          pictureUrl={user.image}
        />

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-sidebar-foreground truncate">
            {user.name}
          </p>
          <p className="text-xs text-muted-foreground truncate">{user.email}</p>
          <p className="text-xs text-sidebar-primary font-medium mt-0.5">
            {user.role}
          </p>
        </div>
      </div>
    </div>
  );
}

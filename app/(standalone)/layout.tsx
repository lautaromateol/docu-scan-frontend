import { getToken } from "@/actions/auth/get-token";
import { Logo } from "@/components/logo";
import { MemberAvatar } from "@/features/members/components/member-avatar";
import { getUser } from "@/features/users/actions/get-user";
import { redirect } from "next/navigation";

export default async function StandaloneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const payload = await getToken();

  if (!payload) {
    redirect("/sign-in");
  }

  const user = await getUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <main className="min-h-screen">
      <header className="h-14 px-4 py-2 bg-sidebar border-b border-border flex items-center justify-between">
        <Logo />
        <div className="flex items-center justify-center gap-x-2">
          <MemberAvatar
            name={user.name}
            pictureUrl={user.pictureUrl}
            className="size-10"
          />
          <p className="text-sm font-medium text-foreground">{user.name}</p>
        </div>
      </header>
      <div className="flex justify-center mt-20">{children}</div>
    </main>
  );
}

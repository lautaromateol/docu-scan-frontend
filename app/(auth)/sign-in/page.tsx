import Image from "next/image";
import { SignInForm } from "@/features/auth/components/sign-in-form";

export default function SignInPage() {
  return (
    <main className="block md:grid md:grid-cols-2 lg:grid-cols-[1fr_2fr] min-h-screen">
      <div className="hidden md:flex flex-col bg-sidebar border-r border-border relative overflow-hidden">
        {/* Decorative blur orbs */}
        <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-info/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 mx-8 my-4 space-y-4">
          <div className="flex items-center gap-x-2">
            <div className="relative h-8 w-12">
              <Image src="/logo.svg" alt="Docuscan logo" fill />
            </div>
            <p className="text-2xl font-bold text-foreground">Docuscan</p>
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-foreground">Sign in</h2>
            <h3 className="text-sm font-light text-muted-foreground">
              Access your account and continue scanning documents with our assistant.
            </h3>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-5 md:p-0 bg-background">
        <div className="space-y-8 w-full max-w-sm animate-scale-in">
          <div className="space-y-1.5">
            <h2 className="text-3xl font-semibold text-center text-foreground">
              Welcome back!
            </h2>
            <p className="text-muted-foreground font-light text-sm text-center">
              Docuscan takes document scanning to another level of simplicity.
            </p>
          </div>
          <SignInForm />
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import { SignInForm } from "@/features/auth/components/sign-in-form";

export default function SignInPage() {
  return (
    <main className="grid grid-cols-[1fr_2fr] min-h-screen">
      <div className="bg-indigo-800">
        <div className="mx-8 my-4 space-y-4">
          <div className="flex items-center gap-x-2">
            <div className="relative h-8 w-12">
              <Image src="/logo.svg" alt="Docuscan logo" fill />
            </div>
            <p className="text-2xl font-bold text-white">Docuscan</p>
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-white">Sign in</h2>
            <h3 className="text-sm font-light text-white">
              Access your account and continue scanning documents with our assistant.
            </h3>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="space-y-8">
          <div className="space-y-0.5">
            <h2 className="text-3xl font-medium text-center">
              Welcome back!
            </h2>
            <p className="text-slate-500 font-light text-sm">
              Docuscan takes document scanning to another level of simplicity.
            </p>
          </div>
          <SignInForm />
        </div>
      </div>
    </main>
  );
}

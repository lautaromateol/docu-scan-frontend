import Image from "next/image";
import { SignUpForm } from "@/features/auth/components/sign-up-form";

export default function SignUpPage() {
  return (
    <main className="block md:grid md:grid-cols-2 grid-cols-[1fr_2fr] min-h-screen">
      <div className="hidden md:block bg-indigo-800">
        <div className="mx-8 my-4 space-y-4">
          <div className="flex items-center gap-x-2">
            <div className="relative h-8 w-12">
              <Image src="/logo.svg" alt="Docuscan logo" fill />
            </div>
            <p className="text-2xl font-bold text-white">Docuscan</p>
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-white">Sign up</h2>
            <h3 className="text-sm font-light text-white">
              Create your account for free and start scanning documents right
              now.
            </h3>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-5 md:p-0">
        <div className="space-y-8">
          <div className="space-y-0.5">
            <h2 className="text-3xl font-medium text-center">
              Welcome to Docuscan!
            </h2>
            <p className="text-slate-500 font-light text-sm">
              Docuscan takes document scanning to another level of simplicity.
            </p>
          </div>
          <SignUpForm />
        </div>
      </div>
    </main>
  );
}

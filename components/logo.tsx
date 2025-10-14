import Image from "next/image";
import Link from "next/link";

export function Logo({
  variant = "default",
}: {
  variant?: "default" | "landing";
}) {
  return (
    <div className="relative h-8 w-12">
      <Link href="/">
        <Image
          src={variant === "default" ? "/logo.svg" : "/logo-indigo.svg"}
          alt="Docuscan logo"
          fill
        />
      </Link>
    </div>
  );
}

import Image from "next/image";

export function Logo({
  variant = "default",
}: {
  variant?: "default" | "landing";
}) {
  return (
    <div className="relative h-8 w-12">
      <Image
        src={variant === "default" ? "/logo.svg" : "/logo-indigo.svg"}
        alt="Docuscan logo"
        fill
      />
    </div>
  );
}

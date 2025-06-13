import Image from "next/image";
import React from "react";

export function Logo() {
  return (
    <div className="flex items-center gap-x-2">
      <div className="relative h-8 w-12">
        <Image src="/logo.svg" alt="Docuscan logo" fill />
      </div>
      <p className="text-2xl font-bold text-white">Docuscan</p>
    </div>
  );
}

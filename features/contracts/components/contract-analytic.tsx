import { cva, VariantProps } from "class-variance-authority";
import { JSX } from "react";
import { Contract } from "../types";
import { cn } from "@/lib/utils";

const iconVariant = cva("size-5", {
  variants: {
    variant: {
      default: "text-indigo-500",
      warn: "text-yellow-500",
      success: "text-emerald-500",
      danger: "text-rose-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const boxVariant = cva("p-2 rounded-lg", {
  variants: {
    variant: {
      default: "bg-indigo-100",
      warn: "bg-yellow-100",
      success: "bg-emerald-100",
      danger: "bg-rose-100",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type IconVariant = VariantProps<typeof iconVariant>;
type BoxVariant = VariantProps<typeof boxVariant>;

interface ContractAnalyticProps extends IconVariant, BoxVariant {
  icon: JSX.ElementType;
  status: "SIGNED" | "DRAFT" | "EXPIRED" | "TERMINATED";
  title: string;
  contracts: Contract[];
}

export function ContractAnalytic({
  contracts,
  icon: Icon,
  status,
  title,
  variant,
}: ContractAnalyticProps) {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-indigo-100 shadow-sm">
      <div className="flex items-center gap-3">
        <div className={cn(boxVariant({ variant }))}>
          <Icon className={cn(iconVariant({ variant }))} />
        </div>
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-xl font-bold text-gray-900">
            {contracts.filter((contract) => contract.status === status).length}
          </p>
        </div>
      </div>
    </div>
  );
}

import { cva, VariantProps } from "class-variance-authority";
import { JSX } from "react";
import { Contract } from "../types";
import { cn } from "@/lib/utils";

const iconVariant = cva("size-5", {
  variants: {
    variant: {
      default: "text-primary",
      warn:    "text-warning",
      success: "text-success",
      danger:  "text-destructive",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const boxVariant = cva("p-2 rounded-lg border", {
  variants: {
    variant: {
      default: "bg-primary/10 border-primary/20",
      warn:    "bg-warning/10 border-warning/20",
      success: "bg-success/10 border-success/20",
      danger:  "bg-destructive/10 border-destructive/20",
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
    <div className="bg-card rounded-xl p-4 border border-border shadow-card transition-all duration-200 hover:border-primary/20">
      <div className="flex items-center gap-3">
        <div className={cn(boxVariant({ variant }))}>
          <Icon className={cn(iconVariant({ variant }))} />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-xl font-bold text-foreground">
            {contracts.filter((contract) => contract.status === status).length}
          </p>
        </div>
      </div>
    </div>
  );
}

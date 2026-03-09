import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { JSX } from "react";
import {
  ContractByCategory,
  ContractByStatus,
  ObligationsByType,
} from "../types";
import { ContractsByCategoryChart } from "./contracts-by-category-chart";
import { ContractsByStatusChart } from "./contracts-by-status";
import { ObligationsByTypeChart } from "./obligations-by-type";

const iconVariant = cva("size-6", {
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

type IconVariant = VariantProps<typeof iconVariant>;

interface KPIProps extends IconVariant {
  title: string;
  description: string;
  icon: JSX.ElementType;
  metric?: number;
  contractsByCategory?: ContractByCategory[];
  contractsByStatus?: ContractByStatus[];
  obligationsByTipe?: ObligationsByType[];
}

export function KPICard({
  contractsByCategory,
  contractsByStatus,
  obligationsByTipe,
  description,
  icon: Icon,
  title,
  metric,
  variant,
}: KPIProps) {
  return (
    <div className="rounded-xl shadow-card border border-border bg-card space-y-3 p-4 transition-all duration-200 hover:border-primary/20 hover:shadow-modal">
      <div className="flex items-center gap-x-2">
        <Icon className={cn(iconVariant({ variant }))} />
        <p className="text-base font-medium text-foreground">{title}</p>
      </div>
      {(!contractsByStatus || !contractsByCategory || !obligationsByTipe) && (
        <p className="overflow-hidden text-3xl font-bold px-2 text-foreground tabular-nums">{metric}</p>
      )}
      <span className="text-sm text-muted-foreground">{description}</span>
      {contractsByCategory && (
        <div className="pt-1">
          <ContractsByCategoryChart data={contractsByCategory} />
        </div>
      )}
      {contractsByStatus && (
        <div className="pt-1">
          <ContractsByStatusChart data={contractsByStatus} />
        </div>
      )}
      {obligationsByTipe && (
        <div className="pt-1">
          <ObligationsByTypeChart data={obligationsByTipe} />
        </div>
      )}
    </div>
  );
}

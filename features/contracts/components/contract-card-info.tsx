import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { JSX } from "react";

const iconVariant = cva("rounded-lg p-2 flex items-center justify-center", {
  variants: {
    variant: {
      indigo: "bg-indigo-200 text-indigo-700",
      purple: "bg-purple-200 text-purple-700",
      green: "bg-green-200 text-green-700",
      orange: "bg-orange-200 text-orange-700",
    },
  },
  defaultVariants: {
    variant: "indigo",
  },
});

const containerVariant = cva("rounded p-2 border", {
  variants: {
    variant: {
      indigo: "bg-indigo-50/80 border-indigo-200",
      purple: "bg-purple-50/80 border-purple-200",
      green: "bg-green-50/80 border-green-200",
      orange: "bg-orange-50/80 border-orange-200",
    },
  },
  defaultVariants: {
    variant: "indigo"
  }
});

type IconVariant = VariantProps<typeof iconVariant>;
type ContainerVariant = VariantProps<typeof containerVariant>;

interface ContractCardInfoProps extends IconVariant, ContainerVariant {
  title: string;
  data: string;
  icon: JSX.ElementType;
}

export function ContractCardInfo({
  title,
  data,
  icon: Icon,
  variant,
}: ContractCardInfoProps) {
  return (
    <div className={cn(containerVariant({ variant }))}>
      <div className="flex items-center gap-x-3">
        <div className={cn(iconVariant({ variant }))}>
          <Icon className="size-6" />
        </div>
        <div className="space-y-0.5">
          <p className="text-xs font-medium text-slate-500">{title}</p>
          <p className="text-sm font-medium">{data}</p>
        </div>
      </div>
    </div>
  );
}

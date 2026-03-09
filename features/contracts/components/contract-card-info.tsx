import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { JSX } from "react";

const iconVariant = cva("rounded-lg p-2 flex items-center justify-center", {
  variants: {
    variant: {
      indigo: "bg-primary/10 text-primary border border-primary/20",
      purple: "bg-info/10 text-info border border-info/20",
      green:  "bg-success/10 text-success border border-success/20",
      orange: "bg-warning/10 text-warning border border-warning/20",
    },
  },
  defaultVariants: {
    variant: "indigo",
  },
});

const containerVariant = cva("rounded-lg p-3 border transition-all duration-200", {
  variants: {
    variant: {
      indigo: "bg-primary/5 border-primary/15",
      purple: "bg-info/5 border-info/15",
      green:  "bg-success/5 border-success/15",
      orange: "bg-warning/5 border-warning/15",
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
          <p className="text-xs font-medium text-muted-foreground">{title}</p>
          <p className="text-sm font-medium">{data}</p>
        </div>
      </div>
    </div>
  );
}

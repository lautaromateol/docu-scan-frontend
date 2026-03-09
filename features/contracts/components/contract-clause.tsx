import {
  AlertTriangle,
  Book,
  ChevronDown,
  ClipboardList,
  Lock,
  Scale,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ContractClause as ContractClauseType } from "../types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const boxVariant = cva("rounded-lg shadow-card p-2", {
  variants: {
    variant: {
      GENERAL:         "bg-primary/10 text-primary border border-primary/20",
      CONFIDENTIALITY: "bg-warning/10 text-warning border border-warning/20",
      PENALTY:         "bg-destructive/10 text-destructive border border-destructive/20",
      JURISDICTION:    "bg-info/10 text-info border border-info/20",
      OTHER:           "bg-success/10 text-success border border-success/20",
    },
  },
});

const badgeVariant = cva("rounded-full text-xs space-x-0.5 capitalize", {
  variants: {
    variant: {
      GENERAL:         "text-primary bg-primary/15 border-primary/20",
      CONFIDENTIALITY: "text-warning bg-warning/15 border-warning/20",
      PENALTY:         "text-destructive bg-destructive/15 border-destructive/20",
      JURISDICTION:    "text-info bg-info/15 border-info/20",
      OTHER:           "text-success bg-success/15 border-success/20",
    },
  },
});

type BoxVariant = VariantProps<typeof boxVariant>;
type BadgeVariant = VariantProps<typeof badgeVariant>;

interface ContractClauseProps extends BoxVariant, BadgeVariant {
  clause: ContractClauseType;
}

export function ContractClause({ clause, variant }: ContractClauseProps) {
  return (
    <Collapsible>
      <div className="rounded-lg shadow-card border border-border bg-card px-3 py-2">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <div className={cn(boxVariant({ variant }))}>
                {clause.clauseType === "GENERAL" ? (
                  <ClipboardList />
                ) : clause.clauseType === "CONFIDENTIALITY" ? (
                  <Lock />
                ) : clause.clauseType === "JURISDICTION" ? (
                  <Scale />
                ) : clause.clauseType === "PENALTY" ? (
                  <AlertTriangle />
                ) : (
                  <Book />
                )}
              </div>
              <div className="space-y-0.5">
                <p className="text-lg font-medium">{clause.title}</p>
                <Badge className={cn(badgeVariant({ variant }))}>
                  {clause.clauseType === "GENERAL" ? (
                    <ClipboardList />
                  ) : clause.clauseType === "CONFIDENTIALITY" ? (
                    <Lock />
                  ) : clause.clauseType === "JURISDICTION" ? (
                    <Scale />
                  ) : clause.clauseType === "PENALTY" ? (
                    <AlertTriangle />
                  ) : (
                    <Book />
                  )}
                  {clause.clauseType.toLowerCase()}
                </Badge>
              </div>
            </div>
            <CollapsibleTrigger>
              <ChevronDown className="text-muted-foreground" />
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <div className="p-4 rounded-lg border border-border bg-secondary/30">
              <p className="text-sm text-muted-foreground">{clause.bodyText}</p>
            </div>
          </CollapsibleContent>
        </div>
      </div>
    </Collapsible>
  );
}

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

const boxVariant = cva("rounded-lg shadow-md p-2 bg-gradient-to-r", {
  variants: {
    variant: {
      GENERAL: "from-indigo-700 to-indigo-900",
      CONFIDENTIALITY: "from-yellow-700 to-yellow-900",
      PENALTY: "from-rose-700 to-rose-900",
      JURISDICTION: "from-purple-700 to-purple-900",
      OTHER: "from-green-700 to-green-900",
    },
  },
});

const badgeVariant = cva("rounded-full text-xs space-x-0.5 capitalize", {
  variants: {
    variant: {
      GENERAL: "text-indigo-700 bg-indigo-200",
      CONFIDENTIALITY: "text-yellow-700 bg-yellow-200",
      PENALTY: "text-rose-700 bg-rose-200",
      JURISDICTION: "text-purple-700 bg-purple-200",
      OTHER: "text-green-700 bg-green-200",
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
      <div className="rounded-lg shadow border px-3 py-2">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <div className={cn("text-white", boxVariant({ variant }))}>
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
              <ChevronDown />
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <div className="p-4 rounded-lg border border-gray-300">
              <p className="text-sm text-gray-700">{clause.bodyText}</p>
            </div>
          </CollapsibleContent>
        </div>
      </div>
    </Collapsible>
  );
}

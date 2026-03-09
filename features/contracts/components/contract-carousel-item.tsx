import { CarouselItem } from "@/components/ui/carousel";
import { cloneElement, JSX } from "react";

interface ContractCarouselItemProps {
  title: string;
  description: string;
  value: string;
  length: number;
  children: React.ReactNode;
  icon: JSX.Element;
}

export function ContractCarouselItem({
  title,
  description,
  value,
  length,
  children,
  icon,
}: ContractCarouselItemProps) {
  return (
    <CarouselItem>
      <div className="w-full space-y-6">
        <div className="w-1/2 mx-auto flex justify-center mt-4">
          <div className="space-y-2">
            <div className="grid place-items-center w-14 mx-auto rounded-lg p-2 md:p-4 bg-primary/10 border border-primary/20">
              {cloneElement(icon, { className: "size-6 text-primary" })}
            </div>
            <div className="space-y-1 md:space-y-0.5">
              <p className="text-center text-xl font-bold">{title}</p>
              <p className="text-sm md:text-base text-muted-foreground font-light text-center">
                {description}
              </p>
              <div className="rounded-full border border-border text-muted-foreground md:w-1/3 px-2 py-1 mx-auto text-center">
                <p className="text-xs">
                  {length} {value}
                </p>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </CarouselItem>
  );
}


import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
  title?: string;
  subtitle?: string;
};

export default function Section({ id, className, children, title, subtitle }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 scroll-mt-16",
        className
      )}
    >
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-3 inline-block">
                {title}
                <div className="h-1 bg-primary mt-2 rounded-full animate-fade-in" />
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

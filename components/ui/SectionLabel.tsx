import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  const isDarkBg = className?.includes("text-white");
  
  return (
    <div className={cn("flex mb-6", className)}>
      <span className={cn(
        "inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-accent/30 bg-transparent",
      )}>
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className={cn(
          "text-[10px] font-bold uppercase tracking-[0.15em]",
          isDarkBg ? "text-white" : "text-primary"
        )}>
          {children}
        </span>
      </span>
    </div>
  );
}

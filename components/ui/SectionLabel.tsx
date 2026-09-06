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
        "inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border bg-transparent",
        isDarkBg ? "border-stone/40" : "border-accent/30"
      )}>
        <span className={cn("w-1.5 h-1.5 rounded-full", isDarkBg ? "bg-stone" : "bg-accent")} />
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

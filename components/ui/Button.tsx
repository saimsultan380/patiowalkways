import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "text";
  children: React.ReactNode;
}

export default function Button({ variant = "primary", children, className, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold transition-all duration-300 focus:outline-none rounded-[4px]";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-opacity-90",
    outline: "border border-white text-white hover:bg-white hover:text-primary",
    text: "p-0 text-primary hover:text-accent border-b border-transparent hover:border-accent"
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

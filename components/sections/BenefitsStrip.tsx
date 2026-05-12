import { CheckCircle2, TrendingUp, Sparkles, Shield, Zap, Box } from "lucide-react";

const benefits = [
  { label: "Property Value", icon: <TrendingUp size={16} /> },
  { label: "Long-Lasting", icon: <Shield size={16} /> },
  { label: "Optimized Space", icon: <Box size={16} /> },
  { label: "Damage Protection", icon: <CheckCircle2 size={16} /> },
  { label: "Modern Design", icon: <Sparkles size={16} /> },
  { label: "Clean Install", icon: <Zap size={16} /> },
];

export default function BenefitsStrip() {
  return (
    <section className="bg-primary py-8 overflow-x-auto no-scrollbar border-b border-white/5">
      <div className="max-w-[1320px] mx-auto px-6 flex items-center justify-between min-w-[1000px]">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-12 first:ml-0 last:mr-0">
            <div className="flex items-center space-x-3">
              <span className="text-accent">{benefit.icon}</span>
              <span className="text-[13px] font-bold text-white uppercase tracking-widest whitespace-nowrap">
                {benefit.label}
              </span>
            </div>
            {index !== benefits.length - 1 && (
              <div className="w-[1px] h-4 bg-white/20" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

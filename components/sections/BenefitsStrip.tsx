import { Layout, ShieldCheck, Hammer, Home, Award, MapPin } from "lucide-react";

const benefits = [
  { label: "Custom Patio Designs", icon: <Layout size={16} /> },
  { label: "Quality Paver Installs", icon: <ShieldCheck size={16} /> },
  { label: "Durable Hardscaping", icon: <Hammer size={16} /> },
  { label: "Complete Outdoor Living", icon: <Home size={16} /> },
  { label: "Expert Craftsmanship", icon: <Award size={16} /> },
  { label: "Charlotte Area Service", icon: <MapPin size={16} /> },
];

export default function BenefitsStrip() {
  return (
    <section className="bg-white py-8 overflow-x-auto no-scrollbar border-b border-border-subtle">
      <div className="max-w-[1320px] mx-auto px-6 flex items-center justify-between min-w-[1000px]">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center space-x-12 first:ml-0 last:mr-0">
            <div className="flex items-center space-x-3">
              <span className="text-stone">{benefit.icon}</span>
              <span className="text-[13px] font-bold text-primary uppercase tracking-widest whitespace-nowrap">
                {benefit.label}
              </span>
            </div>
            {index !== benefits.length - 1 && (
              <div className="w-[1px] h-4 bg-border-subtle" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

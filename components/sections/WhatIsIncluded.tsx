import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

const categories = [
  { title: "Residential", desc: "Expert home renovations tailored to your personal style and needs.", image: "/Residential.png" },
  { title: "Commercial", desc: "Professional trade services for businesses and commercial properties.", image: "/Commercial.png" },
  { title: "Emergency", desc: "Rapid response for critical plumbing and structural issues.", image: "/Emergency.png" },
  { title: "New Builds", desc: "Full-scale construction projects from the ground up.", image: "/New Builds.png" },
  { title: "Renovation", desc: "Breathe new life into existing spaces with modern finishes.", image: "/Renovation.png" },
  { title: "Maintenance", desc: "Ongoing support to keep your property in peak condition.", image: "/Maintenance.png" },
];

export default function WhatIsIncluded() {
  return (
    <section className="py-32 bg-bg-off/50">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="mb-20">
          <SectionLabel>WHAT'S INCLUDED</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-space font-bold">Specialized Solutions for <span className="text-accent">Every Need</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div 
              key={index}
              className="bg-white p-10 relative group border border-border-subtle/30 hover:border-accent transition-all duration-500 rounded-[4px] shadow-sm hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="relative w-28 h-28 mb-8 group-hover:scale-110 transition-transform duration-500">
                <Image 
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-contain"
                  sizes="112px"
                />
              </div>
              
              <h4 className="text-xl font-bold mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                {cat.title}
              </h4>
              <p className="text-secondary text-sm leading-relaxed">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

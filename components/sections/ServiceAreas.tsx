"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const areas = ["Mexico", "North Carolina", "Morelia", "Charlotte", "Queretaro", "Raleigh"];

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-32 bg-primary text-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Left Column */}
          <div className="w-full lg:w-1/2">
            <SectionLabel className="text-white/60">SERVICE AREAS</SectionLabel>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold leading-tight mb-8">
              We Work in <span className="text-accent">Mexico & North Carolina</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed max-w-xl mb-12">
              From our roots in Mexico to our expansion in North Carolina, ProCraft provides top-tier renovation services across borders.
            </p>
            
            <div className="relative w-full max-w-2xl h-[250px] md:h-[450px]">
              <Image 
                src="/service-area.png"
                alt="Service Locations"
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              />
            </div>
          </div>

          {/* Right Column - Typographic Areas */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col">
              {areas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group py-6 border-b border-white/10 last:border-0 flex items-center justify-between cursor-default"
                >
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-playfair transition-colors duration-300 group-hover:text-accent">
                    {area}
                  </h3>
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl">
                    →
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { materials } from "@/data/services-page";

export default function MaterialsSection() {
  return (
    <section className="py-32 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/3 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <SectionLabel className="text-white">QUALITY MATERIALS</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold tracking-tight mb-8">
            Quality Materials for Beautiful{" "}
            <span className="text-stone">Outdoor Spaces</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Whether you prefer the classic look of brick, the natural character of flagstone and bluestone, the versatility of concrete, or the luxury of travertine and porcelain pavers, we offer materials to suit different styles and outdoor applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {materials.map((material, index) => (
            <motion.div
              key={material}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group border border-white/15 hover:border-stone bg-white/5 hover:bg-stone/10 p-6 rounded-[4px] text-center transition-all duration-300"
            >
              <span className="text-sm md:text-base font-bold tracking-wide group-hover:text-stone transition-colors">
                {material}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

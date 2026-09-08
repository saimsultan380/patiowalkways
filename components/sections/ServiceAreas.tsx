"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { areas, brand } from "@/data/content";

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-20 sm:py-28 lg:py-32 bg-primary text-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div className="w-full lg:w-1/2">
            <SectionLabel className="text-white">AREAS</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space font-bold leading-tight mb-6 sm:mb-8">
              Serving Charlotte &{" "}
              <span className="text-stone">Surrounding Communities</span>
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl mb-8 sm:mb-12">
              Serving a {brand.radius} to make travel and material logistics easier. If you are nearby but outside these communities, contact us with your project location.
            </p>
            
            <div className="relative w-full max-w-2xl h-[220px] sm:h-[250px] md:h-[450px]">
              <Image 
                src="/service-area.png"
                alt="Service areas around Charlotte"
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex flex-col">
              {areas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group py-4 sm:py-6 border-b border-white/15 last:border-0 flex items-center justify-between cursor-default"
                >
                  <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-playfair transition-colors duration-300 group-hover:text-stone">
                    {area}
                  </h3>
                  <span className="text-stone opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl shrink-0 ml-4">
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

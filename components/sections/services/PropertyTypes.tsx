"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { propertyTypes } from "@/data/services-page";

export default function PropertyTypes() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="mb-20 max-w-3xl">
          <SectionLabel>WHO WE SERVE</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold tracking-tight">
            Outdoor Solutions for Residential &{" "}
            <span className="text-accent">Commercial Properties</span>
          </h2>
          <p className="text-secondary text-lg mt-6 leading-relaxed">
            From backyard patios and walkways to commercial hardscaping and landscaping, we create outdoor spaces that combine functionality, durability, and visual appeal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {propertyTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[4px] min-h-[320px] sm:min-h-[380px] md:min-h-[420px]"
            >
              <Image
                src={type.image}
                alt={type.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary/70 group-hover:bg-primary/80 transition-colors duration-300" />
              <div className="absolute inset-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone mb-3 sm:mb-4">
                  {index === 0 ? "Homes" : "Businesses"}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-space font-bold text-white mb-3 sm:mb-4">
                  {type.title}
                </h3>
                <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-md">
                  {type.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/content";

export default function ServicesGrid() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="mb-20 text-center lg:text-left">
          <SectionLabel>OUR OUTDOOR SERVICES</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-space font-bold tracking-tight"
          >
            Complete Outdoor Solutions for{" "}
            <span className="text-accent">Charlotte Homes</span>
          </motion.h2>
          <p className="text-secondary text-lg mt-6 max-w-2xl leading-relaxed">
            From custom paver patios and walkways to driveways, walls, outdoor living features, lighting, landscaping, and commercial hardscaping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              index={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

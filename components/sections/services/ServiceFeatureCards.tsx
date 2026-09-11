"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

type FeatureCard = {
  title: string;
  description: string;
  imageSrc?: string;
};

interface ServiceFeatureCardsProps {
  label: string;
  title: string;
  titleAccent: string;
  intro?: string;
  items: FeatureCard[];
  note?: string;
}

export default function ServiceFeatureCards({
  label,
  title,
  titleAccent,
  intro,
  items,
  note,
}: ServiceFeatureCardsProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionLabel>{label}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space font-bold tracking-tight">
            {title} <span className="text-accent">{titleAccent}</span>
          </h2>
          {intro && (
            <p className="text-secondary text-base sm:text-lg mt-6 leading-relaxed">{intro}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group flex flex-col sm:flex-row gap-0 border border-border-subtle/60 rounded-[4px] overflow-hidden hover:border-accent transition-colors bg-white"
            >
              {item.imageSrc && (
                <div className="relative w-full sm:w-[42%] min-h-[180px] sm:min-h-full overflow-hidden bg-bg-off">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                </div>
              )}
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone mb-3">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-space font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {note && (
          <p className="text-secondary text-sm sm:text-base leading-relaxed mt-10 max-w-3xl border-l-2 border-stone pl-5">
            {note}
          </p>
        )}
      </div>
    </section>
  );
}

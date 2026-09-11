"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

type OptionItem = {
  name: string;
  description: string;
  imageSrc?: string;
};

interface ServiceOptionsGridProps {
  id?: string;
  label: string;
  title: string;
  titleAccent: string;
  intro: string;
  items: OptionItem[];
  note?: string;
}

export default function ServiceOptionsGrid({
  id,
  label,
  title,
  titleAccent,
  intro,
  items,
  note,
}: ServiceOptionsGridProps) {
  const hasImages = items.some((item) => item.imageSrc);

  return (
    <section id={id} className="py-12 sm:py-16 lg:py-20 scroll-mt-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <SectionLabel>{label}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space font-bold tracking-tight">
            {title} <span className="text-accent">{titleAccent}</span>
          </h2>
          <p className="text-secondary text-base sm:text-lg mt-6 leading-relaxed">{intro}</p>
        </div>

        <div
          className={`grid grid-cols-1 ${
            hasImages ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3"
          } gap-6 sm:gap-8`}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group border border-border-subtle/60 rounded-[4px] bg-white hover:border-accent transition-colors overflow-hidden"
            >
              {item.imageSrc && (
                <div className="relative aspect-[16/10] overflow-hidden bg-bg-off">
                  <Image
                    src={item.imageSrc}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 text-[11px] font-bold uppercase tracking-[0.2em] text-stone">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              )}
              <div className="p-6 sm:p-8">
                {!item.imageSrc && (
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone mb-3 block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                )}
                <h3 className="text-xl font-space font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {item.name}
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

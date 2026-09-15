"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

interface ServiceSplitSectionProps {
  id?: string;
  label: string;
  title: string;
  titleAccent: string;
  paragraphs?: string[];
  intro?: string;
  bullets?: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  note?: string;
}

export default function ServiceSplitSection({
  id,
  label,
  title,
  titleAccent,
  paragraphs = [],
  intro,
  bullets = [],
  imageSrc,
  imageAlt,
  reverse = false,
  note,
}: ServiceSplitSectionProps) {
  return (
    <section id={id} className="py-12 sm:py-16 lg:py-20 bg-white scroll-mt-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <div
          className={`flex flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-10 lg:gap-16 items-center`}
        >
          <motion.div
            initial={{ opacity: 0, x: reverse ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative aspect-[4/3] overflow-hidden rounded-[4px] group"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
              quality={75}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-transparent" />
          </motion.div>

          <div className="w-full lg:w-1/2">
            <SectionLabel>{label}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-space font-bold tracking-tight mb-6">
              {title} <span className="text-accent">{titleAccent}</span>
            </h2>
            {intro && (
              <p className="text-secondary text-base sm:text-lg leading-relaxed mb-5">{intro}</p>
            )}
            {paragraphs.map((p) => (
              <p key={p.slice(0, 48)} className="text-secondary text-base sm:text-lg leading-relaxed mb-5">
                {p}
              </p>
            ))}
            {bullets.length > 0 && (
              <ul className="space-y-3 mt-2">
                {bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-primary font-medium">
                    <span className="mt-0.5 w-5 h-5 rounded-[4px] bg-accent/10 text-accent flex items-center justify-center shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {note && (
              <p className="text-secondary text-sm leading-relaxed mt-6 border-l-2 border-stone pl-4">
                {note}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

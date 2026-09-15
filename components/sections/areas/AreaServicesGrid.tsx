"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

type ServiceItem = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
};

interface AreaServicesGridProps {
  id?: string;
  label: string;
  title: string;
  titleAccent: string;
  intro: string;
  items: ServiceItem[];
}

export default function AreaServicesGrid({
  id,
  label,
  title,
  titleAccent,
  intro,
  items,
}: AreaServicesGridProps) {
  return (
    <section id={id} className="py-12 sm:py-16 lg:py-20 scroll-mt-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="mb-10 sm:mb-14 max-w-3xl">
          <SectionLabel>{label}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space font-bold tracking-tight mb-4">
            {title} <span className="text-accent">{titleAccent}</span>
          </h2>
          <p className="text-secondary text-base sm:text-lg leading-relaxed">
            {intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              <Link
                href={item.href}
                className="group block h-full overflow-hidden border border-border-subtle rounded-[4px] bg-white hover:border-accent/35 transition-colors"
              >
                <div className="relative h-52 sm:h-60 overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/55 via-transparent to-transparent" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-space font-bold tracking-tight group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <ArrowUpRight
                      size={16}
                      className="text-muted group-hover:text-accent shrink-0 mt-1 transition-colors"
                    />
                  </div>
                  <p className="text-sm text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

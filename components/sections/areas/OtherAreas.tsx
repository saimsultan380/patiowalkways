"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { areaNavItems } from "@/data/areas";

interface OtherAreasProps {
  currentSlug: string;
}

export default function OtherAreas({ currentSlug }: OtherAreasProps) {
  const others = areaNavItems.filter((a) => a.slug !== currentSlug);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="mb-8 sm:mb-10">
          <SectionLabel>OTHER AREAS</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-space font-bold tracking-tight">
            Also serving nearby{" "}
            <span className="text-accent">communities</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {others.map((area, index) => (
            <motion.div
              key={area.slug}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={area.hasPage ? area.href : "/areas"}
                className="group flex items-center justify-between py-4 sm:py-5 border-b border-border-subtle"
              >
                <span className="text-xl sm:text-2xl md:text-3xl font-playfair text-primary group-hover:text-accent transition-colors">
                  {area.name}
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-muted group-hover:text-accent transition-colors shrink-0"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

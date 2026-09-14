"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { areaNavItems } from "@/data/areas";

export default function AreasDirectory() {
  return (
    <section id="directory" className="py-12 sm:py-16 lg:py-20 bg-white scroll-mt-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="mb-10 sm:mb-14 max-w-2xl">
          <SectionLabel>WHERE WE WORK</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-space font-bold tracking-tight mb-4">
            Communities we{" "}
            <span className="text-accent">serve</span>
          </h2>
          <p className="text-secondary text-base sm:text-lg leading-relaxed">
            Browse our coverage across the Charlotte region. Davidson, Denver,
            Huntersville, Monroe, and Concord have dedicated local pages —
            Charlotte and nearby communities can request an estimate with your
            project location.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {areaNavItems.map((area, index) => {
            const href = area.hasPage ? area.href : "/contact";
            return (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={href}
                  className="group block h-full border border-border-subtle rounded-[4px] p-6 sm:p-7 bg-[linear-gradient(165deg,#ffffff_0%,#f6f8f6_100%)] hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="w-11 h-11 rounded-[4px] bg-primary text-stone flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                      <MapPin size={18} />
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-muted group-hover:text-accent transition-colors shrink-0"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-space font-bold tracking-tight mb-2 group-hover:text-accent transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed mb-4">
                    {area.blurb}
                  </p>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-accent">
                    {area.hasPage ? "View local page" : "Request estimate"}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

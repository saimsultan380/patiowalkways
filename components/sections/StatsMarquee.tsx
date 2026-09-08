"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/content";

export default function StatsMarquee() {
  return (
    <section className="bg-white py-8 overflow-hidden border-y border-border-subtle select-none">
      <div className="flex whitespace-nowrap">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center w-max"
        >
          {[...stats, ...stats, ...stats, ...stats].map((stat, i) => (
            <div key={i} className="flex items-center">
              <div className="flex items-baseline space-x-6 px-16">
                <span className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-stone italic">
                  {stat.value}
                </span>
                <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary whitespace-nowrap">
                  {stat.label}
                </span>
              </div>
              <div className="w-[1px] h-10 bg-stone/40" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

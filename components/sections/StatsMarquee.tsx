"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/content";

interface StatsMarqueeProps {
  variant?: "primary" | "light";
}

export default function StatsMarquee({ variant = "light" }: StatsMarqueeProps) {
  const isPrimary = variant === "primary";

  return (
    <section
      className={`py-3 sm:py-4 overflow-hidden select-none ${
        isPrimary ? "bg-primary" : "bg-white"
      }`}
    >
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
              <div className="flex items-baseline space-x-3 sm:space-x-4 px-8 sm:px-12">
                <span className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-stone italic">
                  {stat.value}
                </span>
                <span
                  className={`text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em] whitespace-nowrap ${
                    isPrimary ? "text-white/85" : "text-primary"
                  }`}
                >
                  {stat.label}
                </span>
              </div>
              <div
                className={`w-[1px] h-6 ${
                  isPrimary ? "bg-white/20" : "bg-stone/40"
                }`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

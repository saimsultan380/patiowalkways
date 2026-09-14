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
      className={`py-8 overflow-hidden select-none ${
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
              <div className="flex items-baseline space-x-6 px-16">
                <span className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-stone italic">
                  {stat.value}
                </span>
                <span
                  className={`text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap ${
                    isPrimary ? "text-white/85" : "text-primary"
                  }`}
                >
                  {stat.label}
                </span>
              </div>
              <div
                className={`w-[1px] h-10 ${
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

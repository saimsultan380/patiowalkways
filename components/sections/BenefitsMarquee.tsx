"use client";

import { motion } from "framer-motion";
import { Layout, ShieldCheck, Hammer, Home, Award, MapPin } from "lucide-react";
import { benefits } from "@/data/content";

const icons = [
  <Layout size={16} key="1" />,
  <ShieldCheck size={16} key="2" />,
  <Hammer size={16} key="3" />,
  <Home size={16} key="4" />,
  <Award size={16} key="5" />,
  <MapPin size={16} key="6" />,
];

export default function BenefitsMarquee() {
  return (
    <section className="bg-white py-8 overflow-hidden border-y border-border-subtle select-none">
      <div className="flex">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center w-max"
        >
          {[...benefits, ...benefits, ...benefits, ...benefits].map((benefit, i) => (
            <div key={i} className="flex items-center">
              <div className="flex items-center space-x-4 px-12">
                <span className="text-stone">
                  {icons[i % benefits.length]}
                </span>
                <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary whitespace-nowrap">
                  {benefit.label}
                </span>
              </div>
              <div className="w-[1px] h-4 bg-border-subtle" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

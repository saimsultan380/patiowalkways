"use client";

import { motion } from "framer-motion";
import {
  Award,
  Layers,
  Layout,
  Gem,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { servicesWhyChoose } from "@/data/services-page";

const icons = [
  <Award size={22} key="1" />,
  <Layers size={22} key="2" />,
  <Layout size={22} key="3" />,
  <Gem size={22} key="4" />,
  <MessageSquare size={22} key="5" />,
  <ShieldCheck size={22} key="6" />,
];

export default function ServicesWhyChoose() {
  return (
    <section id="why-us" className="py-32 bg-bg-off/50">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="mb-20 max-w-3xl">
          <SectionLabel>WHY CHOOSE US</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold tracking-tight">
            Why Choose Us for Your{" "}
            <span className="text-accent">Outdoor Project?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesWhyChoose.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-white p-8 border border-border-subtle/40 hover:border-accent rounded-[4px] shadow-sm hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-space text-3xl font-black text-stone">
                  {item.id}
                </span>
                <div className="w-11 h-11 rounded-[4px] bg-bg-off flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {icons[index]}
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

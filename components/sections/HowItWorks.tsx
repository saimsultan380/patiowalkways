"use client";

import { motion } from "framer-motion";
import { PhoneCall, Calendar, ClipboardList, FileText, Hammer, CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { steps } from "@/data/content";

const stepIcons = [
  <PhoneCall size={22} />,
  <Calendar size={22} />,
  <ClipboardList size={22} />,
  <FileText size={22} />,
  <Hammer size={22} />,
  <CheckCircle2 size={22} />,
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-bg-off/50">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end items-start mb-16 lg:mb-24 gap-6 lg:gap-8">
          <div className="max-w-2xl text-left">
            <SectionLabel>THE PROCESS</SectionLabel>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold mt-4 leading-tight">
              Our Simple <span className="text-accent">6-Step</span> Process
            </h2>
          </div>
          <p className="text-secondary text-sm md:text-base max-w-sm lg:mb-2 text-left">
            We've refined our workflow over a decade to ensure every project is delivered on time, on budget, and beyond expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col"
            >
              {/* Background Number */}
              <span className="absolute -top-6 lg:-top-10 -left-4 text-6xl lg:text-8xl font-black text-bg-off/60 pointer-events-none select-none transition-colors duration-500 group-hover:text-accent/10">
                0{index + 1}
              </span>

              <div className="relative pt-4">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center mb-8 rounded-[4px] group-hover:bg-accent transition-colors duration-300">
                  {stepIcons[index]}
                </div>
                
                <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                  {step.title}
                </h4>
                
                <div className="w-12 h-[2px] bg-accent mb-6 transform origin-left transition-transform duration-500 group-hover:scale-x-150" />
                
                <p className="text-secondary text-sm leading-relaxed max-w-[280px]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-28 flex flex-col items-center">
          <div className="w-full h-[1px] bg-border-subtle mb-16" />
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <p className="text-sm font-bold text-primary uppercase tracking-widest">Ready to start step one?</p>
            <Button className="px-12">
              Book Your Free Site Visit <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

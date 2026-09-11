"use client";

import { motion } from "framer-motion";
import { MessageSquare, PencilRuler, FileText, Hammer, Smile, ClipboardCheck } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { steps } from "@/data/content";

const defaultIcons = [
  <MessageSquare size={22} key="1" />,
  <PencilRuler size={22} key="2" />,
  <FileText size={22} key="3" />,
  <Hammer size={22} key="4" />,
  <Smile size={22} key="5" />,
];

const servicesIcons = [
  <MessageSquare size={22} key="1" />,
  <PencilRuler size={22} key="2" />,
  <FileText size={22} key="3" />,
  <Hammer size={22} key="4" />,
  <ClipboardCheck size={22} key="5" />,
];

type Step = { title: string; description: string };

interface HowItWorksProps {
  label?: string;
  title?: React.ReactNode;
  description?: string;
  items?: Step[];
  ctaLabel?: string;
}

export default function HowItWorks({
  label = "HOW WE WORK",
  title,
  description = "From your first ideas to a finished outdoor space, we keep the process clear, collaborative, and focused on lasting results.",
  items = steps,
  ctaLabel = "Get Your Free Estimate",
}: HowItWorksProps) {
  const icons = items.length === 5 && items[4]?.title === "Final Walkthrough" ? servicesIcons : defaultIcons;

  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between lg:items-end items-start mb-16 lg:mb-24 gap-6 lg:gap-8">
          <div className="max-w-2xl text-left">
            <SectionLabel>{label}</SectionLabel>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold mt-4 leading-tight">
              {title ?? (
                <>
                  Our Simple <span className="text-accent">5-Step</span> Process
                </>
              )}
            </h2>
          </div>
          <p className="text-secondary text-sm md:text-base max-w-sm lg:mb-2 text-left">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {items.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col"
            >
              <span className="absolute -top-6 lg:-top-10 -left-4 text-6xl lg:text-8xl font-black text-bg-off/60 pointer-events-none select-none transition-colors duration-500 group-hover:text-accent/10">
                0{index + 1}
              </span>

              <div className="relative pt-4">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center mb-8 rounded-[4px] group-hover:bg-accent transition-colors duration-300">
                  {icons[index] ?? defaultIcons[index % defaultIcons.length]}
                </div>

                <h4 className="text-xl font-bold mb-4 flex items-center gap-3">
                  {step.title}
                </h4>

                <div className="w-12 h-[2px] bg-stone mb-6 transform origin-left transition-transform duration-500 group-hover:scale-x-150 group-hover:bg-accent" />

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
            <Button
              variant="accent"
              className="px-12"
              onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}
            >
              {ctaLabel} <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

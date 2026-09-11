"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

interface ServiceContentBlockProps {
  id?: string;
  label: string;
  title: string;
  titleAccent: string;
  paragraphs?: string[];
  intro?: string;
  listTitle?: string;
  items?: string[];
  cards?: { title: string; description: string }[];
  note?: string;
  numbered?: boolean;
}

export default function ServiceContentBlock({
  id,
  label,
  title,
  titleAccent,
  paragraphs = [],
  intro,
  listTitle,
  items = [],
  cards = [],
  note,
  numbered = false,
}: ServiceContentBlockProps) {
  return (
    <section id={id} className="py-12 sm:py-16 lg:py-20 bg-white scroll-mt-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <SectionLabel>{label}</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space font-bold tracking-tight">
            {title} <span className="text-accent">{titleAccent}</span>
          </h2>
          {intro && (
            <p className="text-secondary text-base sm:text-lg mt-6 leading-relaxed">{intro}</p>
          )}
          {paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="text-secondary text-base sm:text-lg mt-5 leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {listTitle && (
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-stone mb-6">{listTitle}</p>
        )}

        {items.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
            {items.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="flex items-start gap-3 border border-border-subtle/50 rounded-[4px] px-5 py-4"
              >
                {numbered ? (
                  <span className="text-stone font-space font-bold text-sm shrink-0 w-7">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                ) : (
                  <span className="mt-0.5 w-5 h-5 rounded-[4px] bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </span>
                )}
                <span className="text-primary text-sm sm:text-base font-medium leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        )}

        {cards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-border-subtle/60 rounded-[4px] p-6 sm:p-8 hover:border-accent transition-colors"
              >
                <h3 className="text-lg sm:text-xl font-space font-bold text-primary mb-3">{card.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        )}

        {note && (
          <p className="text-secondary text-sm sm:text-base leading-relaxed mt-10 max-w-3xl border-l-2 border-stone pl-5">
            {note}
          </p>
        )}
      </div>
    </section>
  );
}

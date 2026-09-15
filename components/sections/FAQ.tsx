"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import AccordionItem from "@/components/ui/AccordionItem";
import { faqs } from "@/data/content";

interface FAQProps {
  label?: string;
  title?: React.ReactNode;
  description?: string;
  items?: { question: string; answer: string }[];
}

export default function FAQ({
  label = "FREQUENTLY ASKED QUESTIONS",
  title,
  description = "Everything you need to know about our patio, paver, hardscaping, and outdoor living services in Charlotte.",
  items = faqs,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 flex flex-col lg:flex-row gap-20">
        <div className="w-full lg:w-[40%]">
          <SectionLabel>{label}</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            {title ?? (
              <>
                Outdoor Project Questions,{" "}
                <span className="text-accent">Answered</span>
              </>
            )}
          </h2>
          <p className="text-secondary leading-relaxed max-w-sm">
            {description}
          </p>
        </div>

        <div className="w-full lg:w-[60%] bg-white p-4 md:p-10 border border-border-subtle shadow-sm rounded-[4px]">
          {items.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

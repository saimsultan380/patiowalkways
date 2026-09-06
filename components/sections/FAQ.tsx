"use client";

import { useState } from "react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import AccordionItem from "@/components/ui/AccordionItem";
import { faqs } from "@/data/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-bg-off">
      <div className="max-w-[1320px] mx-auto px-6 flex flex-col lg:flex-row gap-20">
        <div className="w-full lg:w-[40%]">
          <SectionLabel>FREQUENTLY ASKED QUESTIONS</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Outdoor Project Questions,{" "}
            <span className="text-accent">Answered</span>
          </h2>
          <p className="text-secondary leading-relaxed mb-10 max-w-sm">
            Everything you need to know about our patio, paver, hardscaping, and outdoor living services in Charlotte.
          </p>

          <div className="relative h-[180px] w-full max-w-[240px] rounded-[4px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=480&auto=format&fit=crop"
              alt="Outdoor patio FAQ"
              fill
              className="object-cover"
              sizes="240px"
            />
          </div>
        </div>

        <div className="w-full lg:w-[60%] bg-white p-4 md:p-10 border border-border-subtle shadow-sm rounded-[4px]">
          {faqs.map((faq, index) => (
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

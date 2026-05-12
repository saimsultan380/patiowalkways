"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Tag, Clock, Award, Hammer, Users, Check } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const reasons = [
  { id: "01", title: "Premium Craftsmanship", desc: "Unmatched attention to detail in every weld, cut, and brushstroke.", icon: <Award size={18} /> },
  { id: "02", title: "Transparent Pricing", desc: "Detailed, honest quotes with no hidden fees or surprise costs.", icon: <Tag size={18} /> },
  { id: "03", title: "Punctual Delivery", desc: "We respect your time and stick to our agreed project schedules.", icon: <Clock size={18} /> },
  { id: "04", title: "Licensed & Insured", desc: "Complete peace of mind with full professional certifications.", icon: <ShieldCheck size={18} /> },
  { id: "05", title: "Expert Solutions", desc: "Over a decade of solving complex structural and aesthetic challenges.", icon: <Hammer size={18} /> },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background number */}
      <div className="absolute top-0 right-0 text-[300px] font-black text-bg-off/40 select-none pointer-events-none -translate-y-1/4 translate-x-1/4 uppercase">
        Pro
      </div>

      <div className="max-w-[1320px] mx-auto px-6 flex flex-col lg:flex-row gap-24 relative z-10">
        {/* Left Column - Image Container with Gold Frame */}
        <div className="w-full lg:w-[45%]">
          <div className="relative group">
            {/* Gold Frame Decorative Element */}
            <div className="absolute -top-6 -left-6 w-full h-full border-[12px] border-[#C8A96E]/10 rounded-[4px] -z-10 transition-transform duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2" />
            
            <div className="relative aspect-[3/4] overflow-hidden rounded-[4px] shadow-2xl">
              <Image
                src="/why-choose-us.jpg"
                alt="Expert craftsmanship"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            
            {/* Floating Info Card - Premium Dark/Gold */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-10 bg-primary p-8 text-white max-w-[260px] shadow-2xl rounded-[4px] border-b-4 border-[#C8A96E]"
            >
              <h5 className="font-space font-bold text-xs uppercase tracking-[0.2em] mb-6 text-[#C8A96E]">Certified Excellence</h5>
              <ul className="space-y-4">
                {["Fully Certified", "Background Checked", "Liability Insured"].map((item) => (
                  <li key={item} className="flex items-center space-x-3 text-[11px] font-bold uppercase tracking-wider group/li">
                    <div className="w-5 h-5 rounded-[4px] bg-[#C8A96E] flex items-center justify-center text-primary transform transition-transform group-hover/li:rotate-12">
                      <Check size={10} strokeWidth={4} />
                    </div>
                    <span className="opacity-80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center lg:pl-12">
          <SectionLabel>OUR CORE VALUES</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold mb-10 leading-tight">
            Craftsmanship You Can <span className="text-accent underline decoration-1 underline-offset-8">Count On</span>
          </h2>
          <p className="text-secondary mb-16 max-w-xl leading-relaxed text-lg">
            We combine traditional expertise with modern precision to deliver results that stand the test of time. Every project is a testament to our commitment to excellence.
          </p>
          
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-start py-8 px-6 bg-bg-off/40 hover:bg-white border border-border-subtle/40 hover:border-accent transition-all duration-300 rounded-[4px] shadow-sm hover:shadow-xl hover:shadow-accent/5"
              >
                <span className="font-space text-3xl font-black text-[#C8A96E] transition-colors duration-300 w-16 pt-1">
                  {reason.id}
                </span>
                <div className="flex-grow px-4">
                  <h4 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">{reason.title}</h4>
                  <p className="text-[13px] text-secondary leading-relaxed font-medium">{reason.desc}</p>
                </div>
                <div className="w-10 h-10 rounded-[4px] bg-white border border-border-subtle/60 flex items-center justify-center text-secondary group-hover:bg-[#C8A96E] group-hover:border-[#C8A96E] group-hover:text-primary transition-all duration-300 shadow-sm">
                  {reason.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

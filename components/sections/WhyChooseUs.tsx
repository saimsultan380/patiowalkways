"use client";

import { motion } from "framer-motion";
import {
  Award,
  Layout,
  Gem,
  Layers,
  ShieldCheck,
  Handshake,
  Check,
} from "lucide-react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { whyChooseUs } from "@/data/content";

const icons = [
  <Award size={18} key="1" />,
  <Layout size={18} key="2" />,
  <Gem size={18} key="3" />,
  <Layers size={18} key="4" />,
  <ShieldCheck size={18} key="5" />,
  <Handshake size={18} key="6" />,
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 text-[300px] font-black text-bg-off/40 select-none pointer-events-none -translate-y-1/4 translate-x-1/4 uppercase">
        Out
      </div>

      <div className="max-w-[1320px] mx-auto px-6 flex flex-col lg:flex-row gap-24 relative z-10">
        <div className="w-full lg:w-[45%]">
          <div className="relative group">
            <div className="absolute -top-6 -left-6 w-full h-full border-[12px] border-stone/20 rounded-[4px] -z-10 transition-transform duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2" />
            
            <div className="relative aspect-[3/4] overflow-hidden rounded-[4px] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
                alt="Expert outdoor craftsmanship"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-10 bg-primary p-8 text-white max-w-[260px] shadow-2xl rounded-[4px] border-b-4 border-stone"
            >
              <h5 className="font-space font-bold text-xs uppercase tracking-[0.2em] mb-6 text-stone">Why Homeowners Choose Us</h5>
              <ul className="space-y-4">
                {["Expert Craftsmanship", "Premium Materials", "Custom Designs"].map((item) => (
                  <li key={item} className="flex items-center space-x-3 text-[11px] font-bold uppercase tracking-wider group/li">
                    <div className="w-5 h-5 rounded-[4px] bg-stone flex items-center justify-center text-primary transform transition-transform group-hover/li:rotate-12">
                      <Check size={10} strokeWidth={4} />
                    </div>
                    <span className="opacity-90">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-[55%] flex flex-col justify-center lg:pl-12">
          <SectionLabel>WHY CHOOSE US</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold mb-10 leading-tight">
            Outdoor Spaces Built with{" "}
            <span className="text-accent underline decoration-1 underline-offset-8">Care & Skill</span>
          </h2>
          <p className="text-secondary mb-16 max-w-xl leading-relaxed text-lg">
            From patios and pavers to walls and outdoor living features, we focus on quality workmanship, premium materials, and designs tailored to your property.
          </p>
          
          <div className="space-y-4">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-start py-8 px-6 bg-bg-off/40 hover:bg-white border border-border-subtle/40 hover:border-accent transition-all duration-300 rounded-[4px] shadow-sm hover:shadow-xl hover:shadow-accent/5"
              >
                <span className="font-space text-3xl font-black text-stone transition-colors duration-300 w-16 pt-1">
                  {reason.id}
                </span>
                <div className="flex-grow px-4">
                  <h4 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">{reason.title}</h4>
                  <p className="text-[13px] text-secondary leading-relaxed font-medium">{reason.desc}</p>
                </div>
                <div className="w-10 h-10 rounded-[4px] bg-white border border-border-subtle/60 flex items-center justify-center text-secondary group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300 shadow-sm">
                  {icons[index]}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

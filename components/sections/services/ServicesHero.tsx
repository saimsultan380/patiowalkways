"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ArrowDown } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { brand } from "@/data/content";
import { servicesPageHero, detailedServices } from "@/data/services-page";

export default function ServicesHero() {
  const quickLinks = detailedServices.slice(0, 6);

  return (
    <section className="relative min-h-[70vh] md:min-h-[72vh] flex flex-col justify-end overflow-hidden bg-primary">
      {/* Full-bleed background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/01_patios_walkways_charlotte_nc.jpg"
          alt="Complete hardscaping and landscaping services in Charlotte"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/88 via-primary/72 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-transparent to-primary/25" />
      </div>

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 pt-16 pb-8 md:pt-14 md:pb-10 lg:pt-20 lg:pb-14">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel className="text-white">{servicesPageHero.label}</SectionLabel>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-space font-bold leading-[1.05] mb-5 sm:mb-6 text-white tracking-tight"
          >
            Complete Hardscaping & Landscaping{" "}
            <span className="text-stone">{servicesPageHero.titleAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white/75 mb-8 sm:mb-10 max-w-2xl leading-relaxed"
          >
            {servicesPageHero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-row flex-nowrap items-center gap-2 sm:gap-4"
          >
            <Button
              variant="stone"
              className="px-3.5 py-2.5 sm:px-10 sm:py-5 text-[11px] sm:text-base whitespace-nowrap shrink"
              onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Free Estimates
            </Button>
            <a href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`} className="shrink-0">
              <Button
                variant="outline"
                className="px-3.5 py-2.5 sm:px-10 sm:py-5 text-[11px] sm:text-base border-white/50 text-white hover:bg-white/15 hover:text-white inline-flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <Phone size={14} className="shrink-0 text-white" />
                <span>Call Us</span>
              </Button>
            </a>
            <button
              onClick={() => document.getElementById("service-list")?.scrollIntoView({ behavior: "smooth" })}
              className="hidden sm:inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/70 hover:text-stone transition-colors ml-2"
            >
              Browse Services
              <ArrowDown size={16} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Service jump strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="relative z-10 border-t border-white/15 bg-primary/40 backdrop-blur-sm"
      >
        <div className="max-w-[1320px] mx-auto px-6 py-5 flex items-center gap-6 overflow-x-auto no-scrollbar">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone whitespace-nowrap shrink-0">
            Explore
          </span>
          <div className="w-px h-4 bg-white/20 shrink-0" />
          {quickLinks.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="text-[12px] md:text-[13px] font-bold text-white/75 hover:text-stone whitespace-nowrap transition-colors shrink-0"
            >
              {service.name}
            </a>
          ))}
          <a
            href="#service-list"
            className="text-[12px] md:text-[13px] font-bold text-stone whitespace-nowrap shrink-0 ml-auto"
          >
            View All →
          </a>
        </div>
      </motion.div>
    </section>
  );
}

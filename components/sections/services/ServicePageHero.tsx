"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { brand } from "@/data/content";

export type ServicePageHeroLink = { name: string; href: string };

interface ServicePageHeroProps {
  label: string;
  title: string;
  titleAccent: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  primaryCta?: string;
  secondaryCta?: string;
  trustBadges?: string[];
  exploreLinks?: ServicePageHeroLink[];
  exploreLabel?: string;
}

export default function ServicePageHero({
  label,
  title,
  titleAccent,
  description,
  imageSrc,
  imageAlt,
  primaryCta = "Get Free Estimates",
  secondaryCta = "Call Us",
  trustBadges = [],
  exploreLinks = [],
  exploreLabel = "Explore",
}: ServicePageHeroProps) {
  return (
    <section className="relative min-h-[70vh] md:min-h-[72vh] flex flex-col justify-end overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt ?? label}
          fill
          priority
          quality={75}
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
            <SectionLabel className="text-white">{label}</SectionLabel>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-space font-bold leading-[1.05] mb-5 sm:mb-6 text-white tracking-tight"
          >
            {title}{" "}
            <span className="text-stone">{titleAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white/75 mb-6 sm:mb-8 max-w-2xl leading-relaxed"
          >
            {description}
          </motion.p>

          {trustBadges.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-x-4 gap-y-2 mb-8 sm:mb-10"
            >
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white/85"
                >
                  <Check size={14} className="text-stone shrink-0" />
                  {badge}
                </span>
              ))}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <Button
              variant="stone"
              className="w-full sm:w-auto px-5 py-3.5 sm:px-10 sm:py-5 text-sm sm:text-base whitespace-normal sm:whitespace-nowrap"
              onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}
            >
              {primaryCta}
            </Button>
            <a href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`} className="w-full sm:w-auto shrink-0">
              <Button
                variant="outline"
                className="w-full px-5 py-3.5 sm:px-10 sm:py-5 text-sm sm:text-base border-white/50 text-white hover:bg-white/15 hover:text-white inline-flex items-center justify-center gap-1.5 whitespace-normal sm:whitespace-nowrap"
              >
                <Phone size={14} className="shrink-0 text-white" />
                <span>{secondaryCta}</span>
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {exploreLinks.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="relative z-10 border-t border-white/15 bg-primary/40 backdrop-blur-sm"
        >
          <div className="max-w-[1320px] mx-auto px-6 py-5 flex items-center gap-6 overflow-x-auto no-scrollbar">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone whitespace-nowrap shrink-0">
              {exploreLabel}
            </span>
            <div className="w-px h-4 bg-white/20 shrink-0" />
            {exploreLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[12px] md:text-[13px] font-bold text-white/75 hover:text-stone whitespace-nowrap transition-colors shrink-0"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { brand } from "@/data/content";

export default function ContactHero() {
  return (
    <section className="relative flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/03_front_entry_rebuild.jpg"
          alt="Contact Empresa Galdamez Hardscaping in Charlotte"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/94 via-primary/80 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/25 to-primary/35" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 pt-10 pb-12 sm:pt-12 md:pt-14 md:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel className="text-white">CONTACT US</SectionLabel>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="font-space text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 sm:mb-5"
        >
          {brand.shortName}{" "}
          <span className="text-stone">{brand.accentName}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.14 }}
          className="text-xl sm:text-2xl md:text-3xl font-space font-bold leading-snug mb-5 sm:mb-6 text-white/90 tracking-tight max-w-2xl"
        >
          Let&apos;s plan your next outdoor project
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="text-sm sm:text-base md:text-lg text-white/75 mb-8 sm:mb-10 max-w-xl leading-relaxed"
        >
          Share a few details about your Charlotte property and we&apos;ll follow
          up with a clear next step — usually within one business day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="flex flex-row flex-nowrap items-center gap-2 sm:gap-4"
        >
          <Button
            variant="stone"
            className="px-3.5 py-2.5 sm:px-10 sm:py-5 text-[11px] sm:text-base whitespace-nowrap"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start a Project Request
          </Button>
          <a
            href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`}
            className="shrink-0"
          >
            <Button
              variant="outline"
              className="px-3.5 py-2.5 sm:px-10 sm:py-5 text-[11px] sm:text-base border-white/50 text-white hover:bg-white/15 hover:text-white inline-flex items-center justify-center gap-1.5 whitespace-nowrap"
            >
              <Phone size={14} className="shrink-0 text-white" />
              <span>Call Us</span>
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

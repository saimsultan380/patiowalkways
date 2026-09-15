"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ProjectsHero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[68vh] flex flex-col justify-end overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <Image
          src="/patio_project_01_08_final.jpg"
          alt="Charlotte outdoor living project portfolio"
          fill
          priority
          quality={75}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/78 to-primary/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/30" />
      </div>

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 pt-16 pb-12 md:pt-20 md:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel className="text-white">PROJECT PORTFOLIO</SectionLabel>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-space font-bold leading-[1.06] mb-5 text-white tracking-tight max-w-3xl"
        >
          Outdoor spaces that{" "}
          <span className="text-stone">speak for themselves</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="text-sm sm:text-base md:text-lg text-white/75 mb-8 max-w-2xl leading-relaxed"
        >
          Browse completed Charlotte projects in sequence — from patio and
          walkway rebuilds to terraced gardens, rooftop living, and poolside
          retreats. Each project includes a full photo gallery from start to
          finish.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="flex flex-wrap items-center gap-3"
        >
          <Button
            variant="stone"
            className="px-6 py-3.5 sm:px-8 sm:py-4"
            onClick={() =>
              document.getElementById("project-list")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Browse Projects
          </Button>
          <Link href="/contact">
            <Button
              variant="outline"
              className="px-6 py-3.5 sm:px-8 sm:py-4 border-white/50 text-white hover:bg-white/15 hover:text-white inline-flex items-center gap-2"
            >
              Start Your Project
              <ArrowDown size={14} className="rotate-[-90deg]" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

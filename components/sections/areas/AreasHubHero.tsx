"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { areasHub, areaNavItems } from "@/data/areas";

export default function AreasHubHero() {
  const { hero } = areasHub;

  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={hero.imageSrc}
          alt="Service areas around Charlotte, NC"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/94 via-primary/82 to-primary/42" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/30" />
      </div>

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 pt-10 pb-12 sm:pt-12 md:pt-14 md:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel className="text-white">{hero.label}</SectionLabel>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-space font-bold leading-[1.06] mb-5 text-white tracking-tight max-w-3xl"
        >
          {hero.title}{" "}
          <span className="text-stone">{hero.titleAccent}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="text-sm sm:text-base md:text-lg text-white/75 mb-8 max-w-2xl leading-relaxed"
        >
          {hero.description}
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
              document.getElementById("directory")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Browse Communities
          </Button>
          <Link href="/contact">
            <Button
              variant="outline"
              className="px-6 py-3.5 sm:px-8 sm:py-4 border-white/50 text-white hover:bg-white/15 hover:text-white"
            >
              Request an Estimate
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-x-5 gap-y-2"
        >
          {areaNavItems.map((area) => (
            <span
              key={area.slug}
              className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white/70"
            >
              <MapPin size={12} className="text-stone shrink-0" />
              {area.shortName}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

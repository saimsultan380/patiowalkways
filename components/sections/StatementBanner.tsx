"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

export default function StatementBanner() {
  return (
    <section className="relative min-h-[55vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden py-16 sm:py-20 md:py-24">
      <div className="absolute inset-0">
        <Image
          src="/01_modern_courtyard_transformation.jpg"
          alt="Beautiful outdoor spaces built to last"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/75" />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <SectionLabel className="text-white">OUR PROMISE</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-playfair italic text-white leading-tight mb-8 sm:mb-12">
            &ldquo;We create beautiful, functional outdoor spaces built to last.&rdquo;
          </h2>

          <div className="flex justify-center gap-10 sm:gap-16 md:gap-24">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-white mb-2">60mi</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">Charlotte Radius</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-white mb-2">Full</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">Outdoor Solutions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

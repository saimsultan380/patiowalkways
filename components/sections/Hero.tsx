"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { brand, heroImages } from "@/data/content";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[calc(100svh-7rem)] min-h-[560px] max-h-[calc(100svh-7rem)] flex flex-col lg:flex-row overflow-hidden bg-primary">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-primary -skew-x-12 -translate-x-1/4 pointer-events-none" />

      <div className="w-full lg:w-[55%] flex items-center justify-center px-6 py-8 sm:py-10 lg:py-12 relative z-10 min-h-0 overflow-y-auto">
        <div className="max-w-[720px] w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel className="text-white">Charlotte Outdoor Living</SectionLabel>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-space font-bold leading-[1.05] mb-4 sm:mb-6 text-white tracking-tight"
          >
            Outdoor Living, Hardscaping &{" "}
            <span className="text-stone">Landscaping Services Charlotte</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white/75 mb-6 sm:mb-8 max-w-2xl leading-relaxed"
          >
            Transform your Charlotte property with expert patio, paver, walkway, driveway, and outdoor living services. From custom paver patios and natural stone walkways to concrete driveways, retaining walls, fire pits, outdoor kitchens, landscaping, and more, we create beautiful, functional outdoor spaces built to last.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-row items-center space-x-3 sm:space-x-6 mb-8 sm:mb-10"
          >
            <Button
              variant="accent"
              className="px-5 sm:px-10 py-3 sm:py-4 text-sm sm:text-base shadow-xl shadow-accent/20 whitespace-nowrap"
              onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Free Estimates
            </Button>
            <a href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`}>
              <Button
                variant="stone"
                className="px-5 sm:px-10 py-3 sm:py-4 text-sm sm:text-base border-none shadow-xl shadow-stone/20 flex items-center space-x-3"
              >
                <Phone size={18} />
                <span>Call Us</span>
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-2 sm:gap-8 pt-6 border-t border-white/15"
          >
            <TrustBadge text="Free Estimates" />
            <TrustBadge text="Charlotte Area" />
            <TrustBadge text="60-Mile Radius" />
          </motion.div>
        </div>
      </div>

      <div className="w-full lg:w-[45%] relative flex-1 min-h-[42%] lg:min-h-0 lg:h-full">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[currentImage]}
                alt="Patio, paver, and outdoor living services in Charlotte"
                fill
                priority={currentImage === 0}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentImage === index
                  ? "bg-accent w-8"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ text }: { text: string }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-stone/20 flex items-center justify-center">
        <span className="text-stone text-[10px]">✓</span>
      </div>
      <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/85 leading-tight">
        {text}
      </span>
    </div>
  );
}

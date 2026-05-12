"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

const heroImages = [
  "/Plumbing.jpg",
  "/Carpentry.jpg",
  "/Painting.jpg",
  "/Tiling.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col lg:flex-row overflow-hidden bg-white">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-bg-off/30 -skew-x-12 -translate-x-1/4 pointer-events-none" />

      {/* Left Column (55%) */}
      <div className="w-full lg:w-[55%] flex items-center justify-center px-6 py-24 lg:pt-40 lg:pb-24 relative z-10">
        <div className="max-w-[720px] w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>Premium Home Maintenance</SectionLabel>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-[68px] font-space font-bold leading-[1.05] mb-8 text-primary tracking-tight"
          >
            Book Plumbing, Painting, Tiling & <span className="text-accent">Carpentry Services 24/7</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-secondary mb-12 max-w-2xl leading-relaxed"
          >
            Professional tiles installation, plumbing, carpentry, and painting services designed for homes and businesses with fast response and flawless workmanship.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-row items-center space-x-4 sm:space-x-8 mb-20"
          >
            <Button className="px-6 sm:px-10 py-4 sm:py-5 text-sm sm:text-base shadow-xl shadow-primary/10 whitespace-nowrap">
              Get Free Quote
            </Button>
            <Button className="bg-[#C8A96E] text-primary hover:bg-[#C8A96E]/90 px-6 sm:px-10 py-4 sm:py-5 text-sm sm:text-base border-none shadow-xl shadow-accent/5 flex items-center space-x-3">
              <Phone size={18} />
              <span>Call Now</span>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-3 gap-2 sm:gap-8 pt-8 border-t border-border-subtle"
          >
            <TrustBadge text="Licensed" />
            <TrustBadge text="Free Quote" />
            <TrustBadge text="Same-Day" />
          </motion.div>
        </div>
      </div>

      {/* Right Column (45%) */}
      <div className="w-full lg:w-[45%] relative min-h-[60vh] lg:min-h-screen">
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
                alt="ProCraft Services"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
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

function LinkWithIcon({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <button className="flex items-center space-x-3 text-sm font-bold group">
      <span className="text-accent">{icon}</span>
      <span className="group-hover:border-b group-hover:border-primary transition-all duration-300 pb-0.5">{text}</span>
    </button>
  );
}

function TrustBadge({ text }: { text: string }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
        <span className="text-accent text-[10px]">✓</span>
      </div>
      <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-primary leading-tight">{text}</span>
    </div>
  );
}

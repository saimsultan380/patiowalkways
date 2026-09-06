"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { brand } from "@/data/content";

export default function CTASection() {
  return (
    <section id="contact" className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1800&auto=format&fit=crop"
          alt="Let's build your dream outdoor space"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel className="justify-center text-white">
            LET&apos;S BUILD YOUR DREAM OUTDOOR SPACE
          </SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-space font-bold tracking-tight text-white mb-8">
            Make Your Outdoor Space{" "}
            <span className="text-accent">Something to Enjoy</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
            Turn your ideas into a beautiful, functional outdoor space designed for your home. From custom patios and pavers to walkways, driveways, outdoor living features, and complete landscaping, our team is ready to bring your vision to life.
          </p>

          <div className="flex flex-row items-center justify-center space-x-3 sm:space-x-6 mb-12">
            <Button
              className="flex-1 sm:flex-none bg-[#C8A96E] text-primary hover:bg-[#C8A96E]/90 px-4 sm:px-12 border-none text-sm sm:text-base"
              onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Your Free Estimate
            </Button>
            <Button
              variant="outline"
              className="flex-1 sm:flex-none px-4 sm:px-12 text-sm sm:text-base"
              onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start Your Project
            </Button>
          </div>

          <div className="text-white">
            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">Call Us</p>
            <a href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`} className="text-3xl md:text-4xl font-space font-bold hover:text-accent transition-colors">
              {brand.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

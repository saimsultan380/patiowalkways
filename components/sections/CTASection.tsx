"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { brand } from "@/data/content";

interface CTASectionProps {
  label?: string;
  title?: React.ReactNode;
  description?: string;
  primaryCta?: string;
  secondaryCta?: string;
}

export default function CTASection({
  label = "LET'S BUILD YOUR DREAM OUTDOOR SPACE",
  title,
  description = "Turn your ideas into a beautiful, functional outdoor space designed for your home. From custom patios and pavers to walkways, driveways, outdoor living features, and complete landscaping, our team is ready to bring your vision to life.",
  primaryCta = "Get Your Free Estimate",
  secondaryCta = "Start Your Project",
}: CTASectionProps) {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden py-20 sm:py-24 md:py-28"
    >
      <div className="absolute inset-0">
        <Image
          src="/landscaping_cta_background.jpg"
          alt="Let's build your dream outdoor space"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel className="justify-center text-white">
            {label}
          </SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-space font-bold tracking-tight text-white mb-5 sm:mb-8">
            {title ?? (
              <>
                Make Your Outdoor Space{" "}
                <span className="text-stone whitespace-nowrap">Something to Enjoy</span>
              </>
            )}
          </h2>
          <p className="text-white/80 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            {description}
          </p>

          <div className="flex flex-row flex-nowrap items-center justify-center gap-2 sm:gap-6 mb-8 sm:mb-12">
            <Button
              variant="stone"
              className="px-3.5 py-2.5 sm:px-12 sm:py-4 text-[11px] sm:text-base border-none whitespace-nowrap"
              onClick={() => {
                const book = document.getElementById("book");
                if (book) book.scrollIntoView({ behavior: "smooth" });
                else window.location.href = "/contact";
              }}
            >
              {primaryCta}
            </Button>
            <Button
              variant="outline"
              className="px-3.5 py-2.5 sm:px-12 sm:py-4 text-[11px] sm:text-base border-white/70 text-white hover:bg-white/15 hover:text-white whitespace-nowrap"
              onClick={() => {
                const book = document.getElementById("book");
                if (book) book.scrollIntoView({ behavior: "smooth" });
                else window.location.href = "/contact";
              }}
            >
              {secondaryCta}
            </Button>
          </div>

          <div className="text-white pb-1">
            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3 sm:mb-4">Call Us</p>
            <a
              href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`}
              className="text-2xl sm:text-3xl md:text-4xl font-space font-bold hover:text-stone transition-colors break-all"
            >
              {brand.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

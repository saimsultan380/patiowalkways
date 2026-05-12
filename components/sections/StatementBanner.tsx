"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

export default function StatementBanner() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background with Parallax effect via attachment fixed */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/our-promise.jpg')`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
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
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-playfair italic text-white leading-tight mb-12">
            "We don't just complete jobs — we build long-term relationships."
          </h2>
          
          <div className="flex justify-center space-x-16 md:space-x-24">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-playfair font-bold text-white mb-2">10+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-playfair font-bold text-white mb-2">500+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Projects Completed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

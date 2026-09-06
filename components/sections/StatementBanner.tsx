"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

export default function StatementBanner() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1800&auto=format&fit=crop')`,
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
            &ldquo;We create beautiful, functional outdoor spaces built to last.&rdquo;
          </h2>
          
          <div className="flex justify-center space-x-16 md:space-x-24">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-playfair font-bold text-white mb-2">60mi</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Charlotte Radius</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-playfair font-bold text-white mb-2">Full</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Outdoor Solutions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

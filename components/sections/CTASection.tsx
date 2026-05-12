"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

export default function CTASection() {
  return (
    <section id="contact" className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/start-your-project.jpg"
          alt="Start your project"
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
            START YOUR PROJECT
          </SectionLabel>
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-space font-bold tracking-tight text-white mb-8">
            Ready to Transform Your <span className="text-accent">Home?</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
            Free on-site quote · No obligation · Response within 2 hours
          </p>

          <div className="flex flex-row items-center justify-center space-x-3 sm:space-x-6 mb-12">
            <Button className="flex-1 sm:flex-none bg-[#C8A96E] text-primary hover:bg-[#C8A96E]/90 px-4 sm:px-12 border-none text-sm sm:text-base">
              Call Us Now
            </Button>
            <Button variant="outline" className="flex-1 sm:flex-none px-4 sm:px-12 text-sm sm:text-base">
              Send Enquiry
            </Button>
          </div>

          <div className="text-white">
            <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">Direct Line</p>
            <p className="text-3xl md:text-4xl font-space font-bold">+1 (123) 123-1234</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

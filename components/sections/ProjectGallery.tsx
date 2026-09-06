"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects } from "@/data/content";

export default function ProjectGallery() {
  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 mb-20">
        <SectionLabel>RECENT WORK</SectionLabel>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold tracking-tight">
          Outdoor Spaces That{" "}
          <span className="text-accent">Speak for Themselves</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px] gap-4 px-4 max-w-[1600px] mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative group overflow-hidden ${project.span}`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            <div className="absolute inset-0 bg-primary/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone mb-2">
                {project.category}
              </span>
              <h4 className="text-xl font-bold text-white mb-4">
                {project.title}
              </h4>
              <span className="text-xs text-white border-b border-stone/60 pb-1">
                View Project
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button
          onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}
          className="text-sm font-bold uppercase tracking-widest border-b border-primary pb-1 hover:text-accent hover:border-accent transition-all"
        >
          Start Your Project →
        </button>
      </div>
    </section>
  );
}

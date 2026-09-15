"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { portfolioProjects } from "@/data/projects-page";

export default function ProjectGallery() {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 mb-12 sm:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div className="max-w-2xl">
          <SectionLabel>RECENT WORK</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold tracking-tight">
            Outdoor Spaces That{" "}
            <span className="text-accent">Speak for Themselves</span>
          </h2>
        </div>
        <Link
          href="/projects"
          className="text-sm font-bold uppercase tracking-widest border-b border-primary pb-1 hover:text-accent hover:border-accent transition-all self-start lg:self-auto"
        >
          View All Projects →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 max-w-[1600px] mx-auto">
        {portfolioProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className={`relative group overflow-hidden rounded-[4px] min-h-[260px] sm:min-h-[300px] ${
              index === 0 ? "sm:col-span-2 lg:col-span-2 lg:min-h-[420px]" : ""
            }`}
          >
            <Link href={`/projects/${project.slug}`} className="absolute inset-0">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                quality={75}
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />

              <div className="absolute inset-0 bg-primary/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone mb-2">
                  {project.category}
                </span>
                <h4 className="text-xl font-bold text-white mb-4">
                  {project.title}
                </h4>
                <span className="text-xs text-white border-b border-stone/60 pb-1">
                  View Gallery
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/projects"
          className="text-sm font-bold uppercase tracking-widest border-b border-primary pb-1 hover:text-accent hover:border-accent transition-all"
        >
          Browse Full Portfolio →
        </Link>
      </div>
    </section>
  );
}

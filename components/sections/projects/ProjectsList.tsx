"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Images, MapPin } from "lucide-react";
import { portfolioProjects } from "@/data/projects-page";
import ProjectCardSlider from "@/components/sections/projects/ProjectCardSlider";

export default function ProjectsList() {
  return (
    <section id="project-list" className="py-12 sm:py-16 lg:py-20 bg-white scroll-mt-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="space-y-8 sm:space-y-10">
          {portfolioProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch border border-border-subtle rounded-[4px] overflow-hidden hover:border-accent/40 transition-colors bg-white"
              >
                <div className="relative lg:col-span-7 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[380px] overflow-hidden bg-[#dfe5e1]">
                  <ProjectCardSlider
                    images={project.images}
                    coverImage={project.coverImage}
                    title={project.title}
                    priority={index < 2}
                  />
                  <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10 bg-primary text-stone px-3 py-1.5 rounded-[4px]">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest">
                      Project {String(project.id).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-center p-5 sm:p-7 lg:pr-8">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-accent">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-muted">
                      <MapPin size={12} className="shrink-0" />
                      {project.location}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-space font-bold tracking-tight mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-secondary text-sm sm:text-base leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mt-auto">
                    <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-colors">
                      View Gallery
                      <ArrowUpRight size={16} />
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
                      <Images size={14} />
                      {project.images.length} photos
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

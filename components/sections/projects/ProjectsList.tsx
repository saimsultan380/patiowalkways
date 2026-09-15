"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Images, MapPin } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { portfolioProjects } from "@/data/projects-page";

export default function ProjectsList() {
  return (
    <section id="project-list" className="py-12 sm:py-16 lg:py-20 bg-white scroll-mt-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="mb-10 sm:mb-14 max-w-2xl">
          <SectionLabel>ALL PROJECTS</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-space font-bold tracking-tight mb-4">
            Projects in{" "}
            <span className="text-accent">sequence</span>
          </h2>
          <p className="text-secondary text-base sm:text-lg leading-relaxed">
            Six completed outdoor projects across Charlotte. Open any project to
            view the full gallery from before photos through the final reveal.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {portfolioProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch border border-border-subtle rounded-[4px] overflow-hidden hover:border-accent/40 transition-colors bg-white"
              >
                <div className="relative lg:col-span-7 min-h-[240px] sm:min-h-[320px] lg:min-h-[380px]">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    quality={75}
                    loading={index === 0 ? "eager" : "lazy"}
                    priority={index === 0}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-primary text-stone px-3 py-1.5 rounded-[4px]">
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

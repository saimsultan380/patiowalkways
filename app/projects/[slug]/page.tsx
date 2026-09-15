import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import ProjectImageGallery from "@/components/sections/projects/ProjectImageGallery";
import SectionLabel from "@/components/ui/SectionLabel";
import {
  getProjectBySlug,
  portfolioProjects,
} from "@/data/projects-page";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Project Gallery | Empresa Galdamez`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = portfolioProjects.findIndex((item) => item.slug === slug);
  const prev = index > 0 ? portfolioProjects[index - 1] : null;
  const next =
    index < portfolioProjects.length - 1 ? portfolioProjects[index + 1] : null;

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative flex flex-col justify-end overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            quality={75}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/78 to-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-primary/30" />
        </div>

        <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 pt-8 pb-8 sm:pt-10 sm:pb-10 md:pt-12 md:pb-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/70 hover:text-stone transition-colors mb-4"
          >
            <ArrowLeft size={14} />
            All Projects
          </Link>

          <SectionLabel className="text-white">
            PROJECT {String(project.id).padStart(2, "0")}
          </SectionLabel>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-space font-bold leading-[1.08] text-white tracking-tight max-w-3xl mb-4">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/75 mb-5">
            <span className="text-stone font-bold uppercase tracking-widest text-[11px]">
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-stone shrink-0" />
              {project.location}
            </span>
            <span>{project.images.length} gallery photos</span>
          </div>

          <p className="text-white/75 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
            {project.shortDescription}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="max-w-3xl mb-10 sm:mb-12">
            <SectionLabel>PROJECT STORY</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-space font-bold tracking-tight mb-5">
              From start to{" "}
              <span className="text-accent">finish</span>
            </h2>
            <p className="text-secondary text-base sm:text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="mb-4 sm:mb-6 flex items-end justify-between gap-4">
            <h3 className="text-xl sm:text-2xl font-space font-bold tracking-tight">
              Project Gallery
            </h3>
            <p className="text-xs sm:text-sm text-muted">
              Tap any photo to open the full gallery
            </p>
          </div>

          <ProjectImageGallery title={project.title} images={project.images} />
        </div>
      </section>

      <section className="py-10 sm:py-12 border-t border-border-subtle bg-white">
        <div className="max-w-[1320px] mx-auto px-6 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex-1 border border-border-subtle rounded-[4px] p-5 hover:border-accent/40 transition-colors"
            >
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-muted mb-2">
                <ArrowLeft size={14} />
                Previous
              </span>
              <p className="text-lg font-space font-bold group-hover:text-accent transition-colors">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex-1 border border-border-subtle rounded-[4px] p-5 text-right hover:border-accent/40 transition-colors"
            >
              <span className="inline-flex items-center justify-end gap-2 text-[11px] font-bold uppercase tracking-widest text-muted mb-2 w-full">
                Next
                <ArrowRight size={14} />
              </span>
              <p className="text-lg font-space font-bold group-hover:text-accent transition-colors">
                {next.title}
              </p>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </section>

      <CTASection
        label="LIKE WHAT YOU SEE?"
        title={
          <>
            Ready for a project like{" "}
            <span className="text-stone">this one?</span>
          </>
        }
        description="Tell us about your property and goals. We'll follow up with a clear next step for your Charlotte outdoor project."
        primaryCta="Request an Estimate"
        secondaryCta="Contact Us"
      />
      <Footer />
    </main>
  );
}

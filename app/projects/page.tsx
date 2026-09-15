import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectsHero from "@/components/sections/projects/ProjectsHero";
import ProjectsList from "@/components/sections/projects/ProjectsList";
import CTASection from "@/components/sections/CTASection";
import { projectsPageMeta } from "@/data/projects-page";

export const metadata: Metadata = {
  title: projectsPageMeta.title,
  description: projectsPageMeta.description,
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ProjectsHero />
      <ProjectsList />
      <CTASection
        label="READY TO BUILD YOURS"
        title={
          <>
            Let&apos;s plan your next{" "}
            <span className="text-stone">outdoor project</span>
          </>
        }
        description="Inspired by one of these spaces? Tell us about your property and we'll help you plan a clear next step."
        primaryCta="Request an Estimate"
        secondaryCta="Contact Us"
      />
      <Footer />
    </main>
  );
}

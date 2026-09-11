import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StatsMarquee from "@/components/sections/StatsMarquee";
import BookForm from "@/components/sections/BookForm";
import ServiceAreas from "@/components/sections/ServiceAreas";
import HowItWorks from "@/components/sections/HowItWorks";
import BenefitsMarquee from "@/components/sections/BenefitsMarquee";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import ServicePageHero from "@/components/sections/services/ServicePageHero";
import ServiceOptionsGrid from "@/components/sections/services/ServiceOptionsGrid";
import ServiceContentBlock from "@/components/sections/services/ServiceContentBlock";
import ServiceSplitSection from "@/components/sections/services/ServiceSplitSection";
import MaterialComparisonTable from "@/components/sections/services/MaterialComparisonTable";
import { brand } from "@/data/content";
import { patiosWalkwaysPage as page } from "@/data/patios-walkways-page";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
};

export default function PatiosWalkwaysPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicePageHero
        label={page.hero.label}
        title={page.hero.title}
        titleAccent={page.hero.titleAccent}
        description={page.hero.description}
        imageSrc={page.hero.imageSrc}
        imageAlt="Patio and walkway installation in Charlotte, NC"
        primaryCta={page.hero.primaryCta}
        secondaryCta={page.hero.secondaryCta}
        trustBadges={page.hero.trustBadges}
        exploreLinks={page.hero.exploreLinks}
      />
      <StatsMarquee />
      <BookForm
        label={page.bookForm.label}
        title={page.bookForm.title}
        titleAccent={page.bookForm.titleAccent}
        description={page.bookForm.description}
        submitLabel={page.bookForm.submitLabel}
        defaultService={page.bookForm.defaultService}
        showLocation
        showContactMethod
      />
      <ServiceSplitSection
        label={page.overview.label}
        title={page.overview.title}
        titleAccent={page.overview.titleAccent}
        paragraphs={page.overview.paragraphs}
        imageSrc={page.overview.imageSrc}
        imageAlt="Patio and walkway installation in Charlotte"
      />
      <ServiceOptionsGrid
        id={page.patioOptions.id}
        label={page.patioOptions.label}
        title={page.patioOptions.title}
        titleAccent={page.patioOptions.titleAccent}
        intro={page.patioOptions.intro}
        items={page.patioOptions.items}
      />
      <ServiceOptionsGrid
        id={page.walkwayOptions.id}
        label={page.walkwayOptions.label}
        title={page.walkwayOptions.title}
        titleAccent={page.walkwayOptions.titleAccent}
        intro={page.walkwayOptions.intro}
        items={page.walkwayOptions.items}
        note={page.walkwayOptions.note}
      />
      <ServiceSplitSection
        label={page.projectTypes.label}
        title={page.projectTypes.title}
        titleAccent={page.projectTypes.titleAccent}
        intro={page.projectTypes.intro}
        bullets={page.projectTypes.items}
        imageSrc="/06_screened_porch_landscape.jpg"
        imageAlt="Patio and walkway project types"
        reverse
      />
      <ServiceOptionsGrid
        id={page.materials.id}
        label={page.materials.label}
        title={page.materials.title}
        titleAccent={page.materials.titleAccent}
        intro={page.materials.intro}
        items={page.materials.items}
      />
      <ServiceSplitSection
        label={page.installation.label}
        title={page.installation.title}
        titleAccent={page.installation.titleAccent}
        intro={page.installation.intro}
        bullets={page.installation.steps}
        note={page.installation.note}
        imageSrc={page.installation.imageSrc}
        imageAlt="Quality patio and walkway installation"
      />
      <ServiceContentBlock
        label={page.whyChoose.label}
        title={page.whyChoose.title}
        titleAccent={page.whyChoose.titleAccent}
        cards={page.whyChoose.items.map(({ title, description }) => ({
          title,
          description,
        }))}
      />
      <HowItWorks
        label={page.process.label}
        title={
          <>
            {page.process.title}{" "}
            <span className="text-accent">{page.process.titleAccent}</span>
          </>
        }
        description={page.process.description}
        items={page.process.items}
        ctaLabel="Request My Estimate"
      />
      <ServiceSplitSection
        label={page.planning.label}
        title={page.planning.title}
        titleAccent={page.planning.titleAccent}
        intro={page.planning.intro}
        imageSrc={page.planning.imageSrc}
        imageAlt="Planning patio and walkway projects in Charlotte"
        reverse
      />
      <ServiceContentBlock
        label="PLANNING DETAILS"
        title="Key Planning"
        titleAccent="Considerations"
        intro={page.planning.considerationsTitle}
        cards={page.planning.considerations.map(({ title, description }) => ({
          title,
          description,
        }))}
      />
      <ServiceOptionsGrid
        label={page.improvements.label}
        title={page.improvements.title}
        titleAccent={page.improvements.titleAccent}
        intro="Practical ways a patio or walkway project can improve how your property looks, connects, and gets used every day."
        items={page.improvements.items.map((item) => ({
          name: item.title,
          description: item.description,
          imageSrc: item.imageSrc,
        }))}
      />
      <MaterialComparisonTable
        label={page.comparison.label}
        title={page.comparison.title}
        titleAccent={page.comparison.titleAccent}
        headers={page.comparison.headers}
        rows={page.comparison.rows}
      />
      <ServiceAreas />
      <BenefitsMarquee />
      <ServiceContentBlock
        label={page.fitCheck.label}
        title={page.fitCheck.title}
        titleAccent={page.fitCheck.titleAccent}
        intro={page.fitCheck.intro}
        items={page.fitCheck.items}
        note={page.fitCheck.outro}
      />
      <FAQ
        items={page.faqs}
        title={
          <>
            Patio & Walkway Questions,{" "}
            <span className="text-accent">Answered</span>
          </>
        }
        description="Common questions about patio and walkway installation, materials, timelines, and service areas in Charlotte."
      />
      <CTASection
        label={page.cta.label}
        title={
          <>
            {page.cta.title}{" "}
            <span className="text-stone whitespace-nowrap">{page.cta.titleAccent}</span>
          </>
        }
        description={page.cta.description}
        primaryCta={page.cta.primaryCta}
        secondaryCta={`${page.cta.secondaryCta} ${brand.phone}`}
      />
      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StatsMarquee from "@/components/sections/StatsMarquee";
import BookForm from "@/components/sections/BookForm";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import ServicePageHero from "@/components/sections/services/ServicePageHero";
import ServiceSplitSection from "@/components/sections/services/ServiceSplitSection";
import ServiceContentBlock from "@/components/sections/services/ServiceContentBlock";
import MaterialComparisonTable from "@/components/sections/services/MaterialComparisonTable";
import AreaServicesGrid from "@/components/sections/areas/AreaServicesGrid";
import OtherAreas from "@/components/sections/areas/OtherAreas";
import { brand } from "@/data/content";
import { denverPage as page } from "@/data/denver-page";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
};

export default function DenverAreaPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicePageHero
        label={page.hero.label}
        title={page.hero.title}
        titleAccent={page.hero.titleAccent}
        description={page.hero.description}
        imageSrc={page.hero.imageSrc}
        imageAlt="Landscaping and hardscaping for Denver, NC properties"
        primaryCta={page.hero.primaryCta}
        secondaryCta={page.hero.secondaryCta}
        trustBadges={page.hero.trustBadges}
        exploreLinks={page.hero.exploreLinks}
        exploreLabel="On this page"
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
        showPropertyType
      />
      <AreaServicesGrid
        id={page.services.id}
        label={page.services.label}
        title={page.services.title}
        titleAccent={page.services.titleAccent}
        intro={page.services.intro}
        items={page.services.items}
      />
      <ServiceSplitSection
        id={page.landscaping.id}
        label={page.landscaping.label}
        title={page.landscaping.title}
        titleAccent={page.landscaping.titleAccent}
        intro={page.landscaping.intro}
        bullets={page.landscaping.items}
        imageSrc={page.landscaping.imageSrc}
        imageAlt="Landscaping services in Denver, NC"
      />
      <ServiceSplitSection
        id={page.patios.id}
        label={page.patios.label}
        title={page.patios.title}
        titleAccent={page.patios.titleAccent}
        paragraphs={page.patios.paragraphs}
        bullets={page.patios.items}
        imageSrc={page.patios.imageSrc}
        imageAlt="Patios and walkways in Denver, NC"
        reverse
      />
      <ServiceSplitSection
        id={page.structural.id}
        label={page.structural.label}
        title={page.structural.title}
        titleAccent={page.structural.titleAccent}
        paragraphs={page.structural.paragraphs}
        bullets={page.structural.items}
        imageSrc={page.structural.imageSrc}
        imageAlt="Driveways and retaining walls in Denver, NC"
      />
      <ServiceSplitSection
        id={page.outdoorLiving.id}
        label={page.outdoorLiving.label}
        title={page.outdoorLiving.title}
        titleAccent={page.outdoorLiving.titleAccent}
        paragraphs={page.outdoorLiving.paragraphs}
        bullets={page.outdoorLiving.items}
        imageSrc={page.outdoorLiving.imageSrc}
        imageAlt="Outdoor living features in Denver, NC"
        reverse
      />
      <ServiceSplitSection
        id={page.utilities.id}
        label={page.utilities.label}
        title={page.utilities.title}
        titleAccent={page.utilities.titleAccent}
        paragraphs={page.utilities.paragraphs}
        bullets={page.utilities.items}
        imageSrc={page.utilities.imageSrc}
        imageAlt="Drainage, grading, and lighting in Denver, NC"
      />
      <ServiceSplitSection
        id={page.fences.id}
        label={page.fences.label}
        title={page.fences.title}
        titleAccent={page.fences.titleAccent}
        paragraphs={page.fences.paragraphs}
        bullets={page.fences.items}
        imageSrc={page.fences.imageSrc}
        imageAlt="Fences and water features in Denver, NC"
        reverse
      />
      <ServiceSplitSection
        id={page.commercial.id}
        label={page.commercial.label}
        title={page.commercial.title}
        titleAccent={page.commercial.titleAccent}
        paragraphs={page.commercial.paragraphs}
        bullets={page.commercial.items}
        imageSrc={page.commercial.imageSrc}
        imageAlt="Commercial landscaping and hardscaping in Denver, NC"
      />
      <MaterialComparisonTable
        id={page.materials.id}
        label={page.materials.label}
        title={page.materials.title}
        titleAccent={page.materials.titleAccent}
        headers={["Category", "Options"]}
        rows={page.materials.rows.map((row) => [row.category, row.options])}
        note={page.materials.intro}
      />
      <ServiceContentBlock
        id={page.upgradeSigns.id}
        label={page.upgradeSigns.label}
        title={page.upgradeSigns.title}
        titleAccent={page.upgradeSigns.titleAccent}
        intro={page.upgradeSigns.intro}
        items={page.upgradeSigns.items}
      />
      <ServiceContentBlock
        id={page.planning.id}
        label={page.planning.label}
        title={page.planning.title}
        titleAccent={page.planning.titleAccent}
        intro={page.planning.intro}
        items={page.planning.items}
      />
      <ServiceSplitSection
        label={page.connected.label}
        title={page.connected.title}
        titleAccent={page.connected.titleAccent}
        paragraphs={page.connected.paragraphs}
        bullets={page.connected.items}
        imageSrc={page.connected.imageSrc}
        imageAlt="Connected outdoor improvements in Denver"
        reverse
      />
      <HowItWorks
        label="HOW WE WORK"
        title={
          <>
            A clear process for your{" "}
            <span className="text-accent">Denver project</span>
          </>
        }
        description="From the first conversation through finishing details, we keep the project organized around your property."
        items={page.steps}
        ctaLabel="Request a Denver Estimate"
      />
      <ServiceContentBlock
        id={page.whyUs.id}
        label={page.whyUs.label}
        title={page.whyUs.title}
        titleAccent={page.whyUs.titleAccent}
        cards={page.whyUs.items}
      />
      <ServiceContentBlock
        label={page.projectsHelp.label}
        title={page.projectsHelp.title}
        titleAccent={page.projectsHelp.titleAccent}
        paragraphs={[page.projectsHelp.description]}
      />
      <ServiceContentBlock
        label={page.region.label}
        title={page.region.title}
        titleAccent={page.region.titleAccent}
        paragraphs={page.region.paragraphs}
      />
      <OtherAreas currentSlug="denver" />
      <FAQ
        items={page.faqs}
        title={
          <>
            Denver outdoor project{" "}
            <span className="text-accent">questions</span>
          </>
        }
      />
      <CTASection
        label={page.cta.label}
        title={
          <>
            Ready to Improve Your{" "}
            <span className="text-stone">Denver Outdoor Space?</span>
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

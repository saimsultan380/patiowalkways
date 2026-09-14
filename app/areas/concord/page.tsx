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
import AreaServicesGrid from "@/components/sections/areas/AreaServicesGrid";
import OtherAreas from "@/components/sections/areas/OtherAreas";
import { brand } from "@/data/content";
import { concordPage as page } from "@/data/concord-page";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
};

export default function ConcordAreaPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicePageHero
        label={page.hero.label}
        title={page.hero.title}
        titleAccent={page.hero.titleAccent}
        description={page.hero.description}
        imageSrc={page.hero.imageSrc}
        imageAlt="Landscaping and hardscaping services in Concord, NC"
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
      <ServiceSplitSection
        label={page.overview.label}
        title={page.overview.title}
        titleAccent={page.overview.titleAccent}
        paragraphs={page.overview.paragraphs}
        imageSrc={page.overview.imageSrc}
        imageAlt="Outdoor services for Concord properties"
      />
      <AreaServicesGrid
        id={page.services.id}
        label={page.services.label}
        title={page.services.title}
        titleAccent={page.services.titleAccent}
        intro={page.services.intro}
        items={page.services.items}
      />
      <ServiceContentBlock
        id={page.considerations.id}
        label={page.considerations.label}
        title={page.considerations.title}
        titleAccent={page.considerations.titleAccent}
        intro={page.considerations.intro}
        cards={page.considerations.items}
      />
      <ServiceContentBlock
        id={page.upgradeSigns.id}
        label={page.upgradeSigns.label}
        title={page.upgradeSigns.title}
        titleAccent={page.upgradeSigns.titleAccent}
        intro={page.upgradeSigns.intro}
        items={page.upgradeSigns.items}
      />
      <ServiceSplitSection
        label={page.connected.label}
        title={page.connected.title}
        titleAccent={page.connected.titleAccent}
        paragraphs={page.connected.paragraphs}
        imageSrc={page.connected.imageSrc}
        imageAlt="Connected outdoor improvements in Concord"
        reverse
      />
      <HowItWorks
        label="HOW WE WORK"
        title={
          <>
            A clear process for your{" "}
            <span className="text-accent">Concord project</span>
          </>
        }
        description="From the first conversation through finishing details, we keep the project organized around your property."
        items={page.steps}
        ctaLabel="Request a Concord Estimate"
      />
      <ServiceContentBlock
        label={page.pricing.label}
        title={page.pricing.title}
        titleAccent={page.pricing.titleAccent}
        intro={page.pricing.intro}
        items={page.pricing.items}
      />
      <ServiceContentBlock
        id={page.whyUs.id}
        label={page.whyUs.label}
        title={page.whyUs.title}
        titleAccent={page.whyUs.titleAccent}
        cards={page.whyUs.items}
      />
      <ServiceSplitSection
        id={page.commercial.id}
        label={page.commercial.label}
        title={page.commercial.title}
        titleAccent={page.commercial.titleAccent}
        intro={page.commercial.intro}
        bullets={page.commercial.items}
        imageSrc={page.commercial.imageSrc}
        imageAlt="Commercial outdoor improvements in Concord, NC"
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
      <OtherAreas currentSlug="concord" />
      <FAQ
        items={page.faqs}
        title={
          <>
            Concord outdoor project{" "}
            <span className="text-accent">questions</span>
          </>
        }
      />
      <CTASection
        label={page.cta.label}
        title={
          <>
            Ready to Improve Your{" "}
            <span className="text-stone">Concord Outdoor Space?</span>
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

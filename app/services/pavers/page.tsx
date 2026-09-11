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
import ServiceFeatureCards from "@/components/sections/services/ServiceFeatureCards";
import MaterialComparisonTable from "@/components/sections/services/MaterialComparisonTable";
import { brand } from "@/data/content";
import { paversPage as page } from "@/data/pavers-page";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
};

export default function PaversPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicePageHero
        label={page.hero.label}
        title={page.hero.title}
        titleAccent={page.hero.titleAccent}
        description={page.hero.description}
        imageSrc={page.hero.imageSrc}
        imageAlt="Paver contractors and services in Charlotte, NC"
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
        intro={page.overview.intro}
        imageSrc={page.overview.imageSrc}
        imageAlt="Paver services for Charlotte homes"
      />
      <ServiceFeatureCards
        label="PAVER SERVICES"
        title="Paver Services We"
        titleAccent="Provide"
        items={page.overview.services}
      />
      <ServiceSplitSection
        id={page.applications.id}
        label={page.applications.label}
        title={page.applications.title}
        titleAccent={page.applications.titleAccent}
        intro={page.applications.intro}
        bullets={page.applications.items}
        imageSrc={page.applications.imageSrc}
        imageAlt="What you can build with pavers"
        reverse
      />
      <ServiceOptionsGrid
        id={page.paverTypes.id}
        label={page.paverTypes.label}
        title={page.paverTypes.title}
        titleAccent={page.paverTypes.titleAccent}
        intro={page.paverTypes.intro}
        items={page.paverTypes.items}
      />
      <ServiceSplitSection
        id={page.installation.id}
        label={page.installation.label}
        title={page.installation.title}
        titleAccent={page.installation.titleAccent}
        intro={page.installation.intro}
        bullets={page.installation.steps}
        imageSrc={page.installation.imageSrc}
        imageAlt="Professional paver installation process"
      />
      <ServiceSplitSection
        label={page.cost.label}
        title={page.cost.title}
        titleAccent={page.cost.titleAccent}
        intro={page.cost.intro}
        bullets={page.cost.factors}
        imageSrc={page.cost.imageSrc}
        imageAlt="Paver installation cost factors in Charlotte"
        reverse
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
        ctaLabel="Request a Paver Estimate"
      />
      <ServiceSplitSection
        label={page.planning.label}
        title={page.planning.title}
        titleAccent={page.planning.titleAccent}
        intro={page.planning.intro}
        imageSrc={page.planning.imageSrc}
        imageAlt="Planning a paver project in Charlotte"
      />
      <ServiceContentBlock
        label="PLANNING DETAILS"
        title="Key Planning"
        titleAccent="Considerations"
        cards={page.planning.considerations}
      />
      <MaterialComparisonTable
        id={page.comparison.id}
        label={page.comparison.label}
        title={page.comparison.title}
        titleAccent={page.comparison.titleAccent}
        headers={page.comparison.headers}
        rows={page.comparison.rows}
        note={page.comparison.note}
      />
      <ServiceContentBlock
        label={page.whyChoose.label}
        title={page.whyChoose.title}
        titleAccent={page.whyChoose.titleAccent}
        cards={page.whyChoose.items}
      />
      <ServiceAreas />
      <BenefitsMarquee />
      <ServiceContentBlock
        label={page.fitCheck.label}
        title={page.fitCheck.title}
        titleAccent={page.fitCheck.titleAccent}
        intro={page.fitCheck.intro}
        items={page.fitCheck.items}
        note={page.fitCheck.note}
      />
      <FAQ
        items={page.faqs}
        title={
          <>
            Paver Questions, <span className="text-accent">Answered</span>
          </>
        }
        description="Common questions about paver contractors, installation, materials, cost, and maintenance in Charlotte."
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

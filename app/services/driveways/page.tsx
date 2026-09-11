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
import { drivewaysPage as page } from "@/data/driveways-page";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
};

export default function DrivewaysPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicePageHero
        label={page.hero.label}
        title={page.hero.title}
        titleAccent={page.hero.titleAccent}
        description={page.hero.description}
        imageSrc={page.hero.imageSrc}
        imageAlt="Driveway contractors and installation in Charlotte, NC"
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
        imageAlt="Driveway services for Charlotte properties"
      />
      <ServiceFeatureCards
        label="DRIVEWAY SERVICES"
        title="Driveway Services We"
        titleAccent="Provide"
        intro={page.overview.intro}
        items={page.overview.services}
        note={page.overview.note}
      />
      <ServiceOptionsGrid
        id={page.drivewayTypes.id}
        label={page.drivewayTypes.label}
        title={page.drivewayTypes.title}
        titleAccent={page.drivewayTypes.titleAccent}
        intro={page.drivewayTypes.intro}
        items={page.drivewayTypes.items}
      />
      <ServiceContentBlock
        label={page.considerations.label}
        title={page.considerations.title}
        titleAccent={page.considerations.titleAccent}
        intro={page.considerations.intro}
        cards={page.considerations.items}
      />
      <ServiceSplitSection
        id={page.installation.id}
        label={page.installation.label}
        title={page.installation.title}
        titleAccent={page.installation.titleAccent}
        intro={page.installation.intro}
        bullets={page.installation.steps}
        imageSrc={page.installation.imageSrc}
        imageAlt="Driveway installation process"
        reverse
      />
      <ServiceContentBlock
        label={page.preparation.label}
        title={page.preparation.title}
        titleAccent={page.preparation.titleAccent}
        intro={page.preparation.intro}
        cards={page.preparation.items}
        note={page.preparation.note}
      />
      <ServiceSplitSection
        label={page.cost.label}
        title={page.cost.title}
        titleAccent={page.cost.titleAccent}
        intro={page.cost.intro}
        bullets={page.cost.factors}
        imageSrc={page.cost.imageSrc}
        imageAlt="Driveway installation cost factors in Charlotte"
      />
      <ServiceSplitSection
        label={page.replaceWhen.label}
        title={page.replaceWhen.title}
        titleAccent={page.replaceWhen.titleAccent}
        intro={page.replaceWhen.intro}
        bullets={page.replaceWhen.items}
        imageSrc={page.replaceWhen.imageSrc}
        imageAlt="When to replace an existing driveway"
        reverse
      />
      <ServiceContentBlock
        label={page.design.label}
        title={page.design.title}
        titleAccent={page.design.titleAccent}
        intro={page.design.intro}
        cards={page.design.items}
      />
      <ServiceSplitSection
        label={page.planning.label}
        title={page.planning.title}
        titleAccent={page.planning.titleAccent}
        paragraphs={page.planning.paragraphs}
        imageSrc={page.planning.imageSrc}
        imageAlt="Planning a driveway in Charlotte, NC"
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
        cards={page.whyChoose.items.map(({ title, description }) => ({
          title,
          description,
        }))}
      />
      <ServiceSplitSection
        label={page.projectTypes.label}
        title={page.projectTypes.title}
        titleAccent={page.projectTypes.titleAccent}
        bullets={page.projectTypes.items}
        imageSrc={page.projectTypes.imageSrc}
        imageAlt="Driveway projects we can help with"
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
        ctaLabel="Request a Driveway Estimate"
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
            Driveway Questions, <span className="text-accent">Answered</span>
          </>
        }
        description="Common questions about driveway installation, materials, timelines, and replacement in Charlotte."
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
        secondaryCta={page.cta.secondaryCta}
      />
      <Footer />
    </main>
  );
}

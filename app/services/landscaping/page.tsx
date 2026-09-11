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
import { landscapingPage as page } from "@/data/landscaping-page";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
};

export default function LandscapingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicePageHero
        label={page.hero.label}
        title={page.hero.title}
        titleAccent={page.hero.titleAccent}
        description={page.hero.description}
        imageSrc={page.hero.imageSrc}
        imageAlt="Landscaping company and contractor in Charlotte, NC"
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
        imageAlt="Landscaping services for Charlotte properties"
      />
      <ServiceOptionsGrid
        id={page.services.id}
        label={page.services.label}
        title={page.services.title}
        titleAccent={page.services.titleAccent}
        intro={page.services.intro}
        items={page.services.items}
      />
      <ServiceSplitSection
        id={page.hardscape.id}
        label={page.hardscape.label}
        title={page.hardscape.title}
        titleAccent={page.hardscape.titleAccent}
        paragraphs={page.hardscape.paragraphs}
        imageSrc={page.hardscape.imageSrc}
        imageAlt="Landscaping that works with hardscape"
        reverse
      />
      <ServiceContentBlock
        label={page.buildFit.label}
        title={page.buildFit.title}
        titleAccent={page.buildFit.titleAccent}
        intro={page.buildFit.intro}
        cards={page.buildFit.items}
      />
      <ServiceSplitSection
        label={page.installation.label}
        title={page.installation.title}
        titleAccent={page.installation.titleAccent}
        intro={page.installation.intro}
        bullets={page.installation.steps}
        imageSrc={page.installation.imageSrc}
        imageAlt="What is involved in a landscaping project"
      />
      <ServiceSplitSection
        label={page.cost.label}
        title={page.cost.title}
        titleAccent={page.cost.titleAccent}
        intro={page.cost.intro}
        bullets={page.cost.factors}
        imageSrc={page.cost.imageSrc}
        imageAlt="Landscaping services cost in Charlotte"
        reverse
      />
      <ServiceSplitSection
        label={page.signs.label}
        title={page.signs.title}
        titleAccent={page.signs.titleAccent}
        intro={page.signs.intro}
        bullets={page.signs.items}
        note={page.signs.note}
        imageSrc={page.signs.imageSrc}
        imageAlt="Signs your property may need landscaping"
      />
      <ServiceSplitSection
        label={page.charlotte.label}
        title={page.charlotte.title}
        titleAccent={page.charlotte.titleAccent}
        paragraphs={page.charlotte.paragraphs}
        imageSrc={page.charlotte.imageSrc}
        imageAlt="Landscaping for Charlotte outdoor spaces"
        reverse
      />
      <ServiceSplitSection
        id={page.lowMaintenance.id}
        label={page.lowMaintenance.label}
        title={page.lowMaintenance.title}
        titleAccent={page.lowMaintenance.titleAccent}
        intro={page.lowMaintenance.intro}
        bullets={page.lowMaintenance.items}
        imageSrc={page.lowMaintenance.imageSrc}
        imageAlt="Low-maintenance landscaping options"
      />
      <ServiceContentBlock
        label={page.whyChoose.label}
        title={page.whyChoose.title}
        titleAccent={page.whyChoose.titleAccent}
        cards={page.whyChoose.items}
      />
      <ServiceSplitSection
        label={page.projectTypes.label}
        title={page.projectTypes.title}
        titleAccent={page.projectTypes.titleAccent}
        bullets={page.projectTypes.items}
        imageSrc={page.projectTypes.imageSrc}
        imageAlt="Landscaping projects we can help with"
        reverse
      />
      <ServiceContentBlock
        label={page.fitCheck.label}
        title={page.fitCheck.title}
        titleAccent={page.fitCheck.titleAccent}
        intro={page.fitCheck.intro}
        cards={page.fitCheck.items}
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
        ctaLabel="Request an Estimate"
      />
      <ServiceAreas />
      <BenefitsMarquee />
      <FAQ
        items={page.faqs}
        title={
          <>
            Landscaping Questions,{" "}
            <span className="text-accent">Answered</span>
          </>
        }
        description="Common questions about landscaping services, cost, sod vs turf, maintenance, and combining work with hardscaping in Charlotte."
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

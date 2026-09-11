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
import { fencesWaterPage as page } from "@/data/fences-water-page";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
};

export default function FencesWaterPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicePageHero
        label={page.hero.label}
        title={page.hero.title}
        titleAccent={page.hero.titleAccent}
        description={page.hero.description}
        imageSrc={page.hero.imageSrc}
        imageAlt="Fence installation and water features in Charlotte, NC"
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
        imageAlt="Fencing and water features"
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
        label={page.fenceInstall.label}
        title={page.fenceInstall.title}
        titleAccent={page.fenceInstall.titleAccent}
        paragraphs={page.fenceInstall.paragraphs}
        imageSrc={page.fenceInstall.imageSrc}
        imageAlt="Fence installation in Charlotte, NC"
        reverse
      />
      <ServiceContentBlock
        id={page.fenceTypes.id}
        label={page.fenceTypes.label}
        title={page.fenceTypes.title}
        titleAccent={page.fenceTypes.titleAccent}
        intro={page.fenceTypes.intro}
        cards={page.fenceTypes.items}
      />
      <ServiceSplitSection
        id={page.privacy.id}
        label={page.privacy.label}
        title={page.privacy.title}
        titleAccent={page.privacy.titleAccent}
        paragraphs={page.privacy.paragraphs}
        imageSrc={page.privacy.imageSrc}
        imageAlt="Privacy fencing for backyards"
      />
      <ServiceSplitSection
        label={page.complements.label}
        title={page.complements.title}
        titleAccent={page.complements.titleAccent}
        paragraphs={page.complements.paragraphs}
        imageSrc={page.complements.imageSrc}
        imageAlt="Fencing that complements landscaping and hardscaping"
        reverse
      />
      <ServiceSplitSection
        label={page.installation.label}
        title={page.installation.title}
        titleAccent={page.installation.titleAccent}
        intro={page.installation.intro}
        bullets={page.installation.steps}
        imageSrc={page.installation.imageSrc}
        imageAlt="What is involved in fence installation"
      />
      <ServiceSplitSection
        label={page.cost.label}
        title={page.cost.title}
        titleAccent={page.cost.titleAccent}
        intro={page.cost.intro}
        bullets={page.cost.factors}
        imageSrc={page.cost.imageSrc}
        imageAlt="Fence installation cost in Charlotte"
        reverse
      />
      <ServiceSplitSection
        id={page.waterFeatures.id}
        label={page.waterFeatures.label}
        title={page.waterFeatures.title}
        titleAccent={page.waterFeatures.titleAccent}
        paragraphs={page.waterFeatures.paragraphs}
        imageSrc={page.waterFeatures.imageSrc}
        imageAlt="Water features and ponds"
      />
      <ServiceContentBlock
        label={page.planning.label}
        title={page.planning.title}
        titleAccent={page.planning.titleAccent}
        intro={page.planning.intro}
        cards={page.planning.items}
      />
      <ServiceSplitSection
        label={page.signs.label}
        title={page.signs.title}
        titleAccent={page.signs.titleAccent}
        intro={page.signs.intro}
        bullets={page.signs.items}
        imageSrc={page.signs.imageSrc}
        imageAlt="Signs you may need a new fence"
        reverse
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
        imageAlt="Fence and water feature projects"
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
        ctaLabel="Request a Fence Estimate"
      />
      <ServiceAreas />
      <BenefitsMarquee />
      <FAQ
        items={page.faqs}
        title={
          <>
            Fence & Water Feature Questions,{" "}
            <span className="text-accent">Answered</span>
          </>
        }
        description="Common questions about fence installation, privacy fencing, water features, ponds, and estimates in Charlotte."
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

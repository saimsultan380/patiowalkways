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
import { outdoorLivingPage as page } from "@/data/outdoor-living-page";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
};

export default function OutdoorLivingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicePageHero
        label={page.hero.label}
        title={page.hero.title}
        titleAccent={page.hero.titleAccent}
        description={page.hero.description}
        imageSrc={page.hero.imageSrc}
        imageAlt="Outdoor living features in Charlotte, NC"
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
        showFeaturesInterest
      />
      <ServiceSplitSection
        label={page.overview.label}
        title={page.overview.title}
        titleAccent={page.overview.titleAccent}
        paragraphs={page.overview.paragraphs}
        imageSrc={page.overview.imageSrc}
        imageAlt="Outdoor living features for Charlotte homes"
      />
      <ServiceOptionsGrid
        id={page.features.id}
        label={page.features.label}
        title={page.features.title}
        titleAccent={page.features.titleAccent}
        intro={page.features.intro}
        items={page.features.items}
      />
      <ServiceSplitSection
        label={page.lifestyle.label}
        title={page.lifestyle.title}
        titleAccent={page.lifestyle.titleAccent}
        paragraphs={page.lifestyle.paragraphs}
        imageSrc={page.lifestyle.imageSrc}
        imageAlt="Backyard designed for how you live"
        reverse
      />
      <ServiceSplitSection
        id={page.outdoorKitchen.id}
        label={page.outdoorKitchen.label}
        title={page.outdoorKitchen.title}
        titleAccent={page.outdoorKitchen.titleAccent}
        intro={page.outdoorKitchen.intro}
        bullets={page.outdoorKitchen.bullets}
        note={page.outdoorKitchen.note}
        imageSrc={page.outdoorKitchen.imageSrc}
        imageAlt="Outdoor kitchen design and installation in Charlotte"
      />
      <ServiceSplitSection
        label={page.grillsBars.label}
        title={page.grillsBars.title}
        titleAccent={page.grillsBars.titleAccent}
        paragraphs={page.grillsBars.paragraphs}
        imageSrc={page.grillsBars.imageSrc}
        imageAlt="Built-in grills and outdoor bars"
        reverse
      />
      <ServiceOptionsGrid
        id={page.fireFeatures.id}
        label={page.fireFeatures.label}
        title={page.fireFeatures.title}
        titleAccent={page.fireFeatures.titleAccent}
        intro={page.fireFeatures.intro}
        items={page.fireFeatures.items}
        note={page.fireFeatures.note}
      />
      <ServiceOptionsGrid
        label={page.structures.label}
        title={page.structures.title}
        titleAccent={page.structures.titleAccent}
        intro={page.structures.intro}
        items={page.structures.items}
      />
      <ServiceSplitSection
        label={page.decks.label}
        title={page.decks.title}
        titleAccent={page.decks.titleAccent}
        paragraphs={page.decks.paragraphs}
        imageSrc={page.decks.imageSrc}
        imageAlt="Deck design and installation in Charlotte"
      />
      <ServiceContentBlock
        label={page.planningGuide.label}
        title={page.planningGuide.title}
        titleAccent={page.planningGuide.titleAccent}
        intro={page.planningGuide.intro}
        cards={page.planningGuide.items}
      />
      <ServiceSplitSection
        label={page.combinations.label}
        title={page.combinations.title}
        titleAccent={page.combinations.titleAccent}
        intro={page.combinations.intro}
        bullets={page.combinations.items}
        imageSrc={page.combinations.imageSrc}
        imageAlt="Connected outdoor living space combinations"
        reverse
      />
      <ServiceSplitSection
        label={page.installation.label}
        title={page.installation.title}
        titleAccent={page.installation.titleAccent}
        intro={page.installation.intro}
        bullets={page.installation.steps}
        imageSrc={page.installation.imageSrc}
        imageAlt="Building an outdoor living space"
      />
      <ServiceSplitSection
        label={page.cost.label}
        title={page.cost.title}
        titleAccent={page.cost.titleAccent}
        intro={page.cost.intro}
        bullets={page.cost.factors}
        imageSrc={page.cost.imageSrc}
        imageAlt="Outdoor living space cost in Charlotte"
        reverse
      />
      <ServiceSplitSection
        label={page.charlottePlanning.label}
        title={page.charlottePlanning.title}
        titleAccent={page.charlottePlanning.titleAccent}
        intro={page.charlottePlanning.intro}
        imageSrc={page.charlottePlanning.imageSrc}
        imageAlt="Planning outdoor living in Charlotte, NC"
      />
      <ServiceContentBlock
        label="PLANNING DETAILS"
        title="Key Charlotte"
        titleAccent="Considerations"
        cards={page.charlottePlanning.considerations}
      />
      <ServiceSplitSection
        label={page.enjoyMore.label}
        title={page.enjoyMore.title}
        titleAccent={page.enjoyMore.titleAccent}
        paragraphs={page.enjoyMore.paragraphs}
        imageSrc={page.enjoyMore.imageSrc}
        imageAlt="Outdoor space you can enjoy more often"
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
        imageAlt="Outdoor living projects we can help with"
      />
      <ServiceSplitSection
        label={page.hardscapeConnect.label}
        title={page.hardscapeConnect.title}
        titleAccent={page.hardscapeConnect.titleAccent}
        paragraphs={page.hardscapeConnect.paragraphs}
        imageSrc={page.hardscapeConnect.imageSrc}
        imageAlt="Connect outdoor living with hardscaping"
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
        ctaLabel="Plan My Outdoor Living Space"
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
            Outdoor Living Questions,{" "}
            <span className="text-accent">Answered</span>
          </>
        }
        description="Common questions about outdoor kitchens, fire features, pergolas, gazebos, decks, and project estimates in Charlotte."
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

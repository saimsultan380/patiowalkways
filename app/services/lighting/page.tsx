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
import { lightingPage as page } from "@/data/lighting-page";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
};

export default function LightingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicePageHero
        label={page.hero.label}
        title={page.hero.title}
        titleAccent={page.hero.titleAccent}
        description={page.hero.description}
        imageSrc={page.hero.imageSrc}
        imageAlt="Outdoor lighting, drainage, and grading in Charlotte, NC"
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
        imageAlt="Lighting and utility services for Charlotte properties"
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
        id={page.landscapeLighting.id}
        label={page.landscapeLighting.label}
        title={page.landscapeLighting.title}
        titleAccent={page.landscapeLighting.titleAccent}
        intro={page.landscapeLighting.intro}
        bullets={page.landscapeLighting.bullets}
        note={page.landscapeLighting.note}
        imageSrc={page.landscapeLighting.imageSrc}
        imageAlt="Landscape lighting for Charlotte outdoor spaces"
        reverse
      />
      <ServiceSplitSection
        label={page.ledLighting.label}
        title={page.ledLighting.title}
        titleAccent={page.ledLighting.titleAccent}
        paragraphs={page.ledLighting.paragraphs}
        imageSrc={page.ledLighting.imageSrc}
        imageAlt="LED lighting for landscapes and outdoor areas"
      />
      <ServiceSplitSection
        label={page.irrigation.label}
        title={page.irrigation.title}
        titleAccent={page.irrigation.titleAccent}
        paragraphs={page.irrigation.paragraphs}
        imageSrc={page.irrigation.imageSrc}
        imageAlt="Irrigation systems for lawns and landscapes"
        reverse
      />
      <ServiceSplitSection
        id={page.drainage.id}
        label={page.drainage.label}
        title={page.drainage.title}
        titleAccent={page.drainage.titleAccent}
        intro={page.drainage.intro}
        bullets={page.drainage.signs}
        note={page.drainage.note}
        imageSrc={page.drainage.imageSrc}
        imageAlt="Drainage solutions for Charlotte properties"
      />
      <ServiceSplitSection
        id={page.grading.id}
        label={page.grading.label}
        title={page.grading.title}
        titleAccent={page.grading.titleAccent}
        paragraphs={page.grading.paragraphs}
        imageSrc={page.grading.imageSrc}
        imageAlt="Grading services for outdoor water management"
        reverse
      />
      <ServiceSplitSection
        label={page.gradingDrainage.label}
        title={page.gradingDrainage.title}
        titleAccent={page.gradingDrainage.titleAccent}
        paragraphs={page.gradingDrainage.paragraphs}
        imageSrc={page.gradingDrainage.imageSrc}
        imageAlt="Why proper grading matters for drainage"
      />
      <ServiceSplitSection
        label={page.integrateLighting.label}
        title={page.integrateLighting.title}
        titleAccent={page.integrateLighting.titleAccent}
        paragraphs={page.integrateLighting.paragraphs}
        imageSrc={page.integrateLighting.imageSrc}
        imageAlt="Integrate lighting with hardscape design"
        reverse
      />
      <ServiceSplitSection
        label={page.planDrainage.label}
        title={page.planDrainage.title}
        titleAccent={page.planDrainage.titleAccent}
        paragraphs={page.planDrainage.paragraphs}
        imageSrc={page.planDrainage.imageSrc}
        imageAlt="Plan drainage around hardscaping"
      />
      <ServiceSplitSection
        label={page.installation.label}
        title={page.installation.title}
        titleAccent={page.installation.titleAccent}
        intro={page.installation.intro}
        bullets={page.installation.steps}
        imageSrc={page.installation.imageSrc}
        imageAlt="Lighting, drainage, or grading work process"
        reverse
      />
      <ServiceSplitSection
        label={page.cost.label}
        title={page.cost.title}
        titleAccent={page.cost.titleAccent}
        intro={page.cost.intro}
        bullets={page.cost.factors}
        imageSrc={page.cost.imageSrc}
        imageAlt="Cost of lighting, drainage, and grading services"
      />
      <ServiceSplitSection
        label={page.drainageSigns.label}
        title={page.drainageSigns.title}
        titleAccent={page.drainageSigns.titleAccent}
        intro={page.drainageSigns.intro}
        bullets={page.drainageSigns.items}
        imageSrc={page.drainageSigns.imageSrc}
        imageAlt="Signs your property may need better drainage or grading"
        reverse
      />
      <ServiceSplitSection
        label={page.planning.label}
        title={page.planning.title}
        titleAccent={page.planning.titleAccent}
        intro={page.planning.intro}
        imageSrc={page.planning.imageSrc}
        imageAlt="Planning outdoor lighting, drainage, and grading in Charlotte"
      />
      <ServiceContentBlock
        label="PLANNING DETAILS"
        title="Key Charlotte"
        titleAccent="Considerations"
        cards={page.planning.considerations}
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
        imageAlt="Outdoor lighting and utility projects"
        reverse
      />
      <ServiceContentBlock
        label={page.fitCheck.label}
        title={page.fitCheck.title}
        titleAccent={page.fitCheck.titleAccent}
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
            Lighting & Utility Questions,{" "}
            <span className="text-accent">Answered</span>
          </>
        }
        description="Common questions about landscape lighting, irrigation, drainage, grading, and estimates in Charlotte."
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

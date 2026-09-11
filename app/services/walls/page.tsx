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
import { wallsPage as page } from "@/data/walls-page";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
};

export default function WallsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicePageHero
        label={page.hero.label}
        title={page.hero.title}
        titleAccent={page.hero.titleAccent}
        description={page.hero.description}
        imageSrc={page.hero.imageSrc}
        imageAlt="Retaining walls and structural features in Charlotte, NC"
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
        showWallSize
      />
      <ServiceSplitSection
        label={page.overview.label}
        title={page.overview.title}
        titleAccent={page.overview.titleAccent}
        intro={page.overview.intro}
        imageSrc={page.overview.imageSrc}
        imageAlt="Walls and structural services for Charlotte properties"
      />
      <ServiceFeatureCards
        label="STRUCTURAL FEATURES"
        title="Often Planned Alongside a"
        titleAccent="Retaining Wall"
        intro={page.overview.companionIntro}
        items={page.overview.companions}
      />
      <ServiceSplitSection
        label={page.needWall.label}
        title={page.needWall.title}
        titleAccent={page.needWall.titleAccent}
        intro={page.needWall.intro}
        bullets={page.needWall.items}
        note={page.needWall.note}
        imageSrc={page.needWall.imageSrc}
        imageAlt="When a property needs a retaining wall"
        reverse
      />
      <ServiceOptionsGrid
        id={page.wallTypes.id}
        label={page.wallTypes.label}
        title={page.wallTypes.title}
        titleAccent={page.wallTypes.titleAccent}
        intro={page.wallTypes.intro}
        items={page.wallTypes.items}
      />
      <ServiceSplitSection
        id={page.drainage.id}
        label={page.drainage.label}
        title={page.drainage.title}
        titleAccent={page.drainage.titleAccent}
        paragraphs={page.drainage.paragraphs}
        imageSrc={page.drainage.imageSrc}
        imageAlt="Why drainage matters behind a retaining wall"
      />
      <ServiceSplitSection
        id={page.installation.id}
        label={page.installation.label}
        title={page.installation.title}
        titleAccent={page.installation.titleAccent}
        intro={page.installation.intro}
        bullets={page.installation.steps}
        imageSrc={page.installation.imageSrc}
        imageAlt="Retaining wall installation process"
        reverse
      />
      <ServiceSplitSection
        label={page.cost.label}
        title={page.cost.title}
        titleAccent={page.cost.titleAccent}
        intro={page.cost.intro}
        bullets={page.cost.factors}
        imageSrc={page.cost.imageSrc}
        imageAlt="Retaining wall cost factors in Charlotte"
      />
      <ServiceSplitSection
        label={page.replaceWhen.label}
        title={page.replaceWhen.title}
        titleAccent={page.replaceWhen.titleAccent}
        intro={page.replaceWhen.intro}
        bullets={page.replaceWhen.items}
        imageSrc={page.replaceWhen.imageSrc}
        imageAlt="When to replace a retaining wall"
        reverse
      />
      <ServiceSplitSection
        label={page.planning.label}
        title={page.planning.title}
        titleAccent={page.planning.titleAccent}
        paragraphs={page.planning.paragraphs}
        imageSrc={page.planning.imageSrc}
        imageAlt="Planning a retaining wall in Charlotte, NC"
      />
      <ServiceContentBlock
        label={page.whyChoose.label}
        title={page.whyChoose.title}
        titleAccent={page.whyChoose.titleAccent}
        cards={page.whyChoose.items}
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
        ctaLabel="Request a Retaining Wall Estimate"
      />
      <ServiceAreas />
      <BenefitsMarquee />
      <FAQ
        items={page.faqs}
        title={
          <>
            Retaining Wall Questions,{" "}
            <span className="text-accent">Answered</span>
          </>
        }
        description="Common questions about retaining wall installation, drainage, materials, timelines, and replacement in Charlotte."
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

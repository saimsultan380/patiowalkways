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
import { commercialPage as page } from "@/data/commercial-page";

export const metadata: Metadata = {
  title: page.meta.title,
  description: page.meta.description,
};

export default function CommercialPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicePageHero
        label={page.hero.label}
        title={page.hero.title}
        titleAccent={page.hero.titleAccent}
        description={page.hero.description}
        imageSrc={page.hero.imageSrc}
        imageAlt="Commercial hardscaping and landscaping in Charlotte, NC"
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
        showCompany
        showPropertyType
      />
      <ServiceSplitSection
        label={page.overview.label}
        title={page.overview.title}
        titleAccent={page.overview.titleAccent}
        paragraphs={page.overview.paragraphs}
        imageSrc={page.overview.imageSrc}
        imageAlt="Commercial hardscaping and landscaping services"
      />
      <ServiceSplitSection
        id={page.hardscaping.id}
        label={page.hardscaping.label}
        title={page.hardscaping.title}
        titleAccent={page.hardscaping.titleAccent}
        paragraphs={page.hardscaping.paragraphs}
        imageSrc={page.hardscaping.imageSrc}
        imageAlt="Commercial hardscaping for professional properties"
        reverse
      />
      <ServiceOptionsGrid
        label="HARDSCAPING SERVICES"
        title="Related Commercial Hardscaping"
        titleAccent="Services"
        intro={page.hardscaping.servicesIntro}
        items={page.hardscaping.services}
      />
      <ServiceSplitSection
        id={page.landscaping.id}
        label={page.landscaping.label}
        title={page.landscaping.title}
        titleAccent={page.landscaping.titleAccent}
        paragraphs={page.landscaping.paragraphs}
        imageSrc={page.landscaping.imageSrc}
        imageAlt="Commercial landscaping for property appearance"
      />
      <ServiceOptionsGrid
        label="LANDSCAPING SERVICES"
        title="Related Commercial Landscaping"
        titleAccent="Services"
        intro={page.landscaping.servicesIntro}
        items={page.landscaping.services}
      />
      <ServiceSplitSection
        id={page.outdoorSpaces.id}
        label={page.outdoorSpaces.label}
        title={page.outdoorSpaces.title}
        titleAccent={page.outdoorSpaces.titleAccent}
        paragraphs={page.outdoorSpaces.paragraphs}
        imageSrc={page.outdoorSpaces.imageSrc}
        imageAlt="Commercial outdoor spaces for customers and employees"
        reverse
      />
      <ServiceSplitSection
        label={page.cohesive.label}
        title={page.cohesive.title}
        titleAccent={page.cohesive.titleAccent}
        intro={page.cohesive.intro}
        bullets={page.cohesive.items}
        imageSrc={page.cohesive.imageSrc}
        imageAlt="Designing a cohesive commercial property"
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
        ctaLabel="Request a Commercial Estimate"
      />
      <ServiceSplitSection
        label={page.cost.label}
        title={page.cost.title}
        titleAccent={page.cost.titleAccent}
        intro={page.cost.intro}
        bullets={page.cost.factors}
        imageSrc={page.cost.imageSrc}
        imageAlt="Commercial landscaping and hardscaping cost"
        reverse
      />
      <ServiceContentBlock
        label={page.considerations.label}
        title={page.considerations.title}
        titleAccent={page.considerations.titleAccent}
        intro={page.considerations.intro}
        cards={page.considerations.items}
      />
      <ServiceSplitSection
        label={page.charlotte.label}
        title={page.charlotte.title}
        titleAccent={page.charlotte.titleAccent}
        paragraphs={page.charlotte.paragraphs}
        imageSrc={page.charlotte.imageSrc}
        imageAlt="Commercial landscaping and hardscaping in Charlotte"
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
        intro={page.projectTypes.intro}
        bullets={page.projectTypes.items}
        imageSrc={page.projectTypes.imageSrc}
        imageAlt="Commercial project types"
        reverse
      />
      <ServiceAreas />
      <BenefitsMarquee />
      <FAQ
        items={page.faqs}
        title={
          <>
            Commercial Project Questions,{" "}
            <span className="text-accent">Answered</span>
          </>
        }
        description="Common questions about commercial hardscaping, landscaping, outdoor spaces, and estimates in Charlotte."
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

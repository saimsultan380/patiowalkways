import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StatsMarquee from "@/components/sections/StatsMarquee";
import BookForm from "@/components/sections/BookForm";
import ServiceAreas from "@/components/sections/ServiceAreas";
import HowItWorks from "@/components/sections/HowItWorks";
import BenefitsMarquee from "@/components/sections/BenefitsMarquee";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import ServicesHero from "@/components/sections/services/ServicesHero";
import DetailedServicesList from "@/components/sections/services/DetailedServicesList";
import ServicesWhyChoose from "@/components/sections/services/ServicesWhyChoose";
import MaterialsSection from "@/components/sections/services/MaterialsSection";
import PropertyTypes from "@/components/sections/services/PropertyTypes";
import {
  servicesSteps,
  servicesTestimonials,
  servicesFaqs,
  servicesCta,
} from "@/data/services-page";

export const metadata: Metadata = {
  title: "Hardscaping & Landscaping Services Charlotte | PatioLiving",
  description:
    "Complete hardscaping and landscaping services in Charlotte — patios, pavers, driveways, outdoor living, lighting, drainage, fencing, and commercial outdoor solutions.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicesHero />
      <StatsMarquee />
      <BookForm />
      <DetailedServicesList />
      <ServicesWhyChoose />
      <HowItWorks
        label="HOW WE BRING YOUR VISION TO LIFE"
        title={
          <>
            How We Bring Your Outdoor Vision{" "}
            <span className="text-accent">to Life</span>
          </>
        }
        description="A clear process from consultation to final walkthrough, so every outdoor project stays organized and results-focused."
        items={servicesSteps}
        ctaLabel="Start Planning Your Project"
      />
      <MaterialsSection />
      <PropertyTypes />
      <ServiceAreas />
      <BenefitsMarquee />
      <Testimonials
        items={servicesTestimonials}
        title={
          <>
            What Our <span className="text-accent">Customers Say</span>
          </>
        }
      />
      <FAQ
        items={servicesFaqs}
        title={
          <>
            Service Questions, <span className="text-accent">Answered</span>
          </>
        }
        description="Common questions about combining services, materials, outdoor living features, drainage, and landscaping with hardscaping."
      />
      <CTASection
        label={servicesCta.label}
        title={
          <>
            {servicesCta.title}{" "}
            <span className="text-stone">{servicesCta.titleAccent}</span>
          </>
        }
        description={servicesCta.description}
        primaryCta={servicesCta.primaryCta}
        secondaryCta={servicesCta.secondaryCta}
      />
      <Footer />
    </main>
  );
}

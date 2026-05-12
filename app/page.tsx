import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsMarquee from "@/components/sections/StatsMarquee";
import ServicesGrid from "@/components/sections/ServicesGrid";
import StatementBanner from "@/components/sections/StatementBanner";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import ProjectGallery from "@/components/sections/ProjectGallery";
import ServiceAreas from "@/components/sections/ServiceAreas";
import WhatIsIncluded from "@/components/sections/WhatIsIncluded";
import BenefitsMarquee from "@/components/sections/BenefitsMarquee";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsMarquee />
      <ServicesGrid />
      <StatementBanner />
      <WhyChooseUs />
      <HowItWorks />
      <ProjectGallery />
      <ServiceAreas />
      <WhatIsIncluded />
      <BenefitsMarquee />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}

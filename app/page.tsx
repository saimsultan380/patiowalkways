import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsMarquee from "@/components/sections/StatsMarquee";
import BookForm from "@/components/sections/BookForm";
import ServicesGrid from "@/components/sections/ServicesGrid";
import StatementBanner from "@/components/sections/StatementBanner";
import ServiceAreas from "@/components/sections/ServiceAreas";
import WhatIsIncluded from "@/components/sections/WhatIsIncluded";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import ProjectGallery from "@/components/sections/ProjectGallery";
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
      <BookForm />
      <ServicesGrid />
      <ServiceAreas />
      <WhatIsIncluded />
      <StatementBanner />
      <WhyChooseUs />
      <HowItWorks />
      <ProjectGallery />
      <BenefitsMarquee />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}

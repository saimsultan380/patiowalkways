import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AreasHubHero from "@/components/sections/areas/AreasHubHero";
import AreasDirectory from "@/components/sections/areas/AreasDirectory";
import CTASection from "@/components/sections/CTASection";
import { areasHub } from "@/data/areas";

export const metadata: Metadata = {
  title: areasHub.meta.title,
  description: areasHub.meta.description,
};

export default function AreasPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AreasHubHero />
      <AreasDirectory />
      <CTASection
        label="PLAN YOUR LOCAL PROJECT"
        title={
          <>
            Ready to improve your{" "}
            <span className="text-stone">outdoor space?</span>
          </>
        }
        description="Tell us where your property is and what you want to build. We'll follow up with a clear next step for your Charlotte-area project."
        primaryCta="Request an Estimate"
        secondaryCta="Contact Us"
      />
      <Footer />
    </main>
  );
}

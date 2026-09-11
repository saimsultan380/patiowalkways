import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactPanel from "@/components/sections/contact/ContactPanel";
import CTASection from "@/components/sections/CTASection";
import { brand } from "@/data/content";

export const metadata: Metadata = {
  title: `Contact ${brand.shortName} Hardscaping | Free Estimate Charlotte`,
  description:
    "Contact Empresa Galdamez Hardscaping for patio, driveway, wall, landscaping, and outdoor living projects in Charlotte. Call, email, or request a free estimate.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactHero />
      <ContactPanel />
      <CTASection />
      <Footer />
    </main>
  );
}

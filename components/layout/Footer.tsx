"use client";

import Image from "next/image";
import LinkNext from "next/link";
import { Globe, Phone, Mail } from "lucide-react";
import { brand } from "@/data/content";
import { detailedServices } from "@/data/services-page";
import { areaNavItems } from "@/data/areas";

const SocialIcon = ({ name }: { name: string }) => {
  const icons: Record<string, React.ReactNode> = {
    Facebook: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978 1.602 0 2.703.095 2.703.095v3.386h-1.742c-1.557 0-1.909.866-1.909 2.07v2.007h3.757l-.503 3.667h-3.254v7.981H9.101z"/>
      </svg>
    ),
    Instagram: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
    Twitter: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
    Linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  };
  return icons[name] || <Globe size={18} />;
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerServices = detailedServices.map((s) => {
    const dedicated: Record<string, string> = {
      "patios-walkways": "/services/patios-walkways",
      driveways: "/services/driveways",
      walls: "/services/walls",
      pavers: "/services/pavers",
      "outdoor-living": "/services/outdoor-living",
      lighting: "/services/lighting",
      landscaping: "/services/landscaping",
      "fences-water": "/services/fences-water",
      commercial: "/services/commercial",
    };
    return {
      name: s.name,
      href: dedicated[s.id] ?? `/services#${s.id}`,
    };
  });

  return (
    <footer className="bg-white text-primary pt-32 pb-12 overflow-hidden relative border-t border-border-subtle">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-bg-off/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">
          <div className="lg:col-span-1">
            <LinkNext href="/" className="flex items-center gap-3 mb-8 group">
              <span className="relative w-16 h-16 rounded-full overflow-hidden border border-border-subtle shadow-sm shrink-0 bg-primary">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-xl font-space font-extrabold tracking-tight text-primary group-hover:text-accent transition-colors">
                  {brand.shortName}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-secondary">
                  Hardscaping LLC
                </span>
              </span>
            </LinkNext>
            <p className="text-secondary text-sm leading-relaxed mb-10 max-w-xs font-medium">
              Transform your Charlotte property with expert patio, paver, walkway, driveway, and outdoor living services built to last.
            </p>
            <div className="flex space-x-4">
              {[
                { name: "Facebook", href: "#" },
                { name: "Instagram", href: "#" },
                { name: "Twitter", href: "#" },
                { name: "Linkedin", href: "#" },
              ].map((social, i) => (
                <LinkNext 
                  key={i} 
                  href={social.href}
                  className="w-10 h-10 rounded-[4px] border border-border-subtle flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 bg-white shadow-sm"
                >
                  <SocialIcon name={social.name} />
                </LinkNext>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-space text-base font-bold uppercase tracking-[0.2em] mb-10 text-accent">Services</h4>
            <ul className="space-y-4">
              {footerServices.map((item) => (
                <li key={item.name}>
                  <LinkNext href={item.href} className="text-secondary font-medium text-sm hover:text-accent hover:translate-x-1 inline-block transition-all duration-300">
                    {item.name}
                  </LinkNext>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-space text-base font-bold uppercase tracking-[0.2em] mb-10 text-accent">Company</h4>
            <ul className="space-y-4">
              {[
                { name: "All Services", href: "/services" },
                { name: "Contact", href: "/contact" },
                { name: "How We Work", href: "/#how-it-works" },
                { name: "Types of Patios", href: "/#patios" },
                { name: "Why Choose Us", href: "/#why-us" },
                { name: "Client Reviews", href: "/#reviews" },
                { name: "Service Areas", href: "/areas" },
                { name: "Davidson, NC", href: "/areas/davidson" },
                { name: "Denver, NC", href: "/areas/denver" },
                { name: "Huntersville, NC", href: "/areas/huntersville" },
                { name: "Monroe, NC", href: "/areas/monroe" },
                { name: "Concord, NC", href: "/areas/concord" },
              ].map((item) => (
                <li key={item.name}>
                  <LinkNext href={item.href} className="text-secondary font-medium text-sm hover:text-accent hover:translate-x-1 inline-block transition-all duration-300">
                    {item.name}
                  </LinkNext>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-space text-base font-bold uppercase tracking-[0.2em] mb-10 text-accent">Service Area</h4>
            <p className="text-secondary text-sm mb-6 font-medium">
              Serving a {brand.radius} to make travel and material logistics easier.
            </p>
            <ul className="space-y-2 mb-8">
              {areaNavItems.map((area) => (
                <li key={area.slug}>
                  <LinkNext
                    href={area.hasPage ? area.href : "/areas"}
                    className="text-secondary text-sm font-medium hover:text-accent transition-colors"
                  >
                    {area.name}
                  </LinkNext>
                </li>
              ))}
            </ul>
            
            <div className="space-y-4 pt-4">
              <a
                href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center space-x-3 text-primary/80 group"
              >
                <div className="w-8 h-8 rounded-[4px] bg-bg-off border border-border-subtle flex items-center justify-center group-hover:bg-stone transition-all duration-300">
                  <Phone size={14} className="group-hover:text-primary" />
                </div>
                <span className="text-sm font-bold group-hover:text-accent transition-colors">{brand.phone}</span>
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="flex items-center space-x-3 text-primary/80 group"
              >
                <div className="w-8 h-8 rounded-[4px] bg-bg-off border border-border-subtle flex items-center justify-center group-hover:bg-stone transition-all duration-300">
                  <Mail size={14} className="group-hover:text-primary" />
                </div>
                <span className="text-sm font-bold group-hover:text-accent transition-colors">{brand.email}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-secondary/60 text-[11px] font-bold uppercase tracking-widest">
            © {currentYear} {brand.name}. Outdoor living built for Charlotte.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
            {[
              { label: "Focus", value: "Outdoor Living" },
              { label: "Coverage", value: "60-Mile Radius" },
              { label: "Estimates", value: "Free" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent mb-1">{stat.label}</span>
                <span className="text-[11px] font-bold text-primary/80">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

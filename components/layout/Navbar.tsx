"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin, ChevronDown, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { brand } from "@/data/content";
import { serviceNavGroups } from "@/data/service-nav";
import { areaNavItems } from "@/data/areas";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileAreasOpen, setIsMobileAreasOpen] = useState(false);

  const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const areaLinks = areaNavItems.filter((area) => area.hasPage);

  const closeMobile = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileAreasOpen(false);
  };

  const closeDesktopMenus = () => {
    setIsServicesOpen(false);
    setIsAreasOpen(false);
  };

  return (
    <>
      <header className="relative z-50">
        <div className="bg-primary text-white">
          <div className="max-w-[1320px] mx-auto px-6 py-2.5 flex flex-row items-center justify-between gap-3">
            <a
              href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-[12px] font-medium text-white/90 hover:text-stone transition-colors shrink-0"
            >
              <Phone size={13} className="text-stone shrink-0" />
              <span>{brand.phone}</span>
            </a>
            <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-[12px] font-medium text-white/80 min-w-0">
              <MapPin size={13} className="text-stone shrink-0" />
              <span className="truncate">{brand.address}</span>
            </div>
          </div>
        </div>
      </header>

      <nav
        className="sticky top-0 z-50 bg-white border-b border-border-subtle py-3"
        onMouseLeave={closeDesktopMenus}
      >
        <div className="max-w-[1320px] mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-border-subtle shadow-sm shrink-0 bg-primary">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-cover"
                sizes="56px"
                priority
              />
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-base font-extrabold tracking-tight text-primary group-hover:text-accent transition-colors">
                {brand.shortName}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-secondary">
                Hardscaping
              </span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            <div
              className="relative"
              onMouseEnter={() => {
                setIsServicesOpen(true);
                setIsAreasOpen(false);
              }}
            >
              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-widest text-primary transition-colors duration-300 hover:text-accent"
                aria-expanded={isServicesOpen}
                onClick={() => {
                  setIsServicesOpen((open) => !open);
                  setIsAreasOpen(false);
                }}
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            <div
              className="relative"
              onMouseEnter={() => {
                setIsAreasOpen(true);
                setIsServicesOpen(false);
              }}
            >
              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-widest text-primary transition-colors duration-300 hover:text-accent"
                aria-expanded={isAreasOpen}
                onClick={() => {
                  setIsAreasOpen((open) => !open);
                  setIsServicesOpen(false);
                }}
              >
                Areas
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${isAreasOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isAreasOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full pt-3"
                  >
                    <div className="min-w-[220px] bg-white border border-border-subtle shadow-xl shadow-primary/5 py-2">
                      <Link
                        href="/areas"
                        onClick={closeDesktopMenus}
                        className="block px-4 py-2.5 text-sm font-bold text-accent hover:bg-bg-off transition-colors"
                      >
                        All Areas
                      </Link>
                      <div className="my-1 border-t border-border-subtle" />
                      {areaLinks.map((area) => (
                        <Link
                          key={area.slug}
                          href={area.href}
                          onClick={closeDesktopMenus}
                          className="block px-4 py-2.5 text-sm font-medium text-primary hover:bg-bg-off hover:text-accent transition-colors"
                        >
                          {area.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] font-bold uppercase tracking-widest text-primary transition-colors duration-300 hover:text-accent"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link href="/contact">
              <Button variant="accent" className="px-6 py-3">
                Get Free Estimates
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden text-primary transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>

        <AnimatePresence>
          {isServicesOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="hidden lg:block absolute left-0 right-0 top-full bg-white border-b border-border-subtle shadow-xl shadow-primary/5"
            >
              <div className="max-w-[1320px] mx-auto px-6 py-10">
                <div className="flex items-end justify-between gap-6 mb-8">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone mb-2">
                      Our Services
                    </p>
                    <h3 className="text-2xl font-space font-bold text-primary">
                      Hardscaping & Landscaping Across Charlotte
                    </h3>
                  </div>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-primary transition-colors shrink-0"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    View all services
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="grid grid-cols-4 gap-8">
                  {serviceNavGroups.map((group) => (
                    <div key={group.title}>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-stone mb-4 pb-3 border-b border-border-subtle">
                        {group.title}
                      </p>
                      <ul className="space-y-1">
                        {group.items.map((item) => (
                          <li key={`${group.title}-${item.name}`}>
                            <Link
                              href={item.href}
                              onClick={() => setIsServicesOpen(false)}
                              className="block rounded-[4px] px-3 py-2.5 -mx-3 hover:bg-bg-off transition-colors group"
                            >
                              <span className="block text-sm font-bold text-primary group-hover:text-accent transition-colors">
                                {item.name}
                              </span>
                              {item.description && (
                                <span className="block text-xs text-secondary mt-0.5 leading-snug">
                                  {item.description}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-primary flex flex-col px-6 pt-5 pb-[max(1rem,env(safe-area-inset-bottom))] sm:p-10"
          >
            <div className="flex justify-between items-center mb-8 sm:mb-12">
              <div className="flex items-center gap-3">
                <span className="relative w-11 h-11 rounded-full overflow-hidden border border-white/20 shrink-0 bg-black">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </span>
                <span className="text-lg font-extrabold text-white">{brand.shortName}</span>
              </div>
              <button onClick={closeMobile} className="text-white p-1" aria-label="Close menu">
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col space-y-4 sm:space-y-6 overflow-y-auto pr-1">
              <div>
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen((open) => !open)}
                  className="w-full flex items-center justify-between text-3xl sm:text-4xl font-playfair italic text-white hover:text-stone transition-colors"
                >
                  Services
                  <ChevronDown
                    size={28}
                    className={`transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2 space-y-5">
                        <Link
                          href="/services"
                          onClick={closeMobile}
                          className="block text-sm font-bold uppercase tracking-widest text-stone"
                        >
                          View All Services →
                        </Link>
                        {serviceNavGroups.map((group) => (
                          <div key={group.title}>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45 mb-2">
                              {group.title}
                            </p>
                            <ul className="space-y-2">
                              {group.items.map((item) => (
                                <li key={`mobile-${group.title}-${item.name}`}>
                                  <Link
                                    href={item.href}
                                    onClick={closeMobile}
                                    className="text-base text-white/85 hover:text-stone transition-colors"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setIsMobileAreasOpen((open) => !open)}
                  className="w-full flex items-center justify-between text-3xl sm:text-4xl font-playfair italic text-white hover:text-stone transition-colors"
                >
                  Areas
                  <ChevronDown
                    size={28}
                    className={`transition-transform ${isMobileAreasOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {isMobileAreasOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2 space-y-2">
                        <Link
                          href="/areas"
                          onClick={closeMobile}
                          className="block text-sm font-bold uppercase tracking-widest text-stone"
                        >
                          View All Areas →
                        </Link>
                        {areaLinks.map((area) => (
                          <Link
                            key={`mobile-area-${area.slug}`}
                            href={area.href}
                            onClick={closeMobile}
                            className="block text-base text-white/85 hover:text-stone transition-colors"
                          >
                            {area.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMobile}
                    className="text-3xl sm:text-4xl font-playfair italic text-white hover:text-stone transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-5 pb-[max(0.5rem,env(safe-area-inset-bottom))] space-y-4 border-t border-white/15">
              <div className="space-y-2.5">
                <a
                  href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`}
                  className="flex items-center gap-3 text-white/90"
                >
                  <Phone size={15} className="text-stone shrink-0" />
                  <span className="text-sm font-bold">{brand.phone}</span>
                </a>
                <div className="flex items-start gap-3 text-white/80">
                  <MapPin size={15} className="text-stone shrink-0 mt-0.5" />
                  <span className="text-sm leading-snug">{brand.address}</span>
                </div>
              </div>
              <Link href="/contact" onClick={closeMobile} className="block">
                <Button className="w-full px-4 py-2.5 text-xs tracking-wide bg-white text-primary hover:bg-stone">
                  Get Free Estimates
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

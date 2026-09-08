"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";
import { brand } from "@/data/content";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Patios", href: "/#patios" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Areas", href: "/#areas" },
    { name: "Reviews", href: "/#reviews" },
    { name: "Contact", href: "/#contact" },
  ];

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

      <nav className="sticky top-0 z-50 bg-white border-b border-border-subtle py-3">
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

            <div className="hidden lg:flex items-center space-x-10">
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
              <Button variant="accent" className="px-6 py-3" onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}>
                Get Free Estimates
              </Button>
            </div>

            <button
              className="lg:hidden text-primary transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-primary flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-3">
                <span className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 shrink-0 bg-black">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </span>
                <span className="text-xl font-extrabold text-white">{brand.shortName}</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-playfair italic text-white hover:text-stone transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 space-y-4 border-t border-white/15 pt-8">
              <a href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`} className="flex items-center gap-3 text-white/90">
                <Phone size={16} className="text-stone" />
                <span className="text-sm font-bold">{brand.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin size={16} className="text-stone" />
                <span className="text-sm">{brand.address}</span>
              </div>
            </div>

            <div className="mt-auto">
              <Button
                className="w-full py-6 text-lg bg-white text-primary"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Free Estimates
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

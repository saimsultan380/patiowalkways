"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

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
      <nav className="sticky top-0 left-0 w-full z-50 bg-white border-b border-border-subtle py-4">
        <div className="max-w-[1320px] mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold tracking-tight text-primary transition-colors duration-300">
            Patio<span className="text-accent underline decoration-stone decoration-2 underline-offset-4">Living</span>
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
              <span className="text-xl font-extrabold text-white">PatioLiving</span>
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

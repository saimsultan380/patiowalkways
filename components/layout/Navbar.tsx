"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Projects", href: "#projects" },
    { name: "Areas", href: "#areas" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 left-0 w-full z-50 bg-white border-b border-border-subtle py-4">
        <div className="max-w-[1320px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-extrabold tracking-tight text-primary transition-colors duration-300">
            Pro<span className="text-accent underline decoration-1 underline-offset-4">Craft</span>
          </Link>

          {/* Desktop Links */}
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

          {/* Right Action */}
          <div className="hidden lg:block">
            <Button className="px-6 py-3">
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-primary transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
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
              <span className="text-xl font-extrabold text-white">ProCraft</span>
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
                    className="text-4xl font-playfair italic text-white hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto">
              <Button className="w-full py-6 text-lg bg-white text-primary">
                Get Free Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

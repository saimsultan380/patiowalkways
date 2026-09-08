"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { brand, services } from "@/data/content";

export default function BookForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="book" className="py-32 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <SectionLabel>BOOK YOUR PROJECT</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-space font-bold tracking-tight mb-8"
            >
              Get Your <span className="text-accent">Free Estimate</span>
            </motion.h2>
            <p className="text-secondary text-lg leading-relaxed mb-10 max-w-lg">
              Tell us about your patio, paver, driveway, or outdoor living project. We&apos;ll review your details and follow up with a clear next step.
            </p>
            <div className="space-y-4">
              <a
                href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center space-x-4 group"
              >
                <div className="w-12 h-12 rounded-[4px] bg-primary text-white flex items-center justify-center group-hover:bg-stone group-hover:text-primary transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-muted mb-1">Call Us</p>
                  <p className="text-lg font-bold text-primary group-hover:text-accent transition-colors">{brand.phone}</p>
                </div>
              </a>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="bg-white border border-border-subtle rounded-[4px] p-8 md:p-10 shadow-sm space-y-5"
          >
            {submitted ? (
              <div className="py-16 text-center">
                <p className="text-2xl font-space font-bold mb-3">Request received</p>
                <p className="text-secondary">We&apos;ll be in touch about your outdoor project soon.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Full Name" name="name" placeholder="Your name" required />
                  <Field label="Phone" name="phone" type="tel" placeholder="(704) 555-0148" required />
                </div>
                <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-primary mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    className="w-full bg-bg-off/80 border border-border-subtle px-5 py-4 rounded-[4px] text-sm focus:outline-none focus:border-accent transition-colors"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name.replace(" Charlotte, NC", "")}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-primary mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="details"
                    rows={4}
                    placeholder="Share your ideas, property details, and outdoor goals..."
                    className="w-full bg-bg-off/80 border border-border-subtle px-5 py-4 rounded-[4px] text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                    required
                  />
                </div>
                <Button type="submit" variant="accent" className="w-full py-5">
                  Start Your Project
                </Button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[11px] font-bold uppercase tracking-widest text-primary mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full bg-bg-off/80 border border-border-subtle px-5 py-4 rounded-[4px] text-sm focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}

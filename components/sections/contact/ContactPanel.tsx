"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { brand, services } from "@/data/content";

export default function ContactPanel() {
  const [submitted, setSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: Phone,
      label: "Call",
      value: brand.phone,
      href: `tel:${brand.phone.replace(/[^\d+]/g, "")}`,
      hint: "Fastest for urgent questions",
    },
    {
      icon: Mail,
      label: "Email",
      value: brand.email,
      href: `mailto:${brand.email}`,
      hint: "Send photos or project notes",
    },
    {
      icon: MapPin,
      label: "Based in",
      value: brand.address,
      href: undefined,
      hint: `Serving a ${brand.radius}`,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-12 sm:py-16 lg:py-20 scroll-mt-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#f7f8f6_0%,#ffffff_45%,#f3f6f4_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 0% 0%, rgba(61,122,90,0.12), transparent 50%), radial-gradient(ellipse at 100% 100%, rgba(255,173,44,0.1), transparent 45%)",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5"
          >
            <SectionLabel>GET IN TOUCH</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-space font-bold tracking-tight mb-5">
              Request your{" "}
              <span className="text-accent">free estimate</span>
            </h2>
            <p className="text-secondary text-base leading-relaxed mb-8 max-w-md">
              Tell us about your patio, driveway, walls, landscaping, or outdoor
              living project. We&apos;ll review your details and follow up with
              next steps.
            </p>

            <div className="space-y-5 mb-10">
              {contactMethods.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <>
                    <div className="w-12 h-12 rounded-[4px] bg-primary text-white flex items-center justify-center shrink-0 group-hover:bg-stone group-hover:text-primary transition-colors">
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-muted mb-1">
                        {item.label}
                      </p>
                      <p className="text-base sm:text-lg font-bold text-primary group-hover:text-accent transition-colors break-words">
                        {item.value}
                      </p>
                      <p className="text-sm text-secondary mt-0.5">{item.hint}</p>
                    </div>
                    {item.href && (
                      <ArrowUpRight
                        size={16}
                        className="ml-auto text-muted group-hover:text-accent shrink-0 transition-colors"
                      />
                    )}
                  </>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-4 group"
                    >
                      {inner}
                    </a>
                  );
                }

                return (
                  <div key={item.label} className="flex items-start gap-4 group">
                    {inner}
                  </div>
                );
              })}
            </div>

            <div className="border-t border-border-subtle pt-8">
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-muted mb-1">
                    Response time
                  </p>
                  <p className="text-sm text-secondary leading-relaxed">
                    Most project requests get a reply within one business day.
                    Prefer to talk now? Call and we&apos;ll help you get started.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            id="book"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-7 scroll-mt-24"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="relative bg-white border border-border-subtle rounded-[4px] p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_-40px_rgba(26,47,38,0.45)] space-y-5 overflow-hidden"
            >
              {submitted ? (
                <div className="py-16 text-center">
                  <p className="text-2xl font-space font-bold mb-3">
                    Request received
                  </p>
                  <p className="text-secondary max-w-sm mx-auto">
                    Thanks for reaching out. We&apos;ll be in touch about your
                    outdoor project soon.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-2">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-accent mb-2">
                      Project request
                    </p>
                    <h3 className="text-xl sm:text-2xl font-space font-bold tracking-tight">
                      Tell us about your project
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Name" name="name" placeholder="Your name" required />
                    <Field
                      label="Phone"
                      name="phone"
                      type="tel"
                      placeholder="(704) 555-0148"
                      required
                    />
                  </div>
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    required
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field
                      label="Project Location"
                      name="location"
                      placeholder="City or neighborhood"
                      required
                    />
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-primary mb-2">
                        Preferred Contact Method
                      </label>
                      <select
                        name="contactMethod"
                        className="w-full bg-bg-off/80 border border-border-subtle px-5 py-4 rounded-[4px] text-sm focus:outline-none focus:border-accent transition-colors"
                        defaultValue="phone"
                      >
                        <option value="phone">Phone</option>
                        <option value="email">Email</option>
                        <option value="text">Text</option>
                      </select>
                    </div>
                  </div>
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
                      rows={5}
                      placeholder="Share your ideas, property details, timeline, and outdoor goals..."
                      className="w-full bg-bg-off/80 border border-border-subtle px-5 py-4 rounded-[4px] text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                      required
                    />
                  </div>
                  <Button type="submit" variant="accent" className="w-full py-4 sm:py-5">
                    Send My Project Request
                  </Button>
                  <p className="text-center text-xs text-muted">
                    No obligation. Free estimate for Charlotte-area outdoor
                    projects.
                  </p>
                </>
              )}
            </form>
          </motion.div>
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

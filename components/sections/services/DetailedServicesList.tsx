"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { detailedServices } from "@/data/services-page";

export default function DetailedServicesList() {
  return (
    <section id="service-list" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="mb-20 max-w-3xl">
          <SectionLabel>OUR HARDSCAPING & LANDSCAPING SERVICES</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold tracking-tight">
            Complete Outdoor Solutions for{" "}
            <span className="text-accent">Every Property</span>
          </h2>
          <p className="text-secondary text-lg mt-6 leading-relaxed">
            Explore our full range of patio, paver, driveway, outdoor living, landscaping, and commercial services across Charlotte.
          </p>
        </div>

        <div className="space-y-24">
          {detailedServices.map((service, index) => {
            const reverse = index % 2 === 1;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-16 items-center`}
              >
                <div className="w-full lg:w-1/2 relative overflow-hidden rounded-[4px] group bg-bg-off">
                  <Image
                    src={service.imageSrc}
                    alt={service.name}
                    width={1200}
                    height={900}
                    loading="lazy"
                    quality={75}
                    className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-6 left-6 z-10 bg-primary text-stone px-4 py-2 rounded-[4px]">
                    <span className="text-xs font-bold uppercase tracking-widest">
                      {service.number}
                    </span>
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <h3 className="text-3xl md:text-4xl font-space font-bold mb-5 text-primary">
                    {service.name}
                  </h3>
                  <p className="text-secondary text-base leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone mb-5">
                    Services include
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {service.includes.map((item) => (
                      <div
                        key={item}
                        className="flex items-start text-sm text-primary font-medium"
                      >
                        <span className="text-accent mr-2 mt-0.5">→</span>
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    {(["patios-walkways", "driveways", "walls", "pavers", "outdoor-living", "lighting", "landscaping", "fences-water", "commercial"] as const).includes(
                      service.id as "patios-walkways"
                    ) && (
                      <a
                        href={
                          ({
                            "patios-walkways": "/services/patios-walkways",
                            driveways: "/services/driveways",
                            walls: "/services/walls",
                            pavers: "/services/pavers",
                            "outdoor-living": "/services/outdoor-living",
                            lighting: "/services/lighting",
                            landscaping: "/services/landscaping",
                            "fences-water": "/services/fences-water",
                            commercial: "/services/commercial",
                          } as Record<string, string>)[service.id]
                        }
                        className="text-sm font-bold uppercase tracking-widest border-b border-accent text-accent pb-1 hover:text-primary hover:border-primary transition-all inline-flex items-center"
                      >
                        View Full Service Page
                        <span className="ml-2">→</span>
                      </a>
                    )}
                    <button
                      onClick={() =>
                        document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="text-sm font-bold uppercase tracking-widest border-b border-primary pb-1 hover:text-accent hover:border-accent transition-all inline-flex items-center"
                    >
                      Get a Free Estimate
                      <span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

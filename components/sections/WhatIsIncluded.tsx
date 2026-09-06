"use client";

import { BrickWall, Layers, Grid3x3, Mountain, Hexagon, Waves } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { patioTypes } from "@/data/content";

const icons = [
  <Grid3x3 size={36} key="1" />,
  <Layers size={36} key="2" />,
  <BrickWall size={36} key="3" />,
  <Mountain size={36} key="4" />,
  <Hexagon size={36} key="5" />,
  <Waves size={36} key="6" />,
];

export default function WhatIsIncluded() {
  return (
    <section id="patios" className="py-32 bg-bg-off/50">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="mb-20">
          <SectionLabel>ABOUT OUR PATIOS</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-space font-bold">
            Types of Patios <span className="text-accent">We Build</span>
          </h2>
          <p className="text-secondary text-lg mt-6 max-w-2xl leading-relaxed">
            Choose from custom paver, concrete, brick, natural stone, flagstone, and poolside patio installations designed for Charlotte homes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {patioTypes.map((cat, index) => (
            <div 
              key={index}
              className="bg-white p-10 relative group border border-border-subtle/30 hover:border-accent transition-all duration-500 rounded-[4px] shadow-sm hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="w-16 h-16 mb-8 rounded-[4px] bg-bg-off flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                {icons[index]}
              </div>
              
              <h4 className="text-xl font-bold mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                {cat.title}
              </h4>
              <p className="text-secondary text-sm leading-relaxed">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

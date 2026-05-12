"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceCardProps {
  name: string;
  description: string;
  subFeatures: string[];
  imageSrc: string;
  index: number;
}

export default function ServiceCard({ name, description, subFeatures, imageSrc, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col border border-border-subtle bg-white relative overflow-hidden rounded-[4px]"
    >
      <div className="absolute top-0 left-0 w-full h-[3px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10" />
      
      <div className="relative h-[340px] w-full">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3">{name}</h3>
        <p className="text-secondary text-sm leading-relaxed mb-6">
          {description}
        </p>
        
        <div className="grid grid-cols-2 gap-y-3 mb-8">
          {subFeatures.map((feature, i) => (
            <div key={i} className="flex items-center text-[13px] text-primary">
              <span className="text-accent mr-2">→</span>
              {feature}
            </div>
          ))}
        </div>

        <div className="mt-auto">
          <span className="text-sm font-bold inline-flex items-center group/link">
            Learn More 
            <span className="ml-2 transform transition-transform duration-300 group-hover/link:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

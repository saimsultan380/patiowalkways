"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  name: string;
  description: string;
  imageSrc: string;
  index: number;
  href?: string;
}

export default function ServiceCard({ name, description, imageSrc, index, href = "/services" }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col border border-border-subtle bg-white relative overflow-hidden rounded-[4px]"
    >
      <div className="absolute top-0 left-0 w-full h-[3px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10" />
      
      <div className="relative h-[260px] w-full">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3">{name}</h3>
        <p className="text-secondary text-sm leading-relaxed mb-8">
          {description}
        </p>

        <div className="mt-auto">
          <Link href={href} className="text-sm font-bold inline-flex items-center group/link hover:text-accent transition-colors">
            Learn More 
            <span className="ml-2 transform transition-transform duration-300 group-hover/link:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

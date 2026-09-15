"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { ProjectImage } from "@/data/projects-page";

interface ProjectCardSliderProps {
  images: ProjectImage[];
  title: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export default function ProjectCardSlider({
  images,
  title,
  priority = false,
  className = "",
  sizes = "(max-width: 1024px) 100vw, 60vw",
}: ProjectCardSliderProps) {
  const slides = images.length > 0 ? images : [];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (slides.length <= 1 || paused || !inView) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [slides.length, paused, inView]);

  if (slides.length === 0) return null;

  const active = slides[index];

  return (
    <div
      ref={rootRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
          className="absolute inset-0"
        >
          <Image
            src={active.src}
            alt={active.alt || title}
            fill
            quality={75}
            priority={priority && index === 0}
            loading={priority && index === 0 ? "eager" : "lazy"}
            className="object-cover"
            sizes={sizes}
          />
        </motion.div>
      </AnimatePresence>

      {slides.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 z-10 flex items-center justify-center gap-1.5 pointer-events-none">
          {slides.map((slide, i) => (
            <span
              key={slide.src}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === index ? "w-5 bg-stone" : "w-1.5 bg-white/55"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

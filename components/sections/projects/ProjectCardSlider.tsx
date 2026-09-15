"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
      { threshold: 0.25 }
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

  return (
    <div
      ref={rootRef}
      className={`relative overflow-hidden bg-bg-off ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => {
        const isActive = i === index;
        const shouldLoad = priority || inView || i === 0 || Math.abs(i - index) <= 1;

        if (!shouldLoad && !isActive) return null;

        return (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              isActive ? "opacity-100 z-[1]" : "opacity-0 z-0"
            }`}
            aria-hidden={!isActive}
          >
            <Image
              src={slide.src}
              alt={slide.alt || title}
              fill
              quality={75}
              priority={priority && i === 0}
              className="object-cover"
              sizes={sizes}
            />
          </div>
        );
      })}

      {slides.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 z-10 flex items-center justify-center gap-1.5 pointer-events-none">
          {slides.map((slide, i) => (
            <span
              key={`dot-${slide.src}`}
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

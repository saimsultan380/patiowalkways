"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import type { ProjectImage } from "@/data/projects-page";

interface ProjectCardSliderProps {
  images: ProjectImage[];
  coverImage?: string;
  title: string;
  priority?: boolean;
  sizes?: string;
}

export default function ProjectCardSlider({
  images,
  coverImage,
  title,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 60vw",
}: ProjectCardSliderProps) {
  const slides = useMemo(() => {
    if (!images.length) return [];
    // Start on the finished cover photo, then cycle the rest
    if (!coverImage) return images;
    const cover = images.find((image) => image.src === coverImage);
    const rest = images.filter((image) => image.src !== coverImage);
    return cover ? [cover, ...rest] : images;
  }, [images, coverImage]);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
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
      className="absolute inset-0 overflow-hidden bg-[#dfe5e1]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Image
        src={active.src}
        alt={active.alt || title}
        fill
        quality={75}
        priority={priority}
        className="object-cover"
        sizes={sizes}
      />

      {slides.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 z-10 flex items-center justify-center gap-1.5 pointer-events-none">
          {slides.map((slide, i) => (
            <span
              key={`dot-${slide.src}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === index ? "w-5 bg-stone" : "w-1.5 bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

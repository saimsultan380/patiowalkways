"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ProjectImage } from "@/data/projects-page";

interface ProjectImageGalleryProps {
  title: string;
  images: ProjectImage[];
}

export default function ProjectImageGallery({
  title,
  images,
}: ProjectImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current - 1 + images.length) % images.length;
    });
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + 1) % images.length;
    });
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, showPrev, showNext]);

  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-[4px] bg-bg-off text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`Open gallery image ${index + 1}: ${image.caption}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              quality={75}
              loading={index < 4 ? "eager" : "lazy"}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors" />
            <span className="absolute bottom-0 left-0 right-0 p-2 sm:p-2.5 bg-gradient-to-t from-primary/80 to-transparent text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity line-clamp-2">
              {String(index + 1).padStart(2, "0")}. {image.caption}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeImage && activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-sm flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} gallery`}
          >
            <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-4 border-b border-white/10">
              <div className="min-w-0">
                <p className="text-[11px] font-bold uppercase tracking-widest text-stone mb-1">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(images.length).padStart(2, "0")}
                </p>
                <p className="text-sm sm:text-base text-white truncate">
                  {activeImage.caption}
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                className="w-10 h-10 rounded-[4px] border border-white/20 text-white hover:bg-white/10 inline-flex items-center justify-center shrink-0"
                aria-label="Close gallery"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative flex-1 min-h-0 flex items-center justify-center px-3 sm:px-12 py-4 sm:py-6">
              <button
                type="button"
                onClick={showPrev}
                className="absolute left-2 sm:left-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-[4px] border border-white/20 text-white hover:bg-white/10 inline-flex items-center justify-center"
                aria-label="Previous image"
              >
                <ChevronLeft size={22} />
              </button>

              <div className="relative w-full max-w-5xl h-full max-h-[70vh] sm:max-h-[75vh]">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  priority
                  quality={75}
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              <button
                type="button"
                onClick={showNext}
                className="absolute right-2 sm:right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-[4px] border border-white/20 text-white hover:bg-white/10 inline-flex items-center justify-center"
                aria-label="Next image"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            <div className="px-4 sm:px-6 pb-5 overflow-x-auto">
              <div className="flex gap-2 w-max mx-auto">
                {images.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-[4px] overflow-hidden border transition-colors ${
                      index === activeIndex
                        ? "border-stone"
                        : "border-white/20 opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  >
                    <Image
                      src={image.src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

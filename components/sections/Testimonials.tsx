"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowRight, Star, CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { testimonials } from "@/data/content";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="reviews" className="py-32 bg-bg-off/30 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <SectionLabel>WHAT OUR CUSTOMERS SAY</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-space font-bold">
              Real Results from <span className="text-accent">Charlotte Homeowners</span>
            </h2>
          </div>

          <div className="flex flex-col items-end gap-4">
            <div className="hidden md:flex space-x-3">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center hover:bg-primary hover:text-white transition-all bg-white shadow-sm cursor-pointer"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center hover:bg-primary hover:text-white transition-all bg-white shadow-sm cursor-pointer"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-4"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white p-8 rounded-[4px] shadow-sm border border-border-subtle h-full flex flex-col relative transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-full p-1 border border-[#C8A96E]/30 bg-white">
                        <div className="w-full h-full rounded-full overflow-hidden relative border border-[#C8A96E]/20">
                          {testimonial.image ? (
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                              sizes="64px"
                            />
                          ) : (
                            <div className="w-full h-full bg-accent flex items-center justify-center text-white font-bold text-xl">
                              {testimonial.name.charAt(0)}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md border border-bg-off z-10 p-[3px]">
                        <svg viewBox="0 0 24 24" className="w-full h-full">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-primary flex items-center gap-1">
                        {testimonial.name}
                        <CheckCircle2 size={14} className="text-blue-500" />
                      </h4>
                      <p className="text-[11px] text-muted font-medium mt-0.5">{testimonial.date}</p>
                    </div>
                  </div>

                  <div className="flex space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.stars ? "text-[#FBBC05] fill-[#FBBC05]" : "text-gray-200 fill-gray-200"}
                      />
                    ))}
                  </div>

                  {testimonial.title && (
                    <p className="text-sm font-bold text-primary mb-3">{testimonial.title}</p>
                  )}

                  <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  <div className="flex items-center justify-between pt-5 border-t border-bg-off mt-auto">
                    <span className="text-[11px] font-bold text-muted uppercase tracking-widest">Read more</span>
                    <span className="text-[10px] font-bold text-accent bg-accent/5 px-2 py-1 rounded">
                      {testimonial.serviceType}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex md:hidden space-x-4 justify-center mt-8">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full border border-border-subtle flex items-center justify-center hover:bg-primary hover:text-white transition-all bg-white shadow-sm"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full border border-border-subtle flex items-center justify-center hover:bg-primary hover:text-white transition-all bg-white shadow-sm"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

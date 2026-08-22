"use client";

import React, { useState } from "react";
import { Star, Play, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Tiwari",
    role: "GNM Student",
    text: "RS Nursing Career Point has transformed my preparation. The faculty explains Anatomy and Physiology with such clarity that even complex topics feel easy. Highly recommend to all nursing aspirants in Gorakhpur!",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop&facepad=2",
    hasVideo: true,
  },
  {
    name: "Anjali Verma",
    role: "ANM Student",
    text: "The best nursing coaching in Gorakhpur. The teachers are very supportive and the study material is excellent. I cleared my ANM entrance exam on the first attempt thanks to RS Nursing Career Point.",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop&facepad=2",
    hasVideo: false,
  },
  {
    name: "Rahul Gupta",
    role: "Staff Nurse Exam Aspirant",
    text: "RS Nursing Career Point is excellent for Staff Nurse exam preparation. The topic-wise coverage, previous year papers, and mock tests gave me the edge I needed. Qualified AIIMS Staff Nurse exam!",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop&facepad=2",
    hasVideo: true,
  },
  {
    name: "Suman Yadav",
    role: "B.Sc Nursing Student",
    text: "If you are serious about nursing in Gorakhpur, RS Nursing Career Point is the only place you need. Faculty is dedicated, environment is positive, and the results speak for themselves.",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop&facepad=2",
    hasVideo: false,
  },
  {
    name: "Vikram Singh",
    role: "GNM Student",
    text: "Best teaching provided here. The regular tests and subject-wise coverage helped me stay ahead in my GNM academics. Truly a career-changing institute.",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop&facepad=2",
    hasVideo: true,
  },
];

const videoTestimonials = [
  {
    name: "Priya T.",
    thumbnail:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&auto=format&fit=crop",
    label: "GNM Topper | 2024",
  },
  {
    name: "Anjali V.",
    thumbnail:
      "https://images.unsplash.com/photo-1523240715630-975bb5732dc1?q=80&w=400&auto=format&fit=crop",
    label: "ANM Entrance Cleared | 2024",
  },
  {
    name: "Suman Y.",
    thumbnail:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400&auto=format&fit=crop",
    label: "AIIMS Staff Nurse | 2024",
  },
  {
    name: "Rahul G.",
    thumbnail:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=400&auto=format&fit=crop",
    label: "UP NHM Qualified | 2024",
  },
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setCurrent((p) => (p + 1) % testimonials.length);

  const t = testimonials[current];
  const t2 = testimonials[(current + 1) % testimonials.length];

  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#E8450A] font-semibold text-sm uppercase tracking-widest mb-2">
            Student Stories
          </p>
          <h2 className="section-title-center mb-4">Hear From Our Toppers</h2>
        </div>

        {/* Video Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {videoTestimonials.map((v, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer"
              style={{ height: "160px" }}
            >
              <img
                src={v.thumbnail}
                alt={v.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-[#E8450A] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play size={18} className="text-white fill-white ml-1" />
                </div>
              </div>
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-bold text-sm">{v.name}</p>
                <p className="text-white/70 text-xs">{v.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Written Testimonials */}
        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-navy">What Students Say</h3>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#E8450A] hover:text-[#E8450A] transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-[#E8450A] hover:text-[#E8450A] transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[t, t2].map((review, idx) => (
              <div
                key={idx}
                className="bg-[#F8F8F8] rounded-xl p-7 border border-gray-100 relative"
              >
                <Quote
                  size={36}
                  className="text-[#E8450A]/15 absolute top-5 right-5"
                  fill="currentColor"
                />
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.stars)].map((_, s) => (
                    <Star
                      key={s}
                      size={14}
                      className="text-[#E8450A] fill-[#E8450A]"
                    />
                  ))}
                </div>
                <p className="text-slate text-sm leading-relaxed mb-5 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-navy text-sm">{review.name}</p>
                    <p className="text-muted text-xs">{review.role}</p>
                  </div>
                  {review.hasVideo && (
                    <div className="ml-auto w-8 h-8 bg-[#E8450A]/10 rounded-full flex items-center justify-center">
                      <Play size={12} className="text-[#E8450A] fill-[#E8450A] ml-0.5" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-6 bg-[#E8450A]" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

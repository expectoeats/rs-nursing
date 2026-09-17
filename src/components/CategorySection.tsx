"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Spoken",
    fullName: "Spoken English Course",
    desc: "Master everyday English conversation with fluent speaking, correct pronunciation, and real-life practice sessions.",
    color: "#FF6B00",
    href: "#courses",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "IELTS",
    fullName: "IELTS Preparation",
    desc: "Complete IELTS coaching covering all four modules with expert strategies, mock tests, and personalized feedback.",
    color: "#1a1a2e",
    href: "#courses",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "English",
    fullName: "Basic to Advanced English",
    desc: "Complete English learning from scratch to advanced level — grammar, vocabulary, writing and communication skills.",
    color: "#FF6B00",
    href: "#courses",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
  },
];

export const CategorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href={cat.href}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              style={{ minHeight: "360px" }}
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Color overlay — orange or navy */}
              <div
                className="absolute inset-0"
                style={{ backgroundColor: cat.color, opacity: 0.82 }}
              />

              {/* Decorative circles */}
              <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-white/10" />
              <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-white/10" />

              {/* Content */}
              <div className="relative z-10 p-10 flex flex-col items-center text-center h-full">
                <h3 className="text-6xl md:text-7xl font-black text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                  {cat.title}
                </h3>
                <p className="text-white/90 font-semibold text-sm uppercase tracking-widest mb-4">
                  {cat.fullName}
                </p>
                <div className="w-12 h-0.5 bg-white/40 mb-4" />
                <p className="text-white/85 text-sm leading-relaxed mb-6">
                  {cat.desc}
                </p>
                <span
                  className="flex items-center gap-2 bg-white text-sm font-bold px-5 py-2 rounded-full group-hover:gap-3 transition-all mt-auto"
                  style={{ color: cat.color }}
                >
                  Know More <ArrowRight size={15} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

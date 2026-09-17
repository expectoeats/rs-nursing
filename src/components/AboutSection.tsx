"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

export const AboutSection = () => {
  const points = [
    "Mathura's trusted English coaching for Basic to Advanced levels",
    "Expert faculty for Spoken English, IELTS, Grammar & Communication Skills",
    "Complete study material and practice resources for every student",
    "Result-oriented teaching with personal attention to every student",
    "Positive and supportive learning environment – Free demo classes available",
    "Affordable fee structure accessible to all families",
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main image */}
              <div className="col-span-2 rounded-lg overflow-hidden shadow-lg" style={{ height: "280px" }}>
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop"
                  alt="English Master Institute"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Two smaller images */}
              <div className="rounded-lg overflow-hidden shadow-md" style={{ height: "160px" }}>
                <img
                  src="https://images.unsplash.com/photo-1523240715630-975bb5732dc1?q=80&w=400&auto=format&fit=crop"
                  alt="Students learning English"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md" style={{ height: "160px" }}>
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400&auto=format&fit=crop"
                  alt="Classroom"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#FF6B00] text-white p-4 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-black">4.9★</div>
              <div className="text-xs font-semibold uppercase tracking-wide">Google Rating</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-[#FF6B00] font-semibold text-sm uppercase tracking-widest mb-2">
              Who We Are
            </p>
            <h2 className="section-title mb-6">
              English Master Institute
            </h2>

            <p className="text-slate text-base leading-relaxed mb-4">
              Welcome to <strong className="text-navy">English Master Institute</strong> — located at Advanced institute janakpuri colony, opposite ambedkar park, Aurangabad township, Mathura, Uttar Pradesh 281006. We are Mathura&apos;s premier coaching institute for English language learning.
            </p>
            <p className="text-slate text-base leading-relaxed mb-6">
              Whether you want to learn Basic English, Master Spoken English, prepare for IELTS, or improve your Grammar & Communication Skills — our classes are designed to build strong English foundations with clarity and confidence. With free demo classes, expert faculty and comprehensive study material, we are a complete one-stop solution for every English learner.
            </p>

            {/* Points */}
            <ul className="space-y-3 mb-8">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#FF6B00] shrink-0 mt-0.5" />
                  <span className="text-slate text-sm">{point}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-block bg-[#FF6B00] text-white font-semibold px-8 py-3 rounded hover:bg-[#E25900] transition-colors"
            >
              Know More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

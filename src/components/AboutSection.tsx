"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

export const AboutSection = () => {
  const points = [
    "Gorakhpur's trusted nursing coaching for GNM, ANM & B.Sc Nursing aspirants",
    "Expert faculty with deep nursing & medical subject knowledge",
    "Covering Anatomy, Physiology, Microbiology, Community Health & more",
    "Result-oriented teaching with personal attention to every student",
    "Positive and supportive learning environment for all learners",
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
                  alt="The Ray's Classes Institute"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Two smaller images */}
              <div className="rounded-lg overflow-hidden shadow-md" style={{ height: "160px" }}>
                <img
                  src="https://images.unsplash.com/photo-1523240715630-975bb5732dc1?q=80&w=400&auto=format&fit=crop"
                  alt="Students studying"
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
            <div className="absolute -bottom-5 -right-5 bg-[#E8450A] text-white p-4 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-black">4.9★</div>
              <div className="text-xs font-semibold uppercase tracking-wide">Google Rating</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-[#E8450A] font-semibold text-sm uppercase tracking-widest mb-2">
              Who We Are
            </p>
            <h2 className="section-title mb-6">
              RS Nursing Career Point
            </h2>

            <p className="text-slate text-base leading-relaxed mb-4">
              Welcome to <strong className="text-navy">RS Nursing Career Point</strong> — located at Subhash Tractor Gali, near Bajaj Service Center Dharamshala, Bashratpur, Gorakhpur, Uttar Pradesh. We are a premier coaching institute dedicated to nursing aspirants preparing for GNM, ANM, B.Sc Nursing, and Staff Nurse competitive exams.
            </p>
            <p className="text-slate text-base leading-relaxed mb-6">
              Whether you&apos;re a fresh nursing student or preparing for government staff nurse exams, our classes are designed to help you master every concept with clarity and confidence.
            </p>

            {/* Points */}
            <ul className="space-y-3 mb-8">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#E8450A] shrink-0 mt-0.5" />
                  <span className="text-slate text-sm">{point}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-block bg-[#E8450A] text-white font-semibold px-8 py-3 rounded hover:bg-[#C73D09] transition-colors"
            >
              Know More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

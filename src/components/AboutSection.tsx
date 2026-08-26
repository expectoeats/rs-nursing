"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

export const AboutSection = () => {
  const points = [
    "Gonda's trusted coaching for all competitive exams — SSC, Railway, UP Police, Bank & more",
    "Expert faculty with deep subject knowledge and years of exam experience",
    "Complete library facility making us a one-stop solution for every aspirant",
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
                  alt="Kautilya Study Circle"
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
              Kautilya Study Circle
            </h2>

            <p className="text-slate text-base leading-relaxed mb-4">
              Welcome to <strong className="text-navy">Kautilya Study Circle</strong> — located Opposite Bandhan Bank, Bahraich Gonda Road, near Roadways Bus Stand, Azad Nagar, Gonda, Uttar Pradesh. We are a premier coaching institute dedicated to aspirants preparing for all competitive exams.
            </p>
            <p className="text-slate text-base leading-relaxed mb-6">
              Whether you&apos;re preparing for SSC, Railway, UP Police, Bank exams or any government competitive exam, our classes are designed to help you master every concept with clarity and confidence. Our library facility makes us a complete one-stop solution for every aspirant.
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

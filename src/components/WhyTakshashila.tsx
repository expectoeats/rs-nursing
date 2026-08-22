"use client";

import React from "react";
import { Target, Users, BookOpen, MessageCircle, Trophy, Heart, Clock, Wifi } from "lucide-react";

const features = [
  {
    icon: <Target size={28} />,
    title: "GNM, ANM & B.Sc Nursing",
    description: "Complete academic and entrance exam preparation for all major nursing courses.",
  },
  {
    icon: <Users size={28} />,
    title: "Expert Faculty",
    description: "Complex nursing and medical topics explained by experienced faculty with clinical examples.",
  },
  {
    icon: <BookOpen size={28} />,
    title: "Wide Subject Range",
    description: "Anatomy, Physiology, Microbiology, Community Health, Midwifery, Pharmacology & more.",
  },
  {
    icon: <MessageCircle size={28} />,
    title: "Positive Learning",
    description: "Supportive, encouraging, and result-oriented environment for every nursing student.",
  },
  {
    icon: <Trophy size={28} />,
    title: "Proven Results",
    description: "Students consistently clearing GNM, ANM, AIIMS, NHM & Staff Nurse competitive exams.",
  },
  {
    icon: <Heart size={28} />,
    title: "Inclusive Environment",
    description: "Safe and welcoming institute for all nursing aspirants regardless of background.",
  },
  {
    icon: <Clock size={28} />,
    title: "Flexible Batches",
    description: "Morning and evening batches available to suit your study schedule.",
  },
  {
    icon: <Wifi size={28} />,
    title: "Open 24 Hours",
    description: "Always accessible — open 24 hours a day, 7 days a week. Call: 096728 48848.",
  },
];

export const WhyTakshashila = () => {
  return (
    <section className="py-16 bg-[#F8F8F8]">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#E8450A] font-semibold text-sm uppercase tracking-widest mb-2">
            Our Advantage
          </p>
          <h2 className="section-title-center mb-4">Why Choose Us</h2>
          <p className="text-slate max-w-xl mx-auto text-sm mt-4">
            RS Nursing Career Point offers everything you need to excel in nursing —
            quality teaching, personal attention, and a supportive community in Gorakhpur.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#E8450A]/10 rounded-xl flex items-center justify-center text-[#E8450A] mb-5 group-hover:bg-[#E8450A] group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h4 className="font-bold text-navy text-base mb-2">{feature.title}</h4>
              <p className="text-slate text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#E8450A] rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <h3 className="text-2xl font-bold mb-1">Ready to Start Your Nursing Career?</h3>
            <p className="text-white/80 text-sm">
              Join Gorakhpur&apos;s most trusted nursing coaching. Admissions open — limited seats.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <a
              href="#contact"
              className="bg-white text-[#E8450A] font-bold px-7 py-3 rounded hover:bg-gray-100 transition-colors shadow-lg"
            >
              Admission Open
            </a>
            <a
              href="tel:+919672848848"
              className="border-2 border-white text-white font-bold px-7 py-3 rounded hover:bg-white hover:text-[#E8450A] transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

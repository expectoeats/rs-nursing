"use client";

import React from "react";
import { Target, Users, BookOpen, MessageCircle, Trophy, Heart, Clock, Wifi } from "lucide-react";

const features = [
  {
    icon: <Target size={28} />,
    title: "All English Levels",
    description: "Complete preparation for Basic English, Spoken English, IELTS, Advanced Grammar & Communication Skills.",
  },
  {
    icon: <Users size={28} />,
    title: "Expert Faculty",
    description: "Complex English concepts explained by experienced faculty with in-depth language knowledge and proven techniques.",
  },
  {
    icon: <BookOpen size={28} />,
    title: "Study Materials",
    description: "Comprehensive study materials, worksheets, practice exercises and audio-visual resources for every course.",
  },
  {
    icon: <MessageCircle size={28} />,
    title: "Positive Learning",
    description: "Supportive, encouraging, and result-oriented environment for every English learner in Mathura.",
  },
  {
    icon: <Trophy size={28} />,
    title: "Proven Results",
    description: "Students consistently achieving high IELTS scores and fluent English communication skills across Mathura.",
  },
  {
    icon: <Heart size={28} />,
    title: "Inclusive Environment",
    description: "Safe and welcoming institute for all learners regardless of age, background or current English level.",
  },
  {
    icon: <Clock size={28} />,
    title: "Flexible Batches",
    description: "Morning and evening batches available to suit your schedule — learn English at your convenience.",
  },
  {
    icon: <Wifi size={28} />,
    title: "Free Demo Classes",
    description: "Try before you join — free demo classes available. Call: 09761123527.",
  },
];

export const WhyTakshashila = () => {
  return (
    <section className="py-16 bg-[#F8F8F8]">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#FF6B00] font-semibold text-sm uppercase tracking-widest mb-2">
            Our Advantage
          </p>
          <h2 className="section-title-center mb-4">Why Choose Us</h2>
          <p className="text-slate max-w-xl mx-auto text-sm mt-4">
            English Master Institute offers everything you need to master the English language —
            quality teaching, expert faculty, personal attention, and a supportive learning environment in Mathura.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#FF6B00]/10 rounded-xl flex items-center justify-center text-[#FF6B00] mb-5 group-hover:bg-[#FF6B00] group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h4 className="font-bold text-navy text-base mb-2">{feature.title}</h4>
              <p className="text-slate text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#FF6B00] rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <h3 className="text-2xl font-bold mb-1">Ready to Master English?</h3>
            <p className="text-white/80 text-sm">
              Join Mathura&apos;s most trusted English coaching institute. Admissions open — free demo available.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <a
              href="#contact"
              className="bg-white text-[#FF6B00] font-bold px-7 py-3 rounded hover:bg-gray-100 transition-colors shadow-lg"
            >
              Admission Open
            </a>
            <a
              href="tel:+9109761123527"
              className="border-2 border-white text-white font-bold px-7 py-3 rounded hover:bg-white hover:text-[#FF6B00] transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

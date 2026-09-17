"use client";

import React from "react";
import { Award, BookOpen, Star, Users } from "lucide-react";

const facultyStats = [
  { icon: <BookOpen size={20} />, value: "10+", label: "Years Experience" },
  { icon: <Users size={20} />, value: "500+", label: "Students Taught" },
  { icon: <Star size={20} />, value: "4.9", label: "Google Rating" },
  { icon: <Award size={20} />, value: "100%", label: "Dedication" },
];

export const FacultySection = () => {
  return (
    <section className="py-16 bg-[#F8F8F8]">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Faculty Image */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl" style={{ height: "480px" }}>
              <img
                src="/teacher.jpg"
                alt="Founder - English Master Institute"
                className="w-full h-full object-cover object-top"
              />
              {/* Orange gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#FF6B00] to-transparent h-32" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-bold text-xl">English Master Institute</h3>
                <p className="text-white/80 text-sm">Founder & Director, English Master Institute</p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FF6B00]/10 rounded-xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FF6B00]/10 rounded-xl -z-10" />
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-[#FF6B00] font-semibold text-sm uppercase tracking-widest mb-2">
              Meet Our Faculty
            </p>
            <h2 className="section-title mb-6">Expert & Dedicated Faculty</h2>

            <p className="text-slate text-base leading-relaxed mb-4">
              At <strong className="text-navy">English Master Institute</strong>, our faculty is passionate about making English language learning accessible and result-oriented for every student — from beginners to advanced learners.
            </p>
            <p className="text-slate text-base leading-relaxed mb-4">
              Our teaching methodology focuses on practical English usage with real-life conversations, grammar clarity, vocabulary building, and regular practice sessions — making even the most complex aspects of English easy to understand and apply.
            </p>
            <p className="text-slate text-base leading-relaxed mb-8">
              We cover Spoken English, IELTS Preparation, Basic English, Advanced Grammar, Communication Skills and Professional English — with free demo classes and comprehensive study material for every student.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {facultyStats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-4 flex items-center gap-4 shadow-sm border border-gray-100"
                >
                  <div className="w-10 h-10 bg-[#FF6B00]/10 rounded-full flex items-center justify-center text-[#FF6B00]">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-xl font-black text-navy">{stat.value}</div>
                    <div className="text-xs text-slate">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

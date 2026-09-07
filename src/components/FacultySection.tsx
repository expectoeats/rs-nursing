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
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=600&auto=format&fit=crop"
                alt="Director - Lincoln Coaching Centre"
                className="w-full h-full object-cover object-top"
              />
              {/* Orange gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#FF6B00] to-transparent h-32" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-bold text-xl">Lincoln Coaching Centre</h3>
                <p className="text-white/80 text-sm">Founder & Director, Lincoln Coaching Centre</p>
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
              At <strong className="text-navy">Lincoln Coaching Centre</strong>, our faculty is passionate about making school & graduation education accessible and result-oriented for every student from Class 1st to B.Sc.
            </p>
            <p className="text-slate text-base leading-relaxed mb-4">
              Our teaching methodology focuses on simplifying complex topics with concept clarity, board-pattern practice and regular tests — making even the most difficult subjects easy to understand and remember.
            </p>
            <p className="text-slate text-base leading-relaxed mb-8">
              We cover all subjects for Class 1st–10th, PCMB & Agriculture for Class 11th–12th and PCM/ZBC for B.Sc — with CBSE, ICSE & U.P. Board expertise, free demo classes and a supportive library facility for every student.
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

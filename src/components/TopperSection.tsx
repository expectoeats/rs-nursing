"use client";

import React from "react";
import { Trophy } from "lucide-react";

const toppers = [
  {
    name: "Priya Tiwari",
    rank: "GNM Topper",
    exam: "GNM Entrance Exam · 2024",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop&facepad=2",
    batch: "2023-24",
  },
  {
    name: "Anjali Verma",
    rank: "ANM 1st Rank",
    exam: "ANM Entrance Exam · 2024",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop&facepad=2",
    batch: "2023-24",
  },
  {
    name: "Suman Yadav",
    rank: "AIIMS Qualified",
    exam: "Staff Nurse Exam · 2024",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop&facepad=2",
    batch: "2023-24",
  },
  {
    name: "Rahul Gupta",
    rank: "UP NHM Selected",
    exam: "NHM Staff Nurse · 2024",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop&facepad=2",
    batch: "2023-24",
  },
];

export const TopperSection = () => {
  return (
    <section id="results" className="py-16 bg-[#E8450A] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        {[
          { top: "5%",  left: "10%" }, { top: "15%", left: "80%" },
          { top: "25%", left: "45%" }, { top: "35%", left: "25%" },
          { top: "45%", left: "65%" }, { top: "55%", left: "5%"  },
          { top: "60%", left: "88%" }, { top: "70%", left: "35%" },
          { top: "78%", left: "55%" }, { top: "85%", left: "15%" },
          { top: "90%", left: "75%" }, { top: "10%", left: "55%" },
          { top: "20%", left: "90%" }, { top: "40%", left: "70%" },
          { top: "50%", left: "30%" }, { top: "65%", left: "50%" },
          { top: "75%", left: "20%" }, { top: "30%", left: "8%"  },
          { top: "95%", left: "40%" }, { top: "8%",  left: "38%" },
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute w-20 h-20 border-2 border-white rounded-full"
            style={{ top: pos.top, left: pos.left }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <p className="text-white/70 font-semibold text-sm uppercase tracking-widest mb-2">
              Our Pride
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white relative pb-3">
              Successfully Produced 500+ Selected Nursing Professionals
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-white rounded" />
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-block bg-white text-[#E8450A] font-bold px-7 py-3 rounded hover:bg-gray-100 transition-colors shadow-lg shrink-0"
          >
            View All Results
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Topper cards */}
          <div className="grid grid-cols-2 gap-4">
            {toppers.map((topper, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 flex flex-col items-center text-center shadow-lg"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-[#E8450A] mb-3">
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-bold text-navy text-sm mb-0.5">{topper.name}</p>
                <p className="text-[#E8450A] font-black text-lg">{topper.rank}</p>
                <p className="text-slate text-xs">{topper.exam}</p>
              </div>
            ))}
          </div>

          {/* Right: Topper's Choice info */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#E8450A]/10 rounded-full flex items-center justify-center">
                <Trophy size={24} className="text-[#E8450A]" />
              </div>
              <div>
                <h3 className="font-bold text-navy text-lg">Student&apos;s Choice</h3>
                <p className="text-slate text-sm">Why they chose RS Nursing Career Point</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: "Expert Faculty", pct: 95 },
                { label: "Study Environment", pct: 98 },
                { label: "Subject Coverage", pct: 92 },
                { label: "Student Results", pct: 90 },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm font-semibold text-navy mb-1">
                    <span>{item.label}</span>
                    <span>{item.pct}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#E8450A] rounded-full"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
              <p className="text-slate text-sm italic">
                &quot;RS Nursing Career Point is the best nursing coaching in Gorakhpur. The faculty is exceptional and the exam preparation is thorough and complete.&quot;
              </p>
              <p className="text-[#E8450A] font-semibold text-sm mt-2">— GNM Topper, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

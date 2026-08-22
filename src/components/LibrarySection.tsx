"use client";

import React from "react";
import { Newspaper, Book, Clock, Wifi, Wind, Volume2 } from "lucide-react";

const features = [
  {
    icon: <Newspaper size={26} />,
    title: "Study Materials Provided",
    description: "Well-structured notes and worksheets for all subjects across every class.",
  },
  {
    icon: <Book size={26} />,
    title: "Reference Books",
    description: "Standard NCERT and supplementary books for Science, Maths, and Social Science.",
  },
  {
    icon: <Clock size={26} />,
    title: "Regular Class Schedule",
    description: "Consistent daily classes to keep students on track throughout the academic year.",
  },
  {
    icon: <Wifi size={26} />,
    title: "YouTube Channel",
    description: "Educational videos available on @Theraysclasses for learning anytime, anywhere.",
  },
  {
    icon: <Wind size={26} />,
    title: "Comfortable Classrooms",
    description: "Well-ventilated and spacious classrooms for comfortable all-day learning.",
  },
  {
    icon: <Volume2 size={26} />,
    title: "Focused Environment",
    description: "Disciplined and distraction-free environment to maximize student focus.",
  },
];

export const LibrarySection = () => {
  return (
    <section id="library" className="py-16 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-[#E8450A] font-semibold text-sm uppercase tracking-widest mb-2">
              Study Facility
            </p>
            <h2 className="section-title mb-6">Our Classroom & Resources</h2>
            <p className="text-slate text-base leading-relaxed mb-8">
              The Ray&apos;s Classes provides a well-equipped and comfortable learning
              environment for students from Class 1 to 10th. Everything a student needs
              to excel — all in one place in Mau, UP.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#E8450A]/10 rounded-lg flex items-center justify-center text-[#E8450A] shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm mb-1">{f.title}</h4>
                    <p className="text-slate text-xs leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-[#E8450A] text-white font-semibold px-7 py-3 rounded hover:bg-[#C73D09] transition-colors"
              >
                Enroll Now
              </a>
              <a
                href="tel:+918318002548"
                className="border-2 border-[#E8450A] text-[#E8450A] font-semibold px-7 py-3 rounded hover:bg-[#E8450A] hover:text-white transition-colors"
              >
                Call: 083180 02548
              </a>
            </div>
          </div>

          {/* Right: Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg col-span-2" style={{ height: "240px" }}>
                <img
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop"
                  alt="Study Library"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md" style={{ height: "160px" }}>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
                  alt="Student studying"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md" style={{ height: "160px" }}>
                <img
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=400&auto=format&fit=crop"
                  alt="Books"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating stat */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#E8450A] text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 whitespace-nowrap">
              <Clock size={18} />
              <span className="font-bold text-sm">Classes Every Day · Mau, UP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

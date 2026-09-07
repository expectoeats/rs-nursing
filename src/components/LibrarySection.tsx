"use client";

import React from "react";
import { Newspaper, Book, Clock, Wifi, Wind, Volume2 } from "lucide-react";

const features = [
  {
    icon: <Newspaper size={26} />,
    title: "Daily Newspapers",
    description: "Daily newspapers & current updates — keeping every student aware of national and world events.",

  },
  {
    icon: <Book size={26} />,
    title: "Reference Books",
    description: "Standard reference books for Class 1st–10th, PCMB, Agriculture & B.Sc (PCM/ZBC) across CBSE, ICSE & U.P. Board.",
  },
  {
    icon: <Clock size={26} />,
    title: "Regular Class Schedule",
    description: "Consistent daily classes to keep students on track throughout their academic session.",
  },
  {
    icon: <Wifi size={26} />,
    title: "Study Materials",
    description: "Well-structured notes and practice sets for all subjects covering every board & university syllabus.",
  },
  {
    icon: <Wind size={26} />,
    title: "Comfortable Reading Room",
    description: "Well-ventilated and spacious library room for comfortable all-day self-study sessions.",
  },
  {
    icon: <Volume2 size={26} />,
    title: "Focused Environment",
    description: "Disciplined and distraction-free environment to maximize aspirant focus and productivity.",
  },
];

export const LibrarySection = () => {
  return (
    <section id="library" className="py-16 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-[#FF6B00] font-semibold text-sm uppercase tracking-widest mb-2">
              Study Facility
            </p>
            <h2 className="section-title mb-6">Our Library & Resources</h2>
            <p className="text-slate text-base leading-relaxed mb-8">
              Lincoln Coaching Centre provides a well-equipped library and comfortable learning
              environment for school & college students. Everything a student needs
              to excel — all in one place in Pilibhit, UP.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#FF6B00]/10 rounded-lg flex items-center justify-center text-[#FF6B00] shrink-0">
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
                className="bg-[#FF6B00] text-white font-semibold px-7 py-3 rounded hover:bg-[#E25900] transition-colors"
              >
                Enroll Now
              </a>
              <a
                href="tel:+919627597251"
                className="border-2 border-[#FF6B00] text-[#FF6B00] font-semibold px-7 py-3 rounded hover:bg-[#FF6B00] hover:text-white transition-colors"
              >
                Call: 91 96275 97251
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
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#FF6B00] text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 whitespace-nowrap">
              <Clock size={18} />
              <span className="font-bold text-sm">Free Demo Classes · Pilibhit, UP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

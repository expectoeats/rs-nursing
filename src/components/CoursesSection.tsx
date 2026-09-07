"use client";

import React from "react";
import { ArrowRight, Clock, Users } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Class 1st – 10th",
    subtitle: "All Subjects · CBSE, ICSE, U.P. Board",
    image: "/class-1-10.png",
    duration: "Full Session",
    students: "100+",
    description:
      "Complete coaching for Class 1 to 10 – All Subjects. CBSE, ICSE & U.P. Board pattern with concept clarity, regular tests & doubt sessions.",
    color: "#FF6B00",
    badge: "Most Popular",
  },
  {
    id: 2,
    title: "Class 11th – 12th",
    subtitle: "PCMB · CBSE, ICSE, U.P. Board",
    image: "/class-11-12.png",
    duration: "Full Session",
    students: "120+",
    description:
      "Focused coaching for Class 11th–12th PCMB (Physics, Chemistry, Maths, Biology). Board + academic foundation with practical clarity.",
    color: "#1a1a2e",
    badge: "New Batch",
  },
  {
    id: 3,
    title: "Class 11th – 12th (Ag)",
    subtitle: "Agriculture Stream",
    image: "/class-11-12-ag.png",
    duration: "Full Session",
    students: "80+",
    description:
      "Special coaching for Class 11th–12th Agriculture stream. Covers Agronomy, Soil Science & board syllabus with expert guidance.",
    color: "#FF6B00",
    badge: "Top Results",
  },
  {
    id: 4,
    title: "B.Sc (PCM / ZBC)",
    subtitle: "Bachelor of Science",
    image: "/bsc-pcm.png",
    duration: "Ongoing Batches",
    students: "90+",
    description:
      "Complete coaching for B.Sc PCM and B.Sc ZBC. Semester-wise preparation, practical support & exam-oriented notes. Free demo classes available.",
    color: "#1a1a2e",
    badge: "High Demand",
  },
];

export const CoursesSection = () => {
  return (
    <section id="courses" className="py-16 bg-[#F8F8F8]">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#FF6B00] font-semibold text-sm uppercase tracking-widest mb-2">
            What We Offer
          </p>
          <h2 className="section-title-center mb-4">All Courses</h2>
          <p className="text-slate max-w-xl mx-auto text-base mt-4">
            Choose the right program for your goal. Expert coaching for Class 1st–10th, Class 11th–12th (PCMB & Agriculture) & B.Sc (PCM/ZBC) – CBSE, ICSE & U.P. Board.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden group"
            >
              {/* Top color bar */}
              <div
                className="h-1.5 w-full"
                style={{ backgroundColor: course.color }}
              />

              {/* Course Image from public folder */}
              <div className="relative h-48 overflow-hidden bg-gray-50">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge overlay on image */}
                <span
                  className="absolute top-3 left-3 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white shadow-md"
                  style={{ backgroundColor: course.color }}
                >
                  {course.badge}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">

                <h3 className="text-lg font-bold text-navy mb-1 group-hover:text-[#FF6B00] transition-colors">
                  {course.title}
                </h3>
                <p className="text-[#FF6B00] text-sm font-semibold mb-3">
                  {course.subtitle}
                </p>
                <p className="text-slate text-sm leading-relaxed mb-4 flex-1">
                  {course.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted border-t border-gray-100 pt-4 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock size={13} /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={13} /> {course.students}
                  </span>
                </div>

                <a
                  href="#contact"
                  className="flex items-center gap-2 text-[#FF6B00] font-semibold text-sm hover:gap-3 transition-all"
                >
                  Know More <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-slate text-sm mb-4">
            Not sure which program is right for you?
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#FF6B00] text-white font-semibold px-8 py-3 rounded hover:bg-[#E25900] transition-colors"
          >
            Get Free Counseling
          </a>
        </div>
      </div>
    </section>
  );
};

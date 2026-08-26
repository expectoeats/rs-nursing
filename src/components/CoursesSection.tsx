"use client";

import React from "react";
import { ArrowRight, Clock, Users, FileText, Train, Shield, Landmark } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "SSC / CGL / CHSL",
    subtitle: "Staff Selection Commission",
    icon: FileText,
    duration: "Full Preparation",
    students: "100+",
    description:
      "Complete coaching for SSC CGL, CHSL, MTS & GD. Covers Reasoning, Maths, English, GK with previous year papers and mock tests.",
    color: "#FF6B00",
    badge: "Most Popular",
  },
  {
    id: 2,
    title: "Railway / NTPC / Group D",
    subtitle: "RRB Exam Preparation",
    icon: Train,
    duration: "Full Preparation",
    students: "120+",
    description:
      "Focused coaching for RRB NTPC, Group D, ALP & RPF exams. Covers CBT 1 & 2 with topic-wise practice and previous papers.",
    color: "#1a1a2e",
    badge: "New Batch",
  },
  {
    id: 3,
    title: "UP Police / SI",
    subtitle: "UP Police Bharti Exams",
    icon: Shield,
    duration: "Full Preparation",
    students: "150+",
    description:
      "In-depth preparation for UP Police Constable, Sub-Inspector, and other UP Police exams with current affairs and physical preparation tips.",
    color: "#FF6B00",
    badge: "Top Results",
  },
  {
    id: 4,
    title: "Bank PO / Clerk",
    subtitle: "IBPS / SBI Exams",
    icon: Landmark,
    duration: "Ongoing Batches",
    students: "200+",
    description:
      "Special coaching for IBPS PO, Clerk, SBI PO, RBI, and other bank exams. Covers Quant, Reasoning, English, Banking Awareness & mock tests.",
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
            Choose the right program for your career goal. Expert-designed
            courses for SSC, Railway, UP Police, Bank and other government competitive exams.
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

              <div className="p-6 flex flex-col flex-1">
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: course.color }}
                  >
                    {course.badge}
                  </span>
                  <course.icon size={30} color={course.color} />
                </div>

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

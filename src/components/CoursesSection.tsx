"use client";

import React from "react";
import { ArrowRight, Clock, Users, BookOpen } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "GNM Nursing",
    subtitle: "General Nursing & Midwifery",
    icon: "🏥",
    duration: "Full Preparation",
    students: "100+",
    description:
      "Complete coaching for GNM entrance & academic exams. Covers Anatomy, Physiology, Nursing Fundamentals, Community Health, and Midwifery.",
    color: "#E8450A",
    badge: "Most Popular",
  },
  {
    id: 2,
    title: "ANM Nursing",
    subtitle: "Auxiliary Nursing & Midwifery",
    icon: "💉",
    duration: "Full Preparation",
    students: "120+",
    description:
      "Focused coaching for ANM entrance exams and course completion. Covers Primary Health Care, Nutrition, Child Health, and Community Nursing.",
    color: "#1a1a2e",
    badge: "New Batch",
  },
  {
    id: 3,
    title: "B.Sc Nursing",
    subtitle: "Bachelor of Science in Nursing",
    icon: "🎓",
    duration: "Full Preparation",
    students: "150+",
    description:
      "In-depth preparation for B.Sc Nursing entrance exams and academics. Covers all core subjects with exam strategy, mock tests, and revision.",
    color: "#E8450A",
    badge: "Top Results",
  },
  {
    id: 4,
    title: "Staff Nurse Exam",
    subtitle: "Govt. & Competitive Exams",
    icon: "📋",
    duration: "Ongoing Batches",
    students: "200+",
    description:
      "Special coaching for AIIMS, ESIC, Railway, NHM, and UP Staff Nurse competitive exams. Topic-wise practice, previous papers, and mock tests.",
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
          <p className="text-[#E8450A] font-semibold text-sm uppercase tracking-widest mb-2">
            What We Offer
          </p>
          <h2 className="section-title-center mb-4">All Courses</h2>
          <p className="text-slate max-w-xl mx-auto text-base mt-4">
            Choose the right program for your nursing career. Expert-designed
            courses for GNM, ANM, B.Sc Nursing, and Staff Nurse competitive exams.
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
                  <span className="text-3xl">{course.icon}</span>
                </div>

                <h3 className="text-lg font-bold text-navy mb-1 group-hover:text-[#E8450A] transition-colors">
                  {course.title}
                </h3>
                <p className="text-[#E8450A] text-sm font-semibold mb-3">
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
                  className="flex items-center gap-2 text-[#E8450A] font-semibold text-sm hover:gap-3 transition-all"
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
            Not sure which nursing program is right for you?
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#E8450A] text-white font-semibold px-8 py-3 rounded hover:bg-[#C73D09] transition-colors"
          >
            Get Free Counseling
          </a>
        </div>
      </div>
    </section>
  );
};

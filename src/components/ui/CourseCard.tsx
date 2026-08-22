"use client";

import React from "react";
import { motion } from "framer-motion";
import { scaleIn } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import { Course } from "@/lib/coursesData";

export const CourseCard = ({ course }: { course: Course }) => {
  return (
    <motion.div
      variants={scaleIn}
      className="group relative bg-ivory p-8 rounded-lg border-t-4 border-navy shadow-sm hover:shadow-gold-md transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
    >
      <div className="absolute top-4 right-4 bg-navy text-gold text-xs font-label px-3 py-1 rounded-full tracking-wider uppercase">
        {course.badge}
      </div>
      
      <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
        {course.icon}
      </div>
      
      <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
        {course.title}
      </h3>
      
      <p className="text-slate text-sm leading-relaxed mb-6">
        {course.description}
      </p>
      
      <div className="space-y-2 mb-8">
        <p className="text-xs font-semibold text-navy/60 uppercase tracking-widest">Key Features</p>
        <ul className="grid grid-cols-1 gap-1">
          {course.features.map((feature, index) => (
            <li key={index} className="text-sm text-slate flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-6 border-t border-navy/5 flex items-center justify-between">
        <span className="text-xs font-bold text-slate uppercase">{course.duration}</span>
        <button className="text-gold font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
          Know More <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  );
};

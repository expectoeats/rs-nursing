"use client";

import React, { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

interface StatProps {
  value: string;
  label: string;
  suffix?: string;
}

const StatCounter = ({ value, label, suffix = "" }: StatProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/\D/g, "")) || 0;

  useEffect(() => {
    if (!isInView || target === 0) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  const displayValue = target === 0 ? value : `${count}${suffix}`;

  return (
    <div ref={ref} className="flex flex-col items-center text-center py-8 px-4">
      <div className="text-4xl md:text-5xl font-black text-white mb-2">
        {displayValue}
      </div>
      <div className="text-white/80 text-sm font-semibold uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

export const StatsSection = () => {
  const stats = [
    { value: "500", suffix: "+", label: "Students Enrolled" },
    { value: "382", suffix: "+", label: "Google Reviews" },
    { value: "10", suffix: "+", label: "Subjects Covered" },
    { value: "4.9", suffix: "★", label: "Google Rating" },
  ];

  return (
    <section className="bg-[#E8450A]">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
          {stats.map((stat, i) => (
            <StatCounter key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

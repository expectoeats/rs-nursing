"use client";

import React from "react";

const items = [
  "Spoken English",
  "IELTS Preparation",
  "Basic English",
  "Advanced English & Grammar",
  "Communication Skills",
  "Free Demo Classes",
  "English Master Institute",
  "Mathura, UP",
  "Aurangabad Township, Mathura",
];

export const MarqueeTicker = () => {
  return (
    <div className="bg-[#FF6B00] py-3 overflow-hidden relative z-20">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            {items.map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="text-white font-semibold text-sm uppercase tracking-[0.15em] px-6">
                  {item}
                </span>
                <span className="text-white/50 text-lg">★</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

"use client";

import React from "react";
import { Phone, GraduationCap } from "lucide-react";

export const ContactCTA = () => {
  return (
    <section className="py-14 bg-white">
      <div className="section-container">
        <div className="bg-[#F8F8F8] rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-100">
          {/* Left */}
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-[#E8450A] rounded-full flex items-center justify-center shrink-0">
              <GraduationCap size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-navy mb-1">
                Get in Touch With Our Counseling Team
              </h3>
              <p className="text-slate text-sm">
                Free counseling session available. Talk to our nursing experts today.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="tel:+919672848848"
              className="flex items-center gap-2 bg-[#E8450A] text-white font-semibold px-7 py-3 rounded hover:bg-[#C73D09] transition-colors"
            >
              <Phone size={18} /> Call Us Now
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 border-2 border-[#E8450A] text-[#E8450A] font-semibold px-7 py-3 rounded hover:bg-[#E8450A] hover:text-white transition-colors"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, ArrowRight, Mail, Share2, PlayCircle, Camera } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#111111] pt-16 pb-6 relative overflow-hidden">
      {/* Top orange line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF6B00]" />

      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center text-white font-black text-xl shrink-0">
                RC
              </div>
              <div>
                <div className="font-bold text-white text-lg leading-tight">
                  Rama Coaching Center
                </div>
                <div className="text-[#FF6B00] text-xs font-semibold">
                  Coaching & Computer Education · Fatehpur, UP
                </div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Fatehpur&apos;s trusted coaching for all competitive exams — SSC, Railway, UP Police, Bank & more — along with complete computer education. Dedicated to producing top government professionals with complete library facility.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#FF6B00] hover:text-white transition-all"
              >
                <Share2 size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#FF6B00] hover:text-white transition-all"
              >
                <Camera size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#FF6B00] hover:text-white transition-all"
              >
                <PlayCircle size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-xs after:block after:w-8 after:h-0.5 after:bg-[#FF6B00] after:mt-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Courses", href: "#courses" },
                { label: "Faculty", href: "#faculty" },
                { label: "Results", href: "#results" },
                { label: "Contact Us", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-[#FF6B00] transition-colors flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight
                      size={13}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Courses */}
          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-xs after:block after:w-8 after:h-0.5 after:bg-[#FF6B00] after:mt-2">
              Our Courses
            </h4>
            <ul className="space-y-3">
              {[
                "SSC / CGL / CHSL",
                "Railway / NTPC / Group D",
                "UP Police / SI",
                "Bank PO / Clerk",
                "UPSSSC / Lekhpal",
                "Computer Education (CCC / O Level)",
                "Current Affairs & GK",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#courses"
                    className="text-white/50 hover:text-[#FF6B00] transition-colors flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight
                      size={13}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-xs after:block after:w-8 after:h-0.5 after:bg-[#FF6B00] after:mt-2">
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <MapPin className="text-[#FF6B00] shrink-0 mt-0.5" size={18} />
                <span className="text-white/50 text-sm leading-relaxed">
                  यूपीएचसी, Andauli Puliya, UPHC, Ghazipur Rd<br />
                  Radha Nagar, Harihar Ganj, Fatehpur, UP 212601
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-[#FF6B00] shrink-0" size={18} />
                <a
                  href="tel:+918299121689"
                  className="text-white/50 text-sm hover:text-white transition-colors"
                >
                  082991 21689
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="text-[#FF6B00] shrink-0" size={18} />
                <a
                  href="https://ramaedu.co.in"
                  className="text-white/50 text-sm hover:text-white transition-colors"
                >
                  ramaedu.co.in
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="text-[#FF6B00] shrink-0" size={18} />
                <span className="text-white/50 text-sm">Open Daily · Closes 8 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map strip */}
        <div className="rounded-xl overflow-hidden mb-10 border border-white/10" style={{ height: "200px" }}>
          <iframe
            src="https://www.google.com/maps?q=Rama+Coaching+Center+And+Computer+Education+Center,+Andauli+Puliya,+UPHC,+Ghazipur+Rd,+Radha+Nagar,+Harihar+Ganj,+Fatehpur,+Uttar+Pradesh+212601&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-white/30 text-xs">
          <p>© 2024 Rama Coaching Center And Computer Education Center. All Rights Reserved.</p>
          <p>Radha Nagar, Harihar Ganj, Fatehpur, Uttar Pradesh</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-[#FF6B00] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#FF6B00] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

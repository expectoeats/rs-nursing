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
                KS
              </div>
              <div>
                <div className="font-bold text-white text-lg leading-tight">
                  Kautilya Study Circle
                </div>
                <div className="text-[#FF6B00] text-xs font-semibold">
                  Competitive Excellence · Gonda, UP
                </div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Gonda&apos;s trusted coaching for all competitive exams — SSC, Railway, UP Police, Bank & more. Dedicated to producing top government professionals with complete library facility.
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
                  Opposite Bandhan Bank, Bahraich Gonda Road<br />
                  Near Roadways Bus Stand, Azad Nagar, Gonda, UP 271001
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-[#FF6B00] shrink-0" size={18} />
                <a
                  href="tel:+919532206171"
                  className="text-white/50 text-sm hover:text-white transition-colors"
                >
                  095322 06171
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="text-[#FF6B00] shrink-0" size={18} />
                <span className="text-white/50 text-sm">
                  Kautilya Study Circle, Gonda
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="text-[#FF6B00] shrink-0" size={18} />
                <span className="text-white/50 text-sm">Open 24 Hours</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map strip */}
        <div className="rounded-xl overflow-hidden mb-10 border border-white/10" style={{ height: "200px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.0!2d81.9600!3d27.1333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399fdb4a00000001%3A0x0!2zS2F1dGlseWEgU3R1ZHkgQ2lyY2xlLCBHb25kYQ!5e0!3m2!1sen!2sin!4v1713690000000!5m2!1sen!2sin"
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
          <p>© 2024 Kautilya Study Circle. All Rights Reserved.</p>
          <p>Azad Nagar, Gonda, Uttar Pradesh</p>
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

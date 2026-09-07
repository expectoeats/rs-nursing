"use client";

import React from "react";
import { Phone, MapPin, Clock, Send, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-[#F8F8F8]">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-[#FF6B00] font-semibold text-sm uppercase tracking-widest mb-2">
            Reach Out
          </p>
          <h2 className="section-title-center mb-4">Get In Touch</h2>
          <p className="text-slate max-w-xl mx-auto text-sm mt-4">
            Have questions about admission or courses? Our team is here to help you.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10">
          {/* Left: Info + Map */}
          <div className="space-y-6">
            {/* Info cards */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center shrink-0">
                <MapPin size={22} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-navy mb-1">Our Location</h4>
                <p className="text-slate text-sm leading-relaxed">
                  JRRF+267, Officer&apos;s Colony,<br />
                  Pilibhit, Uttar Pradesh 262001
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center shrink-0">
                <Phone size={22} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-navy mb-1">Call Us</h4>
                <a
                  href="tel:+919627597251"
                  className="text-[#FF6B00] font-bold text-xl hover:underline"
                >
                  91 96275 97251
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center shrink-0">
                <Clock size={22} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-navy mb-1">Opening Hours</h4>
                <p className="text-slate text-sm">Open 24 Hours · Classes Morning & Evening</p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border-2 border-gray-100 shadow-sm" style={{ height: "220px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.0!2d79.8000!3d28.6333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a000000000001%3A0x0!2zTGluY29sbiBDb2FjaGluZyBDZW50cmUsIE9mZmljZXIncyBDb2xvbnksIFBpbGliaGl0!5e0!3m2!1sen!2sin!4v1713690000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-navy mb-6">Admission Inquiry</h3>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B00] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B00] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B00] transition-colors"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate mb-2">
                    Target Class
                  </label>
                  <select className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B00] transition-colors bg-white">
                    <option>Class 1st – 10th (All Subjects)</option>
                    <option>Class 11th – 12th (PCMB)</option>
                    <option>Class 11th – 12th (Ag)</option>
                    <option>B.Sc (PCM / ZBC)</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate mb-2">
                    Admission Type
                  </label>
                  <select className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B00] transition-colors bg-white">
                    <option>New Admission</option>
                    <option>Continuing Student</option>
                    <option>Transfer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B00] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF6B00] text-white font-bold py-3.5 rounded flex items-center justify-center gap-2 hover:bg-[#E25900] transition-colors"
              >
                <Send size={18} /> Submit Inquiry
              </button>

              <div className="text-center pt-2 border-t border-gray-100">
                <p className="text-slate text-xs mb-1">Or call directly:</p>
                <a
                  href="tel:+919627597251"
                  className="text-navy font-bold text-lg hover:text-[#FF6B00] transition-colors"
                >
                  91 96275 97251
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

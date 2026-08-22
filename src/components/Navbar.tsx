"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  {
    name: "Courses",
    href: "#courses",
    dropdown: ["GNM Nursing", "ANM Nursing", "B.Sc Nursing", "Staff Nurse Exam"],
  },
  { name: "Faculty", href: "#faculty" },
  { name: "Results", href: "#results" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact Us", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#E8450A] text-white text-sm py-1.5 hidden md:block">
        <div className="section-container flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Phone size={13} />
            Call Us: 096728 48848
          </span>
          <span>RS Nursing Career Point | Bashratpur, Gorakhpur, Uttar Pradesh</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="section-container flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#E8450A] rounded-full flex items-center justify-center text-white font-bold text-xl">
              RS
            </div>
            <div>
              <div className="font-bold text-navy text-lg leading-tight">
                RS Nursing Career Point
              </div>
              <div className="text-[11px] text-[#E8450A] font-semibold uppercase tracking-wide">
                Nursing Excellence · Gorakhpur, UP
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 text-[15px] font-medium text-navy hover:text-[#E8450A] transition-colors"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} />}
                </Link>
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 bg-white shadow-lg border-t-2 border-[#E8450A] min-w-[160px] z-50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item}
                        href="#courses"
                        className="block px-4 py-2.5 text-sm text-navy hover:bg-[#E8450A] hover:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="#contact"
              className="bg-[#E8450A] text-white px-5 py-2 font-semibold text-sm rounded hover:bg-[#C73D09] transition-colors"
            >
              Admission Open
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-navy p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2.5 px-3 text-navy font-medium hover:text-[#E8450A] hover:bg-orange-50 rounded transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-3 bg-[#E8450A] text-white px-5 py-2.5 font-semibold text-center rounded"
              >
                Admission Open
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

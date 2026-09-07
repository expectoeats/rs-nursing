"use client";

import React from "react";
import { Star } from "lucide-react";
// 
const believers = [
  {
    name: "Aditya Jaiswal",
    role: "Class 10 – CBSE",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop&facepad=2",
    stars: 5,
  },
  {
    name: "Shikha Pal",
    role: "Class 12 PCMB – U.P. Board",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop&facepad=2",
    stars: 5,
  },
  {
    name: "Rahul Kumar",
    role: "Class 12 Ag – CBSE",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop&facepad=2",
    stars: 5,
  },
  {
    name: "Priya Singh",
    role: "B.Sc ZBC – 2nd Year",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop&facepad=2",
    stars: 5,
  },
  {
    name: "Vivek Mishra",
    role: "Class 10 – ICSE",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop&facepad=2",
    stars: 5,
  },
  {
    name: "Anita Verma",
    role: "B.Sc PCM – Final Year",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop&facepad=2",
    stars: 5,
  },
];

export const BelieversSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-10">
          <p className="text-[#FF6B00] font-semibold text-sm uppercase tracking-widest mb-2">
            Our Community
          </p>
          <h2 className="section-title-center mb-4">Meet Our Believers</h2>
          <p className="text-slate max-w-xl mx-auto text-sm mt-4">
            Hundreds of students from Pilibhit trust Lincoln Coaching Centre for their academic journey. Here are some of our proud students.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {believers.map((person, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              {/* Photo */}
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-transparent group-hover:border-[#FF6B00] transition-colors duration-300 mb-3 shadow-md">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Stars */}
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, s) => (
                  <Star
                    key={s}
                    size={10}
                    className={s < person.stars ? "text-[#FF6B00] fill-[#FF6B00]" : "text-gray-300 fill-gray-300"}
                  />
                ))}
              </div>
              <p className="text-navy font-semibold text-sm">{person.name}</p>
              <p className="text-muted text-xs">{person.role}</p>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-10">
          <p className="text-slate text-sm">
            Join <span className="text-[#FF6B00] font-bold">500+ students</span> who trust Lincoln Coaching Centre for their academic success.
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 bg-[#FF6B00] text-white font-semibold px-8 py-3 rounded hover:bg-[#E25900] transition-colors"
          >
            Join Our Community
          </a>
        </div>
      </div>
    </section>
  );
};

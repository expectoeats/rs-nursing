"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { Review } from "@/lib/reviewsData";

export const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="bg-navy p-8 md:p-10 rounded-xl relative overflow-hidden h-full flex flex-col">
      <Quote className="absolute -top-4 -right-4 w-24 h-24 text-gold opacity-10 rotate-12" />
      
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < review.stars ? "fill-gold text-gold" : "text-slate"}
          />
        ))}
      </div>

      <p className="text-lg text-white/90 leading-relaxed italic mb-8 relative z-10">
        "{review.text}"
      </p>

      <div className="mt-auto flex items-center justify-between">
        <div>
          <h4 className="text-white font-bold text-lg">{review.name}</h4>
          <p className="text-muted text-sm">{review.time}</p>
        </div>
        <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold font-bold">
          {review.name[0]}
        </div>
      </div>
    </div>
  );
};

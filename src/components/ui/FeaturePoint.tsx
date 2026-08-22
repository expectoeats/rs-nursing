"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeLeft } from "@/lib/animations";

interface FeaturePointProps {
  icon: string;
  title: string;
  description: string;
}

export const FeaturePoint = ({ icon, title, description }: FeaturePointProps) => {
  return (
    <motion.div variants={fadeLeft} className="flex gap-4 p-4 rounded-lg hover:bg-white/50 transition-colors">
      <div className="text-2xl shrink-0">{icon}</div>
      <div>
        <h4 className="font-bold text-navy mb-1">{title}</h4>
        <p className="text-sm text-slate leading-snug">{description}</p>
      </div>
    </motion.div>
  );
};

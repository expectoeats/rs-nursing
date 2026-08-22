"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  light?: boolean;
}

export const SectionHeader = ({ title, subtitle, light = false }: SectionHeaderProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="mb-12"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
        <h2 className={`text-3xl md:text-4xl font-bold ${light ? "text-white" : "text-navy"}`}>
          {title}
        </h2>
        <span className={`text-xl md:text-2xl ${light ? "text-gold/80" : "text-gold"}`}>
          {subtitle}
        </span>
      </div>
      <div className="w-24 h-1 bg-gradient-to-r from-gold to-transparent" />
    </motion.div>
  );
};

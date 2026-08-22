"use client";

import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  children: React.ReactNode;
}

export const Button = ({ variant = "primary", className, children, ...props }: ButtonProps) => {
  const variants = {
    primary: "bg-gold text-navy hover:bg-gold/90",
    outline: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
    ghost: "bg-transparent text-white border-white/30 border hover:bg-white/10",
  };

  return (
    <button
      className={cn(
        "px-8 py-3 rounded-sm font-semibold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

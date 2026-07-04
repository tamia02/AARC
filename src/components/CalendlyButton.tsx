"use client";

import React from "react";

interface CalendlyButtonProps {
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "underline";
  text?: string;
  onClick?: () => void;
}

export default function CalendlyButton({
  className = "",
  variant = "primary",
  text = "Book a Free Consultation",
  onClick,
}: CalendlyButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) onClick();
    if (typeof window !== "undefined") {
      if ((window as any).Calendly) {
        (window as any).Calendly.initPopupWidget({
          url: "https://calendly.com/aarcsmartbookkeeping/30min",
        });
      } else {
        window.open("https://calendly.com/aarcsmartbookkeeping/30min", "_blank");
      }
    }
  };

  const baseStyles = "font-sans transition-all duration-300 inline-block text-center select-none cursor-pointer tracking-widest uppercase font-bold text-[12px]";
  
  const variants = {
    primary: "bg-[#CFA550] text-[#1b1c1c] hover:scale-105 active:scale-95 shadow-lg",
    secondary: "border border-[#CFA550] text-[#CFA550] hover:bg-[#CFA550]/10 hover:scale-105 active:scale-95",
    outline: "border border-[#CFA550] text-[#CFA550] hover:bg-[#CFA550]/10 hover:scale-105 active:scale-95",
    underline: "text-[#CFA550] hover:text-[#b58d3e] border-b-2 border-[#CFA550] pb-0.5",
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {text}
    </button>
  );
}

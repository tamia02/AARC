"use client";

import React, { useState } from "react";

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
  const [isLoading, setIsLoading] = useState(false);

  const preloadCalendly = () => {
    if (typeof window !== "undefined" && !(window as any).Calendly) {
      const scriptId = "calendly-external-script";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) onClick();
    if (typeof window !== "undefined") {
      if ((window as any).Calendly) {
        (window as any).Calendly.initPopupWidget({
          url: "https://calendly.com/aarcsmartbookkeeping/30min",
        });
      } else {
        setIsLoading(true);
        preloadCalendly();

        const startTime = Date.now();
        const interval = setInterval(() => {
          if ((window as any).Calendly) {
            clearInterval(interval);
            setIsLoading(false);
            (window as any).Calendly.initPopupWidget({
              url: "https://calendly.com/aarcsmartbookkeeping/30min",
            });
          } else if (Date.now() - startTime > 3000) {
            clearInterval(interval);
            setIsLoading(false);
            window.open("https://calendly.com/aarcsmartbookkeeping/30min", "_blank");
          }
        }, 100);
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
      onMouseEnter={preloadCalendly}
      onFocus={preloadCalendly}
      disabled={isLoading}
      className={`${baseStyles} ${variants[variant]} ${className} ${isLoading ? "opacity-75 cursor-wait" : ""}`}
    >
      {isLoading ? "Loading..." : text}
    </button>
  );
}

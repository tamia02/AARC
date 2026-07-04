import React from "react";

interface LogoProps {
  className?: string;
  lightBackground?: boolean;
}

export default function Logo({ className = "", lightBackground = false }: LogoProps) {
  // Custom logo rendering the black background version (as requested by the user):
  // - Gold monogram (#CFA550)
  // - White text for "A A R C" (or dark if lightBackground is explicitly true)
  // - Gold text and lines for "SMART BOOKKEEPING"
  const textColor = lightBackground ? "text-[#0D0D0D]" : "text-white";
  const lineColor = "bg-[#CFA550]";
  
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {/* Gold Monogram SVG - Faithfully Reconstructed from the Brand Guidelines */}
      <svg
        viewBox="0 0 100 85"
        className="w-16 h-14"
        fill="none"
        stroke="#CFA550"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Left outer leg */}
        <line x1="50" y1="8" x2="20" y2="75" />
        
        {/* Right leg */}
        <line x1="50" y1="8" x2="80" y2="75" />
        
        {/* Left inner parallel leg */}
        <line x1="41" y1="27" x2="29" y2="55" />
        
        {/* Left leg base */}
        <line x1="20" y1="75" x2="35" y2="75" />
        
        {/* Inner left diagonal going up-right */}
        <line x1="35" y1="75" x2="52" y2="38" />
        
        {/* Right leg base hook */}
        <line x1="80" y1="75" x2="65" y2="75" />
        
        {/* Horizontal crossbar */}
        <line x1="33" y1="48" x2="68" y2="48" />
      </svg>

      {/* A A R C text with high-contrast elegant serif font styling and letter-spacing */}
      <span className={`text-2xl font-serif tracking-[0.45em] font-medium uppercase mt-2 pl-[0.45em] ${textColor}`}>
        AARC
      </span>

      {/* Flanked SMART BOOKKEEPING text with gold lines */}
      <div className="flex items-center justify-center space-x-2 mt-1 w-full max-w-[240px]">
        <div className={`h-[1px] w-6 ${lineColor}`} />
        <span className="text-[9px] tracking-[0.25em] text-[#CFA550] uppercase font-sans font-bold whitespace-nowrap">
          Smart Bookkeeping
        </span>
        <div className={`h-[1px] w-6 ${lineColor}`} />
      </div>
    </div>
  );
}

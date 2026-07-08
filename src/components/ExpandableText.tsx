"use client";

import { useState } from "react";

interface ExpandableTextProps {
  text: string;
  maxLength?: number;
  className?: string;
}

export default function ExpandableText({ text, maxLength = 250, className = "" }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= maxLength) {
    return <span className={className}>{text}</span>;
  }

  const truncated = text.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(" ");
  const displayText = isExpanded ? text : `${truncated.substring(0, lastSpaceIndex)}...`;

  return (
    <span className={className}>
      {displayText}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-primary font-bold ml-2 hover:underline text-xs"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </span>
  );
}

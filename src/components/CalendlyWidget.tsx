"use client";

import React, { useEffect } from "react";

export default function CalendlyWidget() {
  useEffect(() => {
    const initWidget = () => {
      if (typeof window !== "undefined" && (window as any).Calendly) {
        (window as any).Calendly.initInlineWidget({
          url: "https://calendly.com/aarcsmartbookkeeping/30min",
          parentElement: document.getElementById("calendly-inline-container"),
        });
      }
    };

    // Attempt to load widget. If script loads later, it will be handled or we retry
    const timer = setTimeout(initWidget, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="calendly-inline-container"
      className="w-full bg-white rounded-lg shadow-inner overflow-hidden border border-gray-100"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}

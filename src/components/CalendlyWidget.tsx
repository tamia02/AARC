"use client";

import React, { useEffect } from "react";

export default function CalendlyWidget() {
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const initWidget = (): boolean => {
      if (typeof window !== "undefined" && (window as any).Calendly) {
        const parentElement = document.getElementById("calendly-inline-container");
        if (parentElement) {
          (window as any).Calendly.initInlineWidget({
            url: "https://calendly.com/aarcsmartbookkeeping/30min",
            parentElement,
          });
          return true;
        }
      }
      return false;
    };

    // Attempt to load widget immediately
    const initialized = initWidget();

    if (!initialized) {
      // Poll every 100ms if not loaded yet
      intervalId = setInterval(() => {
        if (initWidget()) {
          clearInterval(intervalId);
        }
      }, 100);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      id="calendly-inline-container"
      className="w-full bg-white rounded-lg shadow-inner overflow-hidden border border-gray-100"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}

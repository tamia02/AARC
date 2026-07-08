"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CalendlyButton from "./CalendlyButton";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {/* ── Navbar Bar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-500 py-4 ${
          isScrolled
            ? "bg-[#303030] shadow-xl text-white"
            : "bg-transparent text-on-surface"
        }`}
        id="navbar"
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 select-none cursor-pointer min-w-0 flex-1 mr-2">
            <img
              alt="AARC Logo"
              className="h-12 w-auto object-contain flex-shrink-0"
              src="/logo-transparent.png"
            />
            <div className="flex flex-col justify-center mt-1">
              <span className="font-serif leading-tight text-primary font-bold text-[20px] md:text-[24px] whitespace-nowrap uppercase tracking-widest">
                AARC
              </span>
              <span className="font-sans text-[#CFA550] uppercase font-bold text-[12px] md:text-[14px] tracking-[0.2em] whitespace-nowrap -mt-1">
                Smart Bookkeeping
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`font-sans text-label-caps uppercase tracking-widest text-[12px] font-bold transition-all duration-300 hover:scale-105 cursor-pointer pb-1 ${
                    isActive
                      ? "text-primary border-b-2 border-primary"
                      : isScrolled
                      ? "text-white hover:text-primary"
                      : "text-on-surface hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <CalendlyButton
              variant="primary"
              text="Get Started"
              className="px-6 py-3 font-sans text-label-caps uppercase rounded-none shadow-lg text-[12px] tracking-wider"
            />
          </div>

          {/* Hamburger Button — always on top, always clickable */}
          <button
            onClick={() => setIsOpen(true)}
            className={`md:hidden relative z-[60] flex items-center justify-center w-12 h-12 select-none touch-manipulation ${
              isOpen ? "hidden" : isScrolled ? "text-white" : "text-primary"
            }`}
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined text-[30px]">menu</span>
          </button>
        </div>
      </nav>

      {/* ── Mobile Full-Screen Menu (rendered outside <nav> to avoid z-index conflicts) ── */}
      {/* Backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-[55] bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Panel — pure black, no scroll bar */}
      <div
        className={`md:hidden fixed inset-0 z-[60] bg-black flex flex-col overflow-hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {/* Header row */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 select-none"
          >
            <img
              alt="AARC Logo"
              className="h-12 w-auto object-contain flex-shrink-0"
              src="/logo-transparent.png"
            />
            <div className="flex flex-col justify-center mt-1">
              <span className="font-serif leading-tight text-primary font-bold text-[20px] whitespace-nowrap uppercase tracking-widest">
                AARC
              </span>
              <span className="font-sans text-[#CFA550] uppercase font-bold text-[12px] tracking-[0.2em] whitespace-nowrap -mt-1">
                Smart Bookkeeping
              </span>
            </div>
          </Link>
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-white w-12 h-12 flex items-center justify-center select-none touch-manipulation"
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-[30px]">close</span>
          </button>
        </div>

        {/* Nav Links — centered, no scroll bar */}
        <div className="flex-1 flex flex-col justify-center px-8 gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-sans uppercase tracking-widest text-[18px] font-bold py-5 border-b border-white/10 transition duration-200 touch-manipulation ${
                  isActive ? "text-primary" : "text-white hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA at bottom */}
        <div className="px-8 pb-12 pt-6">
          <CalendlyButton
            variant="primary"
            text="Book a Free Consultation"
            className="w-full text-center py-5 font-sans uppercase rounded-none shadow-lg text-[13px] tracking-wider"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </div>
    </>
  );
}

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
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
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
        <Link href="/" className="flex items-center gap-2 select-none cursor-pointer min-w-0 flex-1 mr-2">
          <img
            alt="AARC Logo"
            className="h-9 w-auto object-contain flex-shrink-0"
            src="/logo-transparent.png"
          />
          <span className="font-serif leading-tight text-primary font-bold text-[13px] md:text-[15px] whitespace-nowrap">
            AARC Smart Bookkeeping
          </span>
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

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden flex items-center justify-center w-11 h-11 rounded-full select-none touch-manipulation ${
            isScrolled ? "text-white" : "text-primary"
          }`}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[28px]">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Full-Screen Menu Overlay */}
      {/* Dark backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />
      {/* Menu panel — full screen on mobile */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-[#111111] flex flex-col transition-transform duration-400 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 select-none"
          >
            <img
              alt="AARC Logo"
              className="h-10 w-auto object-contain flex-shrink-0"
              src="/logo-transparent.png"
            />
            <span className="font-serif leading-tight text-primary font-bold text-[15px]">
              AARC Smart Bookkeeping
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white w-11 h-11 flex items-center justify-center select-none"
          >
            <span className="material-symbols-outlined text-[28px]">close</span>
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex-1 overflow-y-auto px-6 pt-6 pb-10 flex flex-col space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-sans uppercase tracking-widest text-[16px] font-bold py-5 px-4 border-b border-white/10 transition duration-300 touch-manipulation ${
                  isActive ? "text-primary" : "text-white hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-6">
            <CalendlyButton
              variant="primary"
              text="Book a Free Consultation"
              className="w-full text-center py-5 font-sans text-label-caps uppercase rounded-none shadow-lg text-[13px] tracking-wider"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

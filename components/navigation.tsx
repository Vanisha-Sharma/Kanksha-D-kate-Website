"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import BrandLogo from "./brand-logo";

export default function Navigation(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-stone-500/30 shadow-lg shadow-stone-500/10"
          : "bg-black/60 backdrop-blur-sm border-b border-stone-500/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between h-20 sm:h-24 relative">
          {/* Left Nav */}
          <div className="flex gap-5 flex-1 justify-start">
            {[
              { href: "/", label: "HOME" },
              { href: "/about", label: "ABOUT" },
              { href: "/programs", label: "PROGRAMS" },
              { href: "/voice-of-kanksha", label: "VOICE OF KANKSHA" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-gray-300 hover:text-stone-300 px-1 py-2 text-xs font-medium transition-all duration-300 group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-professional-gradient transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 transform z-20 h-12">
            <div className="h-full flex items-center">
              <BrandLogo className="h-full w-auto object-contain" />
            </div>
          </div>

          {/* Right Nav */}
          <div className="flex gap-4 flex-1 justify-end">
            {[
              { href: "/feedback", label: "WHISPERS OF CHANGE" },
              { href: "/events", label: "EVENTS" },
              { href: "/credibility", label: "RESEARCH" },
              { href: "/articles", label: "ARTICLES" },
              { href: "/contact", label: "CONTACT" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-gray-300 hover:text-stone-300 px-1 py-2 text-xs font-medium transition-all duration-300 group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-professional-gradient transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Top Bar */}
        <div className="lg:hidden relative flex items-center justify-center h-20 sm:h-24">
          <div className="absolute left-1/2 -translate-x-1/2 transform">
            <div className="hover:scale-105 transition-transform duration-300">
              <BrandLogo />
            </div>
          </div>
          <div className="absolute right-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-stone-400 hover:bg-stone-500/10 transition-all duration-300 h-10 w-10"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md border-t border-stone-500/20">
          {[
            { href: "/", label: "HOME" },
            { href: "/about", label: "ABOUT" },
            { href: "/programs", label: "PROGRAMS" },
            { href: "/voice-of-kanksha", label: "VOICE OF KANKSHA" },
            { href: "/feedback", label: "WHISPERS OF CHANGE" },
            { href: "/events", label: "EVENTS" },
            { href: "/credibility", label: "RESEARCH" },
            { href: "/articles", label: "ARTICLES" },
            { href: "/contact", label: "CONTACT" },
          ].map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-stone-400 hover:bg-stone-500/10 block px-3 py-3 text-sm font-bold transition-all duration-300 rounded-lg"
              onClick={() => setIsOpen(false)}
              style={{
                animationDelay: `${index * 50}ms`,
                transform: isOpen ? "translateX(0)" : "translateX(-20px)",
                opacity: isOpen ? 1 : 0,
                transition: `all 0.3s ease ${index * 50}ms`,
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export { Navigation };

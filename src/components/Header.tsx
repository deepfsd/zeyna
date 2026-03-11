"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          ZEYNA<span className="text-rose-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
          <Link href="#about" className="hover:text-rose-500 transition-colors">
            About
          </Link>
          <Link href="#services" className="hover:text-rose-500 transition-colors">
            Services
          </Link>
          <Link href="#portfolio" className="hover:text-rose-500 transition-colors">
            Work
          </Link>
          <Link href="#contact" className="hover:text-rose-500 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass flex flex-col items-center py-6 space-y-6 text-lg uppercase tracking-widest font-medium border-t border-white/10">
          <Link
            href="#about"
            className="hover:text-rose-500 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#services"
            className="hover:text-rose-500 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#portfolio"
            className="hover:text-rose-500 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Work
          </Link>
          <Link
            href="#contact"
            className="hover:text-rose-500 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

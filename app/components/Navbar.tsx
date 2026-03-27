"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Strategy", href: "#strategy" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1A1A1A]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo + Available indicator */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span
              className="text-white font-bold tracking-widest text-sm uppercase group-hover:text-[#D4A853] transition-colors duration-200"
              style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
            >
              KARASOV
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span
                className="text-xs text-green-400 hidden sm:block"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Available
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-[#888888] hover:text-white text-sm tracking-wide transition-colors duration-200 cursor-pointer"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="block h-px w-6 bg-white origin-center"
              animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-px w-6 bg-white"
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-px w-6 bg-white origin-center"
              animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white text-4xl font-bold tracking-tight hover:text-[#D4A853] transition-colors duration-200 cursor-pointer"
                    style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

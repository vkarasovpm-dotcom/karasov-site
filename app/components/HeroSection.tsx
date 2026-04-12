"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  const heroRef = useRef<HTMLElement>(null);
  const bgParallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (!heroRef.current || !bgParallaxRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        bgParallaxRef.current.style.transform = `translateY(${-rect.top * 0.15}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center py-24 md:py-0 overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Parallax bg image */}
        <div ref={bgParallaxRef} className="absolute" style={{ inset: "-20%" }}>
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.12]"
            priority
          />
        </div>
        {/* Radial amber glow centered behind left text column */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 600px 400px at 30% 50%, rgba(212,168,83,0.06), transparent)",
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 50%, rgba(10,10,10,0.7) 100%)",
          }}
        />
        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 md:gap-16 items-center">

          {/* Portrait — first in DOM (top on mobile), right on desktop */}
          <motion.div
            className="order-first md:order-last flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <div
              className="relative w-[200px] h-[260px] md:w-[320px] md:h-[420px] lg:w-[380px] lg:h-[480px] rounded-2xl overflow-hidden flex-shrink-0"
              style={{
                border: "2px solid rgba(212,168,83,0.2)",
                boxShadow: "0 0 60px rgba(212,168,83,0.08)",
              }}
            >
              <Image
                src="/images/portrait-hero.jpg"
                alt="Vitalii Karasov"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Text — second in DOM (bottom on mobile), left on desktop */}
          <div className="order-last md:order-first flex flex-col gap-4 text-center md:text-left">
            {/* Name — staggered lines */}
            <h1
              className="text-white leading-none"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 700,
                fontSize: "clamp(4rem, 12vw, 9rem)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                textShadow: "0 0 80px rgba(212,168,83,0.15)",
              }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease }}
              >
                VITALII
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25, ease }}
              >
                KARASOV
              </motion.span>
            </h1>

            {/* Tagline line 1 */}
            <motion.p
              className="text-xl md:text-2xl text-white/80 leading-snug"
              style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400 }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease }}
            >
              I build AI-powered systems that replace manual workflows.
            </motion.p>

            {/* Tagline line 2 */}
            <motion.p
              className="text-lg md:text-xl text-white/60 leading-snug"
              style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400 }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease }}
            >
              Product Manager who ships — from problem definition to working system. No dev team. Usually takes days.
            </motion.p>

            {/* Tags */}
            <motion.p
              className="text-base text-[#999999] tracking-[0.08em] uppercase"
              style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75, ease }}
            >
              PRODUCT MANAGER&nbsp;·&nbsp;AI ENGINEER&nbsp;·&nbsp;PRINCE2 CERTIFIED
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 pt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease }}
            >
              <motion.button
                onClick={() => scrollTo("#work")}
                className="bg-[#D4A853] text-black font-semibold px-8 py-4 rounded-lg hover:bg-[#E8C46A] transition-colors duration-200 cursor-pointer text-sm tracking-wide w-full sm:w-auto"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                See What I Built ↓
              </motion.button>
              <motion.button
                onClick={() => scrollTo("#contact")}
                className="border border-[#D4A853]/50 text-[#D4A853] px-8 py-4 rounded-lg hover:bg-[#D4A853]/10 transition-colors duration-200 cursor-pointer text-sm tracking-wide w-full sm:w-auto"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Let&apos;s Talk ↓
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-[#D4A853]/50 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}

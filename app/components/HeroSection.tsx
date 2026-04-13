"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function HeroWorkflowBg() {
  const nodes: { cx: number; cy: number; hi: boolean }[] = [
    { cx: 100, cy: 190, hi: false },
    { cx: 340, cy: 150, hi: false },
    { cx: 590, cy: 170, hi: true },
    { cx: 850, cy: 150, hi: false },
    { cx: 1120, cy: 190, hi: false },
    { cx: 100, cy: 390, hi: false },
    { cx: 310, cy: 430, hi: false },
    { cx: 570, cy: 390, hi: true },
    { cx: 830, cy: 420, hi: false },
    { cx: 1080, cy: 390, hi: false },
    { cx: 160, cy: 590, hi: false },
    { cx: 400, cy: 630, hi: false },
    { cx: 650, cy: 590, hi: true },
    { cx: 920, cy: 630, hi: false },
    { cx: 1160, cy: 590, hi: false },
    { cx: 280, cy: 790, hi: false },
    { cx: 540, cy: 810, hi: false },
    { cx: 800, cy: 790, hi: false },
  ];

  const edges = [
    // Row 1
    "M 100,190 C 220,190 220,150 340,150",
    "M 340,150 C 465,150 465,170 590,170",
    "M 590,170 C 720,170 720,150 850,150",
    "M 850,150 C 985,150 985,190 1120,190",
    // Row 2
    "M 100,390 C 205,390 205,430 310,430",
    "M 310,430 C 440,430 440,390 570,390",
    "M 570,390 C 700,390 700,420 830,420",
    "M 830,420 C 955,420 955,390 1080,390",
    // Row 3
    "M 160,590 C 280,590 280,630 400,630",
    "M 400,630 C 525,630 525,590 650,590",
    "M 650,590 C 785,590 785,630 920,630",
    "M 920,630 C 1040,630 1040,590 1160,590",
    // Row 4
    "M 280,790 C 410,790 410,810 540,810",
    "M 540,810 C 670,810 670,790 800,790",
    // Left column vertical
    "M 100,190 C 100,290 100,290 100,390",
    "M 100,390 C 100,490 160,490 160,590",
    "M 160,590 C 160,690 280,690 280,790",
    // Center AI column vertical
    "M 590,170 C 590,280 570,280 570,390",
    "M 570,390 C 570,490 650,490 650,590",
    "M 650,590 C 650,700 540,700 540,810",
    // Second column
    "M 340,150 C 340,290 310,290 310,430",
    "M 310,430 C 310,530 400,530 400,630",
    "M 400,630 C 400,710 280,710 280,790",
    // Fourth column
    "M 850,150 C 850,285 830,285 830,420",
    "M 830,420 C 830,525 920,525 920,630",
    "M 920,630 C 920,710 800,710 800,790",
    // Right column
    "M 1120,190 C 1120,290 1080,290 1080,390",
    "M 1080,390 C 1080,490 1160,490 1160,590",
  ];

  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className="block w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="wfGlow" cx="30%" cy="50%" r="55%">
          <stop offset="0%" stopColor="rgba(212,168,83,0.06)" />
          <stop offset="100%" stopColor="rgba(212,168,83,0)" />
        </radialGradient>
      </defs>
      <rect width="1440" height="900" fill="url(#wfGlow)" />
      {edges.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="rgba(212,168,83,0.07)" strokeWidth="1" />
      ))}
      {nodes.map((n, i) => (
        <rect
          key={i}
          x={n.cx - 40}
          y={n.cy - 15}
          width={80}
          height={30}
          rx={6}
          fill={n.hi ? "rgba(212,168,83,0.05)" : "rgba(212,168,83,0.015)"}
          stroke={n.hi ? "rgba(212,168,83,0.22)" : "rgba(212,168,83,0.09)"}
          strokeWidth={n.hi ? 1.5 : 1}
        />
      ))}
    </svg>
  );
}

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
    <section ref={heroRef} className="relative min-h-screen flex items-center py-16 md:py-0 overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Parallax bg image */}
        <div ref={bgParallaxRef} className="absolute" style={{ inset: "-20%" }}>
          <HeroWorkflowBg />
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
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 md:gap-16 items-center md:translate-y-16">

          {/* Portrait — first in DOM (top on mobile), right on desktop */}
          <motion.div
            className="order-first md:order-last flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <div
              className="relative w-[150px] h-[195px] md:w-[320px] md:h-[420px] lg:w-[380px] lg:h-[480px] rounded-2xl overflow-hidden flex-shrink-0"
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
          <div className="order-last md:order-first flex flex-col gap-6 text-center md:text-left">
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

            <div className="md:h-4" />

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
              Product Manager who ships — from problem definition to working system. No dev team. Takes days, not months.
            </motion.p>

            {/* Tags */}
            <motion.p
              className="text-base text-[#999999] tracking-[0.08em]"
              style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75, ease }}
            >
              AI AUTOMATION ENGINEER&nbsp;·&nbsp;PRODUCT MANAGER&nbsp;·&nbsp;MSc&nbsp;·&nbsp;PRINCE2
            </motion.p>

            <div className="md:h-2" />

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

            {/* Metrics */}
            <motion.p
              className="text-sm text-[#555555] tracking-wide text-center md:text-left"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0, ease }}
            >
              3h → 2min&nbsp;&nbsp;·&nbsp;&nbsp;30 posts for $1&nbsp;&nbsp;·&nbsp;&nbsp;GTM plan in &lt;5min
            </motion.p>
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

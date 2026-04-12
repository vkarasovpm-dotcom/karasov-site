"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const timeline = [
  {
    year: "2026 — Present",
    role: "AI Automation Engineer — Independent",
    desc: "Scoping, building, and deploying AI automation systems for founders and small teams.\n\nMulti-agent research (3h → 2min) · AI content engine (30 posts for $1) · Market intelligence (<5min to GTM) · Lead qualification (5 sec/lead).",
  },
  {
    year: "2025",
    role: "Product Manager & AI Lead — Human Gambit Media",
    desc: "Built content production pipeline. Automated asset tagging and assignment.\n−10 hours/week manual overhead · −30% turnaround time.\nLed distributed team across multiple time zones.\nZero rendering errors on broadcast delivery.",
  },
  {
    year: "2023",
    role: "Product Manager — Imperium Academy (EdTech)",
    desc: "Launched EdTech platform 0→1. Users across US, EU, and Asia.\n+15% user retention via GA4-driven onboarding optimization.\nMulti-market expansion: GDPR/COPPA compliance.",
  },
  {
    year: "2022",
    role: "Crisis Project Manager — SOS Children's Villages",
    desc: "1.5M+ PLN portfolio · 2,000+ international entities.\nZero non-compliance findings across all UN/EU audits.\n−95% processing errors.\nCoordinated in 4 languages: EN, PL, UA, RU.",
  },
];

function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: { year: string; role: string; desc: string };
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });

  return (
    <div ref={ref} className="relative pl-14 pb-14 last:pb-0">
      {/* Vertical line — gradient from amber (top) to transparent (bottom) */}
      {!isLast && (
        <div
          className="absolute left-[9px] top-4 bottom-0 w-px"
          style={{
            background:
              "linear-gradient(to bottom, rgba(212,168,83,0.4) 0%, rgba(212,168,83,0.08) 50%, rgba(212,168,83,0) 100%)",
          }}
        />
      )}

      {/* Dot */}
      <motion.div
        className="timeline-dot-pulse absolute left-0 top-1 w-5 h-5 rounded-full border-2 border-[#D4A853] bg-[#0A0A0A] cursor-pointer"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.18, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ boxShadow: "0 0 0 4px rgba(212,168,83,0.06)" }}
        whileHover={{ scale: 1.2 }}
      >
        {/* Inner dot */}
        <span className="absolute inset-[3px] rounded-full bg-[#D4A853]/50" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.18 + 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <span
          className="text-[#D4A853] text-xs tracking-[0.2em] mb-2 block"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
        >
          {item.year}
        </span>
        <h3
          className="text-white font-bold text-base md:text-lg mb-2 leading-snug tracking-tight"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          {item.role}
        </h3>
        <p
          className="text-[#666666] text-sm leading-[1.75] whitespace-pre-line"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          {item.desc}
        </p>
      </motion.div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-28 md:py-40 px-6 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-xs text-[#E8C46A]/60 tracking-[0.25em] uppercase mb-4"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Career
        </motion.p>
        <motion.h2
          className="text-section-title text-[#D4A853] mb-16"
          style={{ textShadow: "0 0 30px rgba(212,168,83,0.2)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          EXPERIENCE
        </motion.h2>

        <div className="max-w-2xl">
          {timeline.map((item, i) => (
            <TimelineItem
              key={item.year + item.role}
              item={item}
              index={i}
              isLast={i === timeline.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

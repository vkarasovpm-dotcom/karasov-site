"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    name: "DISCOVERY",
    time: "30 minutes",
    description:
      "You describe the problem. I map the process and identify what's actually worth automating — and what isn't.",
  },
  {
    number: "02",
    name: "ARCHITECTURE",
    time: "1–2 days",
    description:
      "System design before any code. Tool selection with reasoning. You see the blueprint and approve it.",
  },
  {
    number: "03",
    name: "BUILD",
    time: "3–7 days",
    description:
      "Daily progress updates. No black box. Error handling, monitoring, and fallbacks built in from the start — not added later.",
  },
  {
    number: "04",
    name: "DEPLOY + HANDOFF",
    time: null,
    description:
      "Full documentation. The system runs without me. Retainer available for iteration and improvements.",
  },
];

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section id="process" className="py-14 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.p
          className="text-xs text-[#E8C46A]/60 tracking-[0.25em] uppercase mb-4"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Process
        </motion.p>
        <motion.h2
          className="text-section-title text-[#D4A853] mb-14"
          style={{ textShadow: "0 0 30px rgba(212,168,83,0.2)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          HOW I WORK
        </motion.h2>

        {/* Steps */}
        <div ref={ref} className="max-w-3xl flex flex-col">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative pl-10 ${i < steps.length - 1 ? "pb-10 border-l-2 border-[#1A1A1A]" : "pb-0"}`}
            >
              {/* Dot */}
              <span className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-[#D4A853] block" />

              {/* Step header */}
              <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                <span
                  className="text-[#D4A853] font-bold text-base"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  {step.number} — {step.name}
                </span>
                {step.time && (
                  <span
                    className="text-[#555555] text-sm"
                    style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                  >
                    · {step.time}
                  </span>
                )}
              </div>

              {/* Description */}
              <p
                className="text-[#888888] text-sm md:text-base leading-[1.75]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Info box */}
        <motion.div
          className="max-w-3xl mt-12 bg-[#111111] border border-[#1A1A1A] rounded-xl p-6 flex flex-col gap-1 items-center text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="text-white/80 text-sm"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Typical project: 1–3 weeks.
          </p>
          <p
            className="text-[#888888] text-sm"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            I work on 1–2 projects at a time.
          </p>
          <p
            className="text-[#888888] text-sm"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Reply within a few hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

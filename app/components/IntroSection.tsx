"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({
  target,
  suffix = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

type Metric =
  | { type: "count"; target: number; suffix: string; label: string; duration: number }
  | { type: "static"; display: string; label: string };

const metrics: Metric[] = [
  { type: "count", target: 100, suffix: "+", label: "workflows automated", duration: 2 },
  { type: "count", target: 4, suffix: "+", label: "years in product management", duration: 1.5 },
  { type: "static", display: "<5", label: "days: idea to working MVP" },
];

export default function IntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section ref={ref} className="py-28 md:py-40 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col gap-5 mb-20">
          {[
            "Most product managers hand off specs and wait. I write the spec, build the system, and ship it — in days, not quarters.",
            "I work with founders and teams who need to move fast: validate an idea, automate a painful workflow, or launch an AI-powered MVP from scratch. No handoffs, no telephone game between PM and dev — one person who owns the product end to end.",
            "MSc in Strategic Project Management. PRINCE2 Certified. 4+ years managing products, teams, and budgets up to 1.5M+ PLN — from EdTech platforms to humanitarian crisis operations.",
          ].map((text, i) => (
            <motion.p
              key={i}
              className="text-gray-300 text-lg md:text-xl leading-[1.8]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 md:gap-12">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.4 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span
                className="text-4xl md:text-6xl text-[#D4A853]"
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  textShadow: "0 0 40px rgba(212,168,83,0.15)",
                }}
              >
                {m.type === "count" ? (
                  <CountUp
                    target={m.target}
                    suffix={m.suffix}
                    duration={m.duration}
                  />
                ) : (
                  m.display
                )}
              </span>
              <span
                className="text-xs md:text-sm text-[#666666] text-center leading-snug tracking-wide"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {m.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

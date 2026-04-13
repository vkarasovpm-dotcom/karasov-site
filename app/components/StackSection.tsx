"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const columns = [
  {
    title: "# AI & LLMs",
    file: "ai_llms.sh",
    items: [
      "Claude API (Opus 4.6 / Sonnet 4.6)",
      "Claude Code",
      "OpenAI API (GPT-5.4)",
      "Gemini API (3.1 Pro)",
      "RAG Pipelines / pgvector",
      "AI Agents (LangGraph, CrewAI, OpenAI Agents SDK)",
      "MCP (Model Context Protocol)",
      "Prompt Engineering",
      "LLM Evals (DeepEval, LLM-as-Judge)",
    ],
  },
  {
    title: "# Automation & Data",
    file: "automation_data.sh",
    items: [
      "n8n / Make.com (Advanced Certified)",
      "Python",
      "Supabase / PostgreSQL",
      "REST APIs / Webhooks / MCP Servers",
      "Docker / VPS / Vercel",
      "Git / GitHub Actions (CI/CD)",
      "PostHog (Analytics + Feature Flags)",
      "Sentry (Error Tracking + AI Code Review)",
    ],
  },
  {
    title: "# Product & Delivery",
    file: "product_delivery.sh",
    items: [
      "PRINCE2 / Agile / Scrum",
      "MVP Scoping & Roadmapping",
      "Linear / Jira / Notion",
      "Figma / FigJam / Miro",
      "User Research (Maze, Typeform)",
      "A/B Testing & Experimentation",
      "Perplexity Pro (Competitive Research)",
      "Loom (Async Communication)",
    ],
  },
];

const TYPING_SPEED = 30;
const WINDOW_BUFFER = 500;

function useTypewriter(
  text: string,
  speed: number,
  startDelay: number,
  active: boolean
) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) {
      setDisplayed("");
      setDone(false);
      return;
    }
    let i = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const type = () => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        if (i === text.length) {
          setDone(true);
        } else {
          timeoutId = setTimeout(type, speed);
        }
        i++;
      }
    };

    timeoutId = setTimeout(type, startDelay);
    return () => clearTimeout(timeoutId);
  }, [active, text, speed, startDelay]);

  return { displayed, done };
}

function getWindowStartDelay(index: number) {
  let delay = 200;
  for (let i = 0; i < index; i++) {
    delay += columns[i].title.length * TYPING_SPEED + WINDOW_BUFFER;
  }
  return delay;
}

function TerminalDots() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
    </div>
  );
}

function DesktopColumn({
  col,
  index,
}: {
  col: (typeof columns)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });
  const startDelay = getWindowStartDelay(index);
  const { displayed, done } = useTypewriter(
    col.title,
    TYPING_SPEED,
    startDelay,
    isInView
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#0D0D0D] border border-[#1A1A1A] overflow-hidden"
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1A1A1A] bg-[#111111]">
        <TerminalDots />
        <span
          className="text-[10px] text-[#333333] tracking-widest"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
        >
          {col.file}
        </span>
        <div className="w-14" />
      </div>
      <div className="p-7 md:p-8">
        <p
          className="text-[#E8C46A] text-xs tracking-[0.15em] uppercase mb-5 min-h-[1.25rem] flex items-center"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
        >
          {displayed}
          {!done && (
            <span className="cursor-blink inline-block w-1.5 h-3 bg-[#E8C46A] ml-0.5 align-middle" />
          )}
          {done && (
            <span className="cursor-blink inline-block w-1.5 h-3 bg-[#E8C46A]/40 ml-0.5 align-middle" />
          )}
        </p>
        <ul className="flex flex-col gap-2.5">
          {col.items.map((item, i) => (
            <motion.li
              key={item}
              className="flex items-center gap-3 group"
              initial={{ opacity: 0, x: -8 }}
              animate={done ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <span
                className="text-[#D4A853]/35 text-xs group-hover:text-[#D4A853]/65 transition-colors duration-200"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              >
                →
              </span>
              <span
                className="text-[#888888] text-sm group-hover:text-[#AAAAAA] transition-colors duration-200"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
              >
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function MobileAccordion({
  col,
  index,
}: {
  col: (typeof columns)[0];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-[#0D0D0D] border border-[#1A1A1A] overflow-hidden"
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1A1A1A] bg-[#111111]">
        <TerminalDots />
        <span
          className="text-[10px] text-[#333333] tracking-widest"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
        >
          {col.file}
        </span>
        <div className="w-14" />
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 cursor-pointer"
        aria-expanded={open}
      >
        <span
          className="text-[#E8C46A] text-xs tracking-[0.15em] uppercase"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
        >
          {col.title}
        </span>
        <motion.span
          className="text-[#555555] text-sm"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ↓
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="flex flex-col gap-2.5 px-5 pb-5 pt-1">
              {col.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="text-[#D4A853]/35 text-xs"
                    style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                  >
                    →
                  </span>
                  <span
                    className="text-[#888888] text-sm"
                    style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function StackSection() {
  return (
    <section id="stack" className="py-12 md:py-20 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-xs text-[#E8C46A]/60 tracking-[0.25em] uppercase mb-4"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Tools
        </motion.p>
        <motion.h2
          className="text-section-title text-[#D4A853] mb-12"
          style={{ textShadow: "0 0 30px rgba(212,168,83,0.2)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          STACK
        </motion.h2>

        <div className="hidden md:grid grid-cols-3 gap-4">
          {columns.map((col, i) => (
            <DesktopColumn key={col.title} col={col} index={i} />
          ))}
        </div>

        <div className="flex flex-col gap-3 md:hidden">
          {columns.map((col, i) => (
            <MobileAccordion key={col.title} col={col} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

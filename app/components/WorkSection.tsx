"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface WorkCard {
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
}

const works: WorkCard[] = [
  {
    title: "MULTI-AGENT RESEARCH ENGINE",
    description:
      "A client's research team was spending 15+ hours per week on manual competitive analysis. I identified the bottleneck, designed a multi-agent pipeline with 4 specialized AI roles, built and deployed it in 5 days. Result: 3-hour research tasks completed in 2 minutes. Fully automated, one webhook call.",
    tags: ["n8n", "Claude API", "Supabase pgvector", "Webhooks"],
    demoUrl: "https://www.loom.com/share/d99029c2ac5b4969823c818cb81ef0d5",
  },
  {
    title: "AI LEAD QUALIFICATION BOT",
    description:
      "Inbound leads were falling through the cracks — slow response times, no prioritization, manual copy-paste into spreadsheets. I scoped the problem, designed a qualification logic (hot/warm/cold scoring), and built an automated pipeline that classifies and responds to every lead in under 5 seconds. Connected to Google Sheets for CRM tracking.",
    tags: ["n8n", "Claude API", "Google Sheets", "REST API"],
    demoUrl: "https://www.loom.com/share/9c2ef40dee6543f897060ef4b8596d74",
  },
  {
    title: "AI PHOTO CULLING TOOL",
    description:
      "After every photoshoot, I was spending 1–2 hours manually reviewing hundreds of RAW files. I defined the scoring criteria, designed the workflow, and built a CLI tool that reads RAW files, extracts EXIF data, and uses GPT Vision to score each photo 1–1000. Processed 121 photos in 15 minutes for ~$0.35. Now I use it after every shoot.",
    tags: ["Python", "OpenAI Vision API", "Pillow", "rawpy"],
    demoUrl: "https://www.loom.com/share/adb04c24f46540d8b544de8e488eb88c",
  },
  {
    title: "FREELANCER DEV TOOLKIT",
    description:
      "I was repeating the same setup steps on every new project — scaffolding, linting, deploy scripts, client reports. I productized my own workflow into a reusable toolkit: custom Claude Code commands that handle project initialization, automated code review, deployment checklists, and client-facing reports. Saved 2+ hours per project start.",
    tags: ["Claude Code", "Python", "Shell", "Git"],
    demoUrl: "https://www.loom.com/share/28366f5e5ffd4ad3a3e7f922e9afcf10",
  },
];

const gridBg = {
  backgroundImage:
    "linear-gradient(rgba(212,168,83,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.04) 1px, transparent 1px)",
  backgroundSize: "24px 24px",
};

const visualBase =
  "h-48 w-full bg-gradient-to-br from-[#0d0d1a] to-[#0a0a0a] relative overflow-hidden flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300";
const visualBoxShadow = { boxShadow: "0 1px 0 rgba(212,168,83,0.1)" };

function VisualResearchEngine() {
  return (
    <div className={visualBase} style={visualBoxShadow}>
      <div className="absolute inset-0" style={gridBg} />
      <svg
        viewBox="0 0 280 120"
        className="relative w-full max-w-[280px] h-auto px-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="90" y="4" width="100" height="26" rx="3"
          fill="none" stroke="rgba(212,168,83,0.65)" strokeWidth="1.5"
        />
        <text x="140" y="21" textAnchor="middle" fill="rgba(212,168,83,0.85)" fontSize="9" fontFamily="monospace">
          SUPERVISOR
        </text>
        <line x1="140" y1="30" x2="140" y2="44" stroke="rgba(212,168,83,0.3)" strokeWidth="1" />
        <line x1="44" y1="44" x2="236" y2="44" stroke="rgba(212,168,83,0.2)" strokeWidth="1" />
        <line x1="44" y1="44" x2="44" y2="56" stroke="rgba(212,168,83,0.2)" strokeWidth="1" />
        <line x1="140" y1="44" x2="140" y2="56" stroke="rgba(212,168,83,0.2)" strokeWidth="1" />
        <line x1="236" y1="44" x2="236" y2="56" stroke="rgba(212,168,83,0.2)" strokeWidth="1" />
        <rect x="2" y="56" width="84" height="22" rx="2" fill="none" stroke="rgba(212,168,83,0.22)" strokeWidth="1" />
        <text x="44" y="71" textAnchor="middle" fill="#777" fontSize="8" fontFamily="monospace">RESEARCHER</text>
        <rect x="98" y="56" width="84" height="22" rx="2" fill="none" stroke="rgba(212,168,83,0.22)" strokeWidth="1" />
        <text x="140" y="71" textAnchor="middle" fill="#777" fontSize="8" fontFamily="monospace">HISTORIAN</text>
        <rect x="194" y="56" width="84" height="22" rx="2" fill="none" stroke="rgba(212,168,83,0.22)" strokeWidth="1" />
        <text x="236" y="71" textAnchor="middle" fill="#777" fontSize="8" fontFamily="monospace">STRATEGIST</text>
      </svg>
    </div>
  );
}

function VisualLeadBot() {
  return (
    <div className={visualBase} style={visualBoxShadow}>
      <div className="absolute inset-0" style={gridBg} />
      <div className="relative flex items-center gap-5">
        <div className="border border-[#333] px-3 py-2 text-[10px] font-mono text-[#555] bg-[#111]">
          LEAD
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-5 h-px bg-[#D4A853]/20" />
          <div className="w-5 h-px bg-[#D4A853]/20" />
          <div className="w-5 h-px bg-[#D4A853]/20" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-red-500/15 border border-red-500/30 px-4 py-1.5 text-[10px] font-mono text-red-400">
            HOT ↑
          </div>
          <div className="bg-yellow-500/15 border border-yellow-500/30 px-4 py-1.5 text-[10px] font-mono text-yellow-400">
            WARM →
          </div>
          <div className="bg-blue-500/15 border border-blue-500/30 px-4 py-1.5 text-[10px] font-mono text-blue-400">
            COLD ↓
          </div>
        </div>
      </div>
    </div>
  );
}

function VisualPhotoCulling() {
  const photos = [
    { score: 234, high: false },
    { score: 891, high: true },
    { score: 456, high: false },
    { score: 978, high: true },
    { score: 112, high: false },
  ];
  return (
    <div
      className={`${visualBase} items-end pb-6`}
      style={visualBoxShadow}
    >
      <div className="absolute inset-0" style={gridBg} />
      <div className="relative flex items-end gap-3">
        {photos.map(({ score, high }, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5">
            <span
              className="text-[10px] font-mono"
              style={{ color: high ? "#D4A853" : "#444" }}
            >
              {score}
            </span>
            <div
              className={`w-10 border ${
                high
                  ? "border-[#D4A853]/50 bg-[#D4A853]/5"
                  : "border-[#2a2a2a] bg-[#111]"
              }`}
              style={{ height: high ? "60px" : "40px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualDevToolkit() {
  const commands = [
    "$ /project-init",
    "$ /code-review",
    "$ /deploy-checklist",
    "$ /client-report",
  ];
  return (
    <div
      className={`${visualBase} items-center justify-start pl-8`}
      style={visualBoxShadow}
    >
      <div className="absolute inset-0" style={gridBg} />
      <div className="relative flex flex-col gap-2.5">
        {commands.map((cmd) => (
          <span key={cmd} className="text-green-400 text-xs font-mono">
            {cmd}
          </span>
        ))}
        <span className="cursor-blink inline-block w-1.5 h-3.5 bg-green-400 mt-0.5" />
      </div>
    </div>
  );
}

const visuals = [
  <VisualResearchEngine key="0" />,
  <VisualLeadBot key="1" />,
  <VisualPhotoCulling key="2" />,
  <VisualDevToolkit key="3" />,
];

function WorkCard({ card, index }: { card: WorkCard; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group bg-[#111111] rounded-2xl overflow-hidden flex flex-col border border-[#1A1A1A] hover:border-[#D4A853]/40 hover:shadow-[0_8px_30px_rgba(212,168,83,0.06)] transition-all duration-300"
      whileHover={{ scale: 1.02 } as never}
    >
      {/* Visual header */}
      {visuals[index]}

      {/* Content */}
      <div className="p-8 md:p-10 flex flex-col gap-5 flex-1">
        <span
          className="text-xs text-[#2A2A2A]"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3
          className="text-white font-bold text-base md:text-lg leading-snug tracking-tight"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          {card.title}
        </h3>

        <p
          className="text-[#888888] text-sm leading-[1.75] flex-1"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          {card.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-[#555555] border border-[#1E1E1E] px-2.5 py-1"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={card.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[#D4A853] font-medium hover:text-[#E8C46A] transition-colors duration-200 self-start"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          <span>▶</span> Watch Demo
        </a>
      </div>
    </motion.div>
  );
}

export default function WorkSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px 0px" });

  return (
    <section id="work" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-14">
          <motion.p
            className="text-xs text-[#E8C46A]/60 tracking-[0.25em] uppercase mb-4"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            Portfolio
          </motion.p>
          <motion.h2
            className="text-section-title text-[#D4A853]"
            style={{ textShadow: "0 0 30px rgba(212,168,83,0.2)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            SELECTED WORK
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {works.map((card, i) => (
            <WorkCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

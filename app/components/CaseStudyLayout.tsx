"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Tag {
  label: string;
}

interface CaseStudyLayoutProps {
  title: string;
  context: string;
  solution: string;
  tags: Tag[];
  results: string[];
  cta: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
}

export default function CaseStudyLayout({
  title,
  context,
  solution,
  tags,
  results,
  cta,
  secondaryCta,
}: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Top bar */}
      <div className="border-b border-[#1A1A1A]">
        <div className="max-w-5xl mx-auto px-6 py-5">
          <Link
            href="/"
            className="text-[#999999] hover:text-[#D4A853] text-sm transition-colors duration-200 inline-flex items-center gap-2"
          >
            ← Back
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Full-width placeholder image */}
        <motion.div
          className="w-full aspect-video bg-[#111111] border border-[#1A1A1A] flex items-center justify-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#333333] text-sm font-mono">
            project preview
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-14 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {title}
        </motion.h1>

        {/* Sections grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Main content: 2 cols */}
          <div className="md:col-span-2 flex flex-col gap-10">
            <Section label="CONTEXT" delay={0.2}>
              <p className="text-gray-300 text-base leading-relaxed">{context}</p>
            </Section>

            <Section label="SOLUTION" delay={0.3}>
              <p className="text-gray-300 text-base leading-relaxed">{solution}</p>
            </Section>

            <Section label="RESULTS" delay={0.4}>
              <ul className="flex flex-col gap-3">
                {results.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span className="text-[#D4A853] mt-1">→</span>
                    <span className="text-gray-300 text-base">{r}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Sidebar: 1 col */}
          <div className="flex flex-col gap-10">
            <Section label="TECH STACK" delay={0.25}>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t.label}
                    className="text-xs text-[#999999] border border-[#1A1A1A] px-3 py-1.5 font-mono"
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            </Section>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col gap-3 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {cta.external ? (
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#D4A853] text-[#D4A853] px-5 py-3 text-sm tracking-widest uppercase hover:bg-[#D4A853] hover:text-[#0A0A0A] transition-all duration-200 text-center"
                >
                  {cta.label}
                </a>
              ) : (
                <Link
                  href={cta.href}
                  className="border border-[#D4A853] text-[#D4A853] px-5 py-3 text-sm tracking-widest uppercase hover:bg-[#D4A853] hover:text-[#0A0A0A] transition-all duration-200 text-center"
                >
                  {cta.label}
                </Link>
              )}
              {secondaryCta &&
                (secondaryCta.external ? (
                  <a
                    href={secondaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#333333] text-[#999999] px-5 py-3 text-sm tracking-widest uppercase hover:border-[#D4A853] hover:text-[#D4A853] transition-all duration-200 text-center"
                  >
                    {secondaryCta.label}
                  </a>
                ) : (
                  <Link
                    href={secondaryCta.href}
                    className="border border-[#333333] text-[#999999] px-5 py-3 text-sm tracking-widest uppercase hover:border-[#D4A853] hover:text-[#D4A853] transition-all duration-200 text-center"
                  >
                    {secondaryCta.label}
                  </Link>
                ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  label,
  children,
  delay,
}: {
  label: string;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <p className="text-xs text-[#D4A853] tracking-[0.25em] uppercase mb-4 font-mono">
        {label}
      </p>
      {children}
    </motion.div>
  );
}

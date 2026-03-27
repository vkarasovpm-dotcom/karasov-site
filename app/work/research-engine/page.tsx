import type { Metadata } from "next";
import CaseStudyLayout from "../../components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Multi-Agent Research Engine — Vitalii Karasov",
  description:
    "Replaced 3 hours of manual research with a 2-minute automated pipeline using 4 specialized AI agents.",
};

export default function ResearchEnginePage() {
  return (
    <CaseStudyLayout
      title="Multi-Agent Research Engine"
      context="Research-heavy workflows are a time sink. Analysts, content teams, and product managers spend 2–4 hours per topic gathering, cross-referencing, and summarizing information from multiple sources before they can do meaningful work. Manual research is slow, inconsistent, and hard to scale."
      solution="I designed and built a multi-agent AI pipeline orchestrated through n8n. A single webhook call kicks off a Supervisor agent that delegates tasks to three specialists: a Researcher that pulls current information, a Historian that provides context and precedent, and a Strategist that synthesizes both into actionable insights. All four agents communicate asynchronously, their outputs are stored and chunked into Supabase with pgvector for semantic retrieval, and the final structured brief is delivered in under 2 minutes. The system is fully automated — no manual steps between trigger and deliverable."
      tags={[
        { label: "n8n" },
        { label: "Claude API" },
        { label: "Supabase" },
        { label: "pgvector" },
        { label: "Webhooks" },
        { label: "RAG" },
      ]}
      results={[
        "Research time reduced from 3 hours to under 2 minutes",
        "4 specialized AI agents working in parallel",
        "Fully automated — triggered by a single webhook call",
        "Outputs stored with semantic search via pgvector",
        "Structured research brief ready for immediate use",
      ]}
      cta={{ label: "Watch Demo →", href: "#", external: true }}
    />
  );
}

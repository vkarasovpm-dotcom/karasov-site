import type { Metadata } from "next";
import CaseStudyLayout from "../../components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "AI Lead Qualification Bot — Vitalii Karasov",
  description:
    "Incoming leads analyzed, classified, and answered with personalized responses in under 5 seconds.",
};

export default function LeadBotPage() {
  return (
    <CaseStudyLayout
      title="AI Lead Qualification Bot"
      context="Most inbound lead pipelines have a critical bottleneck: response time. Studies show that responding to a lead within 5 minutes increases conversion by 9x compared to a 10-minute delay. Yet most teams are manually reviewing, qualifying, and responding to leads — a process that takes hours, not seconds. The result is lost revenue and wasted SDR time on leads that will never convert."
      solution="I built an automated lead qualification system that intercepts every inbound lead the moment it arrives. The n8n workflow triggers on form submission or API call, sends the lead data to Claude API with a structured prompt that evaluates intent signals, budget indicators, and fit criteria. The model classifies each lead as hot, warm, or cold and generates a personalized first-touch response tailored to the lead's specific context. The classification and conversation thread are logged to Google Sheets for CRM tracking and reporting. The entire pipeline — from lead arrival to response sent — runs in under 5 seconds."
      tags={[
        { label: "n8n" },
        { label: "Claude API" },
        { label: "Google Sheets" },
        { label: "REST API" },
        { label: "Webhooks" },
        { label: "Prompt Engineering" },
      ]}
      results={[
        "Lead response time reduced from hours to under 5 seconds",
        "Automated hot/warm/cold classification with high accuracy",
        "Personalized first-touch responses generated per lead",
        "All data logged to Google Sheets for CRM tracking",
        "Zero manual review required for initial qualification",
      ]}
      cta={{ label: "Watch Demo →", href: "#", external: true }}
    />
  );
}

import type { Metadata } from "next";
import CaseStudyLayout from "../../components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "Freelancer Dev Toolkit — Vitalii Karasov",
  description:
    "Production-ready custom commands for Claude Code: scaffolding, code review, deploy checklists, client reports.",
};

export default function FreelancerToolkitPage() {
  return (
    <CaseStudyLayout
      title="Freelancer Dev Toolkit"
      context="Freelance developers and small product teams spend a disproportionate amount of time on project scaffolding, routine code review, pre-deploy checks, and client communication — work that's important but repetitive. Claude Code's custom command system makes it possible to encode these workflows as reusable slash commands, turning hours of setup and documentation into seconds."
      solution="I built a collection of production-ready custom commands for Claude Code, specifically designed for the freelance and small-team development workflow. The toolkit includes: a project scaffolding command that generates folder structure, boilerplate files, and initial configuration based on project type; an automated code review command that checks for common bugs, security issues, and style violations; a pre-deploy checklist command that walks through environment variables, build outputs, and rollback procedures; and a client report generator that summarizes completed work, upcoming tasks, and blockers in clean, professional language. Each command is a markdown file with embedded prompt logic, tested across real client projects. The toolkit reduces repetitive decision-making and keeps me in a flow state during the parts of the job that matter most."
      tags={[
        { label: "Claude Code" },
        { label: "Python" },
        { label: "Shell" },
        { label: "Git" },
        { label: "Markdown" },
        { label: "Prompt Engineering" },
      ]}
      results={[
        "Project scaffolding reduced from 30+ minutes to under 1 minute",
        "Code review coverage increased with zero extra effort",
        "Pre-deploy checklist eliminates missed steps",
        "Client reports generated in seconds from project context",
        "Reusable across all projects with minimal configuration",
      ]}
      cta={{ label: "View on GitHub →", href: "#", external: true }}
    />
  );
}

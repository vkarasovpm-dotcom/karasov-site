import type { Metadata } from "next";
import CaseStudyLayout from "../../components/CaseStudyLayout";

export const metadata: Metadata = {
  title: "AI Photo Culling Tool — Vitalii Karasov",
  description:
    "CLI tool for photographers using GPT Vision to score RAW files 1–1000. 121 photos in 15 minutes for ~$0.35.",
};

export default function PhotoToolPage() {
  return (
    <CaseStudyLayout
      title="AI Photo Culling Tool"
      context="Professional photographers routinely return from a shoot with hundreds or thousands of RAW files. Culling — the process of identifying the best shots to edit — is one of the most time-consuming parts of the workflow, often taking 1–3 hours for a single session. The process is largely subjective but follows consistent technical criteria: sharpness, exposure, composition, and expression. It's exactly the kind of repetitive judgment task that AI can accelerate."
      solution="I built a Python CLI tool that automates the initial culling pass. The tool reads RAW files directly using rawpy, extracts EXIF metadata (aperture, shutter speed, ISO, focal length), and generates compressed JPEG previews using Pillow. Each preview is sent to GPT-4 Vision with a structured prompt asking the model to evaluate technical quality and score the image 1–1000 based on sharpness, exposure, composition, and subject clarity. Results are sorted, written to a CSV with per-image scores and reasoning, and the top-percentile shots are flagged for editing. In a real-world test, the tool processed 121 RAW files from a single session in 15 minutes at a total API cost of approximately $0.35 — saving over an hour of manual review."
      tags={[
        { label: "Python" },
        { label: "OpenAI Vision API" },
        { label: "Pillow" },
        { label: "rawpy" },
        { label: "CLI" },
        { label: "EXIF" },
      ]}
      results={[
        "121 RAW photos processed in 15 minutes",
        "Total API cost: ~$0.35 per session",
        "1+ hour saved per shoot on manual culling",
        "Scores 1–1000 with per-image reasoning in CSV output",
        "Works with any RAW format supported by rawpy (CR2, ARW, NEF, etc.)",
      ]}
      cta={{ label: "View on GitHub →", href: "#", external: true }}
    />
  );
}

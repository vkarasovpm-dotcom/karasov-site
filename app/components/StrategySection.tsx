"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface VideoData {
  videoId: string;
  title: string;
  description: string;
  url: string;
}

const videos: VideoData[] = [
  {
    videoId: "zVazBg3OsE4",
    title: "LIQUID DEATH: THE $1.4B 'DUMBEST IDEA'",
    description: "How radical positioning turned water into a billion-dollar brand.",
    url: "https://youtu.be/zVazBg3OsE4",
  },
  {
    videoId: "TEsEal32h6w",
    title: "THE RED ENVELOPE STRATEGY",
    description: "How a centuries-old tradition became a fintech monetization weapon.",
    url: "https://youtu.be/TEsEal32h6w",
  },
  {
    videoId: "KaZVEwE87gw",
    title: "VIETNAM'S ECONOMIC MIRACLE",
    description: "From famine to 700% GDP growth without following anyone's playbook.",
    url: "https://youtu.be/KaZVEwE87gw",
  },
  {
    videoId: "YyetCvWdKFs",
    title: "KIASU: SINGAPORE'S HIDDEN FEAR",
    description: "Why national anxiety built a global financial hub.",
    url: "https://youtu.be/YyetCvWdKFs",
  },
  {
    videoId: "GOwcbihQRWA",
    title: "BUKELE: WHY 85% LOVE AN AUTHORITARIAN",
    description: "When approval ratings defy democratic logic — a case study in power.",
    url: "https://youtu.be/GOwcbihQRWA",
  },
  {
    videoId: "HWLq1iqwim8",
    title: "SOFT POWER: WHY PIKACHU BEATS A NUCLEAR BOMB",
    description: "How cultural exports win more territory than weapons ever could.",
    url: "https://youtu.be/HWLq1iqwim8",
  },
  {
    videoId: "naYmJf3iKf0",
    title: "THATCHER: THE PSYCHOLOGY OF POWER",
    description: "How conviction, not consensus, rewrote the rules of British politics.",
    url: "https://youtu.be/naYmJf3iKf0",
  },
  {
    videoId: "i33s-cj2DT4",
    title: "ROXOLANA: SEIZING POWER WITHOUT AN ARMY",
    description: "How a slave became the most powerful woman in the Ottoman Empire.",
    url: "https://youtu.be/i33s-cj2DT4",
  },
  {
    videoId: "XCBJsPS1aPU",
    title: "CHURCHILL: WHY DEPRESSION SAVED THE WORLD",
    description: "How a psychological breakdown became history's most unlikely advantage.",
    url: "https://youtu.be/XCBJsPS1aPU",
  },
  {
    videoId: "tNhxFHN8Wu4",
    title: "KHMELNYTSKY: TRAITOR OR HERO?",
    description: "How one man's rebellion shaped a nation — and divided it for centuries.",
    url: "https://youtu.be/tNhxFHN8Wu4",
  },
];

function VideoCard({ video, index }: { video: VideoData; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });
  const [imgSrc, setImgSrc] = useState(
    `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex-shrink-0 w-60 md:w-auto"
    >
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {/* Thumbnail */}
        <motion.div
          className="relative aspect-video rounded-xl overflow-hidden bg-[#111111] border border-[#1A1A1A] group-hover:border-[#D4A853]/30 transition-colors duration-300 mb-4"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={imgSrc}
            alt={video.title}
            fill
            className="object-cover"
            onError={() =>
              setImgSrc(
                `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`
              )
            }
            sizes="(max-width: 768px) 240px, 300px"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-12 h-12 rounded-full bg-black/60 border border-white/20 group-hover:border-[#D4A853]/60 group-hover:bg-[#D4A853]/20 flex items-center justify-center transition-colors duration-300"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                className="w-5 h-5 text-white/80 group-hover:text-[#D4A853] transition-colors duration-300 ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </div>

          {/* Episode number */}
          <span
            className="absolute top-3 left-3 text-[10px] text-white/40 group-hover:text-[#D4A853]/70 transition-colors duration-300"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </motion.div>

        {/* Title */}
        <h3
          className="text-white text-xs font-bold tracking-tight leading-snug mb-1.5 group-hover:text-[#D4A853] transition-colors duration-300"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          {video.title}
        </h3>
        <p
          className="text-[#555555] text-xs leading-relaxed group-hover:text-[#777777] transition-colors duration-300"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          {video.description}
        </p>
      </a>
    </motion.div>
  );
}

export default function StrategySection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px 0px" });

  return (
    <section id="strategy" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-12 max-w-2xl">
          <motion.p
            className="text-xs text-[#E8C46A]/60 tracking-[0.25em] uppercase mb-4"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            Content
          </motion.p>
          <motion.h2
            className="text-section-title text-[#D4A853] mb-8"
            style={{ textShadow: "0 0 30px rgba(212,168,83,0.2)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            HOW I THINK
          </motion.h2>
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {[
              "I study how systems work — from markets to power structures — and break them down into actionable frameworks.",
              "The same analytical approach I apply to these deep dives is how I scope every product: map the system, find the leverage point, build.",
              "Original content in Ukrainian with English dubbing & subtitles.",
            ].map((p) => (
              <p
                key={p}
                className="text-[#888888] text-base leading-[1.8]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {p}
              </p>
            ))}
          </motion.div>
        </div>

        {/* Cards — horizontal scroll on mobile, 5-col grid on desktop */}
        <div className="overflow-x-auto pb-4 -mx-6 px-6">
          <div className="flex gap-5 w-max md:w-auto md:grid md:grid-cols-5">
            {videos.map((v, i) => (
              <VideoCard key={v.videoId} video={v} index={i} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://www.youtube.com/@TheHumanGambit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-[#D4A853] text-[#D4A853] px-8 py-3.5 rounded-lg text-xs tracking-[0.2em] uppercase hover:bg-[#D4A853] hover:text-[#0A0A0A] transition-all duration-200 font-medium"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            WATCH ALL ON YOUTUBE →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Kyoto pagoda at night" },
  { src: "/images/gallery-2.jpg", alt: "Angkor Wat at sunset" },
  { src: "/images/gallery-3.jpg", alt: "Photography series — frame 3" },
  { src: "/images/gallery-4.jpg", alt: "Photography series — frame 4" },
  { src: "/images/gallery-5.jpg", alt: "Photography series — frame 5" },
  { src: "/images/gallery-6.jpg", alt: "Photography series — frame 6" },
];

const bioParagraphs = [
  "I'm Vitalii Karasov — a product manager who builds.",
  "MSc in Strategic Project Management, Lazarski University Warsaw. PRINCE2 certified. 4+ years running products — EdTech platform launch, AI content pipelines, crisis response operations with a 1.5M+ PLN budget.",
  "Now I am building AI automation systems independently. All in production.",
  "Beyond systems — I document the world through a lens on Panasonic Lumix S5II. Aesthetics and structure matter to me — whether it's the architecture of an AI pipeline or the composition of a photograph.",
];

const tags = ["PRINCE2", "MSc Strategy", "EdTech", "AI Systems", "Photography"];

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: typeof galleryImages;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="max-w-[90vw] max-h-[90vh] object-contain"
        />
      </motion.div>

      {/* Prev */}
      {index > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/60 hover:text-[#D4A853] transition-colors duration-200 text-2xl border border-white/10 hover:border-[#D4A853]/40 rounded"
          aria-label="Previous"
        >
          ←
        </button>
      )}

      {/* Next */}
      {index < images.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/60 hover:text-[#D4A853] transition-colors duration-200 text-2xl border border-white/10 hover:border-[#D4A853]/40 rounded"
          aria-label="Next"
        >
          →
        </button>
      )}

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors duration-200 text-2xl"
        aria-label="Close"
      >
        ×
      </button>

      {/* Counter */}
      <span
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-[#555]"
        style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
      >
        {index + 1} / {images.length}
      </span>
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  const galleryRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const dragDistance = useRef(0);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") setLightboxIndex((p) => Math.max(0, p - 1));
      if (e.key === "ArrowRight")
        setLightboxIndex((p) => Math.min(galleryImages.length - 1, p + 1));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen]);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!galleryRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - galleryRef.current.offsetLeft;
    scrollLeft.current = galleryRef.current.scrollLeft;
    dragDistance.current = 0;
    galleryRef.current.style.cursor = "grabbing";
  };
  const onMouseUp = () => {
    isDragging.current = false;
    if (galleryRef.current) galleryRef.current.style.cursor = "grab";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !galleryRef.current) return;
    e.preventDefault();
    const x = e.pageX - galleryRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    dragDistance.current = Math.abs(x - startX.current);
    galleryRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const openLightbox = (index: number) => {
    if (dragDistance.current > 5) return;
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="about" className="py-14 md:py-24 px-6" style={{ backgroundImage: "linear-gradient(rgba(212,168,83,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.018) 1px, transparent 1px)", backgroundSize: "80px 80px" }}>
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-xs text-[#E8C46A]/60 tracking-[0.25em] uppercase mb-4"
          style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          About
        </motion.p>
        <motion.h2
          className="text-section-title text-[#D4A853] mb-14"
          style={{ textShadow: "0 0 30px rgba(212,168,83,0.2)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          WHO I AM
        </motion.h2>

        {/* Two-column */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12 md:gap-16 items-start"
        >
          {/* Left: portrait */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[3/4] w-full max-w-[400px] rounded-xl overflow-hidden border border-[#1A1A1A]">
              <Image
                src="/images/portrait-about.jpg"
                alt="Vitalii Karasov"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5 pt-2"
          >
            {bioParagraphs.map((para, i) => (
              <motion.p
                key={i}
                className="text-[#888888] text-base leading-[1.8]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {para}
              </motion.p>
            ))}

            {/* Pill tags */}
            <motion.div
              className="flex flex-wrap gap-2 pt-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-[#D4A853] border border-[#D4A853]/30 px-3 py-1 rounded-full hover:border-[#D4A853]/60 transition-colors duration-200"
                  style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Gallery */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p
            className="text-xs text-[#555555] tracking-[0.2em] uppercase mb-6"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
          >
            Through the lens
          </p>

          <div
            ref={galleryRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-6 px-6"
            style={{
              cursor: "grab",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            } as React.CSSProperties}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onMouseMove={onMouseMove}
          >
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.src}
                className="relative flex-shrink-0 h-[300px] md:h-[400px] w-[220px] md:w-[370px] rounded-xl overflow-hidden snap-start border border-[#1A1A1A] hover:border-[#D4A853]/20 transition-colors duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => openLightbox(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover pointer-events-none"
                  sizes="(max-width: 768px) 220px, 370px"
                  draggable={false}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={galleryImages}
            index={lightboxIndex}
            onClose={() => setLightboxOpen(false)}
            onPrev={() => setLightboxIndex((p) => Math.max(0, p - 1))}
            onNext={() =>
              setLightboxIndex((p) => Math.min(galleryImages.length - 1, p + 1))
            }
          />
        )}
      </AnimatePresence>
    </section>
  );
}

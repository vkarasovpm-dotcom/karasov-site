"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    const update = () => {
      rafId = requestAnimationFrame(() => {
        if (!barRef.current) return;
        const scrollTop = window.scrollY;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        barRef.current.style.width = `${progress}%`;
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[100] pointer-events-none">
      <div
        ref={barRef}
        className="h-full"
        style={{
          width: "0%",
          background: "linear-gradient(to right, #D4A853, #E8C46A)",
        }}
      />
    </div>
  );
}

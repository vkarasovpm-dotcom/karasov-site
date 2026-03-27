"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on pointer-primary (non-touch) devices
    if (window.matchMedia("(hover: none)").matches) return;

    const move = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.left = `${e.clientX - 75}px`;
      ref.current.style.top = `${e.clientY - 75}px`;
      ref.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed pointer-events-none z-40 opacity-0 hidden md:block"
      style={{
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(212,168,83,0.05) 0%, transparent 70%)",
        transition: "left 0.08s linear, top 0.08s linear",
      }}
      aria-hidden="true"
    />
  );
}

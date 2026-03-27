"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoadOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Give React one tick to render, then fade out
    const t = setTimeout(() => setVisible(false), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 bg-[#0A0A0A] z-[200] pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          aria-hidden="true"
        />
      )}
    </AnimatePresence>
  );
}

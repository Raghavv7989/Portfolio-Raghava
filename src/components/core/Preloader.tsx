"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const updateProgress = () => {
      current += Math.random() * 15;
      if (current > 100) current = 100;
      setProgress(Math.floor(current));

      if (current < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => setLoading(false), 500);
      }
    };

    requestAnimationFrame(updateProgress);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-ivory flex flex-col items-center justify-center"
        >
          <div className="font-serif text-5xl md:text-8xl text-accent font-bold">
            {progress}%
          </div>
          <div className="mt-8 text-slate/50 tracking-widest uppercase text-xs font-medium">
            Loading Experience
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

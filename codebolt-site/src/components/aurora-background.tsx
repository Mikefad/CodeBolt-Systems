"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const blobs = [
  {
    className: "bg-sky-400/40 blur-3xl",
    size: "h-72 w-72",
    initial: { x: -220, y: -180 },
    animate: { x: -120, y: -60 },
  },
  {
    className: "bg-fuchsia-500/30 blur-[120px]",
    size: "h-64 w-64",
    initial: { x: 160, y: -40 },
    animate: { x: 220, y: -120 },
  },
  {
    className: "bg-emerald-400/25 blur-[150px]",
    size: "h-80 w-80",
    initial: { x: 0, y: 220 },
    animate: { x: -80, y: 140 },
  },
];

export function AuroraBackground() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (event: PointerEvent) => {
      setPointer({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("pointermove", handle);
    return () => window.removeEventListener("pointermove", handle);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <motion.div
        className="absolute h-[420px] w-[420px] rounded-full bg-sky-400/20 blur-[200px]"
        animate={{
          x: pointer.x - 210,
          y: pointer.y - 210,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      />
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${blob.className} ${blob.size}`}
          initial={blob.initial}
          animate={blob.animate}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 18 + index * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

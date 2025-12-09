"use client";

import Link from "next/link";
import { Rocket } from "lucide-react";

export function FloatingCTA() {
  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-50">
      <div className="pointer-events-auto rounded-full bg-gradient-to-r from-sky-400 to-emerald-300 p-0.5 shadow-[0_15px_40px_rgba(56,213,255,0.4)]">
        <Link
          href="/contact"
          className="flex items-center gap-2 rounded-full bg-[#01030a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-black"
        >
          <Rocket className="h-4 w-4 text-sky-300" /> Talk to CodeBolt
        </Link>
      </div>
    </div>
  );
}

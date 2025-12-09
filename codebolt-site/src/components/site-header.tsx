"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(1,2,10,0.92)] backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
      <div className="section-block flex items-center justify-between gap-4 py-4">
        <Link href="/" className="font-semibold tracking-[0.2em] uppercase">
          CodeBolt
        </Link>
        <nav className="flex flex-1 items-center justify-center gap-6 text-sm text-white/70 max-md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-3 py-1 text-sm font-medium transition-colors",
                pathname === link.href ? "text-white" : "hover:text-white text-white/70"
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute left-1/2 bottom-0 h-[2px] w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400 to-emerald-300 transition-opacity",
                  pathname === link.href ? "opacity-100" : "opacity-0"
                )}
              />
            </Link>
          ))}
        </nav>
        <Button asChild size="sm" className="max-md:hidden bg-gradient-to-r from-sky-400 to-emerald-300 text-black shadow-[0_10px_30px_rgba(56,213,255,0.35)]">
          <Link href="/contact">Start a Project</Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md md:hidden"
          >
            <div className="mx-auto mt-8 w-11/12 max-w-sm rounded-3xl border border-white/10 bg-card p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Menu</p>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="mt-6 flex flex-col gap-3 text-lg font-semibold">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-2xl border border-white/10 px-4 py-3",
                      pathname === link.href ? "bg-white/10" : "bg-transparent"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <Button className="mt-6 w-full" onClick={() => setOpen(false)} asChild>
                <Link href="/contact">Start a Project</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

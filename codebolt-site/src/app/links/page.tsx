import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

const primaryLinks = [
  {
    title: "AI Resume Analyzer",
    subtitle: "Free resume feedback tool",
    href: "https://code-bolt-resume-analyzer.vercel.app",
    accent: "from-sky-500/30 via-blue-500/20 to-cyan-400/30",
  },
  {
    title: "WhatsApp Auto-Reply Bot",
    subtitle: "Automation for small businesses",
    href: "https://codebolt-whatsapp-auto-reply-bot.onrender.com/dashboard",
    accent: "from-emerald-400/30 via-teal-500/20 to-sky-300/30",
  },
  {
    title: "Restaurant Analytics Dashboard",
    subtitle: "Track daily performance",
    href: "https://codebolt-restaurant-dashboard.vercel.app/",
    accent: "from-violet-500/30 via-purple-500/20 to-fuchsia-400/30",
  },
];

const secondaryLinks = [
  { label: "Company Website", href: "/" },
  { label: "Contact", href: "/contact" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/michael-fadairo-292919347/",
  },
  { label: "X (Twitter)", href: "https://x.com/360_Mike_" },
  {
    label: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61572195697785",
  },
  { label: "Instagram", href: "https://www.instagram.com/_michael_tech_/" },
];

export default function LinksPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-16">
      <div className="w-full max-w-md space-y-8 rounded-[32px] border border-white/10 bg-black/40 p-8 text-center shadow-[0_0_120px_rgba(15,20,60,0.4)] backdrop-blur-2xl">
        <div className="space-y-3">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
            <Sparkles className="h-5 w-5" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
            CodeBolt
          </p>
          <h1 className="text-3xl font-semibold">CodeBolt Systems ⚡</h1>
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Automation • Micro-SaaS • Dashboards
          </p>
          <p className="text-base text-white/70">
            Building simple tools that reduce manual work.
          </p>
        </div>

        <div className="space-y-4">
          {primaryLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-[28px] border border-white/10 p-0.5 text-left transition hover:-translate-y-1 hover:border-white/30"
            >
              <div className={`rounded-[26px] bg-gradient-to-r ${link.accent} p-0.5`}>
                <div className="rounded-[24px] bg-slate-950/85 px-5 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-semibold">{link.title}</p>
                      <p className="text-sm text-white/70">{link.subtitle}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-white/50 transition group-hover:text-white" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Quick links
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {secondaryLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-xl border border-white/10 px-3 py-2 text-center text-white/80 transition hover:border-white/30 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="text-xs text-white/50">
          Built by a solo developer. Shipping real tools. Improving daily.
        </p>
      </div>
    </div>
  );
}

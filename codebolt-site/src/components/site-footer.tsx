import Link from "next/link";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const footerLinks = [
  { title: "Services", items: ["Micro-SaaS", "Automations", "Dashboards", "UI Engineering"] },
  { title: "Company", items: ["About", "Pricing", "Contact", "Docs"] },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/codebolt" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/codebolt" },
];

const contacts = [
  { icon: Mail, label: "hello@codeboltsystems.com" },
  { icon: MessageCircle, label: "+123-456-7890 (WhatsApp)" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-black/30 via-black/20 to-transparent">
      <div className="section-block space-y-10 py-10">
        <div className="surface-gradient flex flex-col gap-6 rounded-3xl border border-white/10 p-6 text-center md:flex-row md:items-center md:text-left">
          <div className="flex-1 space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Stay in motion</p>
            <h3 className="text-2xl font-semibold">
              Need automation or a micro-tool? Let's map the first sprint.
            </h3>
            <p className="text-sm text-white/70">
              Quick audits, roadmap suggestions, and price ranges delivered in under 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:justify-end">
            <Link
              href="/contact"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"
            >
              Send a brief
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white/80"
            >
              View pricing
            </Link>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[2fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              CodeBolt Systems
            </p>
            <p className="text-sm text-white/70">
              Automation studio for students, creators, and lean teams. We craft fast, calm tools.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-white/70">
              {contacts.map((contact) => (
                <span key={contact.label} className="inline-flex items-center gap-2">
                  <contact.icon className="h-4 w-4 text-sky-300" /> {contact.label}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="text-xs text-white/40">
              (c) {new Date().getFullYear()} CodeBolt Systems. All rights reserved.
            </p>
          </div>
          {footerLinks.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold text-white/80">{column.title}</p>
              <ul className="mt-3 space-y-2 text-sm text-white/60">
                {column.items.map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

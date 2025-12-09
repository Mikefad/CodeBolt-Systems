"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  LayoutDashboard,
  PanelsTopLeft,
  Sparkles,
  Zap,
  Gauge,
  Radar,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const heroStats = [
  { label: "Micro-SaaS shipped", value: "35+" },
  { label: "Avg. delivery time", value: "72h" },
  { label: "Automations live", value: "60+" },
];

const serviceBuckets = [
  {
    icon: Bot,
    title: "AI Micro Tools",
    blurb:
      "Rapid MVPs, resume copilots, and PDF insight engines that feel like consumer products.",
    items: ["Resume analyzers", "Keyword matchers", "Essay copilots"],
  },
  {
    icon: PanelsTopLeft,
    title: "Automation Systems",
    blurb:
      "WhatsApp responders, onboarding flows, and ops scripts that run 24/7 without you.",
    items: ["Customer reply bots", "Inventory alerts", "CRM + social automation"],
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & UI",
    blurb:
      "React/Tableau dashboards and marketing sites with live data, KPIs, and product-ready UI.",
    items: ["Airbnb KPI dashboards", "Hyper-fast landing pages", "Executive scorecards"],
  },
];

const opsHighlights = [
  {
    name: "Hotel Finance Dashboard",
    detail: "Unified profitability KPIs across 7 properties with automated exports.",
    metric: "+120 KPI events daily",
    icon: Gauge,
  },
  {
    name: "CargoPro Logistics Suite",
    detail: "Phone-auth logistics portal that reduced update time by 45%.",
    metric: "45% faster responses",
    icon: Radar,
  },
];

const caseStudies = [
  {
    name: "Hotel Finance Dashboard",
    impact: "Unified profitability KPIs across 7 properties with automated exports.",
  },
  {
    name: "CargoPro Logistics Suite",
    impact: "Phone-auth logistics portal that reduced update time by 45%.",
  },
  {
    name: "LaunchPad Workflows",
    impact: "AI assistants that triage student leads and update CRM notes automatically.",
  },
];

const processSteps = [
  {
    title: "Scope the bottleneck",
    detail:
      "We run a sprint interview to map the workflow, the desired KPI, and the tools already in play.",
  },
  {
    title: "Design + ship",
    detail:
      "Design systems + automations are built in parallel using Framer Motion UIs and shadcn primitives.",
  },
  {
    title: "Document + handoff",
    detail:
      "Every delivery includes Loom walkthroughs, monitoring hooks, and optional maintenance.",
  },
];

const momentumStats = [
  { label: "Automation hours saved", value: "12k+" },
  { label: "Dashboards online", value: "28" },
  { label: "AI copilots in production", value: "14" },
  { label: "Avg. CSAT", value: "4.9/5" },
];

const marqueeItems = [
  "WhatsApp Auto-Replies",
  "Resume Analyzers",
  "Hotel KPI Dashboards",
  "CargoPro Logistics Suite",
  "LaunchPad Workflows",
  "Creator CRM Automation",
  "Realtime KPI Glass UI",
];

const testimonials = [
  {
    name: "Amina — Logistics PM",
    quote:
      "We shipped a full phone-auth logistics portal in under a month. Ops response time dropped 45%.",
  },
  {
    name: "Victor — Boutique Ops",
    quote:
      "The profitability dashboard runs itself. Weekly exports hit leadership on autopilot.",
  },
  {
    name: "Nora — Student Founder",
    quote:
      "They turned a Notion doc into a polished AI resume tool that onboarded 200+ users fast.",
  },
];

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="section-block hero-panel grid gap-12 lg:grid-cols-[3fr_2fr]">
        <div className="space-y-8">
          <Badge variant="glow" className="hero-badge w-fit">
            Automation / Dashboards / Micro-SaaS
          </Badge>
          <div className="space-y-4 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              CodeBolt Systems
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Automation, dashboards, and micro-SaaS built fast for teams that need momentum.
            </h1>
            <p className="text-lg text-white/70">
              We craft AI micro-tools, automation workflows, and dashboards for students, creators,
              and lean teams. Every build is designed for clarity, speed, and measurable ROI.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/contact" className="flex items-center gap-2">
                Get a free roadmap <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/pricing">Explore pricing</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {heroStats.map((stat) => (
              <Card
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/10 text-center shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
              >
                <CardHeader className="space-y-1">
                  <CardTitle className="text-3xl">{stat.value}</CardTitle>
                  <CardDescription>{stat.label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
            <span className="rounded-full border border-white/15 px-4 py-2">⚡ 48–72h delivery</span>
            <span className="rounded-full border border-white/15 px-4 py-2">
              ✅ Free maintenance month
            </span>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 self-start"
        >
          <div className="glass space-y-5">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              Ops Command Center
            </p>
            <div className="space-y-4">
              {opsHighlights.map((item) => (
                <div key={item.name} className="rounded-2xl border border-white/10 p-4">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50">
                    <item.icon className="h-3 w-3 text-sky-300" /> {item.metric}
                  </div>
                  <p className="mt-2 text-sm text-white/60">{item.name}</p>
                  <p className="text-base font-semibold text-white">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-white/10 p-4">
              <p className="text-sm text-white/60">Trusted by</p>
              <p className="text-lg">Students / Operators / Agencies</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section-block space-y-8 py-2">
        <div className="space-y-2">
          <Badge variant="glow">Capabilities</Badge>
          <h2 className="text-3xl font-semibold">Engineered for clarity and leverage</h2>
          <p className="text-white/70">
            Choose the lane that moves your business forward — we ship quickly with handcrafted UI.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {serviceBuckets.map((bucket) => (
            <motion.div key={bucket.title} whileHover={{ y: -6 }} className="h-full">
              <Card className="h-full bg-card/80">
                <CardHeader className="space-y-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <bucket.icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{bucket.title}</CardTitle>
                  <CardDescription>{bucket.blurb}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-white/70">
                    {bucket.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Sparkles className="h-3 w-3 text-sky-300" /> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-block py-2">
        <div className="surface-gradient space-y-6 p-6 md:p-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Live Momentum</p>
              <h3 className="text-2xl font-semibold">What CodeBolt is shipping this week</h3>
            </div>
            <p className="text-sm text-white/70">
              Daily syncs, Loom handoffs, and automation drops for students, creators, and agencies.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {momentumStats.map((stat) => (
              <Card key={stat.label} className="bg-white/5">
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">{stat.value}</CardTitle>
                  <CardDescription>{stat.label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="marquee">
            <div className="marquee-track">
              {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                <span
                  key={`${item}-${idx}`}
                  className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block space-y-8 py-2">
        <div className="space-y-2">
          <Badge variant="glow">Operating cadence</Badge>
          <h2 className="text-3xl font-semibold">Simple three-step delivery</h2>
          <p className="text-white/70">
            A transparent sprint structure keeps feedback flowing and launches predictable.
          </p>
        </div>
        <div className="timeline-grid pl-10">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              whileHover={{ translateX: 6 }}
              className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute -left-10 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-400/60 to-emerald-400/60 text-sm font-semibold text-slate-900">
                {index + 1}
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Zap className="h-4 w-4" /> Step {index + 1}
              </div>
              <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
              <p className="text-sm text-white/70">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-block space-y-8 py-2">
        <div className="space-y-2">
          <Badge variant="glow">Case Highlights</Badge>
          <h2 className="text-3xl font-semibold">Proof that CodeBolt delivers</h2>
          <p className="text-white/70">
            Every project is tied to tangible metrics: saved hours, higher conversions, or clearer KPIs.
          </p>
        </div>
        <div className="case-grid">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.name}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Case {idx + 1}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{study.name}</h3>
              <p className="text-sm text-white/70">{study.impact}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-block py-2">
        <div className="surface-gradient grid gap-6 p-6 md:grid-cols-3 md:p-10">
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-white/15 bg-white/5 p-5 text-sm text-white/80"
            >
              <p className="text-base leading-relaxed">“{item.quote}”</p>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/60">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-block py-2">
        <div className="glass flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Next Step</p>
            <h3 className="mt-2 text-3xl font-semibold">Tell us what to build</h3>
            <p className="text-white/70">
              Need automation, dashboards, or a micro-tool? Drop a brief and get a free mini roadmap plus pricing within 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/contact">Start a project</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/about">More about us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

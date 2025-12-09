"use client";

import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, Users, Workflow, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const pillars = [
  {
    icon: Workflow,
    title: "Automation-first",
    copy: "We design flows that remove repetitive work so teams can focus on high-leverage tasks.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability at speed",
    copy: "Rapid delivery without cutting corners - quality gates, QA runs, and documentation included.",
  },
  {
    icon: Users,
    title: "Human-centered UI",
    copy: "Tools feel friendly. We obsess over clarity, microcopy, and frictionless onboarding.",
  },
  {
    icon: Lightbulb,
    title: "AI with intention",
    copy: "We only add AI when it meaningfully advances the workflow, not because it's trendy.",
  },
];

const timeline = [
  {
    year: "2021",
    label: "Early Experiments",
    detail: "Built resume bots and analytics dashboards for classmates & student founders.",
  },
  {
    year: "2022",
    label: "Automation Studio",
    detail: "Launched CodeBolt Systems to ship AI copilots, WhatsApp flows, and micro-SaaS experiments.",
  },
  {
    year: "2023",
    label: "Enterprise-ready UX",
    detail: "Delivered dashboards and automation suites for agencies, hospitality, and logistics teams.",
  },
  {
    year: "2024-25",
    label: "AI-Driven Ops",
    detail: "Scaling AI-first workflows, agentic dashboards, and self-serve automation kits.",
  },
];

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="section-block space-y-6 py-2">
        <Badge variant="glow">About CodeBolt</Badge>
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
              <Star className="h-3 w-3 text-sky-300" /> Human automation studio
            </div>
            <h1 className="text-4xl font-semibold leading-tight">
              We turn messy workflows into calm, automated software.
            </h1>
            <p className="text-lg text-white/70">
              CodeBolt Systems combines automation engineering, AI micro-tools, and cinematic UI to launch
              lightweight software for students, operators, and founders. We stay scrappy, quality-obsessed,
              and focused on measurable impact.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>72h</CardTitle>
                  <CardDescription>Average turnaround</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>60+</CardTitle>
                  <CardDescription>Automations delivered</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>95%</CardTitle>
                  <CardDescription>Clients on retainer</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
          <Card className="glass space-y-4 border-white/10 p-5 text-sm text-white/70">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Mission</p>
            <p>
              Turn everyday problems into powerful, easy-to-use digital solutions. Every build must save time,
              reduce stress, or make money.
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Who we serve</p>
            <p>Students, small-business operators, agency partners, and startup teams building fast MVPs.</p>
          </Card>
        </div>
      </section>

      <section className="section-block space-y-8 py-2">
        <Badge variant="glow">Principles</Badge>
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <motion.div key={pillar.title} whileHover={{ y: -4 }}>
              <Card className="bg-gradient-to-br from-white/5 to-transparent">
                <CardHeader className="space-y-2">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                    <pillar.icon className="h-4 w-4" />
                  </div>
                  <CardTitle>
                    {index + 1}. {pillar.title}
                  </CardTitle>
                  <CardDescription>{pillar.copy}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-block space-y-8 py-2">
        <Badge variant="glow">Timeline</Badge>
        <div className="timeline-grid pl-12">
          {timeline.map((entry, index) => (
            <motion.div
              key={entry.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute -left-12 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-400/70 to-emerald-400/60 text-sm font-semibold text-slate-900">
                {entry.year}
              </div>
              <p className="text-lg font-semibold">{entry.label}</p>
              <p className="text-sm text-white/70">{entry.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

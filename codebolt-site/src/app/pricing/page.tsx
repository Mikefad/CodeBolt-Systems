"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Automation Sprint",
    price: { monthly: "$39/mo", oneTime: "$149" },
    description: "Best for onboarding flows, WhatsApp responders, and analytics scripts.",
    features: [
      "One automation or workflow",
      "Loom walkthrough + documentation",
      "Optional monitoring add-on",
    ],
  },
  {
    name: "Micro-SaaS MVP",
    price: { monthly: "$79/mo", oneTime: "$399" },
    description: "AI-powered tools built end-to-end in four weeks or less.",
    features: [
      "AI + automation architecture",
      "Dashboard or UI layer included",
      "1 month of support",
    ],
  },
  {
    name: "Executive Dashboards",
    price: { monthly: "$59/mo", oneTime: "$249" },
    description: "React/Tableau dashboards with KPI cards and scheduled exports.",
    features: [
      "Data modeling + ingestion",
      "Custom components + theming",
      "Automated exports & alerts",
    ],
  },
];

const addOns = [
  { label: "Resume Analyzer Setup", price: "$39-$79" },
  { label: "WhatsApp Automation Setup", price: "$79-$149" },
  { label: "Consultations / Strategy Sessions", price: "$20-$40" },
];

const inclusions = [
  "Kickoff call + discovery doc",
  "Live Loom walkthrough on delivery",
  "One round of iteration included",
  "Deployment support + how-to guide",
];

export default function PricingPage() {
  const [billing, setBilling] = useState<"oneTime" | "monthly">("oneTime");

  return (
    <div className="page-shell">
      <section className="section-block space-y-4 py-2 text-center">
        <Badge variant="glow" className="mx-auto w-fit">
          Pricing
        </Badge>
        <h1 className="text-4xl font-semibold">
          Transparent packages for automation, dashboards, and SaaS
        </h1>
        <p className="mx-auto max-w-2xl text-white/70">
          Ship an automation this week or launch a micro-tool this month. Clear scope, fast delivery,
          and optional retainers when you need ongoing help.
        </p>
        <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/5 p-1 text-sm">
          <button
            className={`rounded-full px-4 py-1 ${
              billing === "oneTime" ? "bg-white text-black" : "text-white/60"
            }`}
            onClick={() => setBilling("oneTime")}
          >
            One-time build
          </button>
          <button
            className={`rounded-full px-4 py-1 ${
              billing === "monthly" ? "bg-white text-black" : "text-white/60"
            }`}
            onClick={() => setBilling("monthly")}
          >
            Maintenance / monthly
          </button>
        </div>
      </section>

      <section className="section-block grid gap-6 py-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader className="space-y-2">
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <p className="text-3xl font-semibold">
                  {plan.price[billing]}{" "}
                  <span className="text-sm font-normal text-white/50">
                    {billing === "oneTime" ? "one-time" : "per month"}
                  </span>
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white/70">
                  {plan.features.map((feature) => (
                    <li key={feature}>- {feature}</li>
                  ))}
                </ul>
                <Button className="mt-6 w-full" variant={index === 1 ? "default" : "ghost"}>
                  Start with {plan.name}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <section className="section-block space-y-6 py-2">
        <Badge variant="glow">Add-ons & custom</Badge>
        <div className="grid gap-4 md:grid-cols-3">
          {addOns.map((addOn) => (
            <Card key={addOn.label}>
              <CardHeader>
                <CardTitle className="text-lg">{addOn.label}</CardTitle>
                <CardDescription>{addOn.price}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="surface-gradient space-y-4 rounded-3xl border border-white/10 p-6 text-sm text-white/80">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">
            Every package includes
          </p>
          <ul className="space-y-2">
            {inclusions.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}


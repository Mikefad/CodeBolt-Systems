"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MessageCircle, Phone, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactChannels = [
  { icon: Mail, label: "Email", value: "hello@codeboltsystems.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "+123-456-7890" },
  { icon: Phone, label: "Phone", value: "+123-456-7890" },
];

const faq = [
  {
    q: "How soon can you start?",
    a: "Automation sprint slots are open weekly. We can usually kick off within 48 hours.",
  },
  {
    q: "Do you offer retainers?",
    a: "Yes. Maintenance retainers start at $19/mo and cover monitoring plus micro updates.",
  },
  {
    q: "Can we see past work?",
    a: "Absolutely. Ask for demos of the Hotel Finance Dashboard, CargoPro, or the resume analyzer.",
  },
];

const promisePoints = [
  "Mini roadmap + quote in under 24 hours.",
  "Founder-level collaboration on every sprint.",
  "Transparent scope, pricing, and delivery windows.",
];

const statusCopy: Record<"idle" | "sending" | "sent" | "error", string> = {
  idle: "We usually reply inside 24 hours.",
  sending: "Sending your brief...",
  sent: "Sent! Expect a reply shortly.",
  error: "We couldn’t send this. Try again or email hello@codeboltsystems.com.",
};

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing.");
      setErrorMessage("Contact form is temporarily unavailable. Email hello@codeboltsystems.com instead.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      from_name: (formData.get("name") as string) ?? "",
      from_email: (formData.get("email") as string) ?? "",
      company: (formData.get("company") as string) ?? "",
      message: (formData.get("message") as string) ?? "",
    };

    try {
      await emailjs.send(serviceId, templateId, payload, publicKey);
      setStatus("sent");
      event.currentTarget.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("EmailJS error", error);
      setErrorMessage("We couldn’t send this. Please retry or email hello@codeboltsystems.com.");
      setStatus("error");
    }
  };

  return (
    <div className="page-shell">
      <section className="section-block space-y-4 py-2 text-center">
        <Badge variant="glow" className="mx-auto w-fit">
          Contact
        </Badge>
        <h1 className="text-4xl font-semibold">Tell us about the workflow you need</h1>
        <p className="mx-auto max-w-2xl text-white/70">
          Share the friction in your process and we’ll reply with next steps, scope, and pricing inside 24 hours.
        </p>
      </section>

      <section className="section-block py-2">
        <div className="surface-gradient space-y-4 rounded-3xl border border-white/10 p-6 text-sm text-white/80">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
            <Sparkles className="h-3 w-3" /> What to expect
          </div>
          <p className="text-base text-white">
            Every request gets a short audit, sprint suggestions, and pricing options. No complex intake forms.
          </p>
          <ul className="space-y-2">
            {promisePoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-300" /> {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-block grid gap-8 py-2 lg:grid-cols-[1.5fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Project Brief</CardTitle>
            <CardDescription>We’ll respond with a roadmap and timeline.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input name="name" placeholder="Name" autoComplete="name" required />
              <Input name="email" type="email" placeholder="Email or WhatsApp" autoComplete="email" required />
              <Input name="company" placeholder="Company / Team" autoComplete="organization" />
              <Textarea
                name="message"
                placeholder="Tell us about the automation, dashboard, or tool you need."
                rows={4}
                required
              />
              <div className="space-y-2">
                <Button type="submit" className="w-full" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : status === "sent" ? "Sent! We'll reply shortly." : "Send brief"}
                </Button>
                <p
                  className={`text-sm ${status === "sent" ? "text-emerald-300" : status === "error" ? "text-rose-300" : "text-white/60"}`}
                >
                  {errorMessage ?? statusCopy[status]}
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Reach out directly</CardTitle>
              <CardDescription>Prefer a quick call or DM? We’re available.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {contactChannels.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 text-sm">
                  <Icon className="h-4 w-4 text-sky-300" />
                  <div>
                    <p className="text-white/70">{label}</p>
                    <p>{value}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>FAQ</CardTitle>
              <CardDescription>Answers for quick planning.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {faq.map((item) => (
                <div key={item.q}>
                  <p className="text-sm font-semibold">{item.q}</p>
                  <p className="text-sm text-white/70">{item.a}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}


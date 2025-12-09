import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuroraBackground } from "@/components/aurora-background";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingCTA } from "@/components/floating-cta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeBolt Systems — Automation, Dashboards, Micro-SaaS",
  description:
    "Automation studio building AI micro-tools, dashboards, and automation for students, creators, and lean teams.",
  metadataBase: new URL("https://codeboltsystems.com"),
  openGraph: {
    title: "CodeBolt Systems — Automation, Dashboards, Micro-SaaS",
    description:
      "AI-powered micro-SaaS, automation, dashboards, and lightning-fast websites built for momentum.",
    url: "https://codeboltsystems.com",
    siteName: "CodeBolt Systems",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <AuroraBackground />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <FloatingCTA />
        </div>
      </body>
    </html>
  );
}

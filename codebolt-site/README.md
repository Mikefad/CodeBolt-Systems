## CodeBolt Systems Website

High-polish marketing site for CodeBolt Systems built with Next.js 14, the App Router, Tailwind CSS, shadcn/ui, and Framer Motion. Pages cover the full brand story (home, about, pricing, contact) with glassmorphic surfaces, motion accents, and enterprise-ready CTAs.

### Tech stack

- Next.js 14.2 + React 18 (deployed on Vercel)
- Tailwind CSS + shadcn/ui components
- Framer Motion for micro‑interactions
- EmailJS for contact-form delivery

### Local development

```bash
pnpm install   # or npm install / yarn install
pnpm dev       # runs next dev
```

The app lives in `/codebolt-site`. Visit `http://localhost:3000`.

### Environment variables

Copy `.env.example` to `.env.local` and fill in the EmailJS credentials:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
```

> All variables are prefixed with `NEXT_PUBLIC_` so they can also be set in the Vercel dashboard for production deploys.

### EmailJS wiring

1. In [EmailJS](https://dashboard.emailjs.com/), connect an email service (e.g., Gmail) and note its **Service ID**.
2. Create an Email Template that expects the following variables: `from_name`, `from_email`, `company`, `message`.
3. Copy the Template ID and your Public Key from the EmailJS dashboard.
4. Place those three values inside `.env.local` (and in Vercel -> Project Settings -> Environment Variables).
5. The contact form (`src/app/contact/page.tsx`) already posts via `emailjs.send`. When the IDs are present it will send directly to your inbox; otherwise it will show a fallback error message.

### Deployment

The repo is configured for Vercel. Make sure the project root is set to `codebolt-site/` and the build command is the default `next build`. Add the three EmailJS env vars to Vercel before redeploying so the contact form works in production.

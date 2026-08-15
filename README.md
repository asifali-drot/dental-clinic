# Dental Parlor and Implant Clinic — Website

A premium, production-ready Next.js website for Dental Parlor and Implant Clinic (G-13, Islamabad).

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Project Structure

- `app/` — pages (Home, About, Services, Implants, Contact) using the App Router
- `components/` — Header, Footer, MobileCTA, and all homepage sections
- `components/sections/` — Hero, Services, ImplantSection, WhyChooseUs, PatientJourney, Reviews, AboutSection, LocationSection, AppointmentForm/Section
- `lib/data.ts` — **central business configuration**: name, address, phone, WhatsApp, rating, services, nav links. Edit this file to update business info site-wide.
- `lib/utils.ts` — small shared helpers

## Notes

- All imagery is original SVG line-art (no stock photos) — swap in real photography via `next/image` when ready.
- The appointment form (`components/sections/AppointmentForm.tsx`) is frontend-only and validated client-side. It's structured to be wired up to Supabase, Resend, WhatsApp, or a CRM — see the comment in the `handleSubmit` function.
- Fonts (Plus Jakarta Sans + Inter) are self-hosted via `@fontsource` packages, so no external Google Fonts request is made at runtime.
- JSON-LD `Dentist` schema, `sitemap.ts`, and `robots.ts` are included for local SEO. Only verified business info (name, address, phone, rating, review count) is included — no fabricated claims.
- Replace `/public/og-image.jpg` with a real 1200×630 image when available; the metadata is already wired to reference it.

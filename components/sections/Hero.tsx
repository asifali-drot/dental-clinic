import Image from "next/image";
import Link from "next/link";
import { Phone, CalendarCheck, ShieldCheck } from "lucide-react";
import { business, links } from "@/lib/data";
import RatingStars from "@/components/RatingStars";
import SmileArc from "@/components/decor/SmileArc";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky to-offwhite pt-14 pb-0 sm:pt-20">
      {/* soft decorative background shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-32 right-0 h-96 w-96 rounded-full bg-blue/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-blue shadow-sm">
            Premium Dental Care in Islamabad
          </span>

          <h1 className="mt-6 text-[2.5rem] font-bold leading-[1.08] text-navy sm:text-5xl lg:text-[3.4rem]">
            {business.tagline.replace(" Start Here.", "")}{" "}
            <span className="text-teal">Start Here.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Modern dental care and implant solutions at{" "}
            {business.name}, designed around your comfort,
            confidence, and long-term oral health &mdash; right here in G-13,
            Islamabad.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal/25 transition-all hover:-translate-y-0.5 hover:bg-teal/90"
            >
              <CalendarCheck className="h-4 w-4" />
              Book an Appointment
            </Link>
            <a
              href={links.call}
              className="flex items-center justify-center gap-2 rounded-full border border-navy/15 bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-navy/30"
            >
              <Phone className="h-4 w-4" />
              Call {business.phoneDisplay}
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2.5">
              <span className="font-heading text-2xl font-extrabold text-navy">
                {business.rating}
              </span>
              <div>
                <RatingStars rating={business.rating} className="text-amber-400" />
                <p className="text-xs font-medium text-muted">
                  {business.reviewCount}+ patient reviews
                </p>
              </div>
            </div>
            <div className="hidden h-8 w-px bg-navy/10 sm:block" />
            <div className="flex items-center gap-2 text-sm font-medium text-muted">
              <ShieldCheck className="h-4 w-4 text-teal" />
              Patient-focused, modern care
            </div>
          </div>
        </div>

        <div className="reveal relative" data-delay="150">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-blue/15 via-teal/10 to-transparent blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_30px_60px_-20px_rgba(18,59,93,0.25)]">
              <Image
                src="/images/hero-dentist.png"
                alt="Professional dentist at Dental Parlor and Implant Clinic Islamabad"
                width={600}
                height={650}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-7 -left-6 flex items-center gap-3 rounded-2xl border border-navy/5 bg-white px-5 py-4 shadow-[0_20px_40px_-15px_rgba(18,59,93,0.3)] animate-float sm:-left-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal/10">
                <span className="font-heading text-base font-bold text-teal">
                  {business.rating}
                </span>
              </div>
              <div>
                <RatingStars rating={business.rating} size="h-3 w-3" />
                <p className="mt-0.5 text-xs font-semibold text-navy">
                  {business.reviewCount} Reviews
                </p>
              </div>
            </div>

            <div className="absolute -top-5 -right-4 rounded-xl border border-navy/5 bg-white px-4 py-2.5 shadow-lg sm:-right-8">
              <p className="text-[11px] font-semibold text-muted">
                Now welcoming
              </p>
              <p className="font-heading text-sm font-bold text-navy">
                New Patients
              </p>
            </div>
          </div>
        </div>
      </div>

      <SmileArc className="mt-16" tone="white" />
    </section>
  );
}

function HeroIllustration() {
  return (
    <svg viewBox="0 0 480 520" className="h-auto w-full">
      <defs>
        <linearGradient id="heroBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#EEF8FB" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        <linearGradient id="heroArc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1677A8" />
          <stop offset="100%" stopColor="#35A6A0" />
        </linearGradient>
      </defs>
      <rect width="480" height="520" fill="url(#heroBg)" />
      <circle cx="240" cy="230" r="150" fill="#1677A8" opacity="0.06" />
      <circle cx="330" cy="150" r="70" fill="#35A6A0" opacity="0.12" />

      {/* stylised dental chair + light, line-art */}
      <g stroke="#123B5D" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M120 400 h240" />
        <path d="M150 400 V330 q0 -20 20 -20 h100" />
        <path d="M270 310 h60 q16 0 16 16 v10" />
        <rect x="150" y="260" width="120" height="55" rx="14" />
        <path d="M150 260 q-24 0 -24 -24 v-30 q0 -14 14 -14" />
        <circle cx="330" cy="150" r="34" />
        <path d="M330 116 v-24 M330 184 v14 M296 150 h-16 M364 150 h16" />
        <path d="M300 130 l-14 -14 M360 130 l14 -14 M300 170 l-14 14" />
      </g>

      <path
        d="M60 460 C 160 500 320 500 420 460"
        stroke="url(#heroArc)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

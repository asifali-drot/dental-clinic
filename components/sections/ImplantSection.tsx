import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const benefits = [
  "Natural-looking appearance that blends with your smile",
  "Designed to support comfortable, everyday function",
  "A long-term approach to replacing missing teeth",
  "Personalised assessment before any treatment begins",
];

export default function ImplantSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-teal/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="reveal order-2 lg:order-1">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-sm">
            <Image
              src="/images/dental-implants.png"
              alt="Beautiful healthy smile from dental implants"
              width={500}
              height={500}
              className="h-auto w-full rounded-[1.6rem] object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Dental Implants"
            title="Restore Your Smile With Modern Dental Implants"
            tone="light"
            className="reveal"
          />
          <p className="reveal mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Missing teeth can affect the way you eat, speak, and smile.
            Dental implants offer a modern, considered path to restoring your
            smile &mdash; your dentist can assess whether this treatment is
            right for you during a personal consultation.
          </p>

          <ul className="mt-8 space-y-4">
            {benefits.map((benefit, i) => (
              <li
                key={benefit}
                className="reveal flex items-start gap-3"
                data-delay={String(i * 70)}
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/20 text-teal">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-white/85 sm:text-base">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="reveal mt-9 inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal/20 transition-all hover:-translate-y-0.5 hover:bg-teal/90"
          >
            Book an Implant Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ImplantIllustration() {
  return (
    <svg viewBox="0 0 420 420" className="h-auto w-full rounded-[1.6rem]">
      <defs>
        <linearGradient id="implantBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0F3352" />
          <stop offset="100%" stopColor="#123B5D" />
        </linearGradient>
      </defs>
      <rect width="420" height="420" rx="24" fill="url(#implantBg)" />
      <circle cx="210" cy="140" r="90" fill="#35A6A0" opacity="0.08" />

      <g stroke="#EEF8FB" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* crown */}
        <path d="M170 90 q40 -28 80 0 q10 40 -10 66 h-60 q-20 -26 -10 -66 Z" />
        {/* abutment */}
        <path d="M186 156 h48 l-8 30 h-32 Z" />
        {/* implant screw */}
        <path d="M198 186 h24 v96 q0 20 -12 20 q-12 0 -12 -20 Z" />
        <path d="M198 198 h24 M198 212 h24 M198 226 h24 M198 240 h24 M198 254 h24 M198 268 h24" opacity="0.6" />
        {/* jaw line */}
        <path d="M90 300 q120 -30 240 0" opacity="0.5" strokeDasharray="2 6" />
      </g>

      <circle cx="210" cy="120" r="3" fill="#35A6A0" />
      <circle cx="150" cy="180" r="3" fill="#1677A8" />
      <circle cx="280" cy="200" r="3" fill="#35A6A0" />
    </svg>
  );
}

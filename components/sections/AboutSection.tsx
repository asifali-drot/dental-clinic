import Image from "next/image";
import { HeartPulse, Smile, Sparkle, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const focusPoints = [
  { icon: ShieldCheck, label: "Preventive care" },
  { icon: HeartPulse, label: "Patient comfort" },
  { icon: Sparkle, label: "Personalised treatment" },
  { icon: Smile, label: "Smile confidence" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-offwhite py-20 sm:py-24 scroll-mt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="reveal relative mx-auto w-full max-w-md lg:mx-0">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-tr from-teal/10 to-blue/10 blur-xl" />
          <div className="overflow-hidden rounded-[1.75rem] border border-navy/8 bg-white shadow-[0_25px_50px_-25px_rgba(18,59,93,0.3)]">
            <Image
              src="/images/about-clinic.png"
              alt="Dental Parlor and Implant Clinic interior"
              width={500}
              height={550}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="About Us"
            title="Dentistry Centred on You"
            className="reveal"
          />
          <p className="reveal mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Dental Parlor and Implant Clinic offers modern dental care in the
            heart of G-13, Islamabad. Our approach is simple: listen first,
            explain clearly, and treat every patient with the same care and
            attention we&rsquo;d want for our own families.
          </p>
          <p className="reveal mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Whether you&rsquo;re here for a routine cleaning or exploring
            dental implants, our focus stays on your comfort and long-term
            oral health, in an environment designed to feel calm rather than
            clinical.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {focusPoints.map((point, i) => (
              <div
                key={point.label}
                className="reveal flex items-center gap-3 rounded-xl border border-navy/8 bg-white px-4 py-3.5"
                data-delay={String(i * 60)}
              >
                <point.icon className="h-5 w-5 shrink-0 text-teal" />
                <span className="text-sm font-semibold text-navy">
                  {point.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutIllustration() {
  return (
    <svg viewBox="0 0 420 460" className="h-auto w-full">
      <defs>
        <linearGradient id="aboutBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#EEF8FB" />
        </linearGradient>
      </defs>
      <rect width="420" height="460" fill="url(#aboutBg)" />
      <circle cx="330" cy="90" r="60" fill="#1677A8" opacity="0.08" />
      <circle cx="90" cy="380" r="80" fill="#35A6A0" opacity="0.1" />

      <g stroke="#123B5D" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* stylised person silhouette bust */}
        <circle cx="210" cy="180" r="52" />
        <path d="M120 400 q90 -70 180 0 v20 h-180 Z" />
        {/* smile line */}
        <path d="M182 195 q28 22 56 0" />
        <circle cx="188" cy="168" r="3" fill="#123B5D" />
        <circle cx="232" cy="168" r="3" fill="#123B5D" />
      </g>

      <path
        d="M60 60 q150 -40 300 0"
        stroke="#35A6A0"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

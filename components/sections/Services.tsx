import Link from "next/link";
import {
  Stethoscope,
  Sparkles,
  Sun,
  Layers,
  Activity,
  Crown,
  Link as LinkIcon,
  Anchor,
  Smile,
  AlignCenter,
  ArrowRight,
} from "lucide-react";
import { services, type Service } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

const iconMap: Record<Service["icon"], typeof Stethoscope> = {
  stethoscope: Stethoscope,
  sparkles: Sparkles,
  sun: Sun,
  layers: Layers,
  activity: Activity,
  crown: Crown,
  link: LinkIcon,
  anchor: Anchor,
  smile: Smile,
  align: AlignCenter,
};

export default function Services({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section id="services" className="bg-offwhite py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Services"
            title="Dental Care Built Around You"
            description="From routine checkups to advanced implant consultations, explore the treatments available at our G-13 Islamabad clinic."
          />
          <Link
            href="/services"
            className="reveal hidden shrink-0 items-center gap-2 text-sm font-semibold text-blue hover:text-navy sm:flex"
          >
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                id={service.id}
                className="reveal group relative overflow-hidden rounded-2xl border border-navy/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-[0_20px_40px_-20px_rgba(18,59,93,0.25)] scroll-mt-24"
                data-delay={String((i % 3) * 80)}
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-teal/5 transition-transform duration-300 group-hover:scale-125"
                />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-sky text-blue transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="relative mt-5 font-heading text-lg font-bold text-navy">
                  {service.name}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <Link
                  href={`/services#${service.id}`}
                  className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-colors group-hover:text-teal"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

        <Link
          href="/services"
          className="reveal mt-10 flex items-center justify-center gap-2 text-sm font-semibold text-blue hover:text-navy sm:hidden"
        >
          View all services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

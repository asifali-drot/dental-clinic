import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Services from "@/components/sections/Services";
import AppointmentSection from "@/components/sections/AppointmentSection";

export const metadata: Metadata = {
  title: "Dental Services",
  description:
    "Explore the range of dental treatments available at Dental Parlor and Implant Clinic in G-13, Islamabad, from general dentistry to dental implants.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Dental Treatments for Every Stage of Care"
        description="These are the categories of dental care offered at our G-13 Islamabad clinic. Your dentist can confirm which treatments are the right fit for you during a consultation."
      />
      <Services />
      <section className="bg-white pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal flex flex-col items-center justify-between gap-6 rounded-3xl bg-navy px-8 py-10 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="font-heading text-xl font-bold text-white">
                Considering dental implants?
              </h3>
              <p className="mt-2 max-w-md text-sm text-white/70">
                See how implants can restore both function and confidence to
                your smile.
              </p>
            </div>
            <Link
              href="/implants"
              className="flex shrink-0 items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-teal/90"
            >
              Explore Dental Implants <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <AppointmentSection />
    </>
  );
}

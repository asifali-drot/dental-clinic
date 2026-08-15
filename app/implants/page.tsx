import type { Metadata } from "next";
import { Anchor, Smile, Clock, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import ImplantSection from "@/components/sections/ImplantSection";
import SectionHeading from "@/components/SectionHeading";
import AppointmentSection from "@/components/sections/AppointmentSection";

export const metadata: Metadata = {
  title: "Dental Implants in Islamabad",
  description:
    "Learn about dental implants at Dental Parlor and Implant Clinic in G-13, Islamabad — a modern approach to replacing missing teeth. Book a consultation today.",
  alternates: { canonical: "/implants" },
};

const faqs = [
  {
    q: "What are dental implants?",
    a: "A dental implant is a modern way to replace a missing tooth, designed to support a natural-looking crown that functions similarly to a real tooth.",
  },
  {
    q: "Am I a candidate for dental implants?",
    a: "Suitability depends on your individual oral health. Your dentist can assess whether dental implants are the right option for you during a consultation.",
  },
  {
    q: "How long does implant treatment take?",
    a: "Timelines vary from patient to patient depending on your treatment plan. Your dentist will walk you through an estimated timeline during your consultation.",
  },
  {
    q: "Are dental implants comfortable?",
    a: "Implants are designed to feel and function much like natural teeth once treatment is complete. Your dentist will discuss what to expect at each stage.",
  },
];

const highlights = [
  {
    icon: Anchor,
    title: "Built to Last",
    description: "A long-term approach to replacing missing teeth.",
  },
  {
    icon: Smile,
    title: "Natural Look",
    description: "Designed to blend naturally with your existing smile.",
  },
  {
    icon: Clock,
    title: "Personalised Timeline",
    description: "A treatment plan paced around your individual needs.",
  },
  {
    icon: ShieldCheck,
    title: "Careful Assessment",
    description: "Every plan begins with a thorough personal consultation.",
  },
];

export default function ImplantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Dental Implants"
        title="A Modern Path to Replacing Missing Teeth"
        description="Dental implants are one of our clinic's core areas of focus — designed to help restore both the function and confidence of your smile."
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Why Consider Implants"
            title="Designed Around Function, Comfort, and Appearance"
            align="center"
            description="Every treatment plan starts with an honest, personalised assessment of your oral health."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className="reveal rounded-2xl border border-navy/8 bg-offwhite/60 p-6 text-center"
                data-delay={String(i * 70)}
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-sky text-blue">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-base font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImplantSection />

      <section className="bg-offwhite py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Common Questions"
            title="Dental Implant FAQs"
            align="center"
          />
          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={faq.q}
                className="reveal group rounded-2xl border border-navy/8 bg-white p-5 open:border-teal/30"
                data-delay={String(i * 60)}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-heading text-base font-semibold text-navy">
                  {faq.q}
                  <span className="ml-4 shrink-0 text-teal transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <AppointmentSection />
    </>
  );
}

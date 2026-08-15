import {
  HeartHandshake,
  ShieldCheck,
  Sofa,
  LayoutGrid,
  MapPin,
} from "lucide-react";
import { whyChooseUs } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

const iconMap: Record<string, typeof HeartHandshake> = {
  "heart-handshake": HeartHandshake,
  "shield-check": ShieldCheck,
  sofa: Sofa,
  "layout-grid": LayoutGrid,
  "map-pin": MapPin,
};

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Care That Puts You First"
          align="center"
          description="A modern clinic built around comfort, clarity, and consistent quality of care."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className="reveal group rounded-2xl border border-navy/8 bg-offwhite/60 p-6 text-center transition-all duration-300 hover:border-teal/30 hover:bg-white hover:shadow-[0_20px_40px_-20px_rgba(18,59,93,0.2)] lg:text-left"
                data-delay={String(i * 70)}
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white transition-transform duration-300 group-hover:scale-110 lg:mx-0">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-base font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

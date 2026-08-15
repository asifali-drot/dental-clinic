import { HeartHandshake, Sparkles, Sofa, Layers } from "lucide-react";
import { business } from "@/lib/data";
import RatingStars from "@/components/RatingStars";

const points = [
  { icon: HeartHandshake, label: "Patient-focused care" },
  { icon: Layers, label: "Modern dental treatment" },
  { icon: Sofa, label: "Comfortable environment" },
  { icon: Sparkles, label: "Comprehensive dental services" },
];

export default function TrustBar() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal flex flex-col items-center justify-between gap-8 rounded-3xl border border-navy/5 bg-sky/60 px-6 py-8 sm:flex-row sm:px-10">
          <div className="flex items-center gap-4">
            <span className="font-heading text-4xl font-extrabold text-navy">
              {business.rating}
            </span>
            <div>
              <RatingStars rating={business.rating} size="h-5 w-5" />
              <p className="mt-1 text-sm font-semibold text-navy">
                {business.reviewCount} Patient Reviews
              </p>
            </div>
          </div>

          <div className="hidden h-12 w-px bg-navy/10 sm:block" />

          <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4">
            {points.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <Icon className="h-[18px] w-[18px] shrink-0 text-teal" />
                <span className="text-sm font-medium text-ink/80">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Quote } from "lucide-react";
import { business } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import RatingStars from "@/components/RatingStars";

const placeholderReviews = Array.from({ length: 3 }).map((_, i) => ({
  id: i,
}));

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-20 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Patient Reviews"
            title="Trusted by Patients Across Islamabad"
            align="center"
          />
          <div className="reveal flex items-center gap-3">
            <span className="font-heading text-4xl font-extrabold text-navy">
              {business.rating}
            </span>
            <div className="text-left">
              <RatingStars rating={business.rating} size="h-5 w-5" />
              <p className="mt-1 text-sm font-semibold text-muted">
                Based on {business.reviewCount} patient reviews
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {placeholderReviews.map((review, i) => (
            <div
              key={review.id}
              className="reveal rounded-2xl border border-navy/8 bg-offwhite/70 p-6"
              data-delay={String(i * 90)}
            >
              <Quote className="h-7 w-7 text-teal/40" />
              <p className="mt-4 text-sm italic leading-relaxed text-muted">
                Patient review will appear here.
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-navy/8 pt-4">
                <RatingStars rating={5} size="h-3.5 w-3.5" />
                <span className="text-xs font-medium text-muted">
                  Verified Patient
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 flex justify-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Dental+Parlor+and+Implant+Clinic+Islamabad"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-navy/15 px-7 py-3 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-navy/30 hover:bg-sky"
          >
            See More Patient Reviews
          </a>
        </div>
      </div>
    </section>
  );
}

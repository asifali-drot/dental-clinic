import { journeySteps } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function PatientJourney() {
  return (
    <section className="bg-sky/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Your Visit"
          title="What to Expect, Step by Step"
          align="center"
          description="A clear, unhurried path from your first call to the start of your treatment."
        />

        {/* Desktop: horizontal timeline */}
        <div className="mt-16 hidden lg:block">
          <div className="relative grid grid-cols-4 gap-8">
            <div className="absolute left-0 right-0 top-6 h-px bg-navy/10" />
            {journeySteps.map((step, i) => (
              <div
                key={step.number}
                className="reveal relative"
                data-delay={String(i * 100)}
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-navy font-heading text-sm font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="mt-12 space-y-8 lg:hidden">
          {journeySteps.map((step, i) => (
            <div
              key={step.number}
              className="reveal relative flex gap-5"
              data-delay={String(i * 80)}
            >
              <div className="flex flex-col items-center">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy font-heading text-sm font-bold text-white">
                  {step.number}
                </div>
                {i < journeySteps.length - 1 && (
                  <div className="mt-2 w-px flex-1 bg-navy/10" />
                )}
              </div>
              <div className="pb-2">
                <h3 className="font-heading text-base font-bold text-navy">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

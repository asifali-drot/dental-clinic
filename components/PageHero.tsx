import SmileArc from "@/components/decor/SmileArc";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky to-offwhite pt-16 pb-0 sm:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-10 h-64 w-64 rounded-full bg-teal/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-5 pb-16 text-center sm:px-8 sm:pb-20">
        <span className="reveal inline-block text-xs font-bold uppercase tracking-[0.14em] text-blue">
          {eyebrow}
        </span>
        <h1 className="reveal mt-4 text-4xl font-bold leading-tight text-navy sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="reveal mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        )}
      </div>
      <SmileArc tone="white" />
    </section>
  );
}

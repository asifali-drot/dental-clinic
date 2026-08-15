import { MapPin, Phone, MessageCircle, Navigation } from "lucide-react";
import { business, links } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";

export default function LocationSection() {
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    business.address.full
  )}&output=embed`;

  return (
    <section id="location" className="bg-white py-20 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Visit Our Clinic"
          title="Find Us in G-13, Islamabad"
          align="center"
          description="Conveniently located and easy to reach for patients across Islamabad."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal flex flex-col justify-between rounded-3xl border border-navy/8 bg-sky/50 p-8">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-navy">
                {business.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {business.address.line1}
                <br />
                {business.address.line2}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-navy">
                <Phone className="h-4 w-4 text-teal" />
                {business.phoneDisplay}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={links.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-navy/90"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
              <div className="flex gap-3">
                <a
                  href={links.call}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-navy/15 bg-white px-4 py-3 text-sm font-semibold text-navy transition-all hover:border-navy/30"
                >
                  <Phone className="h-4 w-4" />
                  Call
                </a>
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-3 text-sm font-semibold text-teal transition-all hover:bg-teal/15"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="reveal overflow-hidden rounded-3xl border border-navy/8 shadow-[0_25px_50px_-25px_rgba(18,59,93,0.25)]">
            <iframe
              title={`Map showing the location of ${business.name}`}
              src={mapEmbedSrc}
              className="h-80 w-full lg:h-full lg:min-h-[420px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

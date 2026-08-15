import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { business, links } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import AppointmentForm from "@/components/sections/AppointmentForm";
import SmileArc from "@/components/decor/SmileArc";

export default function AppointmentSection() {
  return (
    <section id="appointment" className="relative overflow-hidden bg-sky/60 pt-0 scroll-mt-20">
      <SmileArc tone="sky" />
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Book Your Visit"
              title="Ready to Take the Next Step Toward a Healthier Smile?"
              description="Share a few details and our team will get back to you to confirm your appointment time."
            />

            <div className="reveal mt-6 overflow-hidden rounded-2xl border border-navy/8 bg-white p-2 shadow-sm">
              <Image
                src="/images/clinic-care.png"
                alt="Compassionate dentist consultation at Dental Parlor Islamabad"
                width={500}
                height={300}
                className="h-48 w-full rounded-xl object-cover"
              />
            </div>

            <div className="reveal mt-8 space-y-3">
              <a
                href={links.call}
                className="flex items-center gap-3 rounded-2xl border border-navy/10 bg-white px-5 py-4 transition-all hover:border-navy/25"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-muted">Call us</p>
                  <p className="text-sm font-bold text-navy">
                    {business.phoneDisplay}
                  </p>
                </div>
              </a>
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-navy/10 bg-white px-5 py-4 transition-all hover:border-navy/25"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal text-white">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-muted">
                    Message us
                  </p>
                  <p className="text-sm font-bold text-navy">
                    WhatsApp Chat
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="reveal">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}

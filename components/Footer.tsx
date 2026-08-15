import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { business, links, navLinks, services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-white/90">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M12 3c-2.2 0-3.6 1.3-4.8 1.3C5.8 4.3 4 5.8 4 8.6c0 2.4.9 4.6 1.6 6.9.5 1.7.9 4 2.3 4 1.5 0 1.3-2.6 2.1-5 .3-1 .8-1.7 2-1.7s1.7.7 2 1.7c.8 2.4.6 5 2.1 5 1.4 0 1.8-2.3 2.3-4 .7-2.3 1.6-4.5 1.6-6.9 0-2.8-1.8-4.3-3.2-4.3C15.6 4.3 14.2 3 12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="font-heading text-base font-bold text-white">
                {business.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Modern, patient-focused dental care and implant solutions in
              G-13, Islamabad &mdash; built around your comfort at every
              visit.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-teal"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.4c0-.87.24-1.46 1.49-1.46H16.5V4.32C16.24 4.28 15.36 4.2 14.33 4.2c-2.15 0-3.63 1.31-3.63 3.72V10.5H8.2v3h2.5V21h2.8Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-teal"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white/50">
              Navigate
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white/50">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white/50">
              Visit Us
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-white/75">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-teal" />
                <span>
                  {business.address.line1}
                  <br />
                  {business.address.line2}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-teal" />
                <a href={links.call} className="hover:text-white">
                  {business.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="h-5 w-5 shrink-0 text-teal" />
                <a href={links.whatsapp} className="hover:text-white">
                  Message on WhatsApp
                </a>
              </li>
            </ul>
            <a
              href={links.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. All rights
            reserved.
          </p>
          <p>Designed for a healthier, more confident smile.</p>
        </div>
      </div>
    </footer>
  );
}

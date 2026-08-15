import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { links } from "@/lib/data";

export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/10 bg-white/95 backdrop-blur-md lg:hidden">
      <div
        className="grid grid-cols-3"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <a
          href={links.call}
          className="flex flex-col items-center justify-center gap-1 border-r border-navy/10 py-2.5 text-navy active:bg-sky"
        >
          <Phone className="h-5 w-5" />
          <span className="text-[11px] font-semibold">Call</span>
        </a>
        <a
          href={links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 border-r border-navy/10 py-2.5 text-teal active:bg-sky"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-[11px] font-semibold">WhatsApp</span>
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center gap-1 bg-navy py-2.5 text-white active:bg-navy/90"
        >
          <CalendarCheck className="h-5 w-5" />
          <span className="text-[11px] font-semibold">Book</span>
        </Link>
      </div>
    </div>
  );
}

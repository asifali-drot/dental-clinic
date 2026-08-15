"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { business, links, navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-navy/10 bg-white/85 shadow-[0_4px_24px_-8px_rgba(18,59,93,0.15)] backdrop-blur-md"
          : "border-b border-transparent bg-offwhite/60 backdrop-blur-sm"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-8",
          scrolled ? "h-16" : "h-20"
        )}
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-white transition-transform duration-300 group-hover:scale-105">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path
                d="M12 3c-2.2 0-3.6 1.3-4.8 1.3C5.8 4.3 4 5.8 4 8.6c0 2.4.9 4.6 1.6 6.9.5 1.7.9 4 2.3 4 1.5 0 1.3-2.6 2.1-5 .3-1 .8-1.7 2-1.7s1.7.7 2 1.7c.8 2.4.6 5 2.1 5 1.4 0 1.8-2.3 2.3-4 .7-2.3 1.6-4.5 1.6-6.9 0-2.8-1.8-4.3-3.2-4.3C15.6 4.3 14.2 3 12 3Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-sm font-bold text-navy sm:text-base">
              {business.shortName}
            </span>
            <span className="text-[11px] font-medium text-muted">
              &amp; Implant Clinic
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={links.call}
            className="flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-blue"
          >
            <Phone className="h-4 w-4" />
            {business.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-teal/30 transition-all hover:-translate-y-0.5 hover:bg-teal/90 hover:shadow-md"
          >
            Book Appointment
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 top-16 z-40 origin-top border-t border-navy/10 bg-white shadow-lg transition-all duration-300 lg:hidden",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-sky"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-teal px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Book Appointment
          </Link>
        </nav>
      </div>
    </header>
  );
}

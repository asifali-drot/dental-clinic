"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      const els = Array.from(
        document.querySelectorAll(".reveal:not(.is-visible)")
      );

      if (els.length === 0) return;

      if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("is-visible"));
        return;
      }

      if (observer) {
        observer.disconnect();
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              const delay = el.dataset.delay;
              if (delay) el.style.animationDelay = `${delay}ms`;
              el.classList.add("is-visible");
              observer?.unobserve(el);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
      );

      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const delay = (el as HTMLElement).dataset.delay;
          if (delay) (el as HTMLElement).style.animationDelay = `${delay}ms`;
          el.classList.add("is-visible");
        } else {
          observer?.observe(el);
        }
      });
    };

    setupObserver();
    const timer1 = setTimeout(setupObserver, 50);
    const timer2 = setTimeout(setupObserver, 200);

    const mutationObserver = new MutationObserver(() => {
      setupObserver();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      mutationObserver.disconnect();
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  return null;
}

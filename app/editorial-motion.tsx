"use client";

import { useEffect } from "react";

export function EditorialMotion() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!elements.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    let observer: IntersectionObserver | null = null;
    let frame1 = 0;
    let frame2 = 0;
    const timers: number[] = [];

    frame1 = window.requestAnimationFrame(() => {
      frame2 = window.requestAnimationFrame(() => {
        observer = new IntersectionObserver((entries) => {
          const entering = entries
            .filter((entry) => entry.isIntersecting)
            .map((entry) => entry.target as HTMLElement)
            .sort((a, b) => {
              const position = a.compareDocumentPosition(b);
              return position & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
            });

          entering.forEach((el, index) => {
            observer?.unobserve(el);
            const timer = window.setTimeout(() => {
              el.classList.add("is-visible");
            }, index * 240);
            timers.push(timer);
          });
        }, { threshold: 0.16, rootMargin: "0px 0px -6% 0px" });

        elements.forEach((el) => observer?.observe(el));
      });
    });

    return () => {
      window.cancelAnimationFrame(frame1);
      window.cancelAnimationFrame(frame2);
      timers.forEach((timer) => window.clearTimeout(timer));
      observer?.disconnect();
    };
  }, []);

  return null;
}

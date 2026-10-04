"use client";

import { useEffect } from "react";

export function EditorialMotion() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!elements.length) return;

    const typeTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-typewrite]"));
    typeTargets.forEach((el) => {
      if (el.dataset.typeReady === "true") return;
      const label = el.textContent || "";
      el.setAttribute("aria-label", label);

      let charIndex = 0;
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      const textNodes: Text[] = [];
      while (walker.nextNode()) textNodes.push(walker.currentNode as Text);

      textNodes.forEach((node) => {
        const fragment = document.createDocumentFragment();
        Array.from(node.data).forEach((char) => {
          const span = document.createElement("span");
          span.className = "magic-char";
          span.setAttribute("aria-hidden", "true");
          span.style.setProperty("--char-index", String(charIndex++));
          span.textContent = char;
          fragment.appendChild(span);
        });
        node.replaceWith(fragment);
      });

      el.dataset.typeReady = "true";
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    let observer: IntersectionObserver | null = null;
    let frame1 = 0;
    let frame2 = 0;
    const timers = new Map<HTMLElement, number>();

    const clearTimer = (el: HTMLElement) => {
      const timer = timers.get(el);
      if (timer !== undefined) {
        window.clearTimeout(timer);
        timers.delete(el);
      }
    };

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
            clearTimer(el);
            const timer = window.setTimeout(() => {
              el.classList.add("is-visible");
              timers.delete(el);
            }, index * 220);
            timers.set(el, timer);
          });

          entries
            .filter((entry) => !entry.isIntersecting)
            .forEach((entry) => {
              const el = entry.target as HTMLElement;
              clearTimer(el);
              el.classList.remove("is-visible");
            });
        }, {
          threshold: [0, 0.12, 0.22],
          rootMargin: "-5% 0px -8% 0px",
        });

        elements.forEach((el) => observer?.observe(el));
      });
    });

    return () => {
      window.cancelAnimationFrame(frame1);
      window.cancelAnimationFrame(frame2);
      timers.forEach((timer) => window.clearTimeout(timer));
      timers.clear();
      observer?.disconnect();
    };
  }, []);

  return null;
}

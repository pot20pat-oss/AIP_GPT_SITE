"use client";

import { useEffect } from "react";

export function EditorialMotion() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!elements.length) return;

    const prepareTypeTarget = (el: HTMLElement) => {
      if (el.dataset.typeReady === "true") return;

      const label = el.textContent || "";
      const accessibleText = document.createElement("span");
      accessibleText.className = "sr-only";
      accessibleText.textContent = label;
      el.prepend(accessibleText);

      const mode = el.dataset.typewrite === "body" ? "word" : "char";
      let tokenIndex = 0;
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      const textNodes: Text[] = [];

      while (walker.nextNode()) {
        const node = walker.currentNode as Text;
        if ((node.parentElement as HTMLElement | null)?.classList.contains("sr-only")) continue;
        textNodes.push(node);
      }

      textNodes.forEach((node) => {
        const fragment = document.createDocumentFragment();

        if (mode === "word") {
          const parts = node.data.match(/\S+\s*/g) || [];
          parts.forEach((part) => {
            const span = document.createElement("span");
            span.className = "magic-word";
            span.setAttribute("aria-hidden", "true");
            span.style.setProperty("--token-index", String(tokenIndex++));
            span.textContent = part;
            fragment.appendChild(span);
          });
        } else {
          Array.from(node.data).forEach((char) => {
            const span = document.createElement("span");
            span.className = "magic-char";
            span.setAttribute("aria-hidden", "true");
            span.style.setProperty("--token-index", String(tokenIndex++));
            span.textContent = char;
            fragment.appendChild(span);
          });
        }

        node.replaceWith(fragment);
      });

      el.dataset.typeReady = "true";
    };

    const prepareTypeTargetsWithin = (container: HTMLElement) => {
      if (container.matches("[data-typewrite]")) prepareTypeTarget(container);
      container.querySelectorAll<HTMLElement>("[data-typewrite]").forEach(prepareTypeTarget);
    };

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
            prepareTypeTargetsWithin(el);

            const revealType = el.dataset.reveal || "";
            const delay = revealType.startsWith("hero") ? 0 : index * 220;

            const timer = window.setTimeout(() => {
              el.classList.add("is-visible");
              timers.delete(el);
            }, delay);
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

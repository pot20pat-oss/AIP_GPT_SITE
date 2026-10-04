"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function EditorialMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!elements.length) return;

    const prepareTypeTarget = (el: HTMLElement) => {
      if (el.dataset.typeReady === "true") {
        return Number(el.dataset.typeTokenCount || "0");
      }

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
      el.dataset.typeTokenCount = String(tokenIndex);
      return tokenIndex;
    };

    const prepareTypeTargetsWithin = (container: HTMLElement) => {
      const targets: HTMLElement[] = [];
      if (container.matches("[data-typewrite]")) targets.push(container);
      container.querySelectorAll<HTMLElement>("[data-typewrite]").forEach((target) => targets.push(target));

      let offsetMs = 0;
      const gapMs = 220;

      targets.forEach((target) => {
        const tokenCount = prepareTypeTarget(target);

        if (!target.style.getPropertyValue("--type-offset")) {
          target.style.setProperty("--type-offset", `${offsetMs}ms`);
        }

        const mode = target.dataset.typewrite === "body" ? "body" : "title";
        const stepMs = mode === "body" ? 58 : 24;
        offsetMs += tokenCount * stepMs + gapMs;
      });
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
          if (document.visibilityState !== "visible") return;

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

    const syncVisibleState = () => {
      if (document.visibilityState !== "visible") return;

      window.requestAnimationFrame(() => {
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const inView = rect.bottom > viewportHeight * 0.05 && rect.top < viewportHeight * 0.92;

          if (inView) {
            clearTimer(el);
            prepareTypeTargetsWithin(el);
            el.classList.add("is-visible");
          }
        });
      });
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") syncVisibleState();
    };

    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) syncVisibleState();
    };

    window.addEventListener("pageshow", handlePageShow);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.cancelAnimationFrame(frame1);
      window.cancelAnimationFrame(frame2);
      timers.forEach((timer) => window.clearTimeout(timer));
      timers.clear();
      observer?.disconnect();
      window.removeEventListener("pageshow", handlePageShow);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [pathname]);

  return null;
}

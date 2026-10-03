"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type Intent = "web" | "informatique" | "general";

const webPrefixes = [
  "/creation-sites-web",
  "/creation-site-web-",
  "/site-web-pme",
  "/creation-boutique-en-ligne",
  "/developpement-cms-sur-mesure",
  "/realisation-envol-des-enfants",
];

const itPrefixes = [
  "/reparation-ordinateur",
  "/depannage-informatique",
  "/suppression-virus",
  "/assistance",
  "/installation-ordinateur",
  "/configuration-wifi",
  "/reseau-sauvegarde",
];

function intentFromPath(pathname: string): Intent {
  if (webPrefixes.some(prefix => pathname.startsWith(prefix))) return "web";
  if (itPrefixes.some(prefix => pathname.startsWith(prefix))) return "informatique";
  return "general";
}

function sessionIntent(pathname: string): Intent {
  const inferred = intentFromPath(pathname);
  if (inferred !== "general") {
    sessionStorage.setItem("aip_intent", inferred);
    return inferred;
  }
  const stored = sessionStorage.getItem("aip_intent");
  return stored === "web" || stored === "informatique" ? stored : "general";
}

function entryPath() {
  let entry = sessionStorage.getItem("aip_entry_path");
  if (!entry) {
    entry = window.location.pathname;
    sessionStorage.setItem("aip_entry_path", entry);
  }
  return entry;
}

function sendEvent(name: string, params: Record<string, string | number | boolean | undefined> = {}) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, {
    ...params,
    transport_type: "beacon",
  });
}

function platformFromLink(anchor: HTMLAnchorElement) {
  const text = (anchor.textContent || "").toLowerCase();
  const href = anchor.getAttribute("href") || "";
  if (text.includes("windows") || href.includes("Windows")) return "windows";
  if (text.includes("mac") || href.toLowerCase().includes("macos")) return "macos";
  if (text.includes("android") || href.includes(".apk")) return "android";
  if (text.includes("ios") || text.includes("app store") || href.includes("apps.apple.com")) return "ios";
  return "autre";
}

export function AnalyticsTracker() {
  const pathname = usePathname() || "/";

  useEffect(() => {
    const inferred = intentFromPath(pathname);
    const intent = sessionIntent(pathname);
    const entry = entryPath();

    sendEvent("page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pathname,
      content_group: inferred,
      session_intent: intent,
      entry_path: entry,
    });

    if (pathname === "/merci" && sessionStorage.getItem("aip_pending_lead") === "1") {
      sendEvent("generate_lead", {
        currency: "CAD",
        value: 0,
        session_intent: intent,
        entry_path: entry,
        lead_source_path: sessionStorage.getItem("aip_lead_source_path") || "",
      });
      sessionStorage.removeItem("aip_pending_lead");
      sessionStorage.removeItem("aip_lead_source_path");
    }
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const anchor = target?.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.getAttribute("href") || "";
      const text = (anchor.textContent || "").trim().replace(/\s+/g, " ").slice(0, 120);
      const currentPath = window.location.pathname;
      const currentIntent = sessionIntent(currentPath);
      const entry = entryPath();

      if (anchor.classList.contains("hero-intent-it") || anchor.classList.contains("expertise-gateway-it")) {
        sessionStorage.setItem("aip_intent", "informatique");
        sendEvent("select_intent", {
          intent: "informatique",
          placement: anchor.classList.contains("hero-intent-choice") ? "hero" : "gateway",
          destination: href,
          page_path: currentPath,
          entry_path: entry,
        });
        return;
      }

      if (anchor.classList.contains("hero-intent-web") || anchor.classList.contains("expertise-gateway-web")) {
        sessionStorage.setItem("aip_intent", "web");
        sendEvent("select_intent", {
          intent: "web",
          placement: anchor.classList.contains("hero-intent-choice") ? "hero" : "gateway",
          destination: href,
          page_path: currentPath,
          entry_path: entry,
        });
        return;
      }

      if (href.startsWith("tel:")) {
        sendEvent("click_to_call", {
          link_text: text,
          page_path: currentPath,
          session_intent: currentIntent,
          entry_path: entry,
        });
        return;
      }

      if (href === "/assistance") {
        sendEvent("open_aip_assistance", {
          link_text: text,
          page_path: currentPath,
          session_intent: currentIntent,
          entry_path: entry,
        });
        return;
      }

      const isActualDownload =
        anchor.hasAttribute("download") ||
        href.includes("/downloads/") ||
        href.includes("github.com/rustdesk/rustdesk/releases/") ||
        href.includes("apps.apple.com/");

      if (anchor.classList.contains("download-button") && isActualDownload) {
        sendEvent("aip_assistance_download", {
          platform: platformFromLink(anchor),
          file_url: href,
          page_path: currentPath,
          session_intent: currentIntent,
          entry_path: entry,
        });
        return;
      }

      if (href === "/contact" && currentIntent === "web") {
        sendEvent("web_project_cta", {
          link_text: text,
          page_path: currentPath,
          entry_path: entry,
        });
      }
    };

    const onSubmit = (event: SubmitEvent) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement) || !form.classList.contains("contact-mini-form")) return;
      const currentPath = window.location.pathname;
      const intent = sessionIntent(currentPath);
      sessionStorage.setItem("aip_pending_lead", "1");
      sessionStorage.setItem("aip_lead_source_path", currentPath);
      sendEvent("lead_form_submit", {
        page_path: currentPath,
        session_intent: intent,
        entry_path: entryPath(),
      });
    };

    document.addEventListener("click", onClick, true);
    document.addEventListener("submit", onSubmit, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("submit", onSubmit, true);
    };
  }, []);

  return null;
}

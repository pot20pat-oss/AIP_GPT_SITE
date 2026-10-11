import type { Metadata } from "next";
import { headers } from "next/headers";
import { businessName, jsonLd, siteUrl, webSiteUrl } from "./seo";
import { AnalyticsTracker } from "./analytics-tracker";
import "./globals.css";

const title = "Dépannage informatique à Nicolet | Atelier Informatique Potvin";
const description = "Dépannage informatique, assistance à distance, réparation, installation et réseau à Nicolet et dans les environs."
const image = `${siteUrl}/aip-travail-03.webp`;

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = (requestHeaders.get("host") || "").split(":")[0].toLowerCase();
  const isWebSite = host === "aipcreation.ca" || host === "www.aipcreation.ca" || host === "aipconceptionweb.ca" || host === "www.aipconceptionweb.ca";
  const base = isWebSite ? webSiteUrl : siteUrl;

  return {
    metadataBase: new URL(base),
    title: isWebSite ? "Conception de sites Web à Nicolet | AIP Conception Web" : title,
    description: isWebSite ? "Sites Web professionnels, boutiques en ligne et CMS sur mesure pour PME à Nicolet et au Centre-du-Québec." : description,
    alternates: { canonical: base },
    keywords: isWebSite
      ? ["création site web Nicolet", "conception site web Nicolet", "site web PME", "boutique en ligne", "CMS sur mesure"]
      : ["dépannage informatique Nicolet", "réparation ordinateur Nicolet", "assistance informatique à distance", "Atelier Informatique Potvin"],
    authors: [{ name: "Patrick Potvin" }],
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    openGraph: { title: isWebSite ? "AIP Conception Web" : title, description: isWebSite ? "Conception de sites Web, boutiques en ligne et CMS sur mesure à Nicolet." : description, url: base, siteName: isWebSite ? "AIP Conception Web" : businessName, images: [{ url: `${base}/${isWebSite ? "aip-travail-13.webp" : "aip-travail-03.webp"}`, alt: isWebSite ? "AIP Conception Web à Nicolet" : "Patrick Potvin, services informatiques à Nicolet" }], locale: "fr_CA", type: "website" },
    twitter: { card: "summary_large_image", title: isWebSite ? "AIP Conception Web" : title, description: isWebSite ? "Conception de sites Web à Nicolet." : description, images: [`${base}/${isWebSite ? "aip-travail-13.webp" : "aip-travail-03.webp"}`] },
    icons: {
      icon: [{ url: "/aip-icon-v7.png?v=13", type: "image/png" }],
      shortcut: "/aip-icon-v7.png?v=13",
      apple: "/aip-icon-v7.png?v=13",
    },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const requestHeaders = await headers();
  const host = (requestHeaders.get("host") || "").split(":")[0].toLowerCase();
  const isWebSite = host === "aipcreation.ca" || host === "www.aipcreation.ca" || host === "aipconceptionweb.ca" || host === "www.aipconceptionweb.ca";
  const currentSiteUrl = isWebSite ? webSiteUrl : siteUrl;
  const currentSiteName = isWebSite ? "AIP Conception Web" : businessName;

  const businessIdentity = isWebSite
    ? {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${webSiteUrl}/#entreprise`,
        name: "AIP Conception Web",
        description: "Conception de sites Web, boutiques en ligne et CMS sur mesure à Nicolet.",
        url: webSiteUrl,
        telephone: "+1-819-380-2999",
        image: `${webSiteUrl}/aip-travail-13.webp`,
        logo: `${webSiteUrl}/aip-icon-v7.png?v=13`,
        founder: { "@type": "Person", name: "Patrick Potvin" },
        areaServed: ["Nicolet", "Bécancour", "Trois-Rivières", "Centre-du-Québec"].map(name => ({ "@type": "Place", name })),
        knowsLanguage: "fr-CA",
      }
    : {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${siteUrl}/#entreprise`,
        name: businessName,
        description: "Services informatiques à Nicolet, sur place et à distance.",
        url: siteUrl,
        telephone: "+1-819-380-2999",
        image,
        logo: `${siteUrl}/aip-icon-v7.png?v=13`,
        founder: { "@type": "Person", name: "Patrick Potvin" },
        address: { "@type": "PostalAddress", addressLocality: "Nicolet", addressRegion: "QC", addressCountry: "CA" },
        areaServed: ["Nicolet", "Bécancour", "Trois-Rivières", "Saint-Célestin", "Centre-du-Québec"].map(name => ({ "@type": "Place", name })),
        knowsLanguage: "fr-CA",
      };
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      businessIdentity,
      { "@type": "WebSite", "@id": `${currentSiteUrl}/#site`, url: currentSiteUrl, name: currentSiteName, inLanguage: "fr-CA", publisher: { "@id": businessIdentity["@id"] } },
    ],
  };

  return <html lang="fr-CA" data-site-mode={isWebSite ? "web" : "it"} className={isWebSite ? "motion-ready" : undefined}><body>
    <script dangerouslySetInnerHTML={{ __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-T0HN0N449R', {
        send_page_view: false,
        linker: { domains: ['atelierpotvin.ca', 'aipcreation.ca', 'aipconceptionweb.ca'] }
      });
      (function(){
        var loaded = false;
        function loadGtag(){
          if (loaded) return;
          loaded = true;
          var s = document.createElement('script');
          s.async = true;
          s.src = 'https://www.googletagmanager.com/gtag/js?id=G-T0HN0N449R';
          document.head.appendChild(s);
        }
        function schedule(){
          var timer = setTimeout(loadGtag, 8000);
          var events = ['pointerdown','keydown','touchstart'];
          function onIntent(){
            clearTimeout(timer);
            events.forEach(function(name){ window.removeEventListener(name, onIntent, true); });
            loadGtag();
          }
          events.forEach(function(name){ window.addEventListener(name, onIntent, { once:true, passive:true, capture:true }); });
        }
        if (document.readyState === 'complete') schedule();
        else window.addEventListener('load', schedule, { once: true });
      })();
    ` }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
    <AnalyticsTracker />
    {children}
  </body></html>;
}

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
  const isWebSite = host === "aipcreation.ca" || host === "www.aipcreation.ca";
  const base = isWebSite ? webSiteUrl : siteUrl;

  return {
    metadataBase: new URL(base),
    title,
    description,
    alternates: { canonical: base },
    keywords: isWebSite
      ? ["création site web Nicolet", "conception site web Nicolet", "site web PME", "boutique en ligne", "CMS sur mesure"]
      : ["dépannage informatique Nicolet", "réparation ordinateur Nicolet", "assistance informatique à distance", "Atelier Informatique Potvin"],
    authors: [{ name: "Patrick Potvin" }],
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    openGraph: { title, description, url: base, siteName: isWebSite ? "AIP Création Web" : businessName, images: [{ url: `${base}/aip-travail-03.webp`, alt: "Patrick Potvin, services informatiques à Nicolet" }], locale: "fr_CA", type: "website" },
    twitter: { card: "summary_large_image", title, description, images: [`${base}/aip-travail-03.webp`] },
    icons: {
      icon: [
        { url: "/aip-icon-v7.webp", type: "image/webp" },
        { url: "/aip-favicon-v8.ico", type: "image/x-icon" },
      ],
      shortcut: "/aip-icon-v7.webp",
    },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const requestHeaders = await headers();
  const host = (requestHeaders.get("host") || "").split(":")[0].toLowerCase();
  const isWebSite = host === "aipcreation.ca" || host === "www.aipcreation.ca";
  const currentSiteUrl = isWebSite ? webSiteUrl : siteUrl;
  const currentSiteName = isWebSite ? "AIP Création Web" : businessName;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${siteUrl}/#entreprise`,
        name: businessName,
        description: "Services informatiques et création Web par Atelier Informatique Potvin à Nicolet.",
        url: siteUrl,
        telephone: "+1-819-380-2999",
        image,
        logo: `${siteUrl}/aip-icon-v7.webp`,
        founder: { "@type": "Person", name: "Patrick Potvin" },
        address: { "@type": "PostalAddress", streetAddress: "462 rue D. N. St-Cyr", addressLocality: "Nicolet", addressRegion: "QC", postalCode: "J3T 1H3", addressCountry: "CA" },
        areaServed: ["Nicolet", "Bécancour", "Trois-Rivières", "Saint-Célestin", "Centre-du-Québec"].map(name => ({ "@type": "Place", name })),
        knowsLanguage: "fr-CA",
      },
      { "@type": "WebSite", "@id": `${currentSiteUrl}/#site`, url: currentSiteUrl, name: currentSiteName, inLanguage: "fr-CA", publisher: { "@id": `${siteUrl}/#entreprise` } },
    ],
  };

  return <html lang="fr-CA" data-site-mode={isWebSite ? "web" : "it"}><body>
    <script dangerouslySetInnerHTML={{ __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-T0HN0N449R', {
        send_page_view: false,
        linker: { domains: ['atelierpotvin.ca', 'aipcreation.ca'] }
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
          if ('requestIdleCallback' in window) {
            requestIdleCallback(loadGtag, { timeout: 2500 });
          } else {
            setTimeout(loadGtag, 1800);
          }
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

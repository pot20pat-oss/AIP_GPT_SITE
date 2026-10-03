import type { Metadata } from "next";
import { businessName, jsonLd, siteUrl } from "./seo";
import { AnalyticsTracker } from "./analytics-tracker";
import "./globals.css";

const title = "Création de sites web à Nicolet | Atelier Informatique Potvin";
const description = "Création de sites web professionnels à Nicolet : sites vitrines dès 900 $, e-commerce et CMS sur mesure. Dépannage informatique également disponible."
const image = `${siteUrl}/aip-travail-13.webp`;

const localBusiness = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${siteUrl}/#entreprise`,
      name: businessName,
      description,
      url: siteUrl,
      telephone: "+1-819-380-2999",
      image,
      logo: `${siteUrl}/aip-icon-v7.ico`,
      founder: { "@type": "Person", name: "Patrick Potvin" },
      address: { "@type": "PostalAddress", streetAddress: "462 rue D. N. St-Cyr", addressLocality: "Nicolet", addressRegion: "QC", postalCode: "J3T 1H3", addressCountry: "CA" },
      areaServed: ["Nicolet", "Bécancour", "Trois-Rivières", "Saint-Célestin", "Centre-du-Québec"].map(name => ({ "@type": "Place", name })),
      knowsLanguage: "fr-CA",
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Création de sites web et services informatiques", itemListElement: ["Création de sites web", "Sites vitrines", "E-commerce et CMS sur mesure", "Dépannage informatique", "Réparation d’ordinateurs", "Suppression de virus", "Assistance informatique à distance", "Installation et transfert de données", "Réseau et sauvegardes"].map(name => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })) },
    },
    { "@type": "WebSite", "@id": `${siteUrl}/#site`, url: siteUrl, name: businessName, inLanguage: "fr-CA", publisher: { "@id": `${siteUrl}/#entreprise` } },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: siteUrl },
  keywords: ["création site web Nicolet", "créateur site web Nicolet", "site web entreprise Nicolet", "site vitrine Nicolet", "e-commerce Nicolet", "CMS sur mesure", "dépannage informatique Nicolet", "Atelier Informatique Potvin"],
  authors: [{ name: "Patrick Potvin" }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { title, description, url: siteUrl, siteName: businessName, images: [{ url: image, alt: "Patrick Potvin, création de sites web et services informatiques à Nicolet" }], locale: "fr_CA", type: "website" },
  twitter: { card: "summary_large_image", title, description, images: [image] },
  icons: { icon: "/aip-favicon-v8.ico", shortcut: "/aip-favicon-v8.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr-CA"><body>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-T0HN0N449R" />
    <script dangerouslySetInnerHTML={{ __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-T0HN0N449R', { send_page_view: false });
    ` }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(localBusiness) }} />
    <AnalyticsTracker />
    {children}
  </body></html>;
}

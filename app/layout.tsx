import type { Metadata } from "next";
import { businessName, jsonLd, siteUrl } from "./seo";
import "./globals.css";

const title = "Dépannage informatique Nicolet | Atelier Informatique Potvin";
const description = "Technicien informatique à Nicolet : réparation d’ordinateurs, suppression de virus, assistance à distance et création de sites web. Appelez le 819 380-2999.";
const image = `${siteUrl}/patrick-atelier-hero.webp`;

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
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Services informatiques et création de sites web", itemListElement: ["Dépannage informatique", "Réparation d’ordinateurs", "Suppression de virus", "Assistance informatique à distance", "Installation et transfert de données", "Réseau et sauvegardes", "Création de sites web"].map(name => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })) },
    },
    { "@type": "WebSite", "@id": `${siteUrl}/#site`, url: siteUrl, name: businessName, inLanguage: "fr-CA", publisher: { "@id": `${siteUrl}/#entreprise` } },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: siteUrl },
  keywords: ["dépannage informatique Nicolet", "réparation ordinateur Nicolet", "technicien informatique Nicolet", "informatique Bécancour", "suppression virus Nicolet", "création site web Nicolet", "assistance informatique à distance", "Atelier Informatique Potvin"],
  authors: [{ name: "Patrick Potvin" }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { title, description, url: siteUrl, siteName: businessName, images: [{ url: image, alt: "Patrick Potvin, technicien informatique à Nicolet" }], locale: "fr_CA", type: "website" },
  twitter: { card: "summary_large_image", title, description, images: [image] },
  icons: { icon: "/aip-favicon-v8.ico", shortcut: "/aip-favicon-v8.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr-CA"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(localBusiness) }} />{children}</body></html>;
}

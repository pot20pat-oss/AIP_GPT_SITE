import type { Metadata } from "next";

export const siteUrl = "https://atelier-informatique-potvin.pot20pat.chatgpt.site";
export const businessName = "Atelier Informatique Potvin";
export const businessAddress = "462 rue D. N. St-Cyr, Nicolet, QC J3T 1H3";
export const googleBusinessUrl = "https://www.google.com/maps/search/?api=1&query=Atelier%20Informatique%20Potvin%2C%20462%20rue%20D.%20N.%20St-Cyr%2C%20Nicolet%2C%20QC%20J3T%201H3";

export function pageMetadata({ title, description, path, image }: { title: string; description: string; path: string; image: string }): Metadata {
  const url = `${siteUrl}${path}`;
  const imageUrl = `${siteUrl}${image}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: businessName, locale: "fr_CA", type: "website", images: [{ url: imageUrl, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [imageUrl] },
  };
}

export function jsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

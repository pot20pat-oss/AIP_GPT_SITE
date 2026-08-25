import type { Metadata } from "next";
import "./globals.css";

const title = "Atelier Informatique Potvin";
const description = "Dépannage informatique à Nicolet, sans jargon. Réparation, assistance à distance et création de sites web avec Patrick Potvin. 819 380-2999.";
const image = "https://atelierpotvin.ca/assets/logo.png";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, images: [image], locale: "fr_CA", type: "website" },
  twitter: { card: "summary", title, description, images: [image] },
  icons: { icon: "/logo-aip.png", shortcut: "/logo-aip.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr-CA"><body>{children}</body></html>;
}

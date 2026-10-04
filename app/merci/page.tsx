import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Demande envoyée | AIP",
  description: "Confirmation d’envoi de votre demande à AIP.",
  robots: { index: false, follow: false },
};

export default async function MerciPage() {
  const requestHeaders = await headers();
  const host = (requestHeaders.get("host") || "").split(":")[0].toLowerCase();
  const web = host === "aipcreation.ca" || host === "www.aipcreation.ca";

  return <main className={web ? "web-service-page web-thank-you-page" : undefined}><SiteHeader /><section className="thank-you shell"><div className="eyebrow"><span></span>Message envoyé</div><h1>Merci.<br /><em>J’ai bien reçu votre demande.</em></h1><p>{web ? "Votre demande de projet Web a bien été envoyée. Je vous répondrai habituellement dans la journée." : "Je vous répondrai habituellement dans la journée. Pour une demande urgente, vous pouvez aussi m’appeler directement."}</p><div className="hero-actions"><a className="button button-dark" href="tel:+18193802999">819-380-2999</a><Link className="button button-outline" href="/">Retour à l’accueil</Link></div></section><SiteFooter /></main>;
}

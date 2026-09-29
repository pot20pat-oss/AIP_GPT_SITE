import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = {
  title: "Demande envoyée | Atelier Informatique Potvin",
  description: "Confirmation d’envoi de votre demande à Atelier Informatique Potvin.",
  robots: { index: false, follow: false },
};

export default function MerciPage() {
  return <main><SiteHeader /><section className="thank-you shell"><div className="eyebrow"><span></span>Message envoyé</div><h1>Merci.<br /><em>J’ai bien reçu votre demande.</em></h1><p>Je vous répondrai habituellement dans la journée. Pour une demande urgente, vous pouvez aussi m’appeler directement.</p><div className="hero-actions"><a className="button button-dark" href="tel:+18193802999">819-380-2999 <span className="gold-arrow">→</span></a><Link className="text-link" href="/">Retour à l’accueil <span className="gold-arrow">→</span></Link></div></section><SiteFooter /></main>;
}

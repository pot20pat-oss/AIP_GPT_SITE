import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import { pageMetadata, googleBusinessUrl } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact | Atelier Informatique Potvin | Nicolet",
  description: "Contactez Atelier Informatique Potvin à Nicolet pour un dépannage informatique, une réparation d’ordinateur, une assistance à distance ou un projet Web.",
  path: "/contact",
  image: "/aip-travail-13.webp",
});

export default function Page(){return <main><SiteHeader/>
<section className="detail-hero detail-hero-photo shell"><div className="detail-hero-copy"><div className="eyebrow"><span></span>Contact</div><h1>Parlons de ce<br/><em>dont vous avez besoin.</em></h1><p>Un problème informatique, un nouvel ordinateur, un réseau à configurer ou un projet Web? Décrivez-moi votre situation et nous verrons la prochaine étape.</p><div className="hero-actions"><a className="button button-dark" href="tel:+18193802999">Appeler Patrick</a><a className="button button-outline" href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">Voir la fiche Google</a></div></div><figure className="detail-photo detail-photo-portrait"><img src="/aip-travail-13.webp" alt="Patrick Potvin, Atelier Informatique Potvin" /></figure></section>
<section className="section shell"><div className="contact-page-grid"><article className="contact-method"><div className="eyebrow"><span></span>Téléphone</div><h2>819 380-2999</h2><p>Le moyen le plus direct pour expliquer votre situation et déterminer la suite.</p><a className="button button-dark" href="tel:+18193802999">Appeler maintenant</a></article><article className="contact-method"><div className="eyebrow"><span></span>Zone de service</div><h2>Nicolet et la région</h2><p>Nicolet, Bécancour, Trois-Rivières et les municipalités dans un rayon d’environ 50 km. Certaines interventions sont possibles à distance.</p><Link className="button button-outline" href="/nous-trouver">Voir les coordonnées</Link></article><article className="contact-method"><div className="eyebrow"><span></span>Pour un projet Web</div><h2>Décrire votre projet</h2><p>Site vitrine, boutique en ligne, CMS ou refonte : préparez simplement votre objectif et les fonctions importantes.</p><Link className="button button-outline" href="/creation-sites-web">Voir les services Web</Link></article></div></section>
<section className="contact section"><div className="shell contact-inner"><div><div className="eyebrow"><span></span>Avant de nous parler</div><h2>Vous n’avez pas besoin<br/><em>d’avoir le bon diagnostic.</em></h2></div><div className="contact-card"><span>Vous expliquez le problème. Je regarde la situation.</span><a className="big-phone" href="tel:+18193802999">819 380-2999</a></div></div></section><SiteFooter/></main>}

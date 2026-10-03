import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import { googleBusinessUrl, siteUrl, webSiteUrl } from "../seo";

async function isCreationDomain() {
  const requestHeaders = await headers();
  const host = (requestHeaders.get("host") || "").split(":")[0].toLowerCase();
  return host === "aipcreation.ca" || host === "www.aipcreation.ca";
}

export async function generateMetadata(): Promise<Metadata> {
  const web = await isCreationDomain();
  const title = web ? "Contact création Web | AIP Création Web" : "Contact dépannage informatique | Atelier Informatique Potvin";
  const description = web ? "Parlez directement à Patrick Potvin pour un site vitrine, une boutique en ligne ou un outil Web sur mesure." : "Contactez Atelier Informatique Potvin à Nicolet pour un dépannage, une réparation ou une assistance informatique à distance.";
  const base = web ? webSiteUrl : siteUrl;
  return { title, description, alternates: { canonical: `${base}/contact` }, openGraph: { title, description, url: `${base}/contact`, type: "website", locale: "fr_CA" } };
}

export default async function Page(){
  const web = await isCreationDomain();

  return <main><SiteHeader/>
    <section className="detail-hero detail-hero-photo shell"><div className="detail-hero-copy"><div className="eyebrow"><span></span>{web ? "Votre projet Web" : "Contact informatique"}</div><h1>{web ? <>Parlons de votre<br/><em>projet Web.</em></> : <>Expliquez-moi<br/><em>le problème.</em></>}</h1><p>{web ? "Site vitrine, boutique en ligne, refonte ou outil de gestion : décrivez simplement votre entreprise, votre objectif et ce que vous aimeriez améliorer." : "Ordinateur lent, erreur, virus, Wi-Fi ou nouveau PC : vous n’avez pas besoin d’avoir le bon diagnostic avant d’appeler."}</p><div className="hero-actions"><a className="button button-dark phone-button" href="tel:+18193802999">Appeler Patrick</a>{web ? <Link className="button button-outline" href="/tarifs">Voir les tarifs Web</Link> : <Link className="button button-outline" href="/assistance-informatique-a-distance">Assistance à distance</Link>}</div></div><figure className="detail-photo detail-photo-portrait"><img src={web ? "/aip-travail-13.webp" : "/aip-travail-03.webp"} alt={web ? "Patrick Potvin, création Web" : "Patrick Potvin, dépannage informatique"} /></figure></section>

    <section className="section shell"><div className="contact-page-grid">
      <article className="contact-method"><div className="eyebrow"><span></span>Téléphone</div><h2>819 380-2999</h2><p>{web ? "Le moyen le plus direct pour discuter de votre entreprise et de votre projet." : "Le moyen le plus direct pour expliquer votre situation et déterminer la suite."}</p><a className="button button-dark phone-button" href="tel:+18193802999">Appeler maintenant</a></article>
      {web ? <article className="contact-method"><div className="eyebrow"><span></span>Pour bien démarrer</div><h2>Votre objectif suffit</h2><p>Présenter votre entreprise, vendre en ligne, moderniser un site ou simplifier une tâche : on définit ensuite ensemble la bonne solution.</p><Link className="button button-outline" href="/">Voir les services Web</Link></article> : <article className="contact-method"><div className="eyebrow"><span></span>Zone de service</div><h2>Nicolet et la région</h2><p>Nicolet, Bécancour, Trois-Rivières et les municipalités dans un rayon d’environ 50 km. Certaines interventions sont possibles à distance.</p><a className="button button-outline" href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">Voir la fiche Google</a></article>}
      <article className="contact-method"><div className="eyebrow"><span></span>{web ? "Tarifs" : "Assistance rapide"}</div><h2>{web ? "À partir de 900 $" : "Possible à distance"}</h2><p>{web ? "Le site vitrine de base commence à 900 $. Les projets plus complets sont estimés selon les besoins." : "Si Internet fonctionne encore, plusieurs problèmes peuvent être vérifiés et réglés sans déplacement."}</p><Link className="button button-outline" href={web ? "/tarifs" : "/assistance-informatique-a-distance"}>{web ? "Voir les tarifs" : "Voir l’assistance"}</Link></article>
    </div></section>

    <section className="contact section"><div className="shell contact-inner"><div><div className="eyebrow"><span></span>{web ? "Un seul interlocuteur" : "Pas besoin de jargon"}</div><h2>{web ? <>Vous parlez directement<br/><em>au concepteur.</em></> : <>Vous expliquez.<br/><em>Je regarde la situation.</em></>}</h2></div><div className="contact-card"><span>{web ? "Création Web · Nicolet et à distance" : "Dépannage local et à distance"}</span><a className="big-phone" href="tel:+18193802999">819 380-2999</a></div></div></section>
    <SiteFooter/>
  </main>
}

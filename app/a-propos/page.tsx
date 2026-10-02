import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import { pageMetadata, jsonLd, siteUrl, businessName } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "À propos | Patrick Potvin | Atelier Informatique Potvin",
  description: "Découvrez Patrick Potvin et l'approche d'Atelier Informatique Potvin : informatique, dépannage et création de sites web à Nicolet et dans la région.",
  path: "/a-propos",
  image: "/aip-travail-13.webp",
});

export default function Page() {
  const data = {"@context":"https://schema.org","@type":"Person","name":"Patrick Potvin","jobTitle":"Technicien informatique et développeur Web","worksFor":{"@type":"Organization","name":businessName,"url":siteUrl},"url":siteUrl};
  return <main><SiteHeader/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:jsonLd(data)}}/>
    <section className="detail-hero detail-hero-photo shell">
      <div className="detail-hero-copy"><div className="eyebrow"><span></span>À propos</div><h1>Un seul interlocuteur.<br/><em>Du problème au résultat.</em></h1><p>Je suis Patrick Potvin. J’accompagne les particuliers et les entreprises de Nicolet et de la région pour leurs besoins informatiques et Web, avec une approche directe et sans jargon inutile.</p><div className="hero-actions"><a className="button button-dark" href="tel:+18193802999">Parler à Patrick</a><Link className="button button-outline" href="/contact">Demander un service</Link></div></div>
      <figure className="detail-photo detail-photo-portrait"><img src="/aip-travail-13.webp" alt="Patrick Potvin au travail dans son atelier informatique" /></figure>
    </section>
    <section className="detail-body section"><div className="shell detail-grid">
      <div className="detail-points">
        <article><span>01</span><div><h2>Une expérience qui couvre les deux mondes</h2><p>L’informatique et le Web se rejoignent souvent dans les mêmes entreprises. Je peux intervenir sur un ordinateur, un réseau ou un problème de données, puis aussi concevoir le site Web qui présente l’entreprise.</p></div></article>
        <article><span>02</span><div><h2>Une relation directe</h2><p>Vous échangez directement avec la personne qui analyse le besoin et réalise le travail. Pas besoin de passer par une succession d’intermédiaires pour expliquer votre problème.</p></div></article>
        <article><span>03</span><div><h2>Des explications compréhensibles</h2><p>Le but n’est pas de vous impressionner avec des termes techniques. Je vous explique ce qui se passe, ce qui doit être fait et ce que cela implique avant d’aller plus loin.</p></div></article>
        <article><span>04</span><div><h2>Local, avec le Web à distance quand c’est pertinent</h2><p>Le service couvre principalement Nicolet, Bécancour, Trois-Rivières et les environs. Plusieurs interventions Web et informatiques peuvent aussi être réalisées à distance.</p></div></article>
      </div>
      <aside><div className="eyebrow"><span></span>Atelier Informatique Potvin</div><h2>40 ans d’expérience informatique.</h2><p>Une approche artisanale : comprendre le besoin, proposer une solution réaliste et rester disponible pour la suite.</p><div className="trust-box"><div><strong>40 ans</strong><span>d’expérience</span></div><div><strong>5,0 ★</strong><span>10 avis Google</span></div></div></aside>
    </div></section>
    <section className="contact section"><div className="shell contact-inner"><div><div className="eyebrow"><span></span>Besoin d’aide?</div><h2>Parlons de votre<br/><em>problème ou projet.</em></h2></div><div className="contact-card"><span>Appeler Patrick</span><a className="big-phone" href="tel:+18193802999">819 380-2999</a><p>Nicolet · Bécancour · Trois-Rivières</p></div></div></section>
    <SiteFooter/></main>;
}

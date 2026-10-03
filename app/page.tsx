import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components";
import { businessName, siteUrl, webSiteUrl } from "./seo";

async function isCreationDomain() {
  const requestHeaders = await headers();
  const host = (requestHeaders.get("host") || "").split(":")[0].toLowerCase();
  return host === "aipcreation.ca" || host === "www.aipcreation.ca";
}

export async function generateMetadata(): Promise<Metadata> {
  const web = await isCreationDomain();
  if (web) {
    const title = "Création de sites Web à Nicolet | AIP Création Web";
    const description = "Création de sites Web pour PME à Nicolet : sites vitrines, boutiques en ligne et outils de gestion sur mesure, avec un seul interlocuteur.";
    return {
      title,
      description,
      alternates: { canonical: webSiteUrl },
      openGraph: { title, description, url: webSiteUrl, siteName: "AIP Création Web", locale: "fr_CA", type: "website", images: [{ url: `${webSiteUrl}/aip-travail-13.webp`, alt: title }] },
      twitter: { card: "summary_large_image", title, description, images: [`${webSiteUrl}/aip-travail-13.webp`] },
    };
  }

  const title = "Dépannage informatique à Nicolet | Atelier Informatique Potvin";
  const description = "Dépannage informatique, assistance à distance, réparation, installation et réseau à Nicolet et dans les environs.";
  return {
    title,
    description,
    alternates: { canonical: siteUrl },
    openGraph: { title, description, url: siteUrl, siteName: businessName, locale: "fr_CA", type: "website", images: [{ url: `${siteUrl}/aip-travail-03.webp`, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/aip-travail-03.webp`] },
  };
}

function Reviews() {
  return <section className="reviews section"><div className="shell"><div className="section-heading"><div><div className="eyebrow"><span></span> Ce que mes clients en disent</div><h2>De vraies personnes.<br /><em>De vrais résultats.</em></h2></div><p>Une note de 5,0 sur Google, grâce à dix avis de clients de la région.</p></div><div className="reviews-grid"><article><div className="stars">★★★★★</div><blockquote>« Service impeccable. Je recommande fortement ses services, il est expert dans son domaine. »</blockquote><span>Alex Therrien</span></article><article><div className="stars">★★★★★</div><blockquote>« Un gros problème de micro, j’ai gossé dessus pendant deux mois, il a trouvé le problème en 10 minutes. »</blockquote><span>Etienne Therrien</span></article><article><div className="stars">★★★★★</div><blockquote>« Service dépannage au top. Service hors pair pour résoudre mon problème, avec un langage clair et de l’humour. »</blockquote><span>Solange Poulin</span></article></div></div></section>;
}

function WebProof() {
  return <section className="reviews section"><div className="shell"><div className="section-heading"><div><div className="eyebrow"><span></span> Preuve concrète</div><h2>Un projet réel.<br /><em>Des fonctions utiles.</em></h2></div><p>Plutôt que de présenter des avis de dépannage comme des témoignages Web, voici ce qui est réellement livré sur L’Envol des Enfants.</p></div><div className="reviews-grid"><article><div className="stars">01</div><h3>Boutique bilingue</h3><p>Catalogue, navigation et contenu pensés pour une clientèle francophone et anglophone.</p><span>Projet en production</span></article><article><div className="stars">02</div><h3>Gestion sur mesure</h3><p>Produits, photos, prix, stock et visibilité sont gérés depuis un outil adapté aux opérations de la boutique.</p><span>CMS personnalisé</span></article><article><div className="stars">03</div><h3>Un seul interlocuteur</h3><p>Conception, développement, déploiement et évolution du projet sont suivis directement avec AIP.</p><span>Accompagnement direct</span></article></div></div></section>;
}

function ContactBlock({ web }: { web: boolean }) {
  return <section className="contact section" id="contact"><div className="shell contact-inner"><div><div className="eyebrow"><span></span>{web ? "Votre projet Web" : "Besoin d’aide?"}</div><h2>{web ? <>Une idée en tête?<br /><em>Parlons-en.</em></> : <>Un problème informatique?<br /><em>On regarde ça ensemble.</em></>}</h2><p>{web ? "Expliquez-moi votre entreprise et ce que vous voulez accomplir. Je vous dirai clairement par où commencer." : "Expliquez-moi le problème dans vos mots. Je vous dirai si on peut le régler à distance ou s’il faut une intervention sur place."}</p></div><div className="contact-card"><span>Joignez-moi directement</span><a className="big-phone" href="tel:+18193802999">819 380-2999</a><p>462, rue D. N. St-Cyr<br />Nicolet (Québec) J3T 1H3</p><div className="response-note"><span></span>Réponse habituellement dans la journée</div><a className="button button-lime" href="tel:+18193802999">Appeler maintenant</a></div></div></section>;
}

function InformatiqueHome() {
  return <main className="home-page home-short home-domain-it"><SiteHeader />
    <section className="hero-clean hero-split" id="accueil"><div className="hero-split-media"><img className="hero-clean-bg" src="/hero-aip-clean.png" alt="Atelier Informatique Potvin" fetchPriority="high" decoding="async" /></div><div className="hero-clean-overlay hero-split-copy"><div className="hero-clean-brand">ATELIER INFORMATIQUE <strong>POTVIN</strong></div><div className="hero-clean-location">● &nbsp; NICOLET · BÉCANCOUR · TROIS-RIVIÈRES</div><h1>Dépannage informatique<span>.</span></h1><h2>Simple, local et sans détour.</h2><p>Ordinateur lent, virus, Windows, Wi-Fi ou problème urgent? Je vous aide à distance ou sur place selon la situation.</p><div className="hero-clean-actions hero-intent-actions"><Link className="hero-intent-choice hero-intent-it" href="/depannage-informatique-nicolet">Voir le dépannage</Link><Link className="hero-intent-choice home-assistance-choice" href="/assistance-informatique-a-distance">Assistance à distance</Link></div></div></section>
    <section className="metrics"><div className="shell metrics-grid"><div><strong>40 ans</strong><span>d’expérience sur le terrain</span></div><div><strong>50 km</strong><span>de service à domicile</span></div><div><strong>5,0 <i>★</i></strong><span>sur Google, 10 avis</span></div><div><strong>60 $</strong><span>tarif de base informatique</span></div></div></section>
    <section className="domain-services section shell"><div className="section-heading"><div><div className="eyebrow"><span></span> Services informatiques</div><h2>Le bon service.<br /><em>Sans chercher partout.</em></h2></div><p>Les trois chemins les plus utiles sont accessibles directement ici.</p></div><div className="domain-service-grid"><article><span>01</span><h3>Dépannage &amp; réparation</h3><p>PC lent, erreurs, Windows, matériel ou ordinateur qui ne démarre plus.</p><Link className="button button-dark" href="/depannage-informatique-nicolet">Voir le dépannage</Link></article><article><span>02</span><h3>Assistance à distance</h3><p>Quand Internet fonctionne encore, plusieurs problèmes peuvent être réglés sans déplacement.</p><Link className="button button-dark download-button" href="/assistance-informatique-a-distance">Assistance rapide</Link></article><article><span>03</span><h3>Installation &amp; réseau</h3><p>Nouveau PC, transfert de données, imprimante, Wi-Fi et sauvegardes.</p><Link className="button button-dark" href="/installation-ordinateur-transfert-donnees">Voir les services</Link></article></div></section>
    <Reviews />
    <ContactBlock web={false} />
    <SiteFooter />
  </main>;
}

function WebHome() {
  return <main className="home-page home-short home-domain-web"><SiteHeader />
    <section className="hero-clean hero-split" id="accueil"><div className="hero-split-media"><img className="hero-clean-bg" src="/hero-aip-clean.png" alt="AIP Création Web" fetchPriority="high" decoding="async" /></div><div className="hero-clean-overlay hero-split-copy"><div className="hero-clean-brand">AIP <strong>CRÉATION WEB</strong></div><div className="hero-clean-location">● &nbsp; NICOLET · BÉCANCOUR · TROIS-RIVIÈRES · À DISTANCE</div><h1>Création de sites Web<span>.</span></h1><h2>Un outil utile pour votre entreprise.</h2><p>Site vitrine, boutique en ligne ou gestion sur mesure : une solution claire, rapide et adaptée à votre façon de travailler.</p><div className="hero-clean-actions hero-intent-actions"><Link className="hero-intent-choice hero-intent-web" href="/contact">Discuter de mon projet</Link><Link className="hero-intent-choice home-web-secondary" href="/tarifs">Voir les tarifs</Link></div></div></section>
    <section className="metrics"><div className="shell metrics-grid"><div><strong>900 $ +</strong><span>site vitrine de base</span></div><div><strong>Sur mesure</strong><span>design, boutique et gestion</span></div><div><strong>Mobile</strong><span>pensé pour tous les écrans</span></div><div><strong>1 seul</strong><span>interlocuteur du début à la fin</span></div></div></section>
    <section className="domain-services section shell"><div className="section-heading"><div><div className="eyebrow"><span></span> Création Web</div><h2>Votre besoin.<br /><em>La bonne solution.</em></h2></div><p>Pas besoin de connaître le jargon : choisissez simplement ce que votre entreprise doit accomplir.</p></div><div className="domain-service-grid"><article><span>01</span><h3>Site professionnel</h3><p>Présentez clairement votre entreprise, vos services et la meilleure façon de vous joindre.</p><Link className="button button-dark" href="/site-web-pme">Sites pour PME</Link></article><article><span>02</span><h3>Boutique en ligne</h3><p>Vendez vos produits avec un catalogue et une expérience d’achat adaptés à votre activité.</p><Link className="button button-dark" href="/creation-boutique-en-ligne">Voir les boutiques</Link></article><article><span>03</span><h3>Gestion sur mesure</h3><p>Gérez produits, photos, prix, stock ou contenu avec un outil conçu autour de vos opérations.</p><Link className="button button-dark" href="/developpement-cms-sur-mesure">Voir les outils</Link></article></div></section>
    <section className="home-featured section" id="realisations"><div className="shell home-featured-grid"><a className="home-featured-image" href="https://envoldesenfants.com/" target="_blank" rel="noopener noreferrer" aria-label="Visiter L’Envol des Enfants"><img src="/projet-envol-enfants.png" alt="Boutique en ligne L’Envol des Enfants" loading="lazy" decoding="async" /></a><div className="home-featured-copy"><div className="eyebrow"><span></span> Réalisation Web</div><h2>L’Envol des Enfants.<br /><em>Une boutique pensée pour le vrai travail.</em></h2><p>Boutique bilingue avec gestion des produits, photos, prix, stock et visibilité. L’objectif : que la cliente puisse gérer son commerce simplement.</p><div className="home-featured-actions"><Link className="button button-dark" href="/realisation-envol-des-enfants">Voir l’étude de cas</Link><Link className="button button-outline" href="/contact">Parler de votre projet</Link></div></div></div></section>
    <Reviews />
    <ContactBlock web />
    <SiteFooter />
  </main>;
}

export default async function Home() {
  return await isCreationDomain() ? <WebHome /> : <InformatiqueHome />;
}

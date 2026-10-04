import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components";
import { EditorialMotion } from "./editorial-motion";
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
  return <section className="reviews section web-proof"><div className="shell"><div className="section-heading"><div><div className="eyebrow"><span></span> Savoir-faire Web</div><h2>Du concept à la mise en ligne.<br /><em>Tout est pensé ensemble.</em></h2></div><p>L’Envol des Enfants montre une approche complète : expérience client, boutique bilingue, gestion interne et déploiement dans un même projet.</p></div><div className="reviews-grid web-proof-grid"><article><div className="stars">01</div><div className="web-proof-kicker">Expérience client</div><h3>Boutique bilingue</h3><p>Une vitrine claire en français et en anglais, avec catalogue, navigation et contenu adaptés au commerce.</p><ul><li>FR / EN</li><li>Catalogue structuré</li><li>Parcours mobile</li></ul><span>Projet en production</span></article><article><div className="stars">02</div><div className="web-proof-kicker">Outil métier</div><h3>CMS sur mesure</h3><p>Une interface conçue autour des vraies opérations de la boutique, pas un panneau générique à contourner.</p><ul><li>Produits et photos</li><li>Prix et stock</li><li>Visibilité et gestion en lot</li></ul><span>Gestion adaptée au quotidien</span></article><article><div className="stars">03</div><div className="web-proof-kicker">Projet complet</div><h3>Conception à déploiement</h3><p>Architecture, développement, mise en ligne et évolution sont suivis dans une même logique technique.</p><ul><li>Design et développement</li><li>Déploiement Cloud</li><li>Évolution continue</li></ul><span>Un seul interlocuteur</span></article></div><div className="web-proof-strip"><span>Design</span><span>Développement</span><span>E-commerce</span><span>CMS</span><span>SEO technique</span><span>Déploiement</span></div></div></section>;
}

function WebNeutralReview() {
  return <section className="reviews section web-neutral-review"><div className="shell"><div className="section-heading"><div><div className="eyebrow"><span></span> Avis client</div><h2>Une expérience appréciée.<br /><em>Un service qui inspire confiance.</em></h2></div><p>Des clients soulignent la qualité du service, l’expertise et l’accompagnement.</p></div><article className="web-neutral-review-card"><div className="stars">★★★★★</div><blockquote>« Service impeccable. Je recommande fortement ses services, il est expert dans son domaine. »</blockquote><span>Alex Therrien</span></article></div></section>;
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
  return <main className="home-page home-domain-web editorial-web"><EditorialMotion /><SiteHeader />
    <section className="editorial-masthead shell" id="accueil" data-reveal="hero">
      <div className="holo-scanline" aria-hidden="true"></div>
      <div className="holo-orbit holo-orbit-a" aria-hidden="true"></div>
      <div className="holo-orbit holo-orbit-b" aria-hidden="true"></div>
      <div className="editorial-masthead-top"><span>AIP CRÉATION · ÉDITION NUMÉRIQUE</span><span>NICOLET · BÉCANCOUR · TROIS-RIVIÈRES · À DISTANCE</span></div>
      <div className="editorial-nameplate"><span>CRÉATION</span> <em>WEB</em><i aria-hidden="true">/// 2035</i></div>
      <div className="editorial-deck"><span>Sites Web</span><span>Boutiques en ligne</span><span>CMS sur mesure</span><span>Expériences numériques</span></div>
    </section>

    <section className="editorial-front shell">
      <article className="editorial-lead holo-panel" data-reveal="hero-lead">
        <div className="holo-corner holo-corner-tl" aria-hidden="true"></div>
        <div className="holo-corner holo-corner-br" aria-hidden="true"></div>
        <Link className="editorial-lead-image" href="/realisation-envol-des-enfants"><img src="/projet-envol-enfants.png" alt="L’Envol des Enfants, boutique en ligne conçue sur mesure" fetchPriority="high" decoding="async" /></Link>
        <div className="editorial-kicker">À LA UNE · RÉALISATION</div>
        <h1>Une boutique en ligne pensée comme un vrai outil de travail.</h1>
        <p>L’Envol des Enfants réunit commerce bilingue, catalogue, gestion des produits, prix, stock, photos et visibilité dans une même expérience.</p>
        <div className="editorial-actions"><Link className="editorial-read" href="/realisation-envol-des-enfants">Lire l’étude de cas →</Link><Link className="editorial-cta" href="/contact">Discuter de votre projet</Link></div>
      </article>

      <aside className="editorial-rail holo-panel" data-reveal="hero-rail">
        <div className="holo-status" aria-hidden="true"><span></span> SIGNAL ACTIF</div>
        <div className="editorial-rail-title">DOSSIERS / FLUX</div>
        <Link className="editorial-brief" href="/site-web-pme" data-reveal="brief"><span>01</span><div><small>PRÉSENCE EN LIGNE</small><h2>Un site professionnel qui donne envie d’appeler.</h2><p>Structure claire, contenu utile, mobile et référencement local.</p></div></Link>
        <Link className="editorial-brief" href="/creation-boutique-en-ligne" data-reveal="brief"><span>02</span><div><small>COMMERCE</small><h2>Une boutique qui vend sans compliquer la gestion.</h2><p>Catalogue, navigation, expérience d’achat et administration.</p></div></Link>
        <Link className="editorial-brief" href="/developpement-cms-sur-mesure" data-reveal="brief"><span>03</span><div><small>OUTILS MÉTIER</small><h2>Un CMS construit autour de votre façon de travailler.</h2><p>Moins de contournements. Plus de contrôle.</p></div></Link>
      </aside>
    </section>

    <section className="editorial-index holo-index">
      <div className="holo-data-stream" aria-hidden="true">AIP // DESIGN // DEV // CMS // COMMERCE // SEO // CLOUD //</div>
      <div className="shell editorial-index-grid">
        <div><strong>900 $ +</strong><span>site vitrine de base</span><small>Boutique et CMS sur devis</small></div>
        <div><strong>FR / EN</strong><span>boutique bilingue en production</span><small>Une même expérience dans les deux langues</small></div>
        <div><strong>CMS métier</strong><span>produits, photos, prix et stock</span><small>Gestion pensée autour des opérations</small></div>
        <div><strong>1 seul</strong><span>interlocuteur du début à la fin</span><small>Conception, code et déploiement</small></div>
      </div>
    </section>

    <section className="editorial-section shell holo-section" data-reveal="section">
      <div className="holo-axis" aria-hidden="true"></div>
      <div className="editorial-section-heading"><span>SAVOIR-FAIRE // 03 MODULES</span><h2>Le design ne sert pas à décorer.<br/><em>Il sert à faire comprendre.</em></h2><p>Chaque projet combine structure, hiérarchie visuelle, développement et performance pour rendre votre offre plus évidente.</p></div>
      <div className="editorial-feature-grid">
        <article data-reveal="feature"><small>01 · STRATÉGIE</small><h3>Une structure qui raconte la bonne histoire.</h3><p>On organise le contenu pour que le visiteur comprenne rapidement qui vous êtes, ce que vous faites et pourquoi vous choisir.</p><Link href="/site-web-pme">Sites pour PME →</Link></article>
        <article data-reveal="feature"><small>02 · DESIGN</small><h3>Une identité visuelle qui ne ressemble pas à un thème acheté.</h3><p>Typographie, rythme, images, espaces et détails sont pensés comme un ensemble cohérent.</p><Link href="/creation-site-web-nicolet">Création Web locale →</Link></article>
        <article data-reveal="feature"><small>03 · DÉVELOPPEMENT</small><h3>Des fonctions conçues pour le vrai travail.</h3><p>Boutique, CMS, gestion de contenu et automatisations sont construits autour de vos opérations.</p><Link href="/developpement-cms-sur-mesure">CMS sur mesure →</Link></article>
      </div>
    </section>

    <WebProof />
    <WebNeutralReview />
    <ContactBlock web />
    <SiteFooter />
  </main>;
}

export default async function Home() {
  return await isCreationDomain() ? <WebHome /> : <InformatiqueHome />;
}

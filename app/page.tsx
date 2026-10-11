import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components";
import { businessName, googleBusinessUrl, siteUrl, webSiteUrl } from "./seo";

async function isCreationDomain() {
  const requestHeaders = await headers();
  const host = (requestHeaders.get("host") || "").split(":")[0].toLowerCase();
  return host === "aipcreation.ca" || host === "www.aipcreation.ca" || host === "aipconceptionweb.ca" || host === "www.aipconceptionweb.ca";
}

export async function generateMetadata(): Promise<Metadata> {
  const web = await isCreationDomain();
  if (web) {
    const title = "Création de sites Web à Nicolet | AIP Conception Web";
    const description = "Création de sites Web pour PME à Nicolet : sites vitrines, boutiques en ligne et outils de gestion sur mesure, avec un seul interlocuteur.";
    return {
      title,
      description,
      alternates: { canonical: webSiteUrl },
      openGraph: { title, description, url: webSiteUrl, siteName: "AIP Conception Web", locale: "fr_CA", type: "website", images: [{ url: `${webSiteUrl}/aip-travail-13.webp`, alt: title }] },
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
  return <section className="reviews section" data-reveal="section"><div className="shell"><div className="section-heading"><div><div className="eyebrow"><span></span> Ce que mes clients en disent</div><h2>Des avis de clients de la région.</h2></div><p>Une note de 5,0 sur Google, basée sur dix avis vérifiables sur ma fiche d’entreprise.</p></div><div className="reviews-grid"><article data-reveal="feature"><div className="stars">★★★★★</div><blockquote>« Service impeccable. Je recommande fortement ses services, il est expert dans son domaine. »</blockquote><span>Alex Therrien</span></article><article data-reveal="feature"><div className="stars">★★★★★</div><blockquote>« Un gros problème de micro, j’ai gossé dessus pendant deux mois, il a trouvé le problème en 10 minutes. »</blockquote><span>Etienne Therrien</span></article><article data-reveal="feature"><div className="stars">★★★★★</div><blockquote>« Service dépannage au top. Service hors pair pour résoudre mon problème, avec un langage clair et de l’humour. »</blockquote><span>Solange Poulin</span></article></div><div className="reviews-actions"><a className="button button-outline reviews-google-link" href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">Voir les avis sur Google</a></div></div></section>;
}

function WebNeutralReview() {
  return <section className="reviews section web-neutral-review" data-reveal="section"><div className="shell"><div className="section-heading" data-reveal="feature"><div><div className="eyebrow"><span></span> Avis client</div><h2>Une expérience appréciée.<br /><em>Un service qui inspire confiance.</em></h2></div><p>Cet avis porte sur la qualité du service et de l’accompagnement. La réalisation Web présentée plus haut montre concrètement le travail de conception.</p></div><article className="web-neutral-review-card" data-reveal="feature"><div className="stars">★★★★★</div><blockquote>Service impeccable. Je recommande fortement ses services, il est expert dans son domaine.</blockquote><span>Alex Therrien</span></article></div></section>;
}

function ContactBlock({ web }: { web: boolean }) {
  if (web) {
    return <section className="contact section web-contact" id="contact" data-reveal="section"><div className="shell contact-inner"><div data-reveal="feature"><div className="eyebrow"><span></span>Votre projet Web</div><h2>Une idée en tête?<br /><em>Parlons-en.</em></h2><p>Expliquez-moi votre entreprise, votre projet et ce que vous voulez accomplir. Je vous répondrai avec une première direction claire.</p><a className="contact-inline-phone" href="tel:+18193802999">819 380-2999</a></div><div className="contact-card contact-form-card" data-reveal="feature"><span>Écrivez-moi</span><form className="contact-mini-form" action="https://formsubmit.co/contact@atelierpotvin.ca" method="POST"><input type="hidden" name="_subject" value="Nouvelle demande — aipconceptionweb.ca" /><input type="hidden" name="_template" value="table" /><input type="hidden" name="_next" value="https://aipconceptionweb.ca/merci?site=web" /><input className="contact-honey" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" /><label>Nom<input type="text" name="name" autoComplete="name" required /></label><label>Téléphone ou courriel<input type="text" name="coordonnees" required /></label><label>Parlez-moi du projet<textarea name="message" rows={4} required /></label><button className="button button-lime" type="submit">Envoyer ma demande</button></form><div className="response-note"><span></span>Réponse habituellement dans la journée</div></div></div></section>;
  }
  return <section className="contact section" id="contact" data-reveal="section"><div className="shell contact-inner"><div data-reveal="feature"><div className="eyebrow"><span></span>Besoin d’aide?</div><h2>Un problème informatique?<br /><em>On regarde ça ensemble.</em></h2><p>Expliquez-moi le problème dans vos mots. Je vous dirai si on peut le régler à distance ou s’il faut une intervention sur place.</p></div><div className="contact-card" data-reveal="feature"><span>Joignez-moi directement</span><a className="big-phone" href="tel:+18193802999">819 380-2999</a><p>Nicolet, Québec<br />Service sur rendez-vous et à domicile</p><div className="response-note"><span></span>Réponse habituellement dans la journée</div><div className="contact-actions"><a className="button button-lime" href="tel:+18193802999">Appeler maintenant</a><a className="button button-outline contact-email-button" href="mailto:contact@atelierpotvin.ca">Écrire par courriel</a></div></div></div></section>;
}

function InformatiqueHome() {
  return <main className="home-page home-short home-domain-it"><SiteHeader />
    <section className="hero-clean hero-split" id="accueil"><div className="hero-split-media"><img className="hero-clean-bg" src="/aip-hero.webp" srcSet="/aip-hero-640.webp 640w, /aip-hero-960.webp 960w, /aip-hero-1280.webp 1280w, /aip-hero.webp 1672w" sizes="100vw" alt="Atelier Informatique Potvin" width="1672" height="941" loading="eager" fetchPriority="high" decoding="async" /></div><div className="hero-clean-overlay hero-split-copy"><div className="hero-clean-brand">ATELIER INFORMATIQUE <strong>POTVIN</strong></div><div className="hero-clean-location">● &nbsp; NICOLET · BÉCANCOUR · TROIS-RIVIÈRES</div><div className="hero-owner">Patrick Potvin · Technicien informatique local</div><h1>Dépannage informatique à Nicolet<span>.</span></h1><h2>Simple, local et sans détour.</h2><p>Un seul interlocuteur, du diagnostic à la solution. Ordinateur lent, virus, Windows, Wi-Fi ou problème urgent : je vous aide à distance ou sur place selon la situation.</p><div className="hero-clean-actions hero-intent-actions"><Link className="hero-intent-choice hero-intent-it" href="/depannage-informatique-nicolet">Voir les services de dépannage</Link><Link className="hero-intent-choice home-assistance-choice" href="/assistance-informatique-a-distance">Obtenir de l’aide à distance</Link></div></div></section>
    <section className="metrics" data-reveal="section"><div className="shell metrics-grid"><div><strong>40 ans</strong><span>d’expérience sur le terrain</span></div><div><strong>50 km</strong><span>de service à domicile</span></div><div><strong>5,0 <i>★</i></strong><span>sur Google, 10 avis</span></div><div><strong>60 $/h</strong><span>tarif informatique de base</span></div></div></section>
    <section className="domain-services section shell" data-reveal="section"><div className="section-heading"><div><div className="eyebrow"><span></span> Services informatiques</div><h2>Dépannage, assistance et installation.</h2></div><p>Choisissez le service qui correspond à votre problème, ou contactez-moi si vous ne savez pas lequel convient.</p></div><div className="domain-service-grid"><article data-reveal="feature"><span>01</span><h3>Dépannage &amp; réparation</h3><p>PC lent, erreurs, Windows, matériel ou ordinateur qui ne démarre plus.</p><Link className="button button-dark" href="/depannage-informatique-nicolet">Dépannage et réparation</Link></article><article data-reveal="feature"><span>02</span><h3>Assistance à distance</h3><p>Quand Internet fonctionne encore, plusieurs problèmes peuvent être réglés sans déplacement.</p><Link className="button button-dark download-button" href="/assistance-informatique-a-distance">Obtenir de l’aide à distance</Link></article><article data-reveal="feature"><span>03</span><h3>Installation &amp; réseau</h3><p>Nouveau PC, transfert de données, imprimante, Wi-Fi et sauvegardes.</p><Link className="button button-dark" href="/installation-ordinateur-transfert-donnees">Installation et réseau</Link></article></div></section>
    <Reviews />
    <ContactBlock web={false} />
    <SiteFooter />
  </main>;
}

function WebHome() {
  return <main className="home-page home-domain-web editorial-web"><SiteHeader />
    <section className="editorial-masthead shell" id="accueil" data-reveal="hero">
      <div className="holo-scanline" aria-hidden="true"></div>
      <div className="holo-orbit holo-orbit-a" aria-hidden="true"></div>
      <div className="holo-orbit holo-orbit-b" aria-hidden="true"></div>
      <div className="editorial-masthead-top"><span>AIP CONCEPTION WEB · SITES WEB SUR MESURE</span><span>NICOLET · BÉCANCOUR · TROIS-RIVIÈRES · À DISTANCE</span></div>
      <div className="editorial-nameplate"><span>CRÉATION</span> <em>WEB</em></div>
      <div className="editorial-deck"><span>Sites Web</span><span>Boutiques en ligne</span><span>CMS sur mesure</span><span>Expériences numériques</span></div>
    </section>

    <section className="editorial-front shell" id="realisations">
      <article className="editorial-lead holo-panel" data-reveal="hero-lead">
        <div className="holo-corner holo-corner-tl" aria-hidden="true"></div>
        <div className="holo-corner holo-corner-br" aria-hidden="true"></div>
        <Link className="editorial-lead-image magic-photo" href="/realisation-envol-des-enfants"><img src="/projet-envol-enfants.webp" width="1400" height="760" alt="L’Envol des Enfants, boutique en ligne conçue sur mesure" loading="eager" fetchPriority="high" /></Link>
        <div className="editorial-kicker">À LA UNE · RÉALISATION</div>
        <h1 data-typewrite="title">Une boutique en ligne pensée comme un vrai outil de travail.</h1>
        <p data-typewrite="body">L’Envol des Enfants réunit commerce bilingue, catalogue, gestion des produits, prix, stock, photos et visibilité dans une même expérience.</p>
        <div className="editorial-actions"><Link className="editorial-read" href="/realisation-envol-des-enfants">Lire l’étude de cas →</Link><Link className="editorial-cta" href="/contact">Discuter de votre projet</Link></div>
      </article>

      <aside className="editorial-rail holo-panel" data-reveal="hero-rail">
        <div className="holo-status" aria-hidden="true"><span></span> SERVICES WEB</div>
        <div className="editorial-rail-title">SERVICES</div>
        <Link className="editorial-brief" href="/site-web-pme"><span>01</span><div><small>PRÉSENCE EN LIGNE</small><h2 data-typewrite="title">Un site professionnel qui donne envie d’appeler.</h2><p>Structure claire, contenu utile, mobile et référencement local.</p></div></Link>
        <Link className="editorial-brief" href="/creation-boutique-en-ligne"><span>02</span><div><small>COMMERCE</small><h2 data-typewrite="title">Une boutique qui vend sans compliquer la gestion.</h2><p>Catalogue, navigation, expérience d’achat et administration.</p></div></Link>
        <Link className="editorial-brief" href="/developpement-cms-sur-mesure"><span>03</span><div><small>OUTILS MÉTIER</small><h2 data-typewrite="title">Un CMS construit autour de votre façon de travailler.</h2><p>Moins de contournements. Plus de contrôle.</p></div></Link>
      </aside>
    </section>

    <section className="editorial-offers shell" aria-labelledby="web-offers-title" data-reveal="section">
      <div className="editorial-offers-head">
        <div>
          <span className="editorial-kicker">3 FAÇONS DE COMMENCER</span>
          <h2 id="web-offers-title">Du site essentiel à l’outil sur mesure.</h2>
        </div>
        <p>Pas besoin de commencer avec un gros projet. Choisissez une base claire aujourd’hui, puis faites-la évoluer avec votre entreprise.</p>
      </div>
      <div className="editorial-offers-grid">
        <article className="editorial-offer-card editorial-offer-entry" data-reveal="feature">
          <div className="editorial-offer-top"><span>01 · PRÉSENCE</span><strong>1 500 $ +</strong></div>
          <h3>Être présent, trouvé et crédible.</h3>
          <p>Une porte d’entrée simple pour une entreprise qui veut une présence professionnelle sans partir dans un gros projet.</p>
          <ul>
            <li>Site professionnel d’une page</li>
            <li>Mobile, tablette et ordinateur</li>
            <li>Présentation claire de vos services</li>
            <li>SEO local de base</li>
            <li>Liens vers Google Business et vos coordonnées</li>
          </ul>
          <Link href="/contact">Commencer simplement →</Link>
        </article>

        <article className="editorial-offer-card editorial-offer-featured" data-reveal="feature">
          <div className="editorial-offer-badge">POUR UNE PME QUI VEUT GRANDIR</div>
          <div className="editorial-offer-top"><span>02 · PME</span><strong>Sur estimation</strong></div>
          <h3>Un vrai site qui travaille avec votre entreprise.</h3>
          <p>Plus de contenu, plus de visibilité locale et la possibilité de faire évoluer le site sans repartir de zéro.</p>
          <ul>
            <li>3 à 5 pages ou plus</li>
            <li>Pages dédiées à vos services</li>
            <li>SEO local plus complet</li>
            <li>Formulaires, réalisations et témoignages</li>
            <li>CMS adapté si vous voulez modifier le contenu</li>
          </ul>
          <Link href="/contact">Parler de votre PME →</Link>
        </article>

        <article className="editorial-offer-card" data-reveal="feature">
          <div className="editorial-offer-top"><span>03 · BOUTIQUE / OUTIL MÉTIER</span><strong>Sur devis</strong></div>
          <h3>Quand un simple site ne suffit plus.</h3>
          <p>Boutique, catalogue, administration, automatisations ou fonctions construites autour de votre façon de travailler.</p>
          <ul>
            <li>Boutique ou catalogue en ligne</li>
            <li>Gestion de produits, prix et stock</li>
            <li>CMS et administration sur mesure</li>
            <li>Automatisations et intégrations</li>
            <li>Fonctions métier personnalisées</li>
          </ul>
          <Link href="/realisation-envol-des-enfants">Voir l’exemple L’Envol des Enfants →</Link>
        </article>
      </div>
      <div className="editorial-offers-foot">
        <p><strong>Un seul interlocuteur du début à la fin.</strong> Vous m’expliquez votre besoin; je vous propose la portée qui a du sens, sans vous vendre ce dont vous n’avez pas besoin.</p>
        <Link className="editorial-cta" href="/tarifs">Voir les tarifs et détails</Link>
      </div>
    </section>

    <section className="editorial-tech-proof shell" aria-labelledby="tech-proof-title">
      <div className="editorial-tech-proof-head">
        <div>
          <span className="editorial-kicker">PREUVE TECHNIQUE · L’ENVOL DES ENFANTS</span>
          <h2 id="tech-proof-title">Ce qu’il y a derrière l’interface.</h2>
        </div>
        <p>Le projet ne repose pas sur un thème préfabriqué. La boutique et son outil de gestion ont été construits autour du travail réel de la cliente.</p>
      </div>
      <div className="editorial-tech-proof-grid">
        <article><strong>FR / EN</strong><span>Boutique bilingue</span><p>Une même expérience client en français et en anglais, avec un contenu géré dans le même système.</p></article>
        <article><strong>CMS sur mesure</strong><span>Gestion métier</span><p>Produits, prix, stock, photos et visibilité sont administrés depuis une interface conçue pour la boutique.</p></article>
        <article><strong>Cloudflare</strong><span>Déploiement moderne</span><p>Application déployée sur Cloudflare avec stockage de données et fichiers adapté au projet.</p></article>
        <article><strong>Responsive</strong><span>Mobile d’abord</span><p>Catalogue, navigation et administration restent utilisables sur téléphone, tablette et ordinateur.</p></article>
        <article><strong>SEO technique</strong><span>Structure propre</span><p>Balises, données structurées, performance, maillage et contenu sont préparés pour faciliter l’exploration et l’indexation.</p></article>
        <article><strong>Sur mesure</strong><span>Pas de thème générique</span><p>Les fonctions sont développées autour des opérations de la boutique plutôt que forcées dans un modèle standard.</p></article>
      </div>
      <div className="editorial-tech-proof-actions">
        <Link href="/realisation-envol-des-enfants" className="editorial-read">Voir l’étude de cas complète →</Link>
        <Link href="/contact" className="editorial-cta">Discuter de votre projet</Link>
      </div>
    </section>

    <section className="editorial-index holo-index" data-reveal="section">
      <div className="holo-data-stream" aria-hidden="true"><span>AIP CONCEPTION WEB · DESIGN · DÉVELOPPEMENT · BOUTIQUES · CMS · RÉFÉRENCEMENT LOCAL ·</span><span>AIP CONCEPTION WEB · DESIGN · DÉVELOPPEMENT · BOUTIQUES · CMS · RÉFÉRENCEMENT LOCAL ·</span></div>
      <div className="shell editorial-index-grid">
        <div data-reveal="feature"><strong>1 500 $ +</strong><span>site vitrine de base</span><small>Boutique et CMS sur devis</small></div>
        <div data-reveal="feature"><strong>FR / EN</strong><span>boutique bilingue en production</span><small>Une même expérience dans les deux langues</small></div>
        <div data-reveal="feature"><strong>CMS métier</strong><span>produits, photos, prix et stock</span><small>Gestion pensée autour des opérations</small></div>
        <div data-reveal="feature"><strong>1 seul</strong><span>interlocuteur du début à la fin</span><small>Conception, code et déploiement</small></div>
      </div>
    </section>

    <section className="editorial-project editorial-project-aip shell holo-panel" data-reveal="section" aria-labelledby="atelier-project-title">
      <div className="editorial-project-media magic-photo">
        <a href="https://atelierpotvin.ca/" target="_blank" rel="noopener noreferrer" aria-label="Visiter Atelier Informatique Potvin">
          <img src="/aip-hero.webp" alt="Atelier Informatique Potvin, site de services informatiques et plateforme de gestion" loading="lazy" decoding="async" />
        </a>
      </div>
      <div className="editorial-project-copy">
        <div className="editorial-kicker">RÉALISATION EN PRODUCTION · PROJET INTERNE AIP</div>
        <h2 id="atelier-project-title">Atelier Informatique Potvin.<br/><span>Site Web, CMS et acquisition locale.</span></h2>
        <p data-typewrite="body">Le site public et son système de gestion ont été conçus comme un même outil : présenter les services, soutenir le référencement local et faire évoluer le contenu sans multiplier les plateformes.</p>
        <div className="editorial-project-points">
          <span>Site de services</span><span>CMS interne</span><span>SEO local</span><span>Responsive</span><span>Déploiement Cloud</span>
        </div>
        <ul>
          <li>Pages de services et parcours de conversion pour Nicolet, Bécancour et Trois-Rivières</li>
          <li>Gestion de contenu et évolution du site depuis un CMS interne</li>
          <li>Structure SEO locale, performance et mise en production suivies dans la même base technique</li>
        </ul>
        <div className="editorial-actions"><a className="editorial-read" href="https://atelierpotvin.ca/" target="_blank" rel="noopener noreferrer">Voir le site en ligne →</a><Link className="editorial-cta" href="/developpement-cms-sur-mesure">Voir les CMS sur mesure</Link></div>
      </div>
    </section>

    <section className="editorial-project editorial-project-morphee shell holo-panel" data-reveal="section" aria-labelledby="morphee-project-title">
      <div className="morphee-mockups">
        <span className="morphee-desktop" aria-hidden="true"><span className="morphee-browser-bar"><i></i><i></i><i></i></span><span className="morphee-screen"><img src="/projet-bois-morphee.webp" alt="" loading="lazy" decoding="async" /></span></span>
        <span className="morphee-phone" aria-hidden="true"><span className="morphee-phone-notch"></span><span className="morphee-phone-screen"><img src="/projet-bois-morphee.webp" alt="" loading="lazy" decoding="async" /></span></span>
        <span className="morphee-privacy-note">APERÇU DU SITE</span>
      </div>
      <div className="editorial-project-copy">
        <div className="editorial-kicker">PROJET MAQUETTE · ÉBÉNISTERIE D’ART</div>
        <h2 id="morphee-project-title">Les Bois Morphée.<br/><span>Une présence Web plus actuelle et plus immersive.</span></h2>
        <p data-typewrite="body">Une proposition de modernisation pensée pour mettre en valeur le savoir-faire, l’atelier et les créations.</p>
        <div className="editorial-project-points"><span>Design sur mesure</span><span>Responsive</span><span>Image de marque</span><span>Maquette en ligne</span></div>
        <div className="editorial-actions"><a className="editorial-read" href="https://bois-morphee-redesign.pages.dev/" target="_blank" rel="noopener noreferrer">Voir la maquette en ligne →</a><Link className="editorial-cta" href="/creation-sites-web">Création et conception Web</Link></div>
      </div>
    </section>

    <section className="editorial-section shell holo-section" data-reveal="section">
      <div className="holo-axis" aria-hidden="true"></div>
      <div className="editorial-section-heading"><span>SAVOIR-FAIRE</span><h2>Le design ne sert pas à décorer.<br/><em>Il sert à faire comprendre.</em></h2><p data-typewrite="body">Chaque projet combine structure, hiérarchie visuelle, développement et performance pour rendre votre offre plus évidente.</p></div>
      <div className="editorial-feature-grid">
        <article data-reveal="feature"><small>01 · STRATÉGIE</small><h3>Une structure qui raconte la bonne histoire.</h3><p>On organise le contenu pour que le visiteur comprenne rapidement qui vous êtes, ce que vous faites et pourquoi vous choisir.</p><Link href="/site-web-pme">Sites pour PME →</Link></article>
        <article data-reveal="feature"><small>02 · DESIGN</small><h3>Une identité visuelle qui ne ressemble pas à un thème acheté.</h3><p>Typographie, rythme, images, espaces et détails sont pensés comme un ensemble cohérent.</p><Link href="/creation-site-web-nicolet">Création Web locale →</Link></article>
        <article data-reveal="feature"><small>03 · DÉVELOPPEMENT</small><h3>Des fonctions conçues pour le vrai travail.</h3><p>Boutique, CMS, gestion de contenu et automatisations sont construits autour de vos opérations.</p><Link href="/developpement-cms-sur-mesure">CMS sur mesure →</Link></article>
      </div>
    </section>

    <WebNeutralReview />
    <ContactBlock web />
    <SiteFooter />
  </main>;
}

export default async function Home() {
  return await isCreationDomain() ? <WebHome /> : <InformatiqueHome />;
}

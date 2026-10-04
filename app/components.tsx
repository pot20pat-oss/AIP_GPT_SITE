"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { businessAddress, businessName, googleBusinessUrl, jsonLd, siteUrl, webSiteUrl } from "./seo";

export const phone = "819 380-2999";

const envolCmsShots = [
  { src: "/envol-cms/dashboard.png", alt: "Tableau de bord du CMS L’Envol des Enfants", caption: "Tableau de bord — produits, commandes, abonnés et alertes de stock" },
  { src: "/envol-cms/produits.png", alt: "Gestion du catalogue et analyse IA des produits", caption: "Catalogue, recherche par image et actions en lot" },
  { src: "/envol-cms/notifications.png", alt: "Contrôle qualité du catalogue assisté par IA", caption: "Contrôle du catalogue et corrections assistées par IA" },
  { src: "/envol-cms/editeur-site.png", alt: "Éditeur des sections de la boutique", caption: "Éditeur de boutique et visibilité des sections" },
  { src: "/envol-cms/conseiller-ia.png", alt: "Conseiller IA pour l’audit des prix", caption: "Conseiller IA et audit des prix" },
];

function EnvolCmsGallery() {
  const [open, setOpen] = useState<number | null>(null);
  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowLeft") setOpen(current => current === null ? null : (current + envolCmsShots.length - 1) % envolCmsShots.length);
      if (event.key === "ArrowRight") setOpen(current => current === null ? null : (current + 1) % envolCmsShots.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("cms-lightbox-open");
    return () => { document.removeEventListener("keydown", onKey); document.body.classList.remove("cms-lightbox-open"); };
  }, [open]);
  return <div className="envol-cms-showcase">
    <button className="envol-cms-preview envol-cms-main" type="button" onClick={() => setOpen(0)}><img src={envolCmsShots[0].src} alt={envolCmsShots[0].alt} loading="lazy" decoding="async" /><span>{envolCmsShots[0].caption}</span></button>
    <div className="envol-cms-grid">{envolCmsShots.slice(1).map((shot,index) => <button className="envol-cms-preview" type="button" key={shot.src} onClick={() => setOpen(index+1)}><img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" /><span>{shot.caption}</span></button>)}</div>
    {open !== null && <div className="cms-lightbox" role="dialog" aria-modal="true" onMouseDown={event => { if(event.target===event.currentTarget) setOpen(null); }}><button className="cms-lightbox-close" type="button" onClick={() => setOpen(null)} aria-label="Fermer">×</button><button className="cms-lightbox-nav cms-lightbox-prev" type="button" onClick={() => setOpen((open+envolCmsShots.length-1)%envolCmsShots.length)} aria-label="Précédente">‹</button><figure><img src={envolCmsShots[open].src} alt={envolCmsShots[open].alt}/><figcaption>{envolCmsShots[open].caption}</figcaption></figure><button className="cms-lightbox-nav cms-lightbox-next" type="button" onClick={() => setOpen((open+1)%envolCmsShots.length)} aria-label="Suivante">›</button></div>}
  </div>;
}


export function SiteHeader() {
  return <>
    <header className="header shell header-simple">
      <div className="brand"><Link className="brand-home-link" href="/" aria-label="Retour à l’accueil"><img className="brand-logo" src="/aip-icon-v7.png" alt="AIP Atelier Informatique Potvin" width="71" height="61" /></Link><span className="brand-name brand-name-it"><span>Informaticien · Service local</span></span><span className="brand-name brand-name-web"><small>AIP CRÉATION // STUDIO WEB</small><span>Designer Web · Création sur mesure</span></span></div>
      <nav className="nav-site nav-site-it" aria-label="Navigation principale informatique">
        <Link href="/depannage-informatique-nicolet">Informatique</Link>
        <Link href="/assistance-informatique-a-distance">Assistance</Link>
        <Link href="/tarifs">Tarifs</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <nav className="nav-site nav-site-web" aria-label="Navigation principale création Web">
        <Link href="/">Sites Web</Link>
        <Link href="/#realisations">Réalisations</Link>
        <Link href="/tarifs">Tarifs</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="header-contact header-contact-simple"><a className="header-phone" href="tel:+18193802999">{phone}</a></div>
    </header>
  </>;
}

export function SiteFooter() {
  return <>
    <nav className="footer-service-links footer-simple footer-site footer-site-it shell" aria-label="Services informatiques et informations">
      <div><strong>Informatique</strong><Link href="/depannage-informatique-nicolet">Dépannage et réparation</Link><Link href="/assistance-informatique-a-distance">Assistance à distance</Link><Link href="/suppression-virus">Virus et sécurité</Link><Link href="/installation-ordinateur-transfert-donnees">Installation et transfert</Link><Link href="/configuration-wifi-sauvegarde">Wi-Fi et sauvegardes</Link></div>
      <div><strong>AIP</strong><Link href="/a-propos">À propos</Link><Link href="/tarifs">Tarifs</Link><Link href="/avis-clients">Avis clients</Link><Link href="/faq">FAQ</Link><Link href="/contact">Contact</Link></div>
      <div className="footer-cross-site"><strong>Création Web</strong><a href="https://aipcreation.ca/">Sites Web pour entreprises</a><a href="https://aipcreation.ca/#realisations">Voir les réalisations</a></div>
    </nav>

    <nav className="footer-service-links footer-simple footer-site footer-site-web shell" aria-label="Création Web et informations">
      <div><strong>Sites Web</strong><Link href="/">Création de sites Web</Link><Link href="/site-web-pme">Sites Web pour PME</Link><Link href="/creation-boutique-en-ligne">Boutiques en ligne</Link><Link href="/developpement-cms-sur-mesure">Gestion et CMS sur mesure</Link><Link href="/#realisations">Réalisations</Link></div>
      <div><strong>Création locale</strong><Link href="/creation-site-web-nicolet">Nicolet</Link><Link href="/creation-site-web-becancour">Bécancour</Link><Link href="/creation-site-web-trois-rivieres">Trois-Rivières</Link><Link href="/tarifs">Tarifs Web</Link><Link href="/contact">Contact</Link></div>
      <div className="footer-cross-site"><strong>Besoin informatique?</strong><a href="https://atelierpotvin.ca/">Atelier Informatique Potvin</a><a href="https://atelierpotvin.ca/assistance-informatique-a-distance">Assistance à distance</a></div>
    </nav>

    <div className="footer-nap shell"><strong>{businessName}</strong><span>{businessAddress}</span><a href="tel:+18193802999">{phone}</a><a href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">Nous trouver sur Google Maps</a></div>
    <footer className="footer shell"><Link className="footer-brand footer-logo-only" href="/" aria-label="AIP Atelier Informatique Potvin, accueil"><img src="/aip-icon-v7.png" alt="AIP Atelier Informatique Potvin" width="92" height="79" /></Link><p>© 2026 AIP · <span className="footer-legal-name">AIP Atelier Informatique Potvin</span> · Nicolet, Québec</p><a href="tel:+18193802999">{phone}</a></footer>
  </>;
}

export function LocalServiceArea() {
  return <section className="local-area section shell"><div className="section-heading"><div><div className="eyebrow"><span></span>Votre technicien dans la région</div><h2>Tout près de chez vous.<br /><em>Partout où ça compte.</em></h2></div><p>Dépannage informatique, réparation d’ordinateurs, création et conception de sites Web pour les particuliers et les entreprises du Centre-du-Québec.</p></div><div className="local-area-grid"><article><h3>Informatique à Nicolet</h3><p>Technicien local pour réparer votre ordinateur, supprimer les virus, configurer Windows ou créer le site web de votre entreprise.</p><Link href="/reparation-ordinateur-nicolet">Réparation à Nicolet</Link></article><article><h3>Dépannage à Bécancour</h3><p>Assistance informatique à domicile ou à distance pour les problèmes de PC, de courriel, d’imprimante et de réseau Wi-Fi.</p><Link href="/depannage-informatique-becancour">Dépannage à Bécancour</Link></article><article><h3>Trois-Rivières et environs</h3><p>Services informatiques dans un rayon de 50 km autour de Nicolet, incluant Trois-Rivières, Saint-Célestin et les municipalités voisines.</p><Link href="/depannage-informatique-trois-rivieres">Dépannage à Trois-Rivières</Link></article></div></section>;
}

export function ProjectShowcase({ showServiceLink = true }: { showServiceLink?: boolean }) {
  return <section className={`portfolio section${showServiceLink ? " portfolio-home" : ""}`} id="realisations"><div className="shell"><div className="section-heading"><div><div className="eyebrow"><span></span>Projets web sur mesure</div><h2>Du concept au concret.<br /><em>Découvrez les projets.</em></h2></div><p>Une maquette client en développement et une boutique réellement en ligne : deux exemples de solutions web conçues sur mesure.</p></div><article className="portfolio-project"><a className="portfolio-image portfolio-image-cover" href="https://f85220e0.bois-morphee-redesign.pages.dev/" target="_blank" rel="noopener noreferrer" aria-label="Voir la maquette Les Bois Morphée, nouvelle fenêtre"><img src="/projet-bois-morphee.webp" alt="Capture de la maquette proposée pour Les Bois Morphée : logo, atelier d’ébénisterie et artisan Roger" loading="lazy" decoding="async" /></a><div className="portfolio-copy"><div className="eyebrow"><span></span>Projet maquette client · Ébénisterie d’art</div><h3>Les Bois Morphée</h3><p>Proposition de refonte conçue pour Les Bois Morphée afin de présenter l’artisan, son atelier et ses créations : artisanat funéraire, trophées et ébénisterie sur mesure.</p><div className="portfolio-tags"><span>Design sur mesure</span><span>Adapté au mobile</span><span>Image de marque</span></div><a className="button button-dark" href="https://f85220e0.bois-morphee-redesign.pages.dev/" target="_blank" rel="noopener noreferrer">Voir la maquette en ligne</a>{showServiceLink && <Link className="button button-outline" href="/creation-sites-web">Création et conception Web</Link>}</div></article><article className="portfolio-project portfolio-project-envol"><a className="portfolio-image portfolio-image-cover" href="https://envoldesenfants.com/" target="_blank" rel="noopener noreferrer" aria-label="Visiter L’Envol des Enfants, nouvelle fenêtre"><img src="/projet-envol-enfants.png" alt="Capture du site e-commerce L’Envol des Enfants" loading="lazy" decoding="async" /></a><div className="portfolio-copy"><div className="eyebrow"><span></span>Projet client · Boutique en ligne</div><h3>L’Envol des Enfants</h3><p>Boutique bilingue avec un espace de gestion conçu pour le travail réel de la boutique : produits, photos, prix, stock et visibilité.</p><div className="portfolio-proof"><strong>Ce que la cliente peut faire facilement</strong><ul><li>Gérer produits, prix et stock au même endroit</li><li>Ajouter plusieurs photos à chaque produit</li><li>Choisir quels produits afficher dans chaque boutique</li><li>Modifier plusieurs produits plus rapidement</li><li>Présenter la boutique en français et en anglais</li></ul></div><div className="portfolio-tags"><span>Boutique en ligne</span><span>Gestion sur mesure</span><span>Produits et stock</span><span>FR / EN</span></div><a className="button button-dark" href="https://envoldesenfants.com/" target="_blank" rel="noopener noreferrer">Voir le site en ligne</a>{showServiceLink && <Link className="button button-outline" href="/realisation-envol-des-enfants">Voir l’étude de cas</Link>}</div><div className="portfolio-envol-cms-row"><EnvolCmsGallery /></div></article><div className="web-offers"><article><span>01</span><h3>Une identité qui vous ressemble</h3><p>Votre métier, vos couleurs et vos réalisations mis en valeur dans un design unique.</p></article><article><span>02</span><h3>Visible dans votre région</h3><p>Des pages claires et bien structurées pour aider vos futurs clients à vous trouver.</p></article><article><span>03</span><h3>Prêt sur tous les écrans</h3><p>Un site rapide et agréable à consulter sur téléphone, tablette et ordinateur.</p></article><article><span>04</span><h3>Accompagné du début à la fin</h3><p>Conception, mise en ligne et explications simples, avec un seul interlocuteur.</p></article></div></div></section>;
}

type DetailProps = {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  points: { title: string; text: string }[];
  asideTitle: string;
  asideText: string;
  links: { href: string; label: string }[];
  image: string;
  imageAlt: string;
  showcaseProject?: boolean;
  servicePath?: string;
  scenarios?: { title: string; text: string }[];
  priceLabel?: string;
  priceText?: string;
  areaText?: string;
  faqs?: { question: string; answer: string }[];
};

export function DetailPage({ eyebrow, title, accent, intro, points, asideTitle, asideText, links, image, imageAlt, showcaseProject, servicePath, scenarios, priceLabel, priceText, areaText, faqs }: DetailProps) {
  const isWebService = !!servicePath && (
    servicePath.startsWith("/creation-") ||
    servicePath === "/site-web-pme" ||
    servicePath === "/developpement-cms-sur-mesure"
  );
  const isRemoteService = servicePath === "/assistance-informatique-a-distance";
  const isMainWebService = servicePath === "/creation-sites-web";
  const serviceBaseUrl = isWebService ? webSiteUrl : siteUrl;
  const serviceUrl = isMainWebService ? webSiteUrl : servicePath ? `${serviceBaseUrl}${servicePath}` : serviceBaseUrl;
  const graph: object[] = servicePath ? [{ "@type": "Service", "@id": `${serviceUrl}#service`, name: eyebrow, description: intro, url: serviceUrl, image: `${serviceBaseUrl}${image}`, provider: { "@id": `${siteUrl}/#entreprise`, name: businessName }, areaServed: ["Nicolet", "Bécancour", "Trois-Rivières", "Centre-du-Québec"], serviceArea: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 46.2268, longitude: -72.6141 }, geoRadius: "50000 m" } }, { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: serviceBaseUrl }, { "@type": "ListItem", position: 2, name: eyebrow, item: serviceUrl }] }] : [];
  if (faqs?.length) graph.push({ "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) });
  const structuredData = graph.length ? { "@context": "https://schema.org", "@graph": graph } : null;
  return <main className={isRemoteService ? "remote-service-page" : isMainWebService ? "web-main-service-page" : undefined}><SiteHeader />
    {structuredData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />}
    <section className="detail-hero detail-hero-photo shell"><div className="detail-hero-copy"><div className="eyebrow"><span></span>{eyebrow}</div><h1>{title}<br /><em>{accent}</em></h1><p>{intro}</p><div className="hero-actions">{isWebService ? <><Link className="button button-dark" href="/contact">Discuter de mon projet</Link><Link className="button button-outline" href="/tarifs">Voir les tarifs Web</Link></> : <><a className="button button-dark phone-button" href="tel:+18193802999">Parler à Patrick</a>{isRemoteService ? <Link className="button button-outline download-button" href="/assistance">Télécharger AIP Assistance</Link> : <Link className="button button-outline quick-assistance-button" href="/assistance-informatique-a-distance">Assistance rapide à distance</Link>}</>}</div>{!isWebService && !isRemoteService && <p className="quick-assistance-note">Si votre ordinateur a encore accès à Internet, je peux souvent regarder le problème avec vous sans déplacement.</p>}</div><figure className="detail-photo"><img src={image} alt={imageAlt} /></figure></section>
    {isRemoteService && <figure className="remote-mobile-photo shell"><img src={image} alt={imageAlt} /></figure>}
    {isMainWebService && <section className="web-mobile-quick shell" aria-label="Création Web en bref">
      <div className="web-mobile-quick-title"><span>CRÉATION WEB EN BREF</span><strong>Le bon site, sans vous noyer dans la technique.</strong></div>
      <div className="web-mobile-quick-grid">
        <article><b>01</b><div><strong>Site vitrine</strong><p>Présentez clairement votre entreprise et transformez les visites en appels ou demandes.</p></div></article>
        <article><b>02</b><div><strong>Boutique en ligne</strong><p>Vendez vos produits avec une boutique simple à utiliser et adaptée au mobile.</p></div></article>
        <article><b>03</b><div><strong>Gestion sur mesure</strong><p>Gérez produits, photos, prix, stock ou contenu avec un outil adapté à votre travail.</p></div></article>
      </div>
      <div className="web-mobile-price"><strong>À partir de 900 $</strong><span>site vitrine de base · estimation selon le projet</span></div>
      <Link className="web-mobile-showcase" href="/realisation-envol-des-enfants">
        <img src="/projet-envol-enfants.png" alt="Boutique en ligne L’Envol des Enfants" />
        <span><b>Voir une réalisation complète</b><small>L’Envol des Enfants · boutique en ligne et gestion sur mesure</small></span>
      </Link>
    </section>}
    {isRemoteService && <section className="remote-mobile-quick shell" aria-label="Assistance rapide">
      <div className="remote-mobile-quick-title"><span>ASSISTANCE RAPIDE</span><strong>Trois étapes, puis je prends le relais.</strong></div>
      <div className="remote-mobile-steps">
        <div><b>1</b><span>Téléchargez et ouvrez AIP Assistance.</span></div>
        <div><b>2</b><span>Donnez-moi l’identifiant affiché.</span></div>
        <div><b>3</b><span>Je me connecte avec votre autorisation et je vous guide.</span></div>
      </div>
      <div className="remote-mobile-meta"><strong>60 $</strong><span>jusqu’à 45 min · Internet requis</span></div>
    </section>}
    <section className="detail-body section"><div className="shell detail-grid"><div className="detail-points">{points.map((point, index) => <article key={point.title}><span>0{index + 1}</span><div><h2>{point.title}</h2><p>{point.text}</p></div></article>)}</div><aside><div className="eyebrow"><span></span>{isWebService ? "Création Web locale" : "Service local"}</div><h2>{asideTitle}</h2><p>{asideText}</p><div className="trust-box">{isWebService ? <><div><strong>Sur mesure</strong><span>design et gestion</span></div><div><strong>1 seul</strong><span>interlocuteur</span></div></> : <><div><strong>5,0 ★</strong><span>10 avis Google</span></div><div><strong>40 ans</strong><span>d’expérience</span></div></>}</div></aside></div></section>
    {scenarios?.length && <section className="service-depth section shell"><div className="section-heading"><div><div className="eyebrow"><span></span>Des situations bien réelles</div><h2>Ça vous ressemble?<br /><em>On peut vous aider.</em></h2></div><p>Quelques problèmes fréquents et des réponses concrètes, adaptées à votre situation.</p></div><div className="scenario-grid">{scenarios.map(scenario => <article key={scenario.title}><h3>{scenario.title}</h3><p>{scenario.text}</p></article>)}</div><div className="service-practical"><article><div className="eyebrow"><span></span>Prix indicatif</div><h3>{priceLabel}</h3><p>{priceText}</p></article><article><div className="eyebrow"><span></span>Zone de service</div><h3>{isWebService ? "Un créateur Web près de vous" : "Un technicien près de vous"}</h3><p>{areaText}</p></article>{isWebService ? <Link className="button button-dark" href="/contact">Discuter de mon projet</Link> : <a className="button button-dark phone-button" href="tel:+18193802999">Appeler Patrick</a>}</div></section>}
    {faqs?.length && <section className="service-faq section"><div className="shell"><div className="section-heading"><div><div className="eyebrow"><span></span>{isWebService ? "Avant de démarrer votre projet" : "Avant de prendre rendez-vous"}</div><h2>Vos questions.<br /><em>Des réponses claires.</em></h2></div></div><div className="faq-list">{faqs.map(({ question, answer }) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>}
    {servicePath === "/creation-sites-web" && <section className="web-value section"><div className="shell"><div className="web-value-grid"><article className="web-value-local"><div className="eyebrow"><span></span>Une approche différente</div><h2>Un technicien local.<br /><em>Un seul interlocuteur.</em></h2><p>Votre site n’est pas confié à une chaîne d’intermédiaires. Vous échangez directement avec Patrick, de la première discussion jusqu’à la mise en ligne et au suivi.</p><div className="web-value-facts"><span><strong>40 ans</strong>d’expérience informatique</span><span><strong>Local</strong>Nicolet et la région</span><span><strong>Web + TI</strong>un même contact</span><span><strong>Sur mesure</strong>site, boutique et CMS</span></div></article><article className="web-value-included"><div className="eyebrow"><span></span>Inclus dans votre projet</div><h2>Un site prêt à travailler<br /><em>pour votre entreprise.</em></h2><ul><li>Design adapté à votre entreprise</li><li>Affichage téléphone, tablette et ordinateur</li><li>Structure et SEO local</li><li>Mise en ligne et configuration du domaine</li><li>Explications simples pour prendre le site en main</li><li>Accompagnement après la mise en ligne</li></ul><p className="web-value-price">Site vitrine de base <strong>à partir de 900 $</strong></p></article></div></div></section>}
    {showcaseProject && <ProjectShowcase showServiceLink={false} />}
    <section className={`related section shell related-${isWebService ? "web" : "it"}`}><div className="eyebrow"><span></span>{isWebService ? "Continuer votre projet Web" : "Autres services informatiques"}</div><div className="related-links">{links.map(link => <Link className={`button button-outline${link.href === "/assistance" ? " download-button" : ""}`} href={link.href} key={link.href}>{link.label}</Link>)}</div></section>
    <section className="expertise-bridge shell">
      <div><span>{isWebService ? "AIP fait aussi de l’informatique" : "AIP crée aussi des sites Web"}</span><strong>{isWebService ? "Besoin d’aide avec vos ordinateurs, votre Wi-Fi ou un problème technique?" : "Vous avez une entreprise et vous avez aussi besoin d’un site Web?"}</strong></div>
      <Link className="button button-outline" href={isWebService ? "/depannage-informatique-nicolet" : "/creation-sites-web"}>{isWebService ? "Voir le dépannage informatique" : "Voir les services Web"}</Link>
    </section>
    <section className="contact section"><div className="shell contact-inner"><div><div className="eyebrow"><span></span>{isWebService ? "Votre projet Web" : "On règle ça ensemble"}</div><h2>{isWebService ? <>Une idée en tête?<br /><em>Parlons-en.</em></> : <>Besoin d’aide?<br /><em>Écrivez-moi ou appelez-moi.</em></>}</h2><p>{isWebService ? "Expliquez-moi votre entreprise, vos besoins et ce que vous voulez accomplir. Je vous dirai clairement par où commencer." : "Expliquez-moi le problème dans vos mots. Je vous dirai clairement ce qu’on peut faire."}</p><a className="contact-inline-phone" href="tel:+18193802999">{phone}</a></div><div className="contact-card contact-form-card"><span>Demande rapide</span><form className="contact-mini-form" action="https://formsubmit.co/contact@atelierpotvin.ca" method="POST"><input type="hidden" name="_subject" value="Nouvelle demande — atelierpotvin.ca" /><input type="hidden" name="_template" value="table" /><input type="hidden" name="_next" value="https://atelierpotvin.ca/merci" /><input className="contact-honey" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" /><label>Nom<input type="text" name="name" autoComplete="name" required /></label><label>Téléphone ou courriel<input type="text" name="coordonnees" autoComplete="email" required /></label><label>De quoi avez-vous besoin?<textarea name="message" rows={4} required /></label><button className="button button-lime" type="submit">Envoyer ma demande</button></form><div className="response-note"><span></span>Réponse habituellement dans la journée</div></div></div></section>
    <SiteFooter />
  </main>;
}

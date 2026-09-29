"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { businessAddress, businessName, googleBusinessUrl, jsonLd, siteUrl } from "./seo";

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
    <header className="header shell">
      <Link className="brand" href="/" aria-label="Atelier Informatique Potvin, accueil"><img className="brand-logo" src="/logo-aip-glow.png" alt="Logo Atelier Informatique Potvin" width="71" height="61" /><span className="brand-name">Atelier informatique<span>Potvin</span></span></Link>
      <nav aria-label="Navigation principale"><Link href="/creation-sites-web">Sites web</Link><Link href="/#realisations">Réalisations</Link><Link href="/tarifs">Tarifs</Link><Link href="/depannage-informatique-nicolet">Dépannage</Link><Link href="/faq">FAQ</Link></nav>
      <div className="header-contact"><div className="header-service-note">Service local à Nicolet, Bécancour et Trois-Rivières<br /><span>Réponse habituellement dans la journée</span></div><a className="header-phone" href="tel:+18193802999">{phone}</a></div>
    </header>
  </>;
}

export function SiteFooter() {
  return <><nav className="footer-service-links shell" aria-label="Services informatiques à Nicolet"><Link href="/reparation-ordinateur-nicolet">Réparation ordinateur Nicolet</Link><Link href="/depannage-informatique-becancour">Dépannage Bécancour</Link><Link href="/depannage-informatique-trois-rivieres">Dépannage Trois-Rivières</Link><Link href="/suppression-virus">Suppression de virus</Link><Link href="/assistance-informatique-a-distance">Assistance à distance</Link><Link href="/installation-ordinateur-transfert-donnees">Installation et transfert</Link><Link href="/configuration-wifi-sauvegarde">Wi-Fi et sauvegardes</Link><Link href="/creation-sites-web">Création de sites web</Link></nav><div className="footer-nap shell"><strong>{businessName}</strong><span>{businessAddress}</span><a href="tel:+18193802999">{phone}</a><a href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">Nous trouver sur Google Maps</a></div><footer className="footer shell"><Link className="footer-brand footer-logo-only" href="/" aria-label="Atelier Informatique Potvin, accueil"><img src="/logo-aip-glow.png" alt="Atelier Informatique Potvin" width="92" height="79" /></Link><p>© 2026 Atelier Informatique Potvin · Nicolet, Québec</p><a href="tel:+18193802999">{phone}</a></footer></>;
}

export function LocalServiceArea() {
  return <section className="local-area section shell"><div className="section-heading"><div><div className="eyebrow"><span></span>Votre technicien dans la région</div><h2>Tout près de chez vous.<br /><em>Partout où ça compte.</em></h2></div><p>Dépannage informatique, réparation d’ordinateurs et création de sites web pour les particuliers et les entreprises du Centre-du-Québec.</p></div><div className="local-area-grid"><article><h3>Informatique à Nicolet</h3><p>Technicien local pour réparer votre ordinateur, supprimer les virus, configurer Windows ou créer le site web de votre entreprise.</p><Link href="/reparation-ordinateur-nicolet">Réparation à Nicolet</Link></article><article><h3>Dépannage à Bécancour</h3><p>Assistance informatique à domicile ou à distance pour les problèmes de PC, de courriel, d’imprimante et de réseau Wi-Fi.</p><Link href="/depannage-informatique-becancour">Dépannage à Bécancour</Link></article><article><h3>Trois-Rivières et environs</h3><p>Services informatiques dans un rayon d’environ 50 km, incluant Trois-Rivières, Saint-Célestin et les municipalités voisines.</p><Link href="/depannage-informatique-trois-rivieres">Dépannage à Trois-Rivières</Link></article></div></section>;
}

export function ProjectShowcase({ showServiceLink = true }: { showServiceLink?: boolean }) {
  return <section className="portfolio section" id="realisations"><div className="shell"><div className="section-heading"><div><div className="eyebrow"><span></span>Projets web sur mesure</div><h2>Du concept au concret.<br /><em>Découvrez les projets.</em></h2></div><p>Une maquette client en développement et une boutique réellement en ligne : deux exemples de solutions web conçues sur mesure.</p></div><article className="portfolio-project"><a className="portfolio-image portfolio-image-cover" href="https://f85220e0.bois-morphee-redesign.pages.dev/" target="_blank" rel="noopener noreferrer" aria-label="Voir la maquette Les Bois Morphée, nouvelle fenêtre"><img src="/projet-bois-morphee.webp" alt="Capture de la maquette proposée pour Les Bois Morphée : logo, atelier d’ébénisterie et artisan Roger" loading="lazy" decoding="async" /></a><div className="portfolio-copy"><div className="eyebrow"><span></span>Projet maquette client · Ébénisterie d’art</div><h3>Les Bois Morphée</h3><p>Proposition de refonte conçue pour Les Bois Morphée afin de présenter l’artisan, son atelier et ses créations : artisanat funéraire, trophées et ébénisterie sur mesure.</p><div className="portfolio-tags"><span>Design sur mesure</span><span>Adapté au mobile</span><span>Image de marque</span></div><a className="button button-dark" href="https://f85220e0.bois-morphee-redesign.pages.dev/" target="_blank" rel="noopener noreferrer">Voir la maquette en ligne</a>{showServiceLink && <Link className="portfolio-service-link" href="/creation-sites-web">Découvrir la création de sites</Link>}</div></article><article className="portfolio-project portfolio-project-envol"><a className="portfolio-image portfolio-image-cover" href="https://envoldesenfants.com/" target="_blank" rel="noopener noreferrer" aria-label="Visiter L’Envol des Enfants, nouvelle fenêtre"><img src="/projet-envol-enfants.png" alt="Capture du site e-commerce L’Envol des Enfants" loading="lazy" decoding="async" /></a><div className="portfolio-copy"><div className="eyebrow"><span></span>Projet client · Boutique en ligne</div><h3>L’Envol des Enfants</h3><p>Boutique e-commerce bilingue avec une administration développée autour des opérations réelles de la boutique — pas un simple thème installé.</p><div className="portfolio-proof"><strong>Ce qui a été développé sur mesure</strong><ul><li>CMS et gestion du catalogue</li><li>Gestion multi-images des produits</li><li>Visibilité des produits par boutique</li><li>Outils d’analyse et de gestion par lot</li><li>Interface publique bilingue FR / EN</li></ul></div><div className="portfolio-tags"><span>E-commerce</span><span>CMS sur mesure</span><span>Gestion de catalogue</span><span>FR / EN</span></div><a className="button button-dark" href="https://envoldesenfants.com/" target="_blank" rel="noopener noreferrer">Voir le site en ligne</a>{showServiceLink && <Link className="portfolio-service-link" href="/creation-sites-web">Découvrir la création de sites</Link>}</div><div className="portfolio-envol-cms-row"><EnvolCmsGallery /></div></article><div className="web-offers"><article><span>01</span><h3>Une identité qui vous ressemble</h3><p>Votre métier, vos couleurs et vos réalisations mis en valeur dans un design unique.</p></article><article><span>02</span><h3>Visible dans votre région</h3><p>Des pages claires et bien structurées pour aider vos futurs clients à vous trouver.</p></article><article><span>03</span><h3>Prêt sur tous les écrans</h3><p>Un site rapide et agréable à consulter sur téléphone, tablette et ordinateur.</p></article><article><span>04</span><h3>Accompagné du début à la fin</h3><p>Conception, mise en ligne et explications simples, avec un seul interlocuteur.</p></article></div></div></section>;
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
  const graph: object[] = servicePath ? [{ "@type": "Service", "@id": `${siteUrl}${servicePath}#service`, name: eyebrow, description: intro, url: `${siteUrl}${servicePath}`, image: `${siteUrl}${image}`, provider: { "@id": `${siteUrl}/#entreprise`, name: businessName }, areaServed: ["Nicolet", "Bécancour", "Trois-Rivières", "Centre-du-Québec"] }, { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl }, { "@type": "ListItem", position: 2, name: eyebrow, item: `${siteUrl}${servicePath}` }] }] : [];
  if (faqs?.length) graph.push({ "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) });
  const structuredData = graph.length ? { "@context": "https://schema.org", "@graph": graph } : null;
  return <main><SiteHeader />
    {structuredData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />}
    <section className="detail-hero detail-hero-photo shell"><div className="detail-hero-copy"><div className="eyebrow"><span></span>{eyebrow}</div><h1>{title}<br /><em>{accent}</em></h1><p>{intro}</p><div className="hero-actions"><a className="button button-dark" href="tel:+18193802999">Parler à Patrick</a><Link className="text-link" href="/tarifs">Voir les tarifs</Link></div></div><figure className="detail-photo"><img src={image} alt={imageAlt} /></figure></section>
    <section className="detail-body section"><div className="shell detail-grid"><div className="detail-points">{points.map((point, index) => <article key={point.title}><span>0{index + 1}</span><div><h2>{point.title}</h2><p>{point.text}</p></div></article>)}</div><aside><div className="eyebrow"><span></span>Service local</div><h2>{asideTitle}</h2><p>{asideText}</p><div className="trust-box"><div><strong>5,0 ★</strong><span>10 avis Google</span></div><div><strong>40 ans</strong><span>d’expérience</span></div></div></aside></div></section>
    {scenarios?.length && <section className="service-depth section shell"><div className="section-heading"><div><div className="eyebrow"><span></span>Des situations bien réelles</div><h2>Ça vous ressemble?<br /><em>On peut vous aider.</em></h2></div><p>Quelques problèmes fréquents et des réponses concrètes, adaptées à votre situation.</p></div><div className="scenario-grid">{scenarios.map(scenario => <article key={scenario.title}><h3>{scenario.title}</h3><p>{scenario.text}</p></article>)}</div><div className="service-practical"><article><div className="eyebrow"><span></span>Prix indicatif</div><h3>{priceLabel}</h3><p>{priceText}</p></article><article><div className="eyebrow"><span></span>Zone de service</div><h3>Un technicien près de vous</h3><p>{areaText}</p></article><a className="button button-dark" href="tel:+18193802999">Appeler Patrick</a></div></section>}
    {faqs?.length && <section className="service-faq section"><div className="shell"><div className="section-heading"><div><div className="eyebrow"><span></span>Avant de prendre rendez-vous</div><h2>Vos questions.<br /><em>Des réponses claires.</em></h2></div></div><div className="faq-list">{faqs.map(({ question, answer }) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>}
    {servicePath === "/creation-sites-web" && <section className="web-value section"><div className="shell"><div className="web-value-grid"><article className="web-value-local"><div className="eyebrow"><span></span>Une approche différente</div><h2>Un technicien local.<br /><em>Un seul interlocuteur.</em></h2><p>Votre site n’est pas confié à une chaîne d’intermédiaires. Vous échangez directement avec Patrick, de la première discussion jusqu’à la mise en ligne et au suivi.</p><div className="web-value-facts"><span><strong>40 ans</strong>d’expérience informatique</span><span><strong>Local</strong>Nicolet et la région</span><span><strong>Web + TI</strong>un même contact</span><span><strong>Sur mesure</strong>site, boutique et CMS</span></div></article><article className="web-value-included"><div className="eyebrow"><span></span>Inclus dans votre projet</div><h2>Un site prêt à travailler<br /><em>pour votre entreprise.</em></h2><ul><li>Design adapté à votre entreprise</li><li>Affichage téléphone, tablette et ordinateur</li><li>Structure et SEO local</li><li>Mise en ligne et configuration du domaine</li><li>Explications simples pour prendre le site en main</li><li>Accompagnement après la mise en ligne</li></ul><p className="web-value-price">Site vitrine de base <strong>à partir de 900 $</strong></p></article></div></div></section>}
    {showcaseProject && <ProjectShowcase showServiceLink={false} />}
    <section className="related section shell"><div className="eyebrow"><span></span>Vous pourriez aussi chercher</div><div className="related-links">{links.map(link => <Link href={link.href} key={link.href}>{link.label}</Link>)}</div></section>
    <section className="contact section"><div className="shell contact-inner"><div><div className="eyebrow"><span></span>On règle ça ensemble</div><h2>Besoin d’aide?<br /><em>Écrivez-moi ou appelez-moi.</em></h2><p>Expliquez-moi le problème dans vos mots. Je vous dirai clairement ce qu’on peut faire.</p><a className="contact-inline-phone" href="tel:+18193802999">{phone}</a></div><div className="contact-card contact-form-card"><span>Demande rapide</span><form className="contact-mini-form" action="https://formsubmit.co/contact@atelierpotvin.ca" method="POST"><input type="hidden" name="_subject" value="Nouvelle demande — atelierpotvin.ca" /><input type="hidden" name="_template" value="table" /><input type="hidden" name="_next" value="https://atelierpotvin.ca/merci" /><input className="contact-honey" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" /><label>Nom<input type="text" name="name" autoComplete="name" required /></label><label>Téléphone ou courriel<input type="text" name="coordonnees" autoComplete="email" required /></label><label>De quoi avez-vous besoin?<textarea name="message" rows={4} required /></label><button className="button button-lime" type="submit">Envoyer ma demande</button></form><div className="response-note"><span></span>Réponse habituellement dans la journée</div></div></div></section>
    <SiteFooter />
  </main>;
}

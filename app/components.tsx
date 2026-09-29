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
      if (event.key === "ArrowLeft") setOpen((open + envolCmsShots.length - 1) % envolCmsShots.length);
      if (event.key === "ArrowRight") setOpen((open + 1) % envolCmsShots.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.classList.add("cms-lightbox-open");
    return () => { document.removeEventListener("keydown", onKey); document.body.classList.remove("cms-lightbox-open"); };
  }, [open]);

  return <EnvolCmsGallery /><div className="portfolio-tags"><span>Design sur mesure</span><span>Adapté au mobile</span><span>Image de marque</span></div><a className="button button-dark" href="https://f85220e0.bois-morphee-redesign.pages.dev/" target="_blank" rel="noopener noreferrer">Voir la maquette en ligne <span className="gold-arrow">→</span></a>{showServiceLink && <Link className="portfolio-service-link" href="/creation-sites-web">Découvrir la création de sites <span className="gold-arrow">→</span></Link>}</div></article><article className="portfolio-project portfolio-project-envol"><a className="portfolio-image portfolio-image-cover" href="https://envoldesenfants.com/" target="_blank" rel="noopener noreferrer" aria-label="Visiter L’Envol des Enfants, nouvelle fenêtre"><img src="/projet-envol-enfants.png" alt="Capture du site e-commerce L’Envol des Enfants" loading="lazy" decoding="async" /></a><div className="portfolio-copy"><div className="eyebrow"><span></span>Projet client · Boutique en ligne</div><h3>L’Envol des Enfants</h3><p>Boutique e-commerce bilingue avec une administration développée autour des opérations réelles de la boutique — pas un simple thème installé.</p><div className="portfolio-proof"><strong>Ce qui a été développé sur mesure</strong><ul><li>CMS et gestion du catalogue</li><li>Gestion multi-images des produits</li><li>Visibilité des produits par boutique</li><li>Outils d’analyse et de gestion par lot</li><li>Interface publique bilingue FR / EN</li></ul></div><div className="envol-cms-showcase"><figure className="envol-cms-main"><img src="/envol-cms/dashboard.png" alt="Tableau de bord du CMS L’Envol des Enfants" loading="lazy" decoding="async" /><figcaption>Tableau de bord — produits, commandes, abonnés et alertes de stock</figcaption></figure><div className="envol-cms-grid"><figure><img src="/envol-cms/produits.png" alt="Gestion du catalogue et analyse IA des produits" loading="lazy" decoding="async" /><figcaption>Catalogue, recherche par image et actions en lot</figcaption></figure><figure><img src="/envol-cms/notifications.png" alt="Contrôle qualité du catalogue assisté par IA" loading="lazy" decoding="async" /><figcaption>Contrôle du catalogue et corrections assistées par IA</figcaption></figure><figure><img src="/envol-cms/editeur-site.png" alt="Éditeur des sections de la boutique" loading="lazy" decoding="async" /><figcaption>Éditeur de boutique et visibilité des sections</figcaption></figure><figure><img src="/envol-cms/conseiller-ia.png" alt="Conseiller IA pour l’audit des prix" loading="lazy" decoding="async" /><figcaption>Conseiller IA et audit des prix</figcaption></figure></div></div><div className="portfolio-tags"><span>E-commerce</span><span>CMS sur mesure</span><span>Gestion de catalogue</span><span>FR / EN</span></div><a className="button button-dark" href="https://envoldesenfants.com/" target="_blank" rel="noopener noreferrer">Voir le site en ligne <span className="gold-arrow">→</span></a>{showServiceLink && <Link className="portfolio-service-link" href="/creation-sites-web">Découvrir la création de sites <span className="gold-arrow">→</span></Link>}</div></article><div className="web-offers"><article><span>01</span><h3>Une identité qui vous ressemble</h3><p>Votre métier, vos couleurs et vos réalisations mis en valeur dans un design unique.</p></article><article><span>02</span><h3>Visible dans votre région</h3><p>Des pages claires et bien structurées pour aider vos futurs clients à vous trouver.</p></article><article><span>03</span><h3>Prêt sur tous les écrans</h3><p>Un site rapide et agréable à consulter sur téléphone, tablette et ordinateur.</p></article><article><span>04</span><h3>Accompagné du début à la fin</h3><p>Conception, mise en ligne et explications simples, avec un seul interlocuteur.</p></article></div></div></section>;
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
    <section className="detail-hero detail-hero-photo shell"><div className="detail-hero-copy"><div className="eyebrow"><span></span>{eyebrow}</div><h1>{title}<br /><em>{accent}</em></h1><p>{intro}</p><div className="hero-actions"><a className="button button-dark" href="tel:+18193802999">Parler à Patrick <span className="gold-arrow">→</span></a><Link className="text-link" href="/tarifs">Voir les tarifs <span className="gold-arrow">→</span></Link></div></div><figure className="detail-photo"><img src={image} alt={imageAlt} /></figure></section>
    <section className="detail-body section"><div className="shell detail-grid"><div className="detail-points">{points.map((point, index) => <article key={point.title}><span>0{index + 1}</span><div><h2>{point.title}</h2><p>{point.text}</p></div></article>)}</div><aside><div className="eyebrow"><span></span>Service local</div><h2>{asideTitle}</h2><p>{asideText}</p><div className="trust-box"><div><strong>5,0 ★</strong><span>10 avis Google</span></div><div><strong>40 ans</strong><span>d’expérience</span></div></div></aside></div></section>
    {scenarios?.length && <section className="service-depth section shell"><div className="section-heading"><div><div className="eyebrow"><span></span>Des situations bien réelles</div><h2>Ça vous ressemble?<br /><em>On peut vous aider.</em></h2></div><p>Quelques problèmes fréquents et des réponses concrètes, adaptées à votre situation.</p></div><div className="scenario-grid">{scenarios.map(scenario => <article key={scenario.title}><h3>{scenario.title}</h3><p>{scenario.text}</p></article>)}</div><div className="service-practical"><article><div className="eyebrow"><span></span>Prix indicatif</div><h3>{priceLabel}</h3><p>{priceText}</p></article><article><div className="eyebrow"><span></span>Zone de service</div><h3>Un technicien près de vous</h3><p>{areaText}</p></article><a className="button button-dark" href="tel:+18193802999">Appeler Patrick <span className="gold-arrow">→</span></a></div></section>}
    {faqs?.length && <section className="service-faq section"><div className="shell"><div className="section-heading"><div><div className="eyebrow"><span></span>Avant de prendre rendez-vous</div><h2>Vos questions.<br /><em>Des réponses claires.</em></h2></div></div><div className="faq-list">{faqs.map(({ question, answer }) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>}
    {showcaseProject && <ProjectShowcase showServiceLink={false} />}
    <section className="related section shell"><div className="eyebrow"><span></span>Vous pourriez aussi chercher</div><div className="related-links">{links.map(link => <Link href={link.href} key={link.href}>{link.label}<span className="gold-arrow">→</span></Link>)}</div></section>
    <section className="contact section"><div className="shell contact-inner"><div><div className="eyebrow"><span></span>On règle ça ensemble</div><h2>Besoin d’aide?<br /><em>Appelez-moi.</em></h2><p>Expliquez-moi le problème dans vos mots. Je vous dirai clairement ce qu’on peut faire.</p></div><div className="contact-card"><span>Joignez-moi directement</span><a className="big-phone" href="tel:+18193802999">{phone}</a><p>462, rue D. N. St-Cyr<br />Nicolet (Québec) J3T 1H3</p><div className="response-note"><span></span>Réponse habituellement dans la journée</div><a className="button button-lime" href="tel:+18193802999">Appeler maintenant <span className="gold-arrow">→</span></a></div></div></section>
    <SiteFooter />
  </main>;
}

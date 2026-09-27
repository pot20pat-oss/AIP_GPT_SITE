import Link from "next/link";
import { businessAddress, businessName, googleBusinessUrl, jsonLd, siteUrl } from "./seo";

export const phone = "819 380-2999";

export function SiteHeader() {
  return <>
    <div className="announcement">Service local à Nicolet, Bécancour et Trois-Rivières <span>·</span> Réponse habituellement dans la journée</div>
    <header className="header shell">
      <Link className="brand" href="/" aria-label="Atelier Informatique Potvin, accueil"><img className="brand-logo" src="/logo-aip-glow.png" alt="Logo Atelier Informatique Potvin" width="71" height="61" /><span className="brand-name">Atelier informatique<span>Potvin</span></span></Link>
      <nav aria-label="Navigation principale"><Link href="/depannage-informatique-nicolet">Dépannage</Link><Link href="/suppression-virus">Virus</Link><Link href="/creation-sites-web">Sites web</Link><Link href="/tarifs">Tarifs</Link><Link href="/faq">FAQ</Link></nav>
      <a className="header-phone" href="tel:+18193802999">{phone} <span>↗</span></a>
    </header>
  </>;
}

export function SiteFooter() {
  return <><nav className="footer-service-links shell" aria-label="Services informatiques à Nicolet"><Link href="/reparation-ordinateur-nicolet">Réparation ordinateur Nicolet</Link><Link href="/depannage-informatique-becancour">Dépannage Bécancour</Link><Link href="/depannage-informatique-trois-rivieres">Dépannage Trois-Rivières</Link><Link href="/suppression-virus">Suppression de virus</Link><Link href="/assistance-informatique-a-distance">Assistance à distance</Link><Link href="/installation-ordinateur-transfert-donnees">Installation et transfert</Link><Link href="/configuration-wifi-sauvegarde">Wi-Fi et sauvegardes</Link><Link href="/creation-sites-web">Création de sites web</Link></nav><div className="footer-nap shell"><strong>{businessName}</strong><span>{businessAddress}</span><a href="tel:+18193802999">{phone}</a><a href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">Nous trouver sur Google Maps ↗</a></div><footer className="footer shell"><Link className="brand" href="/"><img className="brand-logo" src="/logo-aip-glow.png" alt="Logo Atelier Informatique Potvin" width="71" height="61" /><span className="brand-name">Atelier informatique<span>Potvin</span></span></Link><p>© 2026 Atelier Informatique Potvin · Nicolet, Québec</p><a href="tel:+18193802999">{phone}</a></footer></>;
}

export function LocalServiceArea() {
  return <section className="local-area section shell"><div className="section-heading"><div><div className="eyebrow"><span></span>Votre technicien dans la région</div><h2>Tout près de chez vous.<br /><em>Partout où ça compte.</em></h2></div><p>Dépannage informatique, réparation d’ordinateurs et création de sites web pour les particuliers et les entreprises du Centre-du-Québec.</p></div><div className="local-area-grid"><article><h3>Informatique à Nicolet</h3><p>Technicien local pour réparer votre ordinateur, supprimer les virus, configurer Windows ou créer le site web de votre entreprise.</p><Link href="/reparation-ordinateur-nicolet">Réparation à Nicolet <span>→</span></Link></article><article><h3>Dépannage à Bécancour</h3><p>Assistance informatique à domicile ou à distance pour les problèmes de PC, de courriel, d’imprimante et de réseau Wi-Fi.</p><Link href="/depannage-informatique-becancour">Dépannage à Bécancour <span>→</span></Link></article><article><h3>Trois-Rivières et environs</h3><p>Services informatiques dans un rayon d’environ 50 km, incluant Trois-Rivières, Saint-Célestin et les municipalités voisines.</p><Link href="/depannage-informatique-trois-rivieres">Dépannage à Trois-Rivières <span>→</span></Link></article></div></section>;
}

export function ProjectShowcase({ showServiceLink = true }: { showServiceLink?: boolean }) {
  return <section className="portfolio section" id="realisations"><div className="shell"><div className="section-heading"><div><div className="eyebrow"><span></span>Une vraie réalisation, en ligne</div><h2>Pas juste des promesses.<br /><em>Un site à visiter.</em></h2></div><p>Un exemple concret de présence web sur mesure, pensé pour mettre en valeur le savoir-faire d’une entreprise d’ici.</p></div><article className="portfolio-project"><a className="portfolio-image" href="https://f85220e0.bois-morphee-redesign.pages.dev/" target="_blank" rel="noopener noreferrer" aria-label="Visiter le site Les Bois Morphée, nouvelle fenêtre"><img src="/projet-bois-morphee.webp" alt="Capture réelle du site Les Bois Morphée : logo, atelier d’ébénisterie et artisan Roger" loading="lazy" /></a><div className="portfolio-copy"><div className="eyebrow"><span></span>Projet client · Ébénisterie d’art</div><h3>Les Bois Morphée</h3><p>Un site vitrine chaleureux qui présente l’artisan, son atelier et ses créations : artisanat funéraire, trophées et ébénisterie sur mesure.</p><div className="portfolio-tags"><span>Design sur mesure</span><span>Adapté au mobile</span><span>Image de marque</span></div><a className="button button-dark" href="https://f85220e0.bois-morphee-redesign.pages.dev/" target="_blank" rel="noopener noreferrer">Voir le site en ligne <span>↗</span></a>{showServiceLink && <Link className="portfolio-service-link" href="/creation-sites-web">Découvrir la création de sites <span>→</span></Link>}</div></article><article className="portfolio-project"><a className="portfolio-image" href="https://envoldesenfants.com/" target="_blank" rel="noopener noreferrer" aria-label="Visiter L’Envol des Enfants, nouvelle fenêtre"><img src="/projet-envol-enfants.png" alt="Capture du site e-commerce L’Envol des Enfants" loading="lazy" /></a><div className="portfolio-copy"><div className="eyebrow"><span></span>Projet client · Boutique en ligne</div><h3>L’Envol des Enfants</h3><p>Boutique e-commerce bilingue avec catalogue de produits, gestion de contenu et outils d’administration conçus sur mesure.</p><div className="portfolio-tags"><span>E-commerce</span><span>CMS sur mesure</span><span>FR / EN</span></div><a className="button button-dark" href="https://envoldesenfants.com/" target="_blank" rel="noopener noreferrer">Voir le site en ligne <span>↗</span></a>{showServiceLink && <Link className="portfolio-service-link" href="/creation-sites-web">Découvrir la création de sites <span>→</span></Link>}</div></article><div className="web-offers"><article><span>01</span><h3>Une identité qui vous ressemble</h3><p>Votre métier, vos couleurs et vos réalisations mis en valeur dans un design unique.</p></article><article><span>02</span><h3>Visible dans votre région</h3><p>Des pages claires et bien structurées pour aider vos futurs clients à vous trouver.</p></article><article><span>03</span><h3>Prêt sur tous les écrans</h3><p>Un site rapide et agréable à consulter sur téléphone, tablette et ordinateur.</p></article><article><span>04</span><h3>Accompagné du début à la fin</h3><p>Conception, mise en ligne et explications simples, avec un seul interlocuteur.</p></article></div></div></section>;
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
    <section className="detail-hero detail-hero-photo shell"><div className="detail-hero-copy"><div className="eyebrow"><span></span>{eyebrow}</div><h1>{title}<br /><em>{accent}</em></h1><p>{intro}</p><div className="hero-actions"><a className="button button-dark" href="tel:+18193802999">Parler à Patrick <span>↗</span></a><Link className="text-link" href="/tarifs">Voir les tarifs <span>→</span></Link></div></div><figure className="detail-photo"><img src={image} alt={imageAlt} /></figure></section>
    <section className="detail-body section"><div className="shell detail-grid"><div className="detail-points">{points.map((point, index) => <article key={point.title}><span>0{index + 1}</span><div><h2>{point.title}</h2><p>{point.text}</p></div></article>)}</div><aside><div className="eyebrow"><span></span>Service local</div><h2>{asideTitle}</h2><p>{asideText}</p><div className="trust-box"><strong>5,0 ★</strong><span>10 avis Google</span><strong>40 ans</strong><span>d’expérience</span></div></aside></div></section>
    {scenarios?.length && <section className="service-depth section shell"><div className="section-heading"><div><div className="eyebrow"><span></span>Des situations bien réelles</div><h2>Ça vous ressemble?<br /><em>On peut vous aider.</em></h2></div><p>Quelques problèmes fréquents et des réponses concrètes, adaptées à votre situation.</p></div><div className="scenario-grid">{scenarios.map(scenario => <article key={scenario.title}><h3>{scenario.title}</h3><p>{scenario.text}</p></article>)}</div><div className="service-practical"><article><div className="eyebrow"><span></span>Prix indicatif</div><h3>{priceLabel}</h3><p>{priceText}</p></article><article><div className="eyebrow"><span></span>Zone de service</div><h3>Un technicien près de vous</h3><p>{areaText}</p></article><a className="button button-dark" href="tel:+18193802999">Appeler Patrick <span>↗</span></a></div></section>}
    {faqs?.length && <section className="service-faq section"><div className="shell"><div className="section-heading"><div><div className="eyebrow"><span></span>Avant de prendre rendez-vous</div><h2>Vos questions.<br /><em>Des réponses claires.</em></h2></div></div><div className="faq-list">{faqs.map(({ question, answer }) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>}
    {showcaseProject && <ProjectShowcase showServiceLink={false} />}
    <section className="related section shell"><div className="eyebrow"><span></span>Vous pourriez aussi chercher</div><div className="related-links">{links.map(link => <Link href={link.href} key={link.href}>{link.label}<span>→</span></Link>)}</div></section>
    <section className="contact section"><div className="shell contact-inner"><div><div className="eyebrow"><span></span>On règle ça ensemble</div><h2>Besoin d’aide?<br /><em>Appelez-moi.</em></h2><p>Expliquez-moi le problème dans vos mots. Je vous dirai clairement ce qu’on peut faire.</p></div><div className="contact-card"><span>Joignez-moi directement</span><a className="big-phone" href="tel:+18193802999">{phone}</a><p>462, rue D. N. St-Cyr<br />Nicolet (Québec) J3T 1H3</p><div className="response-note"><span></span>Réponse habituellement dans la journée</div><a className="button button-lime" href="tel:+18193802999">Appeler maintenant <span>↗</span></a></div></div></section>
    <SiteFooter />
  </main>;
}

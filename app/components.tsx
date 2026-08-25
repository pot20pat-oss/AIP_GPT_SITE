import Link from "next/link";

export const phone = "819 380-2999";

export function SiteHeader() {
  return <>
    <div className="announcement">Service local à Nicolet, Bécancour et Trois-Rivières <span>·</span> Assistance à domicile ou à distance</div>
    <header className="header shell">
      <Link className="brand" href="/" aria-label="Atelier Informatique Potvin, accueil"><img className="brand-logo" src="/logo-aip.png" alt="Logo Atelier Informatique Potvin" width="71" height="61" /><span className="brand-name">Atelier informatique<span>Potvin</span></span></Link>
      <nav aria-label="Navigation principale"><Link href="/depannage-informatique-nicolet">Dépannage</Link><Link href="/suppression-virus">Virus</Link><Link href="/creation-sites-web">Sites web</Link><Link href="/tarifs">Tarifs</Link><Link href="/faq">FAQ</Link></nav>
      <a className="header-phone" href="tel:+18193802999">{phone} <span>↗</span></a>
    </header>
  </>;
}

export function SiteFooter() {
  return <footer className="footer shell"><Link className="brand" href="/"><img className="brand-logo" src="/logo-aip.png" alt="Logo Atelier Informatique Potvin" width="71" height="61" /><span className="brand-name">Atelier informatique<span>Potvin</span></span></Link><p>© 2026 Atelier Informatique Potvin · Nicolet, Québec</p><a href="tel:+18193802999">{phone}</a></footer>;
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
};

export function DetailPage({ eyebrow, title, accent, intro, points, asideTitle, asideText, links, image, imageAlt }: DetailProps) {
  return <main><SiteHeader />
    <section className="detail-hero detail-hero-photo shell"><div className="detail-hero-copy"><div className="eyebrow"><span></span>{eyebrow}</div><h1>{title}<br /><em>{accent}</em></h1><p>{intro}</p><div className="hero-actions"><a className="button button-dark" href="tel:+18193802999">Parler à Patrick <span>↗</span></a><Link className="text-link" href="/tarifs">Voir les tarifs <span>→</span></Link></div></div><figure className="detail-photo"><img src={image} alt={imageAlt} /></figure></section>
    <section className="detail-body section"><div className="shell detail-grid"><div className="detail-points">{points.map((point, index) => <article key={point.title}><span>0{index + 1}</span><div><h2>{point.title}</h2><p>{point.text}</p></div></article>)}</div><aside><div className="eyebrow"><span></span>Service local</div><h2>{asideTitle}</h2><p>{asideText}</p><div className="trust-box"><strong>5,0 ★</strong><span>10 avis Google</span><strong>40 ans</strong><span>d’expérience</span></div></aside></div></section>
    <section className="related section shell"><div className="eyebrow"><span></span>Vous pourriez aussi chercher</div><div className="related-links">{links.map(link => <Link href={link.href} key={link.href}>{link.label}<span>→</span></Link>)}</div></section>
    <section className="contact section"><div className="shell contact-inner"><div><div className="eyebrow"><span></span>On règle ça ensemble</div><h2>Besoin d’aide?<br /><em>Appelez-moi.</em></h2><p>Expliquez-moi le problème dans vos mots. Je vous dirai clairement ce qu’on peut faire.</p></div><div className="contact-card"><span>Joignez-moi directement</span><a className="big-phone" href="tel:+18193802999">{phone}</a><p>462, rue D. N. St-Cyr<br />Nicolet (Québec) J3T 1H3</p><a className="button button-lime" href="tel:+18193802999">Appeler maintenant <span>↗</span></a></div></div></section>
    <SiteFooter />
  </main>;
}

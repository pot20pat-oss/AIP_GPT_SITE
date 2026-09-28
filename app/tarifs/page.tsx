import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Tarifs création de sites web et informatique | Nicolet",
  description: "Tarifs Atelier Informatique Potvin : site vitrine de base dès 900 $, projets web sur mesure selon les besoins, diagnostic et service informatique à 60 $.",
  path: "/tarifs",
  image: "/projet-bois-morphee.webp",
});

const itPrices = [
  { name: "Diagnostic", price: "60 $", text: "Évaluation complète et soumission claire. Le diagnostic est crédité si vous faites effectuer la réparation." },
  { name: "Service informatique", price: "60 $ / h", text: "Réparation, optimisation, configuration, installation et assistance à distance." },
];

const webPackages = [
  { name: "Site vitrine de base", price: "Dès 900 $", text: "Une présence web professionnelle simple pour présenter clairement votre entreprise.", includes: ["Site vitrine essentiel", "Design adapté à votre entreprise", "Version mobile", "Coordonnées et appels à l’action", "SEO local de base", "Mise en ligne"] },
  { name: "Projet sur mesure", price: "Sur estimation", text: "Le prix évolue selon les besoins réels du projet.", includes: ["Pages et contenu supplémentaires", "Design et fonctionnalités sur mesure", "E-commerce ou catalogue", "CMS / administration personnalisée", "Automatisations et intégrations", "Accompagnement selon le projet"] },
];

export default function Page() {
  return <main><SiteHeader />
    <section className="detail-hero detail-hero-photo shell">
      <div className="detail-hero-copy"><div className="eyebrow"><span></span>Tarifs transparents</div><h1>Un ordre de grandeur.<br /><em>Sans surprise.</em></h1><p>Des prix de départ pour vous aider à planifier. Le montant exact est confirmé avant le début des travaux selon votre besoin et la portée du projet.</p></div>
      <figure className="detail-photo"><img src="/projet-bois-morphee.webp" alt="Exemple de site web professionnel réalisé par Atelier Informatique Potvin" /></figure>
    </section>
    <section className="section shell pricing-page">
      <div className="pricing-group pricing-group-web">
        <div className="pricing-group-heading"><span>02</span><div><h2>Forfaits création Web</h2><p>Un site vitrine de base commence à 900 $. Le prix évolue ensuite selon la portée et les besoins réels de votre projet.</p></div></div>
        <div className="web-package-grid">{webPackages.map((p, index) => <article className="web-package-card" key={p.name}><div className="web-package-top"><span>0{index + 1}</span><div><h3>{p.name}</h3><strong>{p.price}</strong></div></div><p>{p.text}</p><ul>{p.includes.map(item => <li key={item}>{item}</li>)}</ul><a href="tel:+18193802999">Discuter du projet <span className="cta-arrow">→</span></a></article>)}</div>
        <p className="package-note">Les forfaits servent de repère. Le nombre de pages, le contenu, les intégrations et les fonctions particulières peuvent modifier le prix final.</p>
      </div>
      <div className="pricing-group">
        <div className="pricing-group-heading"><span>01</span><div><h2>Services informatiques</h2><p>Des tarifs simples pour le dépannage et l’accompagnement informatique.</p></div></div>
        <div className="pricing-grid pricing-grid-two">{itPrices.map(p => <article className="price-card" key={p.name}><span>{p.name}</span><strong>{p.price}</strong><p>{p.text}</p></article>)}</div>
      </div>
      <div className="price-note"><h2>Vous ne savez pas quel forfait choisir?</h2><p>Décrivez-moi votre entreprise et ce que vous voulez accomplir. Je vous dirai quelle portée de projet correspond le mieux à votre besoin avant de préparer une soumission.</p><a className="button button-dark" href="tel:+18193802999">819 380-2999 <span className="cta-arrow">↗</span></a></div>
    </section>
    <SiteFooter />
  </main>;
}

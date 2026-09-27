import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Tarifs informatique et création de sites web | Nicolet",
  description: "Tarifs Atelier Informatique Potvin : diagnostic et service informatique à 60 $, sites web dès 2 500 $, forfaits professionnels, e-commerce et CMS sur mesure.",
  path: "/tarifs",
  image: "/projet-bois-morphee.webp",
});

const itPrices = [
  { name: "Diagnostic", price: "60 $", text: "Évaluation complète et soumission claire. Le diagnostic est crédité si vous faites effectuer la réparation." },
  { name: "Service informatique", price: "60 $ / h", text: "Réparation, optimisation, configuration, installation et assistance à distance." },
];

const webPackages = [
  { name: "Présence essentielle", price: "Dès 2 500 $", text: "Pour une petite entreprise qui veut une présence professionnelle claire.", includes: ["Site vitrine jusqu’à 5 pages", "Design adapté à votre entreprise", "Version mobile", "Formulaire et coordonnées", "SEO local de base", "Mise en ligne"] },
  { name: "Site professionnel", price: "Dès 4 500 $", text: "Pour une entreprise qui veut mieux présenter ses services et générer des demandes.", includes: ["Structure et design sur mesure", "Pages de services détaillées", "SEO local renforcé", "Portfolio ou réalisations", "Contenu et appels à l’action", "Suivi analytique"] },
  { name: "Site signature", price: "Dès 6 500 $", text: "Pour une présence web plus complète avec contenu, stratégie et image de marque.", includes: ["Conception visuelle poussée", "Architecture de contenu", "Visuels personnalisés", "Réalisations et preuves sociales", "SEO technique et local", "Accompagnement complet"] },
  { name: "Commerce / CMS / outil web", price: "Dès 8 000 $", text: "Pour vendre, administrer un catalogue ou automatiser des opérations.", includes: ["E-commerce ou catalogue", "CMS / administration sur mesure", "Gestion de produits et contenu", "Fonctionnalités métier", "Automatisations selon le projet", "Formation à l’utilisation"] },
];

export default function Page() {
  return <main><SiteHeader />
    <section className="detail-hero detail-hero-photo shell">
      <div className="detail-hero-copy"><div className="eyebrow"><span></span>Tarifs transparents</div><h1>Un ordre de grandeur.<br /><em>Sans surprise.</em></h1><p>Des prix de départ pour vous aider à planifier. Le montant exact est confirmé avant le début des travaux selon votre besoin et la portée du projet.</p></div>
      <figure className="detail-photo"><img src="/projet-bois-morphee.webp" alt="Exemple de site web professionnel réalisé par Atelier Informatique Potvin" /></figure>
    </section>
    <section className="section shell pricing-page">
      <div className="pricing-group">
        <div className="pricing-group-heading"><span>01</span><div><h2>Services informatiques</h2><p>Des tarifs simples pour le dépannage et l’accompagnement informatique.</p></div></div>
        <div className="pricing-grid pricing-grid-two">{itPrices.map(p => <article className="price-card" key={p.name}><span>{p.name}</span><strong>{p.price}</strong><p>{p.text}</p></article>)}</div>
      </div>
      <div className="pricing-group pricing-group-web">
        <div className="pricing-group-heading"><span>02</span><div><h2>Forfaits création Web</h2><p>Des points de départ concrets pour comparer la portée d’un projet. Chaque forfait est ajusté à votre entreprise.</p></div></div>
        <div className="web-package-grid">{webPackages.map((p, index) => <article className="web-package-card" key={p.name}><div className="web-package-top"><span>0{index + 1}</span><div><h3>{p.name}</h3><strong>{p.price}</strong></div></div><p>{p.text}</p><ul>{p.includes.map(item => <li key={item}>{item}</li>)}</ul><a href="tel:+18193802999">Discuter du projet <span>→</span></a></article>)}</div>
        <p className="package-note">Les forfaits servent de repère. Le nombre de pages, le contenu, les intégrations et les fonctions particulières peuvent modifier le prix final.</p>
      </div>
      <div className="price-note"><h2>Vous ne savez pas quel forfait choisir?</h2><p>Décrivez-moi votre entreprise et ce que vous voulez accomplir. Je vous dirai quelle portée de projet correspond le mieux à votre besoin avant de préparer une soumission.</p><a className="button button-dark" href="tel:+18193802999">819 380-2999 <span>↗</span></a></div>
    </section>
    <SiteFooter />
  </main>;
}

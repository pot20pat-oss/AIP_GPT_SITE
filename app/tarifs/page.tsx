import type { Metadata } from "next";
import { headers } from "next/headers";
import { SiteFooter, SiteHeader } from "../components";
import { siteUrl, webSiteUrl } from "../seo";

async function isCreationDomain() {
  const requestHeaders = await headers();
  const host = (requestHeaders.get("host") || "").split(":")[0].toLowerCase();
  return host === "creationatelierpotvin.ca" || host === "www.creationatelierpotvin.ca";
}

export async function generateMetadata(): Promise<Metadata> {
  const web = await isCreationDomain();
  const title = web ? "Tarifs création de sites Web | AIP Création Web" : "Tarifs dépannage informatique | Atelier Informatique Potvin";
  const description = web ? "Tarifs de création Web : site vitrine dès 900 $ et projets sur mesure selon les besoins." : "Tarifs informatiques AIP : diagnostic 60 $ et service informatique 60 $/h à Nicolet et dans les environs.";
  const base = web ? webSiteUrl : siteUrl;
  return { title, description, alternates: { canonical: `${base}/tarifs` }, openGraph: { title, description, url: `${base}/tarifs`, type: "website", locale: "fr_CA" } };
}

const itPrices = [
  { name: "Diagnostic", price: "60 $", text: "Évaluation complète et soumission claire. Le diagnostic est crédité si vous faites effectuer la réparation." },
  { name: "Service informatique", price: "60 $ / h", text: "Réparation, optimisation, configuration, installation et assistance à distance." },
];

const webPackages = [
  { name: "Site vitrine de base", price: "Dès 900 $", text: "Une présence web professionnelle simple pour présenter clairement votre entreprise.", includes: ["Site vitrine essentiel", "Design adapté à votre entreprise", "Version mobile", "Coordonnées et appels à l’action", "SEO local de base", "Mise en ligne"] },
  { name: "Projet sur mesure", price: "Sur estimation", text: "Le prix évolue selon les besoins réels du projet.", includes: ["Pages et contenu supplémentaires", "Design et fonctionnalités sur mesure", "E-commerce ou catalogue", "Gestion personnalisée", "Automatisations et intégrations", "Accompagnement selon le projet"] },
];

export default async function Page() {
  const web = await isCreationDomain();

  return <main><SiteHeader />
    <section className="detail-hero detail-hero-photo shell">
      <div className="detail-hero-copy"><div className="eyebrow"><span></span>{web ? "Tarifs création Web" : "Tarifs informatiques"}</div><h1>{web ? <>Un site adapté.<br /><em>Un prix expliqué clairement.</em></> : <>Des tarifs simples.<br /><em>Sans surprise.</em></>}</h1><p>{web ? "Un site vitrine de base commence à 900 $. Le montant évolue ensuite selon les pages, le contenu et les fonctions réellement nécessaires." : "Diagnostic, dépannage, configuration et assistance à distance : le prix est expliqué avant d’aller plus loin."}</p></div>
      <figure className="detail-photo"><img src={web ? "/projet-bois-morphee.webp" : "/aip-travail-03.webp"} alt={web ? "Exemple de création Web AIP" : "Dépannage informatique AIP"} /></figure>
    </section>

    <section className="section shell pricing-page">
      {web ? <div className="pricing-group pricing-group-web">
        <div className="pricing-group-heading"><span>01</span><div><h2>Création de sites Web</h2><p>Une base accessible, puis une estimation adaptée à la portée réelle du projet.</p></div></div>
        <div className="web-package-grid">{webPackages.map((p, index) => <article className="web-package-card" key={p.name}><div className="web-package-top"><span>0{index + 1}</span><div><h3>{p.name}</h3><strong>{p.price}</strong></div></div><p>{p.text}</p><ul>{p.includes.map(item => <li key={item}>{item}</li>)}</ul><a href="tel:+18193802999">Discuter du projet</a></article>)}</div>
        <p className="package-note">Les forfaits servent de repère. Le nombre de pages, le contenu, les intégrations et les fonctions particulières peuvent modifier le prix final.</p>
      </div> : <div className="pricing-group">
        <div className="pricing-group-heading"><span>01</span><div><h2>Services informatiques</h2><p>Des tarifs simples pour le dépannage et l’accompagnement informatique.</p></div></div>
        <div className="pricing-grid pricing-grid-two">{itPrices.map(p => <article className="price-card" key={p.name}><span>{p.name}</span><strong>{p.price}</strong><p>{p.text}</p></article>)}</div>
      </div>}
      <div className="price-note"><h2>{web ? "Vous avez un projet en tête?" : "Vous ne savez pas ce qui cloche?"}</h2><p>{web ? "Décrivez-moi votre entreprise et votre objectif. Je vous dirai quelle portée de projet correspond le mieux à votre besoin." : "Expliquez-moi simplement le problème. Je vous dirai quelle intervention est la plus logique avant de commencer."}</p><a className="button button-dark" href="tel:+18193802999">819 380-2999</a></div>
    </section>
    <SiteFooter />
  </main>;
}

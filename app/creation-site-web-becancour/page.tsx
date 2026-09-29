import type { Metadata } from "next";
import { DetailPage } from "../components";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Création de site web à Bécancour | AIP",
  description: "Création de sites web pour entreprises de Bécancour : site vitrine, e-commerce, CMS et solutions sur mesure avec accompagnement local.",
  path: "/creation-site-web-becancour",
  image: "/aip-travail-07.webp",
});

export default function Page() {
  return <DetailPage
    eyebrow="Création de site web · Bécancour"
    image="/aip-travail-07.webp"
    imageAlt="Conception de site web pour une entreprise de Bécancour"
    title="Création de site web à Bécancour."
    accent="Pour présenter votre entreprise clairement."
    intro="AIP accompagne les PME, artisans et travailleurs autonomes de Bécancour qui veulent un site professionnel, rapide et simple à comprendre. Le projet peut aller du site vitrine à la boutique en ligne ou au CMS développé autour de vos besoins."
    points={[
      { title: "Une présence web adaptée à votre marché", text: "Votre site explique vos services, votre secteur d’activité et votre territoire avec des pages utiles aux visiteurs de Bécancour et des municipalités voisines." },
      { title: "Site vitrine professionnel", text: "Une structure claire pour présenter l’entreprise, les services, les réalisations, les coordonnées et les éléments qui rassurent avant une prise de contact." },
      { title: "SEO local sans contenu artificiel", text: "Le référencement repose sur du contenu réel, des pages bien reliées entre elles, une structure technique propre et des informations cohérentes sur votre entreprise." },
      { title: "Boutique en ligne", text: "Catalogue, produits, panier et fonctions de gestion peuvent être adaptés à votre façon de vendre plutôt que forcés dans un modèle générique." },
      { title: "CMS et outils personnalisés", text: "Quand un site standard ne suffit pas, AIP peut développer des interfaces d’administration, automatisations et fonctions propres à vos opérations." },
      { title: "Accompagnement direct depuis Nicolet", text: "Bécancour fait partie du territoire local desservi par AIP. Vous travaillez directement avec la personne qui conçoit et développe votre site." },
    ]}
    asideTitle="Un site utile avant d’être compliqué."
    asideText="Le projet commence par ce que vos clients doivent comprendre et faire. La technologie vient ensuite soutenir ce parcours, sans ajouter des fonctions inutiles."
    links={[
      { href: "/creation-sites-web", label: "Création de sites Web" },
      { href: "/creation-site-web-nicolet", label: "Création Web à Nicolet" },
      { href: "/site-web-pme", label: "Sites Web pour PME" },
      { href: "/creation-boutique-en-ligne", label: "Boutiques en ligne" },
    ]}
    servicePath="/creation-site-web-becancour"
    scenarios={[
      { title: "Vous avez besoin d’une première présence professionnelle", text: "On organise l’essentiel pour que vos clients comprennent votre offre et puissent vous contacter facilement." },
      { title: "Votre ancien site ne fonctionne plus bien sur mobile", text: "On reconstruit une expérience adaptée aux téléphones sans sacrifier la lisibilité sur ordinateur." },
      { title: "Vous voulez vendre ou prendre des demandes en ligne", text: "On choisit les fonctions qui correspondent réellement à votre processus de vente et de suivi." },
    ]}
    priceLabel="Site vitrine à partir de 900 $"
    priceText="Le coût est établi selon la portée réelle du projet : contenu, nombre de pages, fonctions, intégrations et niveau de gestion nécessaire."
    areaText="Service de création Web pour Bécancour et les environs depuis Nicolet. Les rencontres et le suivi peuvent se faire localement ou entièrement à distance."
    faqs={[
      { question: "Desserviez-vous les entreprises de Bécancour?", answer: "Oui. Bécancour fait partie du territoire local desservi par Atelier Informatique Potvin pour la création de sites Web." },
      { question: "Pouvez-vous créer un site pour une PME de services?", answer: "Oui. Les sites vitrines sont conçus pour présenter clairement les services, le territoire, les réalisations et les moyens de contact d’une PME." },
      { question: "Est-ce possible d’ajouter une boutique plus tard?", answer: "Oui, si l’architecture du projet le permet. Les besoins futurs peuvent être prévus dès le départ afin de faciliter l’évolution du site." },
    ]}
  />;
}

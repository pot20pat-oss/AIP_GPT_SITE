import type { Metadata } from "next";
import { DetailPage } from "../components";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({ title: "Création site web Nicolet et Bécancour | PME et artisans", description: "Création de sites web sur mesure à Nicolet et Bécancour. Design professionnel, référencement local et portfolio réel. Site vitrine dès 1 500 $.", path: "/creation-sites-web", image: "/projet-bois-morphee.webp" });

export default function Page() {
  return <DetailPage eyebrow="Création de sites web à Nicolet" image="/service-sites-web.webp" imageAlt="Patrick Potvin présente le site web Les Bois Morphée, créé sur mesure" title="Une présence professionnelle." accent="Conçue pour votre entreprise." intro="Un site vitrine rapide, clair et adapté au téléphone qui présente bien vos services et aide les clients de votre région à vous trouver." points={[
    { title: "Design sur mesure", text: "Une identité visuelle adaptée à votre métier, à vos clients et à ce qui vous distingue réellement." },
    { title: "Référencement local", text: "Des pages structurées autour de vos services et de votre région pour donner à Google un contenu clair à indexer." },
    { title: "Vos réalisations mises en valeur", text: "Photos, services et projets concrets : vos visiteurs voient immédiatement la qualité de votre travail et ce qui vous distingue." },
    { title: "Un site agréable sur téléphone", text: "Navigation claire, textes lisibles et chargement rapide : vos clients consultent votre entreprise facilement, peu importe leur appareil." },
    { title: "Mise en ligne complète", text: "Nom de domaine, hébergement, sécurité et affichage mobile : je m’occupe du passage de l’idée au site fonctionnel." },
    { title: "Un vrai accompagnement local", text: "Vous échangez directement avec Patrick, de la première idée jusqu’à la mise en ligne, sans intermédiaire ni jargon technique." },
  ]} asideTitle="Un site qui travaille pour vous." asideText="Le but n’est pas seulement d’être beau. Votre site doit rassurer, répondre aux questions et transformer les visites en appels ou demandes de soumission." links={[{href:"/tarifs",label:"Tarifs des sites web"},{href:"/depannage-informatique-nicolet",label:"Services informatiques"},{href:"/faq",label:"Questions sur les projets"}]} showcaseProject servicePath="/creation-sites-web" />;
}

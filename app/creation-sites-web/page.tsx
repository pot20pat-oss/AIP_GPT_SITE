import type { Metadata } from "next";
import { DetailPage } from "../components";

export const metadata: Metadata = { title: "Création de sites web pour PME à Nicolet | AIP", description: "Sites web vitrines rapides et professionnels pour entreprises de Nicolet, Bécancour et du Centre-du-Québec. Conception locale dès 1 500 $." };

export default function Page() {
  return <DetailPage eyebrow="Création de sites web à Nicolet" image="/service-sites-web.webp" imageAlt="Patrick Potvin conçoit un site web pour une entreprise du Centre-du-Québec" title="Une présence professionnelle." accent="Conçue pour votre entreprise." intro="Un site vitrine rapide, clair et adapté au téléphone qui présente bien vos services et aide les clients de votre région à vous trouver." points={[
    { title: "Design sur mesure", text: "Une identité visuelle adaptée à votre métier, à vos clients et à ce qui vous distingue réellement." },
    { title: "Référencement local", text: "Des pages structurées autour de vos services et de votre région pour donner à Google un contenu clair à indexer." },
    { title: "Mise en ligne complète", text: "Nom de domaine, hébergement, sécurité et affichage mobile : je m’occupe du passage de l’idée au site fonctionnel." },
  ]} asideTitle="Un site qui travaille pour vous." asideText="Le but n’est pas seulement d’être beau. Votre site doit rassurer, répondre aux questions et transformer les visites en appels ou demandes de soumission." links={[{href:"/tarifs",label:"Tarifs des sites web"},{href:"/depannage-informatique-nicolet",label:"Services informatiques"},{href:"/faq",label:"Questions sur les projets"}]} />;
}

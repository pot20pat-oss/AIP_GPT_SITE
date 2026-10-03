import type { Metadata } from "next";
import { DetailPage } from "../components";
import { webPageMetadata } from "../seo";

export const metadata: Metadata = webPageMetadata({
  title: "Création de site web à Trois-Rivières | AIP",
  description: "Création de sites web pour PME de Trois-Rivières : vitrines, boutiques en ligne, CMS et développement sur mesure par AIP.",
  path: "/creation-site-web-trois-rivieres",
  image: "/aip-travail-13.webp",
});

export default function Page() {
  return <DetailPage
    eyebrow="Création de site web · Trois-Rivières"
    image="/aip-travail-13.webp"
    imageAlt="Création de site web professionnel pour une PME de Trois-Rivières"
    title="Création de site web à Trois-Rivières."
    accent="Une solution claire et sur mesure."
    intro="Atelier Informatique Potvin conçoit des sites Web pour les PME et travailleurs autonomes de Trois-Rivières qui veulent une présence professionnelle sans passer par une chaîne d’intermédiaires. Design, développement, mise en ligne et suivi sont pris en charge directement."
    points={[
      { title: "Une offre adaptée aux petites entreprises", text: "Le contenu et les fonctions sont définis selon vos services, vos clients et vos objectifs plutôt que selon un forfait rempli d’options inutiles." },
      { title: "Sites vitrines rapides et mobiles", text: "Vos pages restent faciles à consulter sur téléphone, tablette et ordinateur, avec des appels à l’action visibles et un parcours simple." },
      { title: "Structure SEO locale", text: "Les pages sont organisées pour expliquer clairement à Google et aux visiteurs ce que vous faites, où vous le faites et quelles informations sont importantes." },
      { title: "E-commerce selon vos opérations", text: "Une boutique peut inclure catalogue, gestion des produits, contenus bilingues ou autres fonctions selon la réalité de votre entreprise." },
      { title: "Développement de CMS", text: "Pour des besoins plus poussés, AIP développe des outils d’administration et des fonctions sur mesure au lieu de vous limiter à un thème préfabriqué." },
      { title: "Un interlocuteur unique", text: "Vous discutez directement avec Patrick pour le contenu, le design, le développement et les ajustements après la mise en ligne." },
    ]}
    asideTitle="Un projet Web sans couches inutiles."
    asideText="AIP travaille depuis Nicolet avec les entreprises de Trois-Rivières et de la région. Le suivi peut se faire à distance ou localement selon le projet."
    links={[
      { href: "/creation-sites-web", label: "Création de sites Web" },
      { href: "/site-web-pme", label: "Sites Web pour PME" },
      { href: "/creation-boutique-en-ligne", label: "E-commerce" },
      { href: "/developpement-cms-sur-mesure", label: "CMS sur mesure" },
    ]}
    servicePath="/creation-site-web-trois-rivieres"
    scenarios={[
      { title: "Vous voulez remplacer un site vieillissant", text: "On repart de vos contenus utiles et on améliore la structure, le design, le mobile et les appels à l’action." },
      { title: "Votre entreprise dépend encore seulement des réseaux sociaux", text: "Un site vous donne une présence que vous contrôlez et une destination stable pour vos clients et vos campagnes." },
      { title: "Votre projet demande plus qu’un site vitrine", text: "On peut intégrer une boutique, un CMS ou des fonctions spécifiques sans changer d’interlocuteur." },
    ]}
    priceLabel="Site vitrine à partir de 900 $"
    priceText="Une estimation est préparée selon le contenu, le nombre de pages, les intégrations et les fonctionnalités nécessaires à votre entreprise."
    areaText="AIP est basé à Nicolet et réalise des projets Web pour Trois-Rivières et les municipalités environnantes, avec un suivi possible entièrement à distance."
    faqs={[
      { question: "Travaillez-vous avec des entreprises de Trois-Rivières?", answer: "Oui. Trois-Rivières fait partie du territoire desservi par AIP pour les projets de création et de refonte de sites Web." },
      { question: "Est-ce que vous utilisez des thèmes préfabriqués?", answer: "Les projets sont conçus autour des besoins de l’entreprise. Selon le mandat, le design et les fonctions peuvent être développés sur mesure plutôt que dépendre d’un thème générique." },
      { question: "Pouvez-vous gérer le domaine et la mise en ligne?", answer: "Oui. La configuration du domaine et la mise en ligne peuvent faire partie du projet afin d’éviter de multiplier les intervenants." },
    ]}
  />;
}

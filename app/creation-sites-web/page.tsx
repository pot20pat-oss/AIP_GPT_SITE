import type { Metadata } from "next";
import { DetailPage } from "../components";
import { webPageMetadata } from "../seo";

export const metadata: Metadata = webPageMetadata({
  title: "Création et conception de sites web à Nicolet | AIP",
  description: "Créateur et concepteur de sites web à Nicolet : création Web, conception et développement de sites sur mesure pour PME, boutiques en ligne et CMS.",
  path: "/creation-sites-web",
  image: "/aip-travail-13.webp",
});

export default function Page() {
  return <DetailPage
    eyebrow="Création · Conception · Développement Web"
    image="/aip-travail-13.webp"
    imageAlt="Aperçu d’un site web professionnel réalisé sur mesure par Atelier Informatique Potvin"
    title="Création et conception de sites web à Nicolet."
    accent="Un créateur Web local pour les entreprises d’ici."
    intro="Je crée des sites Web professionnels pour les PME de Nicolet et de la région : site vitrine, boutique en ligne ou outil sur mesure. Vous travaillez directement avec Patrick, de la conception jusqu’à la mise en ligne."
    points={[
      { title: "Conception Web professionnelle sur mesure", text: "Un site Web sur mesure avec une identité visuelle adaptée à votre entreprise, à vos clients et à votre marché. Pas de modèle générique : la conception Web est construite autour de vos services et de votre image." },
      { title: "Référencement local", text: "Structure, titres, contenu et pages pensés pour aider Google à comprendre vos services et les secteurs que vous desservez, notamment Nicolet, Bécancour et Trois-Rivières." },
      { title: "Sites vitrines pour PME", text: "Une présence web claire pour présenter votre entreprise, vos services, vos réalisations, vos coordonnées et convertir davantage de visiteurs en appels ou demandes de soumission." },
      { title: "E-commerce et CMS sur mesure", text: "Besoin de vendre en ligne ou de gérer votre contenu? Je peux développer une boutique, un catalogue, une administration personnalisée ou des fonctionnalités adaptées à votre fonctionnement." },
      { title: "Rapide et adapté au mobile", text: "Navigation claire, textes lisibles et affichage conçu pour téléphone, tablette et ordinateur. La performance et l’expérience utilisateur font partie du projet dès le départ." },
      { title: "Une alternative à une agence Web traditionnelle", text: "Vous cherchez une agence Web à Nicolet, mais préférez un contact direct? Chez AIP, vous échangez directement avec Patrick Potvin, sans intermédiaire ni équipe de vente. Un seul interlocuteur pour la conception, le développement Web, la mise en ligne et le suivi." },
    ]}
    asideTitle="Un site Web sur mesure conçu pour générer des contacts."
    asideText="Un bon site ne sert pas seulement à être présent sur Internet. Il doit expliquer rapidement ce que vous faites, rassurer vos futurs clients et leur donner une raison claire de vous contacter."
    links={[
      { href: "/creation-site-web-nicolet", label: "Création Web à Nicolet" },
      { href: "/creation-site-web-becancour", label: "Création Web à Bécancour" },
      { href: "/creation-site-web-trois-rivieres", label: "Création Web à Trois-Rivières" },
      { href: "/site-web-pme", label: "Sites Web pour PME" },
      { href: "/creation-boutique-en-ligne", label: "Boutiques en ligne" },
      { href: "/developpement-cms-sur-mesure", label: "CMS sur mesure" },
    ]}
    showcaseProject
    servicePath="/creation-sites-web"
    scenarios={[
      { title: "Votre entreprise n’a pas encore de site", text: "On bâtit une présence professionnelle qui explique clairement vos services, votre territoire et la meilleure façon de vous joindre." },
      { title: "Votre site actuel ne vous représente plus", text: "On modernise la présentation, le contenu et l’expérience mobile pour mieux refléter la qualité actuelle de votre entreprise." },
      { title: "Vous voulez vendre ou gérer du contenu en ligne", text: "On définit les fonctions réellement nécessaires avant de développer une boutique, un CMS ou un outil web adapté à vos opérations." },
    ]}
    priceLabel="Site vitrine de base à partir de 900 $"
    priceText="Un site vitrine de base débute à 900 $. Le prix varie ensuite selon le nombre de pages, le contenu, les intégrations et les fonctionnalités dont votre entreprise a réellement besoin."
    areaText="Création, conception et développement de sites Web pour les entreprises de Nicolet, Bécancour, Trois-Rivières, Saint-Célestin et des environs. Les projets Web peuvent aussi être réalisés entièrement à distance."
    faqs={[
      { question: "Est-ce que vous êtes une agence Web?", answer: "AIP n’est pas une agence Web traditionnelle. Vous travaillez directement avec Patrick Potvin, à Nicolet, pour la conception, le développement, la mise en ligne et le suivi de votre projet. Cette approche permet de garder un seul interlocuteur du début à la fin." },
      { question: "Combien coûte la création d’un site web?", answer: "Un site vitrine de base débute à 900 $. Le prix varie ensuite selon le nombre de pages, le contenu, les intégrations et les fonctionnalités nécessaires. Une estimation est préparée selon votre projet." },
      { question: "Est-ce que mon site sera visible sur Google?", answer: "Le site est construit avec une structure technique et un contenu adaptés au référencement. Le positionnement dépend ensuite de la concurrence, de la pertinence du contenu et de l’autorité acquise avec le temps." },
      { question: "Travaillez-vous seulement avec des entreprises de Nicolet?", answer: "Non. Je travaille notamment avec des entreprises de Nicolet, Bécancour, Trois-Rivières et des environs, et un projet web peut aussi être réalisé entièrement à distance." },
      { question: "Pouvez-vous créer une boutique en ligne ou un CMS?", answer: "Oui. Selon le projet, je peux réaliser un site e-commerce, un catalogue ou une interface d’administration sur mesure pour gérer vos produits et votre contenu." },
    ]}
  />;
}

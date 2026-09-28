import type { Metadata } from "next";
import { DetailPage } from "../components";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Création de sites web à Nicolet, Bécancour et Trois-Rivières",
  description: "Création de sites web professionnels pour PME et travailleurs autonomes à Nicolet, Bécancour et Trois-Rivières. Sites vitrines, e-commerce et CMS sur mesure.",
  path: "/creation-sites-web",
  image: "/aip-travail-13.webp",
});

export default function Page() {
  return <DetailPage
    eyebrow="Création de sites web · Centre-du-Québec"
    image="/aip-travail-13.webp"
    imageAlt="Aperçu d’un site web professionnel réalisé sur mesure par Atelier Informatique Potvin"
    title="Création de sites web à Nicolet."
    accent="Pour les entreprises d’ici."
    intro="Sites web professionnels pour PME, artisans et travailleurs autonomes de Nicolet, Bécancour, Trois-Rivières et des environs. Site vitrine, boutique en ligne ou CMS sur mesure : chaque projet est conçu pour être clair, rapide et facile à trouver sur Google."
    points={[
      { title: "Design professionnel sur mesure", text: "Une identité visuelle adaptée à votre entreprise, à vos clients et à votre marché. Pas de modèle générique : le site est construit autour de vos services et de votre image." },
      { title: "Référencement local", text: "Structure, titres, contenu et pages pensés pour aider Google à comprendre vos services et les secteurs que vous desservez, notamment Nicolet, Bécancour et Trois-Rivières." },
      { title: "Sites vitrines pour PME", text: "Une présence web claire pour présenter votre entreprise, vos services, vos réalisations, vos coordonnées et convertir davantage de visiteurs en appels ou demandes de soumission." },
      { title: "E-commerce et CMS sur mesure", text: "Besoin de vendre en ligne ou de gérer votre contenu? Je peux développer une boutique, un catalogue, une administration personnalisée ou des fonctionnalités adaptées à votre fonctionnement." },
      { title: "Rapide et adapté au mobile", text: "Navigation claire, textes lisibles et affichage conçu pour téléphone, tablette et ordinateur. La performance et l’expérience utilisateur font partie du projet dès le départ." },
      { title: "Conception et accompagnement local", text: "Vous échangez directement avec Patrick Potvin, à Nicolet, de la première discussion jusqu’à la mise en ligne. Un seul interlocuteur pour la conception, les ajustements et le suivi." },
    ]}
    asideTitle="Un site conçu pour générer des contacts."
    asideText="Un bon site ne sert pas seulement à être présent sur Internet. Il doit expliquer rapidement ce que vous faites, rassurer vos futurs clients et leur donner une raison claire de vous contacter."
    links={[
      { href: "/tarifs", label: "Tarifs de création de sites web" },
      { href: "/depannage-informatique-becancour", label: "Services à Bécancour" },
      { href: "/depannage-informatique-trois-rivieres", label: "Services à Trois-Rivières" },
      { href: "/faq", label: "Questions fréquentes" },
    ]}
    showcaseProject
    servicePath="/creation-sites-web"
    scenarios={[
      { title: "Votre entreprise n’a pas encore de site", text: "On bâtit une présence professionnelle qui explique clairement vos services, votre territoire et la meilleure façon de vous joindre." },
      { title: "Votre site actuel ne vous représente plus", text: "On modernise la présentation, le contenu et l’expérience mobile pour mieux refléter la qualité actuelle de votre entreprise." },
      { title: "Vous voulez vendre ou gérer du contenu en ligne", text: "On définit les fonctions réellement nécessaires avant de développer une boutique, un CMS ou un outil web adapté à vos opérations." },
    ]}
    priceLabel="Sites web à partir de 1 500 $"
    priceText="Le prix dépend de la portée du projet. Site vitrine professionnel dès 1 500 $, avec estimation claire avant le début des travaux."
    areaText="Création de sites web pour les entreprises de Nicolet, Bécancour, Trois-Rivières, Saint-Célestin et des environs. Les projets web peuvent aussi être réalisés entièrement à distance."
    faqs={[
      { question: "Combien coûte la création d’un site web?", answer: "Un site vitrine professionnel débute à 1 500 $. Les projets plus complets, comme un site sur mesure, une boutique en ligne ou un CMS, sont évalués selon les fonctionnalités et le contenu nécessaires." },
      { question: "Est-ce que mon site sera visible sur Google?", answer: "Le site est construit avec une structure technique et un contenu adaptés au référencement. Le positionnement dépend ensuite de la concurrence, de la pertinence du contenu et de l’autorité acquise avec le temps." },
      { question: "Travaillez-vous seulement avec des entreprises de Nicolet?", answer: "Non. Je travaille notamment avec des entreprises de Nicolet, Bécancour, Trois-Rivières et des environs, et un projet web peut aussi être réalisé entièrement à distance." },
      { question: "Pouvez-vous créer une boutique en ligne ou un CMS?", answer: "Oui. Selon le projet, je peux réaliser un site e-commerce, un catalogue ou une interface d’administration sur mesure pour gérer vos produits et votre contenu." },
    ]}
  />;
}

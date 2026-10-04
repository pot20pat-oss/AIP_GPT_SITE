import type { Metadata } from "next";
import { DetailPage } from "../components";
import { webPageMetadata } from "../seo";

export const metadata: Metadata = webPageMetadata({
  title: "Création de site web à Nicolet | AIP",
  description: "Création de sites web à Nicolet pour PME et travailleurs autonomes : site vitrine, boutique en ligne, CMS et accompagnement local.",
  path: "/creation-site-web-nicolet",
  image: "/aip-travail-13.webp",
});

export default function Page() {
  return <DetailPage
    eyebrow="Création de site web · Nicolet"
    image="/aip-travail-13.webp"
    imageAlt="Création de site web à Nicolet par Atelier Informatique Potvin"
    title="Création de site web à Nicolet."
    accent="Un service local, du début à la fin."
    intro="Vous cherchez un créateur de site web à Nicolet qui comprend les réalités d’une petite entreprise locale? Atelier Informatique Potvin conçoit des sites vitrines, boutiques en ligne et outils web sur mesure avec un accompagnement direct, sans intermédiaire."
    points={[
      { title: "Un créateur web réellement à Nicolet", text: "AIP est établi à Nicolet. Vous échangez directement avec Patrick Potvin pour définir le projet, valider le contenu, suivre le développement et préparer la mise en ligne." },
      { title: "Un site pensé pour vos clients locaux", text: "Les services, secteurs desservis, coordonnées et appels à l’action sont structurés pour que les visiteurs comprennent rapidement ce que votre entreprise offre et comment vous joindre." },
      { title: "Référencement local dès la conception", text: "Titres, contenu, structure des pages, liens internes, données techniques et performance sont travaillés pour donner à Google des signaux clairs sur votre activité et votre présence à Nicolet." },
      { title: "Site vitrine pour PME et travailleurs autonomes", text: "Une solution claire pour présenter vos services, vos réalisations, votre territoire, vos tarifs ou vos façons de travailler sans alourdir inutilement le site." },
      { title: "Boutique en ligne et CMS", text: "Pour vendre ou gérer davantage de contenu, le projet peut inclure un catalogue, un panier, une administration personnalisée et des fonctions adaptées à vos opérations." },
      { title: "Un suivi après la mise en ligne", text: "Le projet ne s’arrête pas au déploiement. Vous savez qui appeler pour une modification, une question technique ou l’évolution future du site." },
    ]}
    asideTitle="Votre entreprise est à Nicolet?"
    asideText="Le site est conçu autour de votre offre réelle, de votre clientèle et de votre secteur. L’objectif est d’obtenir une présence web crédible et utile, pas simplement une page de plus sur Internet."
    links={[
      { href: "/creation-sites-web", label: "Tous les services de création Web" },
      { href: "/site-web-pme", label: "Sites Web pour PME" },
      { href: "/creation-boutique-en-ligne", label: "Boutiques en ligne" },
      { href: "/developpement-cms-sur-mesure", label: "CMS sur mesure" },
      { href: "/creation-site-web-saint-celestin", label: "Création Web à Saint-Célestin" },
      { href: "/creation-site-web-centre-du-quebec", label: "Création Web au Centre-du-Québec" },
    ]}
    showcaseProject
    servicePath="/creation-site-web-nicolet"
    scenarios={[
      { title: "Vous lancez une entreprise à Nicolet", text: "On construit une base claire : services, coordonnées, territoire, appels à l’action et contenu qui répond aux questions de vos premiers clients." },
      { title: "Votre entreprise existe, mais votre site est dépassé", text: "On modernise la présentation et l’expérience mobile tout en conservant ce qui représente bien votre entreprise." },
      { title: "Vous voulez être mieux compris par Google", text: "On organise le contenu autour de vos services réels et de votre marché local plutôt que d’empiler des mots-clés sans valeur pour les visiteurs." },
    ]}
    priceLabel="Site vitrine à Nicolet à partir de 900 $"
    priceText="Le tarif dépend du nombre de pages, du contenu, des intégrations et des fonctions nécessaires. Une estimation claire est préparée avant le développement."
    areaText="AIP est établi à Nicolet et dessert aussi Bécancour, Trois-Rivières, Saint-Célestin et les environs. Les projets Web peuvent également être réalisés à distance."
    faqs={[
      { question: "Créez-vous des sites web directement à Nicolet?", answer: "Oui. Atelier Informatique Potvin est établi à Nicolet et accompagne directement les entreprises et travailleurs autonomes de la région pour leurs projets Web." },
      { question: "Combien coûte un site web pour une petite entreprise?", answer: "Un site vitrine de base débute à 900 $. Le prix final dépend surtout du nombre de pages, du contenu, des intégrations et des fonctionnalités nécessaires." },
      { question: "Pouvez-vous moderniser un site existant?", answer: "Oui. Une modernisation peut conserver les éléments utiles de votre présence actuelle tout en améliorant la présentation, la structure, l’affichage mobile et le contenu." },
      { question: "Le référencement local est-il inclus?", answer: "La structure technique, les titres, le contenu, les liens internes et les éléments essentiels au référencement local sont intégrés au projet. Le classement évolue ensuite selon la concurrence et l’autorité du site." },
    ]}
  />;
}

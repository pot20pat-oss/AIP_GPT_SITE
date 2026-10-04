import type { Metadata } from "next";
import { DetailPage } from "../components";
import { webPageMetadata } from "../seo";

export const metadata: Metadata = webPageMetadata({
  title: "Création de site web au Centre-du-Québec | AIP Création",
  description: "Création de sites web au Centre-du-Québec pour PME et travailleurs autonomes : site vitrine, boutique en ligne, CMS sur mesure et SEO local.",
  path: "/creation-site-web-centre-du-quebec",
  image: "/aip-travail-13.webp",
});

export default function Page() {
  return <DetailPage
    eyebrow="Création de site web · Centre-du-Québec"
    image="/aip-travail-13.webp"
    imageAlt="Création de site web pour une PME du Centre-du-Québec"
    title="Création de site web au Centre-du-Québec."
    accent="Un site conçu pour votre marché réel."
    intro="AIP Création conçoit des sites Web pour les PME, commerces et travailleurs autonomes du Centre-du-Québec. L’objectif est de bâtir une présence rapide, crédible et facile à comprendre, avec un référencement local structuré autour de vos vrais services et territoires."
    points={[
      { title: "Une structure adaptée à votre territoire", text: "Votre site peut présenter clairement les villes et secteurs réellement desservis sans multiplier des pages artificielles ou du contenu répétitif." },
      { title: "Site vitrine pour PME", text: "Une base professionnelle pour présenter vos services, vos réalisations, vos coordonnées, votre zone de service et vos appels à l’action." },
      { title: "SEO local propre", text: "Le contenu est organisé autour de votre activité réelle, avec des pages locales utiles, un maillage interne cohérent et des signaux techniques clairs pour Google." },
      { title: "Boutique en ligne", text: "Catalogue, produits, paiements, contenus bilingues ou fonctions de gestion peuvent être adaptés à votre façon de vendre." },
      { title: "CMS et développement sur mesure", text: "Lorsque WordPress ou un thème générique ne suffit pas, AIP peut développer des outils de gestion adaptés à vos opérations." },
      { title: "Suivi direct depuis Nicolet", text: "Vous travaillez avec un seul interlocuteur pour le contenu, le design, le développement, la mise en ligne et les ajustements après lancement." },
    ]}
    asideTitle="Une couverture régionale sans contenu artificiel."
    asideText="AIP dessert notamment Nicolet, Bécancour, Trois-Rivières, Saint-Célestin et les environs. Chaque page locale doit apporter une information réellement utile plutôt que simplement changer le nom d’une ville."
    links={[
      { href: "/creation-site-web-nicolet", label: "Création Web à Nicolet" },
      { href: "/creation-site-web-becancour", label: "Création Web à Bécancour" },
      { href: "/creation-site-web-trois-rivieres", label: "Création Web à Trois-Rivières" },
      { href: "/creation-site-web-saint-celestin", label: "Création Web à Saint-Célestin" },
    ]}
    servicePath="/creation-site-web-centre-du-quebec"
    scenarios={[
      { title: "Vous desservez plusieurs municipalités", text: "On structure le site pour expliquer clairement votre zone de service sans diluer votre offre ni créer des dizaines de pages répétitives." },
      { title: "Vous voulez générer plus de demandes locales", text: "On travaille les pages de services, les appels à l’action et les signaux locaux pour transformer davantage de recherches en contacts." },
      { title: "Votre site doit évoluer avec l’entreprise", text: "L’architecture peut prévoir de nouvelles pages, des fonctions de gestion, une boutique ou des intégrations futures." },
    ]}
    priceLabel="Site vitrine à partir de 900 $"
    priceText="Le coût dépend du contenu, du nombre de pages, des intégrations et des fonctions nécessaires. Une estimation est préparée selon la portée réelle du projet."
    areaText="AIP Création travaille depuis Nicolet avec des entreprises du Centre-du-Québec et des secteurs voisins. Les rencontres et le suivi peuvent aussi se faire entièrement à distance."
    faqs={[
      { question: "Quelles villes desservez-vous au Centre-du-Québec?", answer: "AIP Création dessert notamment Nicolet, Bécancour, Saint-Célestin et les municipalités voisines, ainsi que des entreprises de Trois-Rivières et des environs." },
      { question: "Pouvez-vous créer plusieurs pages locales sur mon site?", answer: "Oui, lorsqu’elles correspondent à de vraies zones de service et qu’elles apportent un contenu distinct et utile aux visiteurs. L’objectif n’est pas de dupliquer la même page avec un autre nom de ville." },
      { question: "Le SEO local est-il inclus?", answer: "La structure technique, les titres, le contenu, le maillage interne et les éléments essentiels au référencement local sont intégrés au projet." },
    ]}
  />;
}

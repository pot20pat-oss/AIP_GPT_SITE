import type { Metadata } from "next";
import { DetailPage } from "../components";
import { webPageMetadata } from "../seo";

export const metadata: Metadata = webPageMetadata({
  title: "Création de site web à Saint-Célestin | AIP Création",
  description: "Création de sites web à Saint-Célestin pour PME, commerces et travailleurs autonomes : site vitrine, boutique en ligne, CMS sur mesure et accompagnement direct.",
  path: "/creation-site-web-saint-celestin",
  image: "/aip-travail-07.webp",
});

export default function Page() {
  return <DetailPage
    eyebrow="Création de site web · Saint-Célestin"
    image="/aip-travail-07.webp"
    imageAlt="Création de site web pour une entreprise de Saint-Célestin"
    title="Création de site web à Saint-Célestin."
    accent="Une présence locale claire et crédible."
    intro="AIP Création accompagne les petites entreprises, commerces, artisans et travailleurs autonomes de Saint-Célestin qui veulent un site professionnel sans passer par une grande agence. Le projet est conçu selon votre offre réelle, votre clientèle et la façon dont vous travaillez."
    points={[
      { title: "Un site pensé pour une entreprise locale", text: "Vos services, votre territoire, vos coordonnées et vos appels à l’action sont organisés pour qu’un client de Saint-Célestin ou des environs comprenne rapidement ce que vous offrez." },
      { title: "Site vitrine simple et professionnel", text: "Une structure claire pour présenter votre entreprise, vos services, vos réalisations et vos moyens de contact sans surcharger le visiteur." },
      { title: "Référencement local intégré", text: "Titres, contenu, structure, liens internes, performance et données techniques sont préparés pour aider Google à comprendre votre activité et votre secteur." },
      { title: "Boutique en ligne selon vos besoins", text: "Vous pouvez vendre des produits ou services avec une boutique adaptée à votre fonctionnement plutôt qu’un modèle générique rempli de fonctions inutiles." },
      { title: "CMS et outils sur mesure", text: "Si vous devez gérer du contenu, des produits, des prix, des photos ou d’autres données, l’interface peut être adaptée à vos opérations." },
      { title: "Un seul interlocuteur", text: "Vous échangez directement avec la personne qui conçoit, développe et met votre site en ligne, avec un suivi après le lancement." },
    ]}
    asideTitle="Petit marché ne veut pas dire petit site."
    asideText="Une entreprise locale peut être très bien positionnée si son site répond clairement aux recherches de ses clients et inspire confiance dès les premières secondes."
    links={[
      { href: "/creation-site-web-nicolet", label: "Création Web à Nicolet" },
      { href: "/creation-site-web-becancour", label: "Création Web à Bécancour" },
      { href: "/creation-site-web-centre-du-quebec", label: "Création Web au Centre-du-Québec" },
      { href: "/site-web-pme", label: "Sites Web pour PME" },
    ]}
    servicePath="/creation-site-web-saint-celestin"
    scenarios={[
      { title: "Votre entreprise dépend surtout du bouche-à-oreille", text: "On ajoute une présence professionnelle que vos références peuvent consulter avant de vous appeler ou de vous écrire." },
      { title: "Vous n’avez qu’une page Facebook", text: "Un site vous donne une adresse Web stable, du contenu que vous contrôlez et une meilleure base pour apparaître dans les recherches locales." },
      { title: "Votre site actuel date de plusieurs années", text: "On simplifie la structure, améliore le mobile et remet vos services actuels au premier plan." },
    ]}
    priceLabel="Site vitrine à partir de 900 $"
    priceText="Le prix dépend du nombre de pages, du contenu, des intégrations et des fonctions nécessaires. Une estimation claire est préparée avant le développement."
    areaText="AIP Création est établi à Nicolet et dessert Saint-Célestin ainsi que les municipalités voisines. Le suivi peut se faire localement ou entièrement à distance."
    areaServed={["Saint-Célestin", "Centre-du-Québec"]}
    faqs={[
      { question: "Créez-vous des sites pour des entreprises de Saint-Célestin?", answer: "Oui. Saint-Célestin fait partie du territoire desservi par AIP Création pour les sites vitrines, boutiques en ligne et projets Web sur mesure." },
      { question: "Est-ce utile d’avoir un site si mon entreprise est petite?", answer: "Oui, surtout si vos clients recherchent vos services sur Google avant de vous contacter. Un site clair peut rassurer, expliquer votre offre et faciliter la prise de contact." },
      { question: "Pouvez-vous reprendre mon ancien site?", answer: "Oui. Les contenus encore utiles peuvent être conservés et réorganisés dans une structure plus actuelle, plus rapide et mieux adaptée au mobile." },
    ]}
  />;
}

import type { Metadata } from "next";
import { DetailPage } from "../components";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Création de boutique en ligne | AIP Nicolet",
  description: "Création de boutiques en ligne et e-commerce sur mesure : catalogue, gestion des produits, CMS et fonctions adaptées à votre entreprise.",
  path: "/creation-boutique-en-ligne",
  image: "/projet-envol-enfants.png",
});

export default function Page() {
  return <DetailPage
    eyebrow="E-commerce · Boutique en ligne"
    image="/projet-envol-enfants.png"
    imageAlt="Exemple de boutique en ligne développée sur mesure par AIP"
    title="Création de boutique en ligne."
    accent="Un commerce qui suit vos opérations."
    intro="Une boutique en ligne ne devrait pas vous obliger à changer toute votre façon de travailler. AIP conçoit des expériences e-commerce et des outils de gestion adaptés au catalogue, aux produits et aux opérations réelles de l’entreprise."
    points={[
      { title: "Catalogue adapté à vos produits", text: "Catégories, variantes, images, prix, disponibilité et autres informations sont organisés selon ce que vous vendez réellement." },
      { title: "Une expérience d’achat simple", text: "Le parcours est pensé pour aider les clients à trouver un produit, comprendre l’offre et passer à l’action sans étapes inutiles." },
      { title: "Gestion de contenu sur mesure", text: "L’administration peut être développée autour des tâches que vous effectuez souvent : ajout de produits, images, visibilité, inventaire ou modifications en lot." },
      { title: "Mobile et performance", text: "Les pages de produits et les principales actions sont conçues pour rester rapides et faciles à utiliser sur téléphone." },
      { title: "Bilingue lorsque nécessaire", text: "Une boutique peut être structurée pour gérer plusieurs langues lorsque votre clientèle ou votre marché l’exige." },
      { title: "Évolution du projet", text: "De nouvelles fonctions peuvent être ajoutées à mesure que le commerce évolue, sans repartir systématiquement de zéro." },
    ]}
    asideTitle="Plus qu’un panier d’achat."
    asideText="L’Envol des Enfants est un exemple concret : boutique bilingue, catalogue et administration développée autour des besoins de gestion du commerce."
    links={[
      { href: "/creation-sites-web", label: "Création de sites Web" },
      { href: "/developpement-cms-sur-mesure", label: "Développement de CMS" },
      { href: "/site-web-pme", label: "Sites Web pour PME" },
      { href: "/creation-site-web-nicolet", label: "Création Web à Nicolet" },
    ]}
    showcaseProject
    servicePath="/creation-boutique-en-ligne"
    scenarios={[
      { title: "Vous voulez commencer à vendre en ligne", text: "On définit le catalogue, le parcours d’achat et les fonctions réellement nécessaires avant de développer." },
      { title: "Votre boutique actuelle est pénible à gérer", text: "On identifie les opérations répétitives et les points de friction afin de simplifier l’administration." },
      { title: "Votre commerce a des règles particulières", text: "Visibilité par boutique, gestion multi-images, contenu bilingue ou autres règles peuvent être intégrés au projet." },
    ]}
    priceLabel="Projet e-commerce sur estimation"
    priceText="Une boutique est évaluée selon le catalogue, les règles de gestion, les intégrations, les langues et les fonctions nécessaires. Le périmètre est défini avant le développement."
    areaText="Développement e-commerce depuis Nicolet pour des entreprises locales ou à distance. Les projets peuvent être réalisés sans déplacement lorsque le mandat s’y prête."
    faqs={[
      { question: "Pouvez-vous créer une boutique en ligne sur mesure?", answer: "Oui. Le projet peut inclure une interface publique, un catalogue et des outils d’administration développés selon les besoins de l’entreprise." },
      { question: "Est-ce possible de gérer plusieurs images par produit?", answer: "Oui. La gestion des images, variantes et autres informations produit peut être adaptée à la structure du catalogue." },
      { question: "Pouvez-vous faire une boutique bilingue?", answer: "Oui. Une architecture bilingue peut être prévue pour les contenus publics et, selon le projet, pour les outils de gestion." },
    ]}
  />;
}

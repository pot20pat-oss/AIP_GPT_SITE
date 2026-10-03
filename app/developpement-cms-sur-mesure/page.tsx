import type { Metadata } from "next";
import { DetailPage } from "../components";
import { webPageMetadata } from "../seo";

export const metadata: Metadata = webPageMetadata({
  title: "Développement de CMS sur mesure | AIP",
  description: "Développement de CMS, interfaces d’administration et outils web sur mesure pour PME : gestion de contenu, catalogue et automatisations.",
  path: "/developpement-cms-sur-mesure",
  image: "/envol-cms/dashboard.png",
});

export default function Page() {
  return <DetailPage
    eyebrow="Développement Web · CMS sur mesure"
    image="/envol-cms/dashboard.png"
    imageAlt="Interface de CMS sur mesure développée par Atelier Informatique Potvin"
    title="Développement de CMS sur mesure."
    accent="L’outil s’adapte à votre travail."
    intro="Quand un CMS générique impose trop de détours, une interface sur mesure peut simplifier les tâches quotidiennes. AIP développe des outils Web et des panneaux d’administration autour des données, actions et règles propres à votre entreprise."
    points={[
      { title: "Administration adaptée à vos tâches", text: "Les écrans et actions sont organisés autour de ce que vous faites réellement : créer, modifier, rechercher, déplacer, publier ou traiter plusieurs éléments à la fois." },
      { title: "Gestion de catalogue", text: "Produits, images, catégories, visibilité, inventaire et autres données peuvent être regroupés dans une interface cohérente." },
      { title: "Actions en lot", text: "Les opérations répétitives peuvent être simplifiées avec la sélection multiple, des modifications groupées et des outils adaptés au volume de données." },
      { title: "Automatisations ciblées", text: "Lorsqu’une tâche suit toujours les mêmes règles, une automatisation peut réduire les manipulations manuelles et les risques d’erreur." },
      { title: "Connexion avec le site public", text: "Le CMS peut alimenter directement le site, la boutique ou le catalogue afin d’éviter de maintenir les mêmes informations à plusieurs endroits." },
      { title: "Évolution progressive", text: "L’outil peut commencer avec les fonctions prioritaires puis évoluer avec de nouveaux modules lorsque les besoins deviennent plus clairs." },
    ]}
    asideTitle="Un CMS construit autour de vos opérations."
    asideText="Le CMS de L’Envol des Enfants illustre cette approche avec gestion du catalogue, multi-images, visibilité par boutique, actions en lot et outils d’analyse."
    links={[
      { href: "/creation-boutique-en-ligne", label: "Boutiques en ligne" },
      { href: "/creation-sites-web", label: "Création de sites Web" },
      { href: "/site-web-pme", label: "Sites Web pour PME" },
      { href: "/creation-site-web-nicolet", label: "Création Web à Nicolet" },
    ]}
    showcaseProject
    servicePath="/developpement-cms-sur-mesure"
    scenarios={[
      { title: "Votre équipe travaille encore dans plusieurs outils séparés", text: "On peut centraliser les opérations utiles dans une interface adaptée au flux de travail." },
      { title: "Votre CMS actuel demande trop de clics", text: "On identifie les actions fréquentes et on conçoit une interface qui réduit les détours." },
      { title: "Votre entreprise a des règles particulières", text: "Les permissions, états, visibilités ou traitements propres à votre activité peuvent être intégrés directement dans l’outil." },
    ]}
    priceLabel="Développement sur estimation"
    priceText="Le prix dépend des données à gérer, des rôles, des automatisations, des intégrations et du nombre de fonctions. Le projet est découpé selon les priorités."
    areaText="Développement de CMS et d’outils Web depuis Nicolet pour des entreprises locales ou à distance. La majorité du travail peut être réalisée entièrement en ligne."
    faqs={[
      { question: "Quelle est la différence entre un CMS standard et un CMS sur mesure?", answer: "Un CMS standard propose les mêmes outils à beaucoup de types d’entreprises. Un CMS sur mesure est organisé autour de vos données, de vos actions fréquentes et de vos règles de gestion." },
      { question: "Peut-on connecter le CMS à une boutique en ligne?", answer: "Oui. Le CMS peut gérer les données utilisées par la boutique ou le catalogue public afin de centraliser la gestion." },
      { question: "Est-ce qu’un outil sur mesure peut évoluer?", answer: "Oui. Il peut être développé par étapes, en commençant par les fonctions qui apportent le plus de valeur puis en ajoutant de nouveaux modules." },
    ]}
  />;
}

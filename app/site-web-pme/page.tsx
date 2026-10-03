import type { Metadata } from "next";
import { DetailPage } from "../components";
import { webPageMetadata } from "../seo";

export const metadata: Metadata = webPageMetadata({
  title: "Création de site web pour PME | AIP Nicolet",
  description: "Sites web professionnels pour PME et travailleurs autonomes : design sur mesure, mobile, SEO local et accompagnement direct.",
  path: "/site-web-pme",
  image: "/aip-travail-13.webp",
});

export default function Page() {
  return <DetailPage
    eyebrow="Sites Web · PME et travailleurs autonomes"
    image="/aip-travail-13.webp"
    imageAlt="Site web professionnel conçu pour une PME"
    title="Un site web pour votre PME."
    accent="Clair, crédible et facile à trouver."
    intro="Un site de PME doit répondre rapidement à trois questions : qui êtes-vous, qu’offrez-vous et comment vous joindre? AIP construit des sites vitrines professionnels qui mettent vos services et votre crédibilité au premier plan."
    points={[
      { title: "Une structure centrée sur vos services", text: "Chaque page a un rôle précis : expliquer une offre, rassurer, montrer une réalisation ou amener le visiteur vers un appel ou une demande." },
      { title: "Un design propre à votre entreprise", text: "La présentation s’appuie sur votre identité, vos photos et votre métier. Le résultat ne ressemble pas à un modèle générique simplement recoloré." },
      { title: "Pensé pour le téléphone", text: "Navigation, boutons, textes et images sont adaptés aux petits écrans puisque beaucoup de clients découvrent une entreprise directement sur leur téléphone." },
      { title: "SEO local intégré", text: "Les titres, contenus, liens internes et informations locales sont structurés dès le départ pour aider les moteurs de recherche à comprendre votre entreprise." },
      { title: "Des appels à l’action utiles", text: "Téléphone, formulaire, demande de soumission ou autre action importante reste facile à trouver sans transformer le site en publicité agressive." },
      { title: "Une base qui peut évoluer", text: "Le site peut ensuite accueillir de nouvelles pages, des réalisations, une boutique, un CMS ou des fonctions plus avancées lorsque l’entreprise grandit." },
    ]}
    asideTitle="Votre site doit travailler pour votre entreprise."
    asideText="Une présence professionnelle ne se mesure pas au nombre d’effets visuels. Elle se mesure à la facilité avec laquelle un client comprend votre offre et passe à l’action."
    links={[
      { href: "/creation-site-web-nicolet", label: "Création Web à Nicolet" },
      { href: "/creation-site-web-becancour", label: "Création Web à Bécancour" },
      { href: "/creation-site-web-trois-rivieres", label: "Création Web à Trois-Rivières" },
      { href: "/creation-boutique-en-ligne", label: "Ajouter une boutique en ligne" },
    ]}
    showcaseProject
    servicePath="/site-web-pme"
    scenarios={[
      { title: "Votre entreprise n’a qu’une page Facebook", text: "On crée une présence stable que vous contrôlez, avec vos services, vos coordonnées et une structure adaptée à Google." },
      { title: "Votre site ne génère presque aucun contact", text: "On revoit le message, la hiérarchie et les appels à l’action pour rendre le parcours beaucoup plus évident." },
      { title: "Vous avez peu de temps pour gérer le Web", text: "Le site est conçu pour rester simple. Si vous avez besoin de gérer du contenu régulièrement, un CMS adapté peut être ajouté." },
    ]}
    priceLabel="Site vitrine de base à partir de 900 $"
    priceText="Le prix dépend de la quantité de contenu, du nombre de pages et des fonctions. L’objectif est de construire ce dont votre PME a besoin, sans gonfler artificiellement le mandat."
    areaText="Service offert aux PME de Nicolet, Bécancour, Trois-Rivières et des environs, ainsi qu’aux entreprises qui souhaitent travailler entièrement à distance."
    faqs={[
      { question: "Combien de pages faut-il pour un site de PME?", answer: "Il n’y a pas de nombre universel. Les pages doivent surtout correspondre à vos services et aux questions de vos clients. Un petit site bien structuré peut être plus utile qu’un grand site rempli de contenu répétitif." },
      { question: "Est-ce que je pourrai ajouter des pages plus tard?", answer: "Oui. Le site peut être structuré dès le départ pour accueillir de nouveaux services, secteurs, réalisations ou fonctionnalités." },
      { question: "Fournissez-vous aussi le contenu?", answer: "Le contenu peut être préparé et structuré avec vous à partir de vos services, de votre façon de travailler et des informations que vos clients doivent connaître." },
    ]}
  />;
}

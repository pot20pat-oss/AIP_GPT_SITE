import type { Metadata } from "next";
import { DetailPage } from "../components";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({ title: "Dépannage informatique Trois-Rivières | Atelier Potvin", description: "Technicien informatique à Trois-Rivières : réparation PC, virus, assistance à distance, Wi-Fi et données. Appelez Patrick au 819 380-2999.", path: "/depannage-informatique-trois-rivieres", image: "/service-assistance-distance.webp" });

export default function Page() {
  return <DetailPage eyebrow="Dépannage informatique à Trois-Rivières" image="/service-assistance-distance.webp" imageAlt="Patrick Potvin accompagne les clients de Trois-Rivières en dépannage informatique" title="Besoin d’aide à Trois-Rivières?" accent="Parlez à Patrick directement." intro="Votre PC ralentit, votre courriel bloque ou votre réseau vous complique la vie? Patrick offre un accompagnement informatique personnalisé aux clients de Trois-Rivières, à distance ou à domicile lorsque le déplacement peut être organisé." points={[
    { title: "Aide pour les problèmes informatiques courants", text: "Ordinateur lent, erreurs Windows, logiciels, courriel, navigateur, imprimante et autres difficultés du quotidien expliquées clairement." },
    { title: "Intervention à distance pour aller plus vite", text: "Lorsque votre ordinateur se connecte à Internet, une séance à distance évite souvent le déplacement et permet de regarder le problème ensemble." },
    { title: "Déplacement selon votre secteur et le besoin", text: "Trois-Rivières se trouve dans la région desservie. La faisabilité d’un rendez-vous sur place est confirmée avant de planifier l’intervention." },
    { title: "Accompagnement sans jargon", text: "Vous n’êtes pas renvoyé d’un service à l’autre : Patrick écoute votre problème, propose une marche à suivre et vous dit ce qui est réaliste." },
  ]} asideTitle="Un interlocuteur humain, du début à la fin." asideText="Patrick travaille depuis Nicolet et accompagne des clients dans la région de Trois-Rivières. Les modalités de déplacement dépendent de l’endroit et de l’intervention." scenarios={[
    { title: "Votre courriel ne fonctionne plus sur l’ordinateur", text: "On vérifie les comptes, les messages d’erreur et les paramètres nécessaires. Une intervention à distance peut suffire si votre connexion Internet fonctionne." },
    { title: "Vous craignez un virus ou une tentative de fraude", text: "On examine les symptômes, on évite les manipulations bancaires risquées et on détermine les vérifications nécessaires pour sécuriser l’ordinateur." },
    { title: "Vous voulez installer un nouvel ordinateur", text: "On peut organiser la configuration, le transfert des fichiers accessibles, les réglages Windows et la reconnexion de vos appareils." },
    { title: "Votre petite entreprise cherche un site web", text: "Patrick conçoit aussi des sites vitrines locaux adaptés aux entreprises, artisans et professionnels de Trois-Rivières et des environs." },
  ]} priceLabel="50 $ à distance · 65 $ / heure" priceText="Assistance à distance jusqu’à 45 minutes : 50 $. Dépannage et configuration : 65 $ / heure. Diagnostic : 45 $, gratuit si la réparation est effectuée." areaText="Trois-Rivières, Nicolet, Bécancour et environs. La disponibilité sur place dépend de votre secteur; l’assistance à distance est souvent une option." faqs={[
    { question: "Faites-vous du dépannage à domicile à Trois-Rivières?", answer: "Trois-Rivières fait partie de la région desservie. Patrick confirme avec vous si un déplacement est possible selon votre secteur et le problème à régler." },
    { question: "Une intervention à distance est-elle moins chère?", answer: "La séance d’assistance à distance est à 50 $ pour un maximum de 45 minutes. Elle convient surtout aux problèmes logiciels, de courriel ou de configuration." },
    { question: "Réparez-vous aussi les ordinateurs des petites entreprises?", answer: "Patrick accompagne les particuliers et les petites entreprises pour leurs besoins informatiques courants. Les besoins sont évalués avant de proposer une intervention." },
  ]} links={[{ href: "/assistance-informatique-a-distance", label: "Dépannage à distance" }, { href: "/installation-ordinateur-transfert-donnees", label: "Installer un nouvel ordinateur" }, { href: "/tarifs", label: "Consulter les tarifs" }]} servicePath="/depannage-informatique-trois-rivieres" />;
}

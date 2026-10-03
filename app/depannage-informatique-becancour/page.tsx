import type { Metadata } from "next";
import { DetailPage } from "../components";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({ title: "Dépannage informatique Bécancour | Technicien à domicile", description: "Dépannage informatique à Bécancour, à domicile ou à distance : PC, virus, Wi-Fi, courriel et transfert de données. Appelez le 819 380-2999.", path: "/depannage-informatique-becancour", image: "/aip-travail-09.webp" });

export default function Page() {
  return <DetailPage eyebrow="Dépannage informatique à Bécancour" image="/aip-travail-09.webp" imageAlt="Patrick Potvin propose un dépannage informatique à domicile à Bécancour" title="Un problème informatique à Bécancour?" accent="Un vrai technicien vous répond." intro="Vous cherchez de l’aide pour un ordinateur lent, un courriel qui bloque, un virus ou un réseau instable à Bécancour? Basé à Nicolet, Patrick dessert Bécancour à domicile et propose aussi une assistance à distance lorsque la situation le permet." points={[
    { title: "Réparation et diagnostic d’ordinateur", text: "Ordinateur qui plante, Windows instable, écran bleu, lenteur inhabituelle ou démarrage difficile : on identifie le problème avant de parler de réparation." },
    { title: "Service à domicile à Bécancour", text: "Pour les problèmes qui demandent de voir vos appareils, votre réseau, votre imprimante ou votre installation, une intervention sur place peut être organisée." },
    { title: "Assistance à distance quand c’est possible", text: "Courriel, logiciels, configuration et autres problèmes courants peuvent parfois être réglés sans déplacement, si votre connexion Internet fonctionne." },
    { title: "Installation, Wi-Fi et transfert", text: "Nouveau PC, configuration d’un routeur, connexion d’imprimante, transfert de photos ou sauvegarde de documents : l’aide est adaptée à vos besoins." },
  ]} asideTitle="Bécancour est dans ma zone de service." asideText="Patrick est basé à Nicolet et intervient dans un rayon d’environ 50 km. La disponibilité et les conditions sont confirmées avec vous avant le déplacement." scenarios={[
    { title: "Votre ordinateur familial est devenu trop lent", text: "On vérifie l’état général du PC, les programmes, le stockage et Windows pour déterminer si une optimisation ou une réparation est pertinente." },
    { title: "Vous recevez des avertissements de sécurité douteux", text: "On examine les alertes et les logiciels concernés pour distinguer un vrai problème d’un message trompeur et protéger vos comptes." },
    { title: "Le Wi-Fi ne rejoint pas tous vos appareils", text: "On regarde le routeur, la connexion, les appareils touchés et la configuration avant de recommander une correction réaliste." },
  ]} priceLabel="Tarif de base 60 $" priceText="Tarif de base : 60 $. Le diagnostic est crédité si la réparation est effectuée. Le tarif applicable est expliqué avant de commencer." areaText="Bécancour, Nicolet et municipalités voisines. Intervention à domicile ou à distance selon votre emplacement, votre connexion et le problème rencontré." faqs={[
    { question: "Vous déplacez-vous vraiment à Bécancour?", answer: "Oui. Bécancour fait partie de la zone desservie autour de Nicolet. Patrick confirme les modalités avec vous au moment de prendre rendez-vous." },
    { question: "Pouvez-vous régler un problème sans venir chez moi?", answer: "Souvent, oui. Les problèmes de courriel, de logiciel ou de configuration peuvent être traités à distance lorsque l’ordinateur dispose d’un accès Internet." },
    { question: "Comment connaître le prix avant l’intervention?", answer: "Expliquez le problème au téléphone. Patrick vous indique le tarif applicable et vous informe si un diagnostic est nécessaire avant de poursuivre." },
  ]} links={[{ href: "/assistance-informatique-a-distance", label: "Assistance à distance" }, { href: "/configuration-wifi-sauvegarde", label: "Wi-Fi et sauvegardes" }, { href: "/tarifs", label: "Tarifs de dépannage" }]} servicePath="/depannage-informatique-becancour" />;
}

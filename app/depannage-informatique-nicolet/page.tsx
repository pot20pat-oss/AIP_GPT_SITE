import type { Metadata } from "next";
import { DetailPage } from "../components";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({ title: "Dépannage informatique Nicolet | Réparation PC à domicile", description: "Réparation d’ordinateur à Nicolet, Bécancour et Trois-Rivières : PC lent, écran bleu, Windows et diagnostic. Technicien local : 819 380-2999.", path: "/depannage-informatique-nicolet", image: "/aip-travail-14.webp" });

export default function Page() {
  return <DetailPage eyebrow="Dépannage informatique à Nicolet" image="/aip-travail-14.webp" imageAlt="Patrick Potvin effectue un dépannage informatique depuis son bureau à domicile à Nicolet" title="Votre ordinateur vous ralentit?" accent="On remet ça en ordre." intro="PC lent, écran bleu, démarrage impossible ou logiciel qui bloque : Patrick trouve la cause réelle et vous propose une solution claire, sans jargon." points={[
    { title: "Diagnostic précis", text: "On vérifie le matériel, Windows et les logiciels pour identifier la vraie source du problème avant toute réparation." },
    { title: "Réparation honnête", text: "Vous connaissez le problème, la solution proposée et le prix prévu. Rien n’est fait sans votre accord." },
    { title: "Service flexible", text: "Intervention à votre domicile dans un rayon de 50 km, depuis mon bureau à la maison ou à distance lorsque le problème le permet." },
  ]} asideTitle="Un technicien de Nicolet, pas un centre d’appels." asideText="Vous parlez directement à Patrick, du premier appel jusqu’à la résolution. Le service couvre Nicolet, Bécancour, Trois-Rivières et les environs." links={[{href:"/suppression-virus",label:"Suppression de virus"},{href:"/assistance-informatique-a-distance",label:"Assistance à distance"},{href:"/tarifs",label:"Tarifs de dépannage"}]} servicePath="/depannage-informatique-nicolet" />;
}

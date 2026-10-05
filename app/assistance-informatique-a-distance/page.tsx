import type { Metadata } from "next";
import { DetailPage } from "../components";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({ title: "Assistance informatique à distance | Nicolet – Atelier Potvin", description: "Assistance informatique à distance : Windows, courriel, logiciels et imprimante. Tarif informatique : 60 $/h. Appelez Patrick au 819 380-2999.", path: "/assistance-informatique-a-distance", image: "/aip-travail-12.webp" });

export default function Page() {
  return <DetailPage eyebrow="Assistance informatique à distance" image="/aip-travail-12.webp" imageAlt="Patrick Potvin accompagne un client en assistance informatique à distance depuis Nicolet" title="Votre ordinateur vous bloque?" accent="On règle ça à distance." intro="Quand votre ordinateur se connecte encore à Internet, de nombreux problèmes peuvent être réglés sans déplacement. Patrick vous guide au téléphone et intervient avec votre autorisation, directement depuis son bureau à Nicolet." points={[
    { title: "Une intervention simple et autorisée", text: "Vous autorisez explicitement la connexion pour la séance. Vous voyez les manipulations à l’écran et gardez la possibilité de mettre fin à l’intervention." },
    { title: "Dépannage de logiciels et de Windows", text: "Messages d’erreur, paramètres difficiles à retrouver, mises à jour problématiques, navigateur instable ou programme qui refuse de fonctionner." },
    { title: "Courriel, imprimante et tâches du quotidien", text: "Configuration de boîte courriel, récupération de paramètres, imprimante invisible, favoris disparus et questions sur vos applications habituelles." },
    { title: "Des explications pendant l’intervention", text: "On ne vous demande pas d’être un expert. Patrick explique ce qui arrive, ce qu’il modifie et les gestes utiles pour éviter que le problème revienne." },
  ]} asideTitle="Du dépannage sans quitter la maison." asideText="L’assistance à distance convient aux clients de Nicolet, Bécancour, Trois-Rivières et de partout au Québec, si la connexion Internet fonctionne." scenarios={[
    { title: "Votre boîte courriel ne reçoit plus rien", text: "On vérifie les paramètres du compte, l’application utilisée, les messages d’erreur et les causes possibles du problème d’envoi ou de réception." },
    { title: "Votre imprimante n’apparaît plus", text: "Quand l’imprimante et le réseau sont accessibles, on vérifie la configuration, les pilotes, la file d’attente et les réglages Windows." },
    { title: "Un logiciel vous bloque dans votre travail", text: "On identifie les paramètres, mises à jour ou messages d’erreur en cause et on vous aide à retrouver une utilisation normale." },
    { title: "Vous ne savez pas si un message est frauduleux", text: "On examine la situation avec prudence, on vérifie l’ordinateur et on vous indique les prochaines étapes si vos comptes doivent être sécurisés." },
  ]} priceLabel="60 $ / h" priceText="Assistance informatique facturée au taux horaire. Si le problème exige une intervention différente ou un déplacement, vous êtes informé avant de continuer." areaText="Disponible à Nicolet, Bécancour, Trois-Rivières et ailleurs au Québec lorsque votre ordinateur a accès à Internet." faqs={[
    { question: "Est-ce sécuritaire de donner accès à mon ordinateur?", answer: "La connexion doit être autorisée pour l’intervention. Vous voyez ce qui se passe et vous pouvez y mettre fin. Patrick n’accède qu’aux éléments nécessaires au dépannage." },
    { question: "Faut-il être bon en informatique?", answer: "Non. Patrick vous guide étape par étape au téléphone pour démarrer la séance et vous explique les manipulations clairement." },
    { question: "Que se passe-t-il si Internet ne fonctionne plus?", answer: "Une intervention à distance n’est alors pas possible. Selon votre emplacement, un dépannage à domicile peut être envisagé." },
  ]} links={[{ href: "/assistance", label: "Télécharger AIP Assistance" }, { href: "/depannage-informatique-nicolet", label: "Dépannage informatique" }, { href: "/configuration-wifi-sauvegarde", label: "Problèmes de Wi-Fi" }]} servicePath="/assistance-informatique-a-distance" />;
}

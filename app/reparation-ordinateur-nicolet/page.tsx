import type { Metadata } from "next";
import { DetailPage } from "../components";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({ title: "Réparation ordinateur Nicolet | Diagnostic PC – Atelier Potvin", description: "Réparation d’ordinateur à Nicolet : PC lent, écran bleu, démarrage impossible et Windows. Diagnostic 45 $. Appelez Patrick au 819 380-2999.", path: "/reparation-ordinateur-nicolet", image: "/aip-travail-03.webp" });

export default function Page() {
  return <DetailPage eyebrow="Réparation d’ordinateur à Nicolet" image="/aip-travail-03.webp" imageAlt="Patrick Potvin effectue un diagnostic et une réparation d’ordinateur à Nicolet" title="Votre ordinateur ne suit plus?" accent="On cherche la vraie cause." intro="Un ordinateur lent, qui plante ou qui ne démarre plus n’est pas automatiquement bon pour la poubelle. À Nicolet, Patrick commence par un diagnostic clair avant de proposer une réparation adaptée et de vous expliquer ce qui vaut réellement la peine." points={[
    { title: "Diagnostic matériel et logiciel", text: "Vérification du démarrage, de Windows, des messages d’erreur, du stockage et des composants accessibles pour distinguer une panne matérielle d’un problème logiciel." },
    { title: "Réparation selon l’état réel du PC", text: "La solution dépend du diagnostic : correction de Windows, nettoyage, configuration, remplacement d’une pièce pertinente ou autre intervention adaptée." },
    { title: "Protection de vos documents", text: "Avant une opération risquée, on discute de l’état de vos fichiers et de la possibilité de sauvegarder les données accessibles. Aucune récupération n’est promise sans vérification." },
    { title: "Une décision sans pression", text: "Si réparer coûte trop cher par rapport à la valeur de l’ordinateur, Patrick vous le dit clairement et vous aide à comparer les prochaines options." },
  ]} asideTitle="Un technicien de Nicolet qui vous répond directement." asideText="Vous parlez à la personne qui s’occupe réellement de votre ordinateur. Le problème, le prix et les limites possibles sont expliqués avant de commencer." scenarios={[
    { title: "Votre PC met plusieurs minutes à démarrer", text: "Un stockage fatigué, trop de programmes au démarrage, un manque d’espace ou un problème Windows peuvent être en cause. Le diagnostic permet d’éviter de remplacer des pièces au hasard." },
    { title: "Vous obtenez un écran bleu", text: "On vérifie les messages d’erreur, les mises à jour, les pilotes et les éléments matériels pertinents pour orienter la réparation." },
    { title: "L’ordinateur s’allume sans afficher correctement", text: "On examine l’alimentation, les branchements, l’écran et les composants accessibles avant de déterminer si la panne se situe dans le PC ou ailleurs." },
    { title: "Vous hésitez entre réparer et remplacer", text: "Patrick compare l’état du matériel, les travaux requis et votre usage. Vous choisissez ensuite en connaissance de cause." },
  ]} priceLabel="Diagnostic 45 $ · réparation 65 $ / h" priceText="Le diagnostic devient gratuit si vous faites effectuer la réparation. Le travail proposé et son coût sont expliqués avant votre accord." areaText="Basé à Nicolet, Patrick dessert aussi Bécancour, Trois-Rivières et les environs. Dépannage à domicile ou à distance selon le problème." faqs={[
    { question: "Le diagnostic est-il toujours facturé?", answer: "Le diagnostic coûte 45 $, mais devient gratuit si vous faites effectuer la réparation proposée." },
    { question: "Pouvez-vous garantir que mes fichiers seront récupérés?", answer: "Non. La récupération dépend de l’état du stockage et des données. Patrick vérifie d’abord ce qui est accessible et vous explique les limites." },
    { question: "Devez-vous remplacer des pièces systématiquement?", answer: "Non. Une pièce n’est envisagée qu’après le diagnostic, et son coût doit être accepté avant l’intervention." },
  ]} links={[{ href: "/suppression-virus", label: "Suppression de virus" }, { href: "/installation-ordinateur-transfert-donnees", label: "Transfert vers un nouveau PC" }, { href: "/tarifs", label: "Prix des réparations" }]} servicePath="/reparation-ordinateur-nicolet" />;
}

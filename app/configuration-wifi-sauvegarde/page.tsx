import type { Metadata } from "next";
import { DetailPage } from "../components";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({ title: "Configuration Wi-Fi et sauvegarde informatique | Nicolet", description: "Wi-Fi instable, routeur, imprimante réseau et sauvegarde de fichiers à Nicolet, Bécancour et Trois-Rivières. Appelez Patrick au 819 380-2999.", path: "/configuration-wifi-sauvegarde", image: "/aip-travail-11.webp" });

export default function Page() {
  return <DetailPage eyebrow="Configuration Wi-Fi et sauvegarde de données" image="/aip-travail-11.webp" imageAlt="Patrick Potvin configure un routeur Wi-Fi et une sauvegarde de données à Nicolet" title="Un Wi-Fi qui tient la route." accent="Des fichiers en sécurité." intro="Un réseau instable complique tout : ordinateur, imprimante, courriel et travail à la maison. Patrick vérifie votre Wi-Fi, configure les appareils concernés et vous aide à mettre en place une vraie stratégie de sauvegarde." points={[
    { title: "Diagnostic du routeur et du réseau Wi-Fi", text: "Vérification du routeur, de la connexion Internet, du signal, des appareils touchés et des causes courantes de déconnexion ou de faible couverture." },
    { title: "Connexion des ordinateurs et imprimantes", text: "Association des appareils au bon réseau, vérification des paramètres essentiels et remise en service d’une imprimante réseau quand sa configuration le permet." },
    { title: "Organisation des sauvegardes", text: "Identification des documents, photos et fichiers importants, puis choix d’une méthode de sauvegarde compréhensible selon vos habitudes et votre matériel." },
    { title: "Vérification des copies", text: "Une sauvegarde n’est rassurante que si elle peut être retrouvée. On vérifie ensemble où sont les copies et comment confirmer qu’elles sont accessibles." },
  ]} asideTitle="Un réseau utile, pas une usine à gaz." asideText="L’objectif n’est pas de vous vendre du matériel inutile : d’abord comprendre votre installation et proposer une solution adaptée à la maison ou à la petite entreprise." scenarios={[
    { title: "Votre Wi-Fi coupe dans certaines pièces", text: "On examine la position du routeur, le type de connexion, les obstacles et les appareils concernés avant de proposer un ajustement réaliste." },
    { title: "L’imprimante n’est plus détectée", text: "On vérifie qu’elle rejoint le bon réseau et qu’elle peut communiquer avec l’ordinateur, puis on reprend la configuration si nécessaire." },
    { title: "Vos photos n’existent qu’à un seul endroit", text: "On repère les dossiers importants et on met en place une copie adaptée, avec une méthode que vous pourrez comprendre et vérifier." },
    { title: "Vous avez un nouveau routeur à installer", text: "On regarde le branchement, les accès nécessaires et la reconnexion de vos appareils pour éviter de laisser votre ordinateur ou votre imprimante hors ligne." },
  ]} priceLabel="65 $ / heure" priceText="Configuration réseau et sauvegarde au taux horaire. Le diagnostic et les besoins sont expliqués avant d’acheter du matériel ou de poursuivre." areaText="Service à domicile à Nicolet, Bécancour, Trois-Rivières, Saint-Célestin et dans les environs, dans un rayon d’environ 50 km." faqs={[
    { question: "Un meilleur routeur règle-t-il toujours un mauvais Wi-Fi?", answer: "Pas nécessairement. L’emplacement, les obstacles, la configuration et la connexion du fournisseur peuvent aussi jouer. On vérifie avant de recommander un achat." },
    { question: "Une sauvegarde garantit-elle que rien ne sera jamais perdu?", answer: "Aucune solution n’élimine tous les risques. L’objectif est d’avoir des copies distinctes, vérifiables et adaptées à l’importance de vos données." },
    { question: "Pouvez-vous aider une petite entreprise?", answer: "Oui, pour les besoins courants de réseau, de connexion d’appareils et de sauvegarde. Les besoins plus complexes sont évalués avant de proposer une intervention." },
  ]} links={[{ href: "/installation-ordinateur-transfert-donnees", label: "Installation et transfert" }, { href: "/assistance-informatique-a-distance", label: "Assistance à distance" }, { href: "/tarifs", label: "Tarifs informatiques" }]} servicePath="/configuration-wifi-sauvegarde" />;
}

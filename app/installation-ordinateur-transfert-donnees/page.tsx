import type { Metadata } from "next";
import { DetailPage } from "../components";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({ title: "Installation ordinateur et transfert de données | Nicolet", description: "Nouveau PC, installation Windows, transfert photos et documents, imprimante et courriel à Nicolet et Bécancour. Appelez Patrick au 819 380-2999.", path: "/installation-ordinateur-transfert-donnees", image: "/aip-travail-05.webp" });

export default function Page() {
  return <DetailPage eyebrow="Installation d’ordinateur et transfert de données" image="/aip-travail-05.webp" imageAlt="Patrick Potvin configure un ordinateur et transfère des données à Nicolet" title="Un nouvel ordinateur." accent="Vos repères retrouvés." intro="Changer de PC ne devrait pas vous faire perdre vos documents, vos photos ou vos habitudes. Patrick configure votre ordinateur, transfère les données accessibles et vérifie avec vous que l’essentiel fonctionne." points={[
    { title: "Mise en route et configuration de Windows", text: "Configuration initiale de l’ordinateur, mises à jour, compte utilisateur, navigateur, paramètres utiles et logiciels essentiels selon votre situation." },
    { title: "Transfert de documents, photos et favoris", text: "Vos fichiers importants sont repérés sur l’ancien ordinateur, copiés lorsque leur support reste lisible, puis replacés de façon organisée sur le nouveau." },
    { title: "Courriel, imprimante et accessoires", text: "Connexion de votre imprimante et de vos périphériques, configuration du courriel lorsque les informations nécessaires sont disponibles et vérification du réseau." },
    { title: "Vérification avec vous avant de terminer", text: "On regarde ensemble où sont vos documents, comment ouvrir vos applications et ce qu’il reste à récupérer. Rien n’est présenté comme acquis sans vérification." },
  ]} asideTitle="Un transfert expliqué, pas improvisé." asideText="Le temps requis dépend de l’état de l’ancien ordinateur, de la quantité de données, de vos logiciels et de l’accès à vos comptes." scenarios={[
    { title: "Vous venez d’acheter un nouvel ordinateur", text: "On configure le poste, les mises à jour, le navigateur, les logiciels utiles et les périphériques pour que vous puissiez commencer dans de bonnes conditions." },
    { title: "Vous craignez de perdre vos photos de famille", text: "On localise les dossiers et les supports accessibles, puis on copie les données importantes avant de vérifier qu’elles s’ouvrent sur le nouvel appareil." },
    { title: "Votre courriel et vos favoris ne suivent pas", text: "On regarde le logiciel utilisé, vos comptes, vos favoris Internet et les informations disponibles pour retrouver une configuration familière." },
    { title: "Votre ancien PC est devenu très lent", text: "Si l’ordinateur démarre encore ou si son disque est accessible, un transfert peut souvent être organisé après un diagnostic de son état." },
  ]} priceLabel="65 $ / heure" priceText="Configuration et transfert au taux horaire. La durée dépend du volume de données et de l’état du matériel; le travail est expliqué avant l’intervention." areaText="Installation à domicile à Nicolet, Bécancour, Trois-Rivières et dans les municipalités situées à environ 50 km de Nicolet." faqs={[
    { question: "Mes logiciels seront-ils automatiquement transférés?", answer: "Les fichiers peuvent être copiés, mais les logiciels doivent généralement être réinstallés. Les licences, mots de passe et accès nécessaires doivent être disponibles." },
    { question: "Pouvez-vous récupérer les fichiers si l’ancien PC ne démarre plus?", answer: "Cela dépend de l’état du disque et de l’ordinateur. Un diagnostic permet de savoir si les données restent accessibles avant de promettre un résultat." },
    { question: "Dois-je préparer mes mots de passe?", answer: "Oui, avoir vos accès courriel, comptes importants et licences à portée de main facilite la configuration et évite des délais inutiles." },
  ]} links={[{ href: "/configuration-wifi-sauvegarde", label: "Sauvegardes et Wi-Fi" }, { href: "/reparation-ordinateur-nicolet", label: "Réparation d’ordinateur" }, { href: "/tarifs", label: "Tarif horaire" }]} servicePath="/installation-ordinateur-transfert-donnees" />;
}

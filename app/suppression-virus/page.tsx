import type { Metadata } from "next";
import { DetailPage } from "../components";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({ title: "Suppression virus informatique Nicolet | Nettoyage PC", description: "Virus, logiciel malveillant, fraude ou publicités? Nettoyage et sécurisation de votre ordinateur à Nicolet et Bécancour. Appelez le 819 380-2999.", path: "/suppression-virus", image: "/aip-travail-10.webp" });

export default function Page() {
  return <DetailPage eyebrow="Suppression de virus à Nicolet" image="/aip-travail-10.webp" imageAlt="Patrick Potvin diagnostique et sécurise un ordinateur depuis son bureau à domicile" title="Votre PC agit bizarrement?" accent="Reprenez le contrôle." intro="Fenêtres publicitaires, faux avertissements, redirections ou lenteurs soudaines : on nettoie le système et on sécurise vos données." points={[
    { title: "Nettoyage complet", text: "Détection et suppression des virus, logiciels espions, extensions nuisibles et programmes indésirables." },
    { title: "Données protégées", text: "On vérifie vos fichiers et vos comptes importants, puis on limite les risques de nouvelle infection." },
    { title: "Conseils simples", text: "Vous repartez avec des gestes faciles à retenir pour reconnaître les pièges et garder votre ordinateur sécuritaire." },
  ]} asideTitle="Une intervention adaptée au niveau de risque." asideText="Un ordinateur infecté peut exposer vos mots de passe et vos données. Évitez les opérations bancaires jusqu’à ce que le problème soit vérifié." links={[{href:"/depannage-informatique-nicolet",label:"Dépannage informatique"},{href:"/configuration-wifi-sauvegarde",label:"Sauvegarder ses données"},{href:"/tarifs",label:"Prix de l’intervention"}]} servicePath="/suppression-virus" />;
}

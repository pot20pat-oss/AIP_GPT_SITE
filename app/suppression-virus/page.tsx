import type { Metadata } from "next";
import { DetailPage } from "../components";

export const metadata: Metadata = { title: "Suppression de virus et logiciels malveillants | Nicolet", description: "Nettoyage de virus, fenêtres publicitaires, lenteurs et logiciels malveillants à Nicolet. Sécurisation du PC et protection des données." };

export default function Page() {
  return <DetailPage eyebrow="Suppression de virus à Nicolet" image="/service-cybersecurite.webp" imageAlt="Patrick Potvin diagnostique et sécurise un ordinateur depuis son bureau à domicile" title="Votre PC agit bizarrement?" accent="Reprenez le contrôle." intro="Fenêtres publicitaires, faux avertissements, redirections ou lenteurs soudaines : on nettoie le système et on sécurise vos données." points={[
    { title: "Nettoyage complet", text: "Détection et suppression des virus, logiciels espions, extensions nuisibles et programmes indésirables." },
    { title: "Données protégées", text: "On vérifie vos fichiers et vos comptes importants, puis on limite les risques de nouvelle infection." },
    { title: "Conseils simples", text: "Vous repartez avec des gestes faciles à retenir pour reconnaître les pièges et garder votre ordinateur sécuritaire." },
  ]} asideTitle="Une intervention adaptée au niveau de risque." asideText="Un ordinateur infecté peut exposer vos mots de passe et vos données. Évitez les opérations bancaires jusqu’à ce que le problème soit vérifié." links={[{href:"/depannage-informatique-nicolet",label:"Dépannage informatique"},{href:"/tarifs",label:"Prix de l’intervention"},{href:"/faq",label:"Questions de sécurité"}]} />;
}

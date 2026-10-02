import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import { pageMetadata, jsonLd } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Comment ça fonctionne | AIP Atelier Informatique Potvin",
  description: "Découvrez comment se déroule une intervention informatique ou un projet Web avec Atelier Informatique Potvin à Nicolet.",
  path: "/comment-ca-marche",
  image: "/aip-travail-02.webp",
});

const steps = [
  ["01","Vous expliquez le besoin","Appelez ou écrivez pour décrire votre problème, votre projet ou ce que vous souhaitez améliorer. Pas besoin de connaître le vocabulaire technique."],
  ["02","On regarde la situation","Je détermine ce qui est nécessaire et, lorsque possible, ce qui peut être fait à distance ou ce qui nécessite une intervention sur place."],
  ["03","Vous connaissez la portée","Pour une réparation, le diagnostic permet d’établir la suite. Pour un projet Web, la portée et le prix sont clarifiés avant les travaux."],
  ["04","Le travail est réalisé","Réparation, configuration, transfert, sauvegarde, création Web ou développement sur mesure : l’intervention est adaptée au besoin réel."],
  ["05","Vous savez quoi faire ensuite","Je vous explique le résultat et les prochaines étapes utiles, sans vous laisser avec une solution incompréhensible."]
];

export default function Page(){const schema={"@context":"https://schema.org","@type":"HowTo","name":"Comment fonctionne une intervention avec AIP","step":steps.map(([name,title,text])=>({"@type":"HowToStep","name":title,"text":text,"position":Number(name)}))};return <main><SiteHeader/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:jsonLd(schema)}}/>
<section className="detail-hero detail-hero-photo shell"><div className="detail-hero-copy"><div className="eyebrow"><span></span>Simple, du début à la fin</div><h1>Vous avez un problème.<br/><em>On regarde ensemble.</em></h1><p>Que ce soit un ordinateur qui ne fonctionne plus ou une entreprise qui a besoin d’un nouveau site, le principe reste le même : comprendre avant d’agir.</p><div className="hero-actions"><Link className="button button-dark" href="/contact">Décrire mon besoin</Link><a className="button button-outline" href="tel:+18193802999">819 380-2999</a></div></div><figure className="detail-photo"><img src="/aip-travail-02.webp" alt="Patrick Potvin travaillant sur un ordinateur" /></figure></section>
<section className="service-depth section shell"><div className="section-heading"><div><div className="eyebrow"><span></span>Le déroulement</div><h2>Pas de détour.<br/><em>Une étape à la fois.</em></h2></div><p>Le processus peut varier selon le problème, mais voici la logique habituelle d’une intervention.</p></div><div className="scenario-grid">{steps.map(([n,title,text])=><article key={n}><span className="eyebrow"><span></span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
<section className="section shell"><div className="web-value-grid"><article className="web-value-local"><div className="eyebrow"><span></span>Informatique</div><h2>Réparation, configuration<br/><em>et accompagnement.</em></h2><p>Diagnostic, ordinateur, virus, Wi-Fi, sauvegarde, transfert de données et assistance à distance.</p><Link className="button button-outline" href="/depannage-informatique-nicolet">Voir les services informatiques</Link></article><article className="web-value-included"><div className="eyebrow"><span></span>Web</div><h2>Un projet clair<br/><em>avant de coder.</em></h2><p>Site vitrine, boutique en ligne ou CMS : on définit d’abord ce que le site doit réellement accomplir.</p><Link className="button button-outline" href="/creation-sites-web">Voir les services Web</Link></article></div></section><SiteFooter/></main>}

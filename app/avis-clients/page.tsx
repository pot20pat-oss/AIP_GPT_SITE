import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components";
import { pageMetadata, googleBusinessUrl } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Avis clients | Atelier Informatique Potvin",
  description: "Consultez les avis publics et la fiche Google d’Atelier Informatique Potvin à Nicolet.",
  path: "/avis-clients",
  image: "/aip-travail-13.webp",
});

export default function Page(){return <main><SiteHeader/>
<section className="detail-hero detail-hero-photo shell"><div className="detail-hero-copy"><div className="eyebrow"><span></span>Avis clients</div><h1>Ce sont les clients<br/><em>qui parlent le mieux.</em></h1><p>Les avis publics sont consultables directement sur la fiche Google de l’entreprise. Je préfère vous laisser voir les commentaires dans leur contexte plutôt que de sélectionner quelques phrases.</p><div className="hero-actions"><a className="button button-dark" href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">Voir les avis Google</a><a className="button button-outline" href="tel:+18193802999">Parler à Patrick</a></div></div><figure className="detail-photo detail-photo-portrait"><img src="/aip-travail-13.webp" alt="Patrick Potvin, Atelier Informatique Potvin" /></figure></section>
<section className="section shell"><div className="review-proof"><div className="review-score"><strong>5,0 ★</strong><span>10 avis Google</span></div><div><div className="eyebrow"><span></span>Preuve publique</div><h2>Les avis sont consultables<br/><em>directement sur Google.</em></h2><p>Le nombre et la note affichés sur le site correspondent à l’information publique que nous avons utilisée dans le contenu du site. Pour voir les avis eux-mêmes et les informations les plus récentes, consultez la fiche Google.</p><a className="button button-dark" href={googleBusinessUrl} target="_blank" rel="noopener noreferrer">Ouvrir la fiche Google</a></div></div></section>
<SiteFooter/></main>}

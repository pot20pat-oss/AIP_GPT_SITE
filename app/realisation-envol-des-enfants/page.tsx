import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components";
import { businessName, jsonLd, webPageMetadata, siteUrl, webSiteUrl } from "../seo";

const path = "/realisation-envol-des-enfants";

export const metadata: Metadata = webPageMetadata({
  title: "L’Envol des Enfants : boutique en ligne sur mesure | AIP",
  description: "Étude de cas AIP : conception d’une boutique e-commerce bilingue avec catalogue, gestion multi-marché et administration sur mesure pour L’Envol des Enfants.",
  path,
  image: "/projet-envol-enfants.webp",
});

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${webSiteUrl}${path}#project`,
        name: "L’Envol des Enfants — boutique e-commerce et CMS sur mesure",
        description: "Conception et développement d’une boutique e-commerce bilingue avec catalogue, gestion multi-marché et outils d’administration sur mesure.",
        url: `${webSiteUrl}${path}`,
        image: `${webSiteUrl}/projet-envol-enfants.webp`,
        creator: { "@id": `${siteUrl}/#entreprise`, name: businessName },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: webSiteUrl },
          { "@type": "ListItem", position: 2, name: "Réalisations", item: `${webSiteUrl}/#realisations` },
          { "@type": "ListItem", position: 3, name: "L’Envol des Enfants", item: `${webSiteUrl}${path}` },
        ],
      },
    ],
  };

  const points = [
    {
      title: "Le mandat",
      text: "Créer une boutique de jouets capable de présenter un catalogue réel tout en donnant à l’entreprise des outils de gestion adaptés à ses opérations. Le projet ne se limite donc pas à une vitrine : le site public et l’administration ont été pensés comme un même système.",
    },
    {
      title: "Une boutique bilingue",
      text: "L’interface publique prend en charge le français et l’anglais. Les contenus, catégories et parcours ont été structurés pour permettre à la boutique de servir plusieurs clientèles sans maintenir deux sites séparés.",
    },
    {
      title: "Deux marchés dans une même architecture",
      text: "Le projet gère des données de marché et de région afin d’adapter la boutique au Québec et à Conakry. La visibilité des produits et certaines informations commerciales peuvent ainsi varier selon le marché sélectionné.",
    },
    {
      title: "Un catalogue administrable",
      text: "Produits, catégories, prix, disponibilité, images et autres données du catalogue sont centralisés afin que l’administration puisse évoluer avec le volume de produits plutôt que dépendre de modifications manuelles dans les pages.",
    },
    {
      title: "Des outils conçus autour du travail réel",
      text: "L’administration prévoit notamment la gestion multi-images, la visibilité des produits par boutique et des actions groupées. L’objectif est de réduire les manipulations répétitives lorsque plusieurs produits doivent être ajoutés ou corrigés.",
    },
    {
      title: "Une infrastructure faite pour évoluer",
      text: "Le projet utilise Vinext sur Cloudflare Workers avec D1 pour les données et R2 pour le stockage d’images. Cette architecture sépare clairement l’interface, les données du catalogue et les fichiers afin de pouvoir faire évoluer le commerce par étapes.",
    },
  ];

  const features = [
    { title: "Catalogue et catégories", text: "Une structure de catalogue permet d’organiser les produits, les collections et les informations nécessaires à la boutique." },
    { title: "Gestion des images", text: "Plusieurs images peuvent être associées aux produits afin de mieux présenter les articles et de faciliter la gestion du catalogue." },
    { title: "Visibilité par marché", text: "Les données de marché permettent d’adapter la présence des produits et certaines informations entre le Québec et Conakry." },
    { title: "Administration sur mesure", text: "Le CMS est construit autour des tâches du commerce plutôt qu’autour d’un tableau de bord générique imposé par un thème." },
    { title: "Interface bilingue FR / EN", text: "La boutique publique peut être consultée en français ou en anglais dans une architecture commune." },
    { title: "Base Cloudflare", text: "Workers, D1 et R2 fournissent l’exécution, la base de données et le stockage nécessaires au projet." },
  ];

  return <main className="web-service-page web-case-study">
    <SiteHeader />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />

    <section className="detail-hero detail-hero-photo shell">
      <div className="detail-hero-copy">
        <div className="eyebrow"><span></span>Étude de cas · E-commerce &amp; CMS</div>
        <h1>L’Envol des Enfants.<br /><em>Une boutique pensée autour du commerce.</em></h1>
        <p>Pour ce projet client, AIP a développé une boutique e-commerce bilingue et une administration personnalisée afin de réunir le catalogue, les images, les marchés et les opérations de gestion dans une même solution.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="https://envoldesenfants.com/" target="_blank" rel="noopener noreferrer">Voir le site en ligne</a>
          <Link className="button button-outline" href="/creation-boutique-en-ligne">Créer une boutique</Link>
        </div>
      </div>
      <figure className="detail-photo">
        <img src="/projet-envol-enfants.webp" alt="Boutique en ligne L’Envol des Enfants développée par Atelier Informatique Potvin" />
      </figure>
    </section>

    <section className="detail-body section">
      <div className="shell detail-grid">
        <div className="detail-points">
          {points.map((point, index) => <article key={point.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{point.title}</h2><p>{point.text}</p></div></article>)}
        </div>
        <aside>
          <div className="eyebrow"><span></span>Projet client réel</div>
          <h2>Du site public jusqu’aux outils de gestion.</h2>
          <p>Cette réalisation montre le type de projet qu’AIP peut prendre en charge lorsqu’une entreprise a besoin de plus qu’un site vitrine : catalogue, logique de marché, administration et infrastructure technique sont conçus ensemble.</p>
          <div className="trust-box">
            <div><strong>FR / EN</strong><span>boutique bilingue</span></div>
            <div><strong>2 marchés</strong><span>Québec et Conakry</span></div>
          </div>
        </aside>
      </div>
    </section>

    <section className="service-depth section shell">
      <div className="section-heading">
        <div><div className="eyebrow"><span></span>Fonctions développées</div><h2>Une solution concrète.<br /><em>Pas un thème préfabriqué.</em></h2></div>
        <p>Chaque fonction répond à un besoin du catalogue, de la boutique publique ou de l’administration.</p>
      </div>
      <div className="scenario-grid">
        {features.map(feature => <article key={feature.title}><h3>{feature.title}</h3><p>{feature.text}</p></article>)}
      </div>
    </section>

    <section className="related section shell">
      <div className="eyebrow"><span></span>Pour un projet similaire</div>
      <div className="related-links">
        <Link className="button button-outline" href="/creation-boutique-en-ligne">Boutique en ligne</Link>
        <Link className="button button-outline" href="/developpement-cms-sur-mesure">CMS sur mesure</Link>
        <Link className="button button-outline" href="/site-web-pme">Site Web pour PME</Link>
        <Link className="button button-outline" href="/creation-sites-web">Création de sites Web</Link>
      </div>
    </section>

    <SiteFooter />
  </main>;
}

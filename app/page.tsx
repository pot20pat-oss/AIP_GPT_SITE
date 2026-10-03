import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components";

export default function Home() {
  return (
    <main className="home-page home-short">
      <SiteHeader />

      <section className="hero-clean hero-split" id="accueil">
        <div className="hero-split-media">
          <img className="hero-clean-bg" src="/hero-aip-clean.png" alt="Atelier Informatique Potvin" fetchPriority="high" decoding="async" />
        </div>
        <div className="hero-clean-overlay hero-split-copy">
          <div className="hero-clean-brand">ATELIER INFORMATIQUE{" "}<strong>POTVIN</strong></div>
          <div className="hero-clean-location">● &nbsp; NICOLET · BÉCANCOUR · TROIS-RIVIÈRES</div>
          <h1>Informatique &amp; Web<span>.</span></h1>
          <h2>Des solutions qui fonctionnent.</h2>
          <p>Un problème informatique à régler ou un projet Web à construire? Choisissez votre besoin et allez directement au bon service.</p>
          <div className="hero-clean-actions hero-intent-actions">
            <Link className="hero-intent-choice hero-intent-it" href="/depannage-informatique-nicolet">J’ai un problème informatique</Link>
            <Link className="hero-intent-choice hero-intent-web" href="/creation-sites-web">J’ai un projet Web</Link>
          </div>
        </div>
      </section>

      <section className="metrics">
        <div className="shell metrics-grid">
          <div><strong>40 ans</strong><span>d’expérience sur le terrain</span></div>
          <div><strong>50 km</strong><span>de service à domicile</span></div>
          <div><strong>5,0 <i>★</i></strong><span>sur Google, 10 avis</span></div>
          <div><strong>1 seul</strong><span>interlocuteur, du début à la fin</span></div>
        </div>
      </section>

      <section className="home-paths section shell" aria-label="Choisir un service">
        <div className="section-heading home-paths-heading">
          <div><div className="eyebrow"><span></span> Deux expertises</div><h2>Choisissez votre besoin.<br /><em>Je vous amène au bon endroit.</em></h2></div>
          <p>L’accueil reste simple. Les détails sont maintenant regroupés dans les pages Informatique et Sites Web.</p>
        </div>
        <div className="home-path-grid">
          <article className="home-path-card home-path-card-it">
            <span>INFORMATIQUE</span>
            <h3>Un problème à régler?</h3>
            <p>PC lent, virus, Windows, Wi-Fi, installation, transfert de données ou problème qui peut être vérifié à distance.</p>
            <div className="home-path-actions">
              <Link className="button button-dark home-intent-it" href="/depannage-informatique-nicolet">Voir les services informatiques</Link>
              <Link className="text-link home-intent-it" href="/assistance-informatique-a-distance">Assistance rapide à distance</Link>
            </div>
          </article>

          <article className="home-path-card home-path-card-web">
            <span>SITES WEB</span>
            <h3>Un projet pour votre entreprise?</h3>
            <p>Site vitrine, boutique en ligne ou outil de gestion : une solution claire, adaptée à votre activité et simple à utiliser.</p>
            <div className="home-path-actions">
              <Link className="button button-dark home-intent-web" href="/creation-sites-web">Voir les services Web</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="home-featured section" id="realisations">
        <div className="shell home-featured-grid">
          <a className="home-featured-image" href="https://envoldesenfants.com/" target="_blank" rel="noopener noreferrer" aria-label="Visiter L’Envol des Enfants">
            <img src="/projet-envol-enfants.png" alt="Boutique en ligne L’Envol des Enfants" loading="lazy" decoding="async" />
          </a>
          <div className="home-featured-copy">
            <div className="eyebrow"><span></span> Réalisation Web</div>
            <h2>L’Envol des Enfants.<br /><em>Une boutique pensée pour le vrai travail.</em></h2>
            <p>Boutique bilingue avec gestion des produits, photos, prix, stock et visibilité. L’objectif : que la cliente puisse gérer son commerce simplement.</p>
            <div className="home-featured-actions">
              <Link className="button button-dark" href="/realisation-envol-des-enfants">Voir l’étude de cas</Link>
              <Link className="button button-outline home-intent-web" href="/creation-sites-web">Voir les services Web</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews section">
        <div className="shell">
          <div className="section-heading">
            <div><div className="eyebrow"><span></span> Ce que mes clients en disent</div><h2>De vraies personnes.<br /><em>De vrais résultats.</em></h2></div>
            <p>Une note de 5,0 sur Google, grâce à dix avis de clients de la région.</p>
          </div>
          <div className="reviews-grid">
            <article><div className="stars">★★★★★</div><blockquote>« Service impeccable. Je recommande fortement ses services, il est expert dans son domaine. »</blockquote><span>Alex Therrien</span></article>
            <article><div className="stars">★★★★★</div><blockquote>« Un gros problème de micro, j’ai gossé dessus pendant deux mois, il a trouvé le problème en 10 minutes. »</blockquote><span>Etienne Therrien</span></article>
            <article><div className="stars">★★★★★</div><blockquote>« Service dépannage au top. Service hors pair pour résoudre mon problème, avec un langage clair et de l’humour. »</blockquote><span>Solange Poulin</span></article>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="shell contact-inner">
          <div>
            <div className="eyebrow"><span></span> Informatique ou Web</div>
            <h2>Un problème ou un projet?<br /><em>Parlons-en.</em></h2>
            <p>Expliquez-moi ce dont vous avez besoin. Je vous dirai clairement ce qu’on peut faire et quelle est la prochaine étape.</p>
          </div>
          <div className="contact-card">
            <span>Joignez-moi directement</span>
            <a className="big-phone" href="tel:+18193802999">819 380-2999</a>
            <p>462, rue D. N. St-Cyr<br />Nicolet (Québec) J3T 1H3</p>
            <div className="response-note"><span></span>Réponse habituellement dans la journée</div>
            <a className="button button-lime" href="tel:+18193802999">Appeler maintenant</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

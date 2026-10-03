import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "AIP Assistance | Téléchargement pour Windows – Atelier Potvin",
  description: "Téléchargez AIP Assistance pour Windows et démarrez une séance de dépannage à distance avec Atelier Informatique Potvin.",
  path: "/assistance",
  image: "/aip-travail-04.webp",
});

export default function Page() {
  return (
    <main>
      <SiteHeader />

      <section className="detail-hero">
        <div className="eyebrow"><span></span> AIP Assistance à distance</div>
        <h1>Besoin d’aide maintenant? <em>Téléchargez AIP Assistance.</em></h1>
        <p>
          Le petit installateur AIP prépare automatiquement RustDesk pour utiliser le serveur privé
          d’Atelier Informatique Potvin. Vous lancez l’installation, puis vous me communiquez simplement
          l’identifiant affiché par RustDesk.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="/downloads/AIP-Assistance-Windows-x64.zip" download>
            Télécharger pour Windows 64 bits
          </a>
          <a className="text-link" href="tel:+18193802999">Besoin d’aide? 819 380-2999</a>
        </div>
      </section>

      <section className="detail-body section">
        <div className="shell detail-grid">
          <div className="detail-points">
            <article>
              <span>01</span>
              <div>
                <h2>Téléchargez et extrayez le ZIP</h2>
                <p>Ouvrez le fichier téléchargé et extrayez son contenu dans un dossier avant de lancer l’installation.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h2>Lancez Installer-AIP-Assistance.cmd</h2>
                <p>Double-cliquez sur le fichier puis acceptez la demande de droits administrateur de Windows.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h2>Attendez l’ouverture de RustDesk</h2>
                <p>L’installateur configure automatiquement le serveur AIP et ouvre RustDesk lorsque la vérification est terminée.</p>
              </div>
            </article>
            <article>
              <span>04</span>
              <div>
                <h2>Communiquez-moi votre ID</h2>
                <p>Donnez-moi l’identifiant RustDesk affiché à l’écran. Je pourrai alors démarrer la séance d’assistance avec votre autorisation.</p>
              </div>
            </article>
          </div>

          <aside>
            <div className="eyebrow"><span></span> Installation contrôlée</div>
            <h2>Ce que fait AIP Assistance</h2>
            <p>
              Si RustDesk n’est pas déjà installé, l’outil télécharge le MSI officiel RustDesk 1.5.0 depuis GitHub,
              vérifie son empreinte SHA-256, puis configure le serveur AIP. Aucun mot de passe permanent n’est créé
              par cet installateur.
            </p>
            <div className="trust-box">
              <div><strong>Windows</strong><span>10 / 11 · 64 bits</span></div>
              <div><strong>AIP</strong><span>serveur privé</span></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="related shell">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span></span> À savoir avant de commencer</div>
            <h2>Simple à lancer.<br /><em>Transparent sur ce qui s’installe.</em></h2>
          </div>
          <p>
            L’installateur AIP lui-même n’est pas signé numériquement. Windows peut donc afficher une demande
            de confirmation. Le client RustDesk téléchargé provient de la publication officielle RustDesk.
          </p>
        </div>
        <div className="related-links">
          <a href="/assistance-informatique-a-distance">Voir le service d’assistance à distance <span>→</span></a>
          <a href="tel:+18193802999">Appeler Patrick <span>→</span></a>
          <a href="/">Retour à l’accueil <span>→</span></a>
        </div>
      </section>

      <section className="faq-section section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span></span> Questions fréquentes</div>
              <h2>Avant la connexion.<br /><em>Vous gardez le contrôle.</em></h2>
            </div>
          </div>
          <div className="faq-list">
            <details>
              <summary>Est-ce que vous pouvez entrer dans mon ordinateur sans moi? <span>+</span></summary>
              <p>Le programme doit être démarré et une connexion doit être autorisée selon les réglages RustDesk. L’installateur AIP ne crée aucun mot de passe permanent.</p>
            </details>
            <details>
              <summary>Pourquoi Windows demande les droits administrateur? <span>+</span></summary>
              <p>Ils sont nécessaires pour installer ou configurer correctement RustDesk et son service Windows.</p>
            </details>
            <details>
              <summary>Dois-je configurer un serveur ou une clé? <span>+</span></summary>
              <p>Non. Le fichier AIP configure automatiquement le serveur d’assistance et sa clé publique.</p>
            </details>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

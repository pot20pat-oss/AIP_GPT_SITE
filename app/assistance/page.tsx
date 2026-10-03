import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "AIP Assistance | Windows, Mac et mobile – Atelier Potvin",
  description: "Téléchargez AIP Assistance pour Windows ou Mac et configurez RustDesk sur Android pour une séance de dépannage à distance avec Atelier Informatique Potvin.",
  path: "/assistance",
  image: "/aip-travail-04.webp",
});

export default function Page() {
  return (
    <main>
      <SiteHeader />

      <section className="download-hero shell">
        <div className="download-hero-copy">
          <nav className="breadcrumb" aria-label="Fil d’Ariane">
            <a href="/">Accueil</a><span>/</span>
            <a href="/assistance-informatique-a-distance">Assistance à distance</a><span>/</span>
            <strong>Téléchargement</strong>
          </nav>
          <div className="eyebrow"><span></span> AIP Assistance à distance</div>
          <h1>Besoin d’aide maintenant? <em>Choisissez votre appareil.</em></h1>
          <p>
            AIP Assistance prépare RustDesk pour utiliser le serveur privé d’Atelier Informatique Potvin.
            Sur Windows et Mac, utilisez l’installateur AIP. Sur Android, installez RustDesk puis scannez
            le code QR de configuration.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#telechargements">Voir les téléchargements</a>
            <a className="text-link" href="tel:+18193802999">Besoin d’aide? 819 380-2999</a>
          </div>
        </div>
        <figure className="download-hero-visual">
          <img src="/aip-download-icon.webp" alt="" aria-hidden="true" width="384" height="329" />
        </figure>
      </section>

      <section className="detail-body section" id="telechargements">
        <div className="shell">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span></span> Téléchargements</div>
              <h2>Windows, Mac et mobile.<br /><em>Le bon outil pour chaque appareil.</em></h2>
            </div>
            <p>Les versions Windows et Mac configurent automatiquement le serveur AIP. Android se configure en scannant le QR ci-dessous.</p>
          </div>

          <div className="seo-prices">
            <article>
              <span>Windows 10 / 11 · 64 bits</span>
              <strong>Windows</strong>
              <p>Téléchargez le ZIP, extrayez-le puis lancez Installer-AIP-Assistance.cmd. Le serveur AIP et sa clé sont configurés automatiquement.</p>
              <a className="button button-dark download-button" href="/downloads/AIP-Assistance-Windows-x64.zip" download>Télécharger pour Windows</a>
            </article>

            <article>
              <span>Apple Silicon et Intel</span>
              <strong>macOS</strong>
              <p>L’installateur détecte automatiquement le processeur du Mac, télécharge le DMG officiel RustDesk 1.5.0 et configure le serveur AIP.</p>
              <a className="button button-dark download-button" href="/downloads/AIP-Assistance-macOS.zip" download>Télécharger pour Mac</a>
            </article>

            <article>
              <span>Android</span>
              <strong>Android</strong>
              <p>Installez l’APK officiel RustDesk 1.5.0. Ensuite, dans RustDesk, ouvrez la configuration du serveur et scannez le code QR AIP plus bas.</p>
              <a className="button button-dark download-button" href="https://github.com/rustdesk/rustdesk/releases/download/1.5.0/rustdesk-1.5.0-universal-signed.apk">Télécharger RustDesk Android</a>
            </article>

            <article>
              <span>iPhone et iPad</span>
              <strong>iOS / iPadOS</strong>
              <p>L’application RustDesk pour iPhone et iPad peut servir à contrôler un autre ordinateur, mais iOS ne permet pas de prendre le contrôle à distance de l’iPhone ou de l’iPad.</p>
              <a className="button button-dark download-button" href="https://apps.apple.com/ca/app/rustdesk-remote-desktop/id1581225015" target="_blank" rel="noopener noreferrer">Ouvrir dans l’App Store</a>
            </article>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span></span> Android · configuration AIP</div>
            <h2>Scannez une fois.<br /><em>Le serveur est configuré.</em></h2>
          </div>
          <p>Dans RustDesk sur Android, ouvrez Paramètres → Serveur ID/Relais puis utilisez l’option de lecture du code QR.</p>
        </div>
        <div className="detail-grid">
          <div className="detail-points">
            <article>
              <span>01</span>
              <div>
                <h2>Installez RustDesk</h2>
                <p>Utilisez le bouton Android ci-dessus pour installer l’APK officiel RustDesk.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h2>Scannez le code AIP</h2>
                <p>Le code contient uniquement l’adresse du serveur AIP et sa clé publique de chiffrement.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h2>Démarrez le partage d’écran</h2>
                <p>Android demandera l’autorisation de capturer l’écran et, pour le contrôle tactile, l’autorisation d’accessibilité de RustDesk.</p>
              </div>
            </article>
            <article>
              <span>04</span>
              <div>
                <h2>Communiquez votre ID</h2>
                <p>Donnez-moi l’identifiant RustDesk affiché à l’écran pour démarrer la séance.</p>
              </div>
            </article>
          </div>
          <aside style={{ textAlign: "center" }}>
            <div className="eyebrow"><span></span> Configuration mobile</div>
            <h2>QR AIP</h2>
            <img src="/aip-rustdesk-config-qr.png" alt="Code QR de configuration RustDesk pour le serveur AIP" width="330" height="330" style={{ maxWidth: "100%", height: "auto" }} />
            <p>Serveur : assistance.atelierpotvin.ca</p>
          </aside>
        </div>
      </section>

      <section className="detail-body section">
        <div className="shell detail-grid">
          <div className="detail-points">
            <article>
              <span>01</span>
              <div>
                <h2>Windows : téléchargez et extrayez le ZIP</h2>
                <p>Double-cliquez ensuite sur Installer-AIP-Assistance.cmd et acceptez la demande administrateur.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h2>Mac : lancez le fichier .command</h2>
                <p>Si macOS le bloque, utilisez clic droit → Ouvrir. Le mot de passe administrateur du Mac peut être demandé pendant l’installation.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h2>Mac : accordez les permissions</h2>
                <p>Pour être contrôlé à distance, RustDesk doit recevoir les autorisations macOS d’enregistrement de l’écran et d’accessibilité. La surveillance de l’entrée peut aussi être demandée.</p>
              </div>
            </article>
            <article>
              <span>04</span>
              <div>
                <h2>Communiquez-moi votre ID</h2>
                <p>Une fois RustDesk ouvert et prêt, donnez-moi simplement l’identifiant affiché.</p>
              </div>
            </article>
          </div>

          <aside>
            <div className="eyebrow"><span></span> Installation contrôlée</div>
            <h2>Ce que fait AIP Assistance</h2>
            <p>
              Les installateurs Windows et Mac téléchargent RustDesk 1.5.0 depuis la publication officielle,
              vérifient l’empreinte SHA-256 du fichier téléchargé et appliquent l’adresse du serveur AIP ainsi
              que sa clé publique. Aucun mot de passe permanent n’est créé par les installateurs AIP.
            </p>
            <div className="trust-box">
              <div><strong>AIP</strong><span>serveur privé</span></div>
              <div><strong>1.5.0</strong><span>RustDesk</span></div>
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
            Les installateurs AIP ne sont pas signés numériquement. Windows ou macOS peuvent donc afficher
            une demande de confirmation. RustDesk lui-même est téléchargé depuis sa publication officielle.
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
              <p>Le programme doit être démarré et une connexion doit être autorisée selon les réglages RustDesk. Les installateurs AIP ne créent aucun mot de passe permanent.</p>
            </details>
            <details>
              <summary>Pourquoi Windows ou macOS demande les droits administrateur? <span>+</span></summary>
              <p>Ils sont nécessaires pour installer RustDesk et appliquer correctement la configuration du serveur AIP.</p>
            </details>
            <details>
              <summary>Peut-on dépanner un téléphone Android? <span>+</span></summary>
              <p>Oui. Android permet le partage d’écran et le contrôle à distance avec les permissions requises. Certaines autorisations doivent être acceptées directement sur le téléphone.</p>
            </details>
            <details>
              <summary>Peut-on contrôler un iPhone ou un iPad à distance? <span>+</span></summary>
              <p>Non. iOS ne permet pas à RustDesk d’agir comme appareil contrôlé. L’application iOS peut toutefois servir à contrôler un ordinateur depuis l’iPhone ou l’iPad.</p>
            </details>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

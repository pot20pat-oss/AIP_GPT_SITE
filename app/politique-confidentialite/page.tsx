import type { Metadata } from "next";
import { headers } from "next/headers";
import { SiteFooter, SiteHeader } from "../components";
import { siteUrl, webSiteUrl } from "../seo";

async function isCreationDomain() {
  const requestHeaders = await headers();
  const host = (requestHeaders.get("host") || "").split(":")[0].toLowerCase();
  return host === "aipcreation.ca" || host === "www.aipcreation.ca" || host === "aipconceptionweb.ca" || host === "www.aipconceptionweb.ca";
}

export async function generateMetadata(): Promise<Metadata> {
  const web = await isCreationDomain();
  const base = web ? webSiteUrl : siteUrl;
  const title = web ? "Politique de confidentialité | AIP Conception Web" : "Politique de confidentialité | Atelier Informatique Potvin";
  const description = "Information sur les renseignements recueillis, leur utilisation et les services utilisés sur le site.";
  return {
    title,
    description,
    alternates: { canonical: `${base}/politique-confidentialite` },
    openGraph: { title, description, url: `${base}/politique-confidentialite`, type: "website", locale: "fr_CA" },
  };
}

export default async function Page() {
  const web = await isCreationDomain();

  return <main className={web ? "web-service-page privacy-page" : "privacy-page"}>
    <SiteHeader />
    <section className="detail-hero shell">
      <div className="eyebrow"><span></span>Confidentialité</div>
      <h1>Politique de confidentialité</h1>
      <p>Cette page explique simplement quels renseignements peuvent être recueillis lorsque vous utilisez {web ? "aipconceptionweb.ca" : "atelierpotvin.ca"} et à quoi ils servent.</p>
    </section>

    <section className="section shell privacy-content">
      <article>
        <h2>Renseignements que vous fournissez</h2>
        <p>Lorsque vous utilisez un formulaire de contact, vous pouvez transmettre votre nom, vos coordonnées et le message décrivant votre demande. Vous pouvez aussi communiquer directement par téléphone ou par courriel.</p>
      </article>

      <article>
        <h2>Utilisation des renseignements</h2>
        <p>Les renseignements transmis servent à répondre à votre demande, préparer une intervention ou discuter d’un projet. Ils ne sont pas vendus à des tiers.</p>
      </article>

      <article>
        <h2>Formulaires</h2>
        <p>Certains formulaires du site sont transmis au moyen du service FormSubmit afin d’acheminer votre demande par courriel. Les renseignements saisis passent donc par ce service au moment de l’envoi.</p>
      </article>

      <article>
        <h2>Mesure d’audience</h2>
        <p>Le site utilise Google Analytics afin de mesurer l’utilisation générale du site, par exemple les pages consultées et certaines interactions. Ces données servent à comprendre quelles pages sont utiles et à améliorer le site.</p>
      </article>

      <article>
        <h2>Conservation et protection</h2>
        <p>Les renseignements reçus sont conservés seulement aussi longtemps qu’ils sont utiles pour répondre à la demande, assurer le suivi du service ou respecter les obligations applicables. Des mesures raisonnables sont prises pour limiter l’accès aux renseignements reçus.</p>
      </article>

      <article>
        <h2>Vos questions et vos renseignements</h2>
        <p>Pour poser une question sur la confidentialité ou demander une correction concernant des renseignements que vous avez transmis, écrivez à <a href="mailto:contact@atelierpotvin.ca">contact@atelierpotvin.ca</a>.</p>
      </article>

      <article>
        <h2>Mise à jour</h2>
        <p>Cette politique peut être mise à jour si les outils ou les pratiques du site changent. Dernière mise à jour : 5 octobre 2026.</p>
      </article>
    </section>
    <SiteFooter />
  </main>;
}

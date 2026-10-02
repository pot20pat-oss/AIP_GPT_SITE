import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/depannage-informatique-nicolet",
    "/reparation-ordinateur-nicolet",
    "/depannage-informatique-becancour",
    "/depannage-informatique-trois-rivieres",
    "/suppression-virus",
    "/assistance-informatique-a-distance",
    "/installation-ordinateur-transfert-donnees",
    "/configuration-wifi-sauvegarde",
    "/creation-sites-web",
    "/creation-site-web-nicolet",
    "/creation-site-web-becancour",
    "/creation-site-web-trois-rivieres",
    "/site-web-pme",
    "/creation-boutique-en-ligne",
    "/developpement-cms-sur-mesure",
    "/realisation-envol-des-enfants",
    "/tarifs",
    "/faq",
    "/a-propos",
    "/comment-ca-marche",
    "/contact",
    "/avis-clients",
  ];

  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/creation-sites-web" ? 0.95 : path.startsWith("/creation-site-web-") ? 0.9 : ["/site-web-pme", "/creation-boutique-en-ligne", "/developpement-cms-sur-mesure", "/realisation-envol-des-enfants"].includes(path) ? 0.85 : 0.8,
  }));
}

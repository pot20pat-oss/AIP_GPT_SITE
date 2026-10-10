import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { siteUrl, webSiteUrl } from "./seo";

const itPaths = [
  "",
  "/depannage-informatique-nicolet",
  "/reparation-ordinateur-nicolet",
  "/depannage-informatique-becancour",
  "/depannage-informatique-trois-rivieres",
  "/suppression-virus",
  "/assistance-informatique-a-distance",
  "/installation-ordinateur-transfert-donnees",
  "/configuration-wifi-sauvegarde",
  "/tarifs",
  "/faq",
  "/a-propos",
  "/comment-ca-marche",
  "/contact",
  "/avis-clients",
];

const webPaths = [
  "",
  "/creation-sites-web",
  "/creation-site-web-nicolet",
  "/creation-site-web-becancour",
  "/creation-site-web-trois-rivieres",
  "/creation-site-web-saint-celestin",
  "/creation-site-web-centre-du-quebec",
  "/site-web-pme",
  "/creation-boutique-en-ligne",
  "/developpement-cms-sur-mesure",
  "/realisation-envol-des-enfants",
  "/tarifs",
  "/contact",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const requestHeaders = await headers();
  const host = (requestHeaders.get("host") || "").split(":")[0].toLowerCase();
  const web = host === "aipcreation.ca" || host === "www.aipcreation.ca" || host === "aipconceptionweb.ca" || host === "www.aipconceptionweb.ca";
  const base = web ? webSiteUrl : siteUrl;
  const paths = web ? webPaths : itPaths;

  return paths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : web
      ? ["/creation-sites-web", "/creation-site-web-nicolet", "/site-web-pme"].includes(path) ? 0.95 : ["/creation-site-web-becancour", "/creation-site-web-trois-rivieres"].includes(path) ? 0.9 : ["/creation-site-web-saint-celestin", "/creation-site-web-centre-du-quebec"].includes(path) ? 0.85 : 0.8
      : ["/depannage-informatique-nicolet", "/assistance-informatique-a-distance"].includes(path) ? 0.95 : 0.8,
  }));
}

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
    priority: path === "" ? 1 : ["/depannage-informatique-nicolet", "/assistance-informatique-a-distance"].includes(path) ? 0.95 : 0.8,
  }));
}

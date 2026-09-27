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
    "/tarifs",
    "/faq",
  ];

  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/creation-sites-web" ? 0.9 : 0.8,
  }));
}

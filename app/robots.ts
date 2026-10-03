import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { siteUrl, webSiteUrl } from "./seo";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const requestHeaders = await headers();
  const host = (requestHeaders.get("host") || "").split(":")[0].toLowerCase();
  const base = host === "aipcreation.ca" || host === "www.aipcreation.ca" ? webSiteUrl : siteUrl;

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}

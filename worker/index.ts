/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const primaryHost = "atelierpotvin.ca";
    const webHost = "aipcreation.ca";

    if (url.hostname === "www.atelierpotvin.ca" || url.hostname === "atelierpotvin.tech" || url.hostname === "www.atelierpotvin.tech") {
      url.protocol = "https:";
      url.hostname = primaryHost;
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }

    if (url.hostname === "www.aipcreation.ca") {
      url.protocol = "https:";
      url.hostname = webHost;
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }

    const webPaths = [
      "/creation-sites-web",
      "/creation-site-web-nicolet",
      "/creation-site-web-becancour",
      "/creation-site-web-trois-rivieres",
      "/site-web-pme",
      "/creation-boutique-en-ligne",
      "/developpement-cms-sur-mesure",
      "/realisation-envol-des-enfants",
    ];
    const itPrefixes = [
      "/depannage-informatique",
      "/reparation-ordinateur",
      "/suppression-virus",
      "/assistance",
      "/installation-ordinateur",
      "/installation-transfert",
      "/configuration-wifi",
      "/reseau-sauvegarde",
    ];

    if (url.hostname === primaryHost && webPaths.includes(url.pathname)) {
      const target = new URL(url.toString());
      target.hostname = webHost;
      target.pathname = url.pathname;
      return Response.redirect(target.toString(), 301);
    }

    if (url.hostname === webHost && (itPrefixes.some(prefix => url.pathname.startsWith(prefix)) || ["/a-propos", "/avis-clients", "/faq", "/comment-ca-marche"].includes(url.pathname))) {
      const target = new URL(url.toString());
      target.hostname = primaryHost;
      return Response.redirect(target.toString(), 301);
    }

    if (url.hostname === webHost && url.pathname === "/robots.txt") {
      return new Response(`User-agent: *
Allow: /

Sitemap: https://${webHost}/sitemap.xml
Host: https://${webHost}
`, { headers: { "content-type": "text/plain; charset=utf-8" } });
    }

    if (url.hostname === webHost && url.pathname === "/sitemap.xml") {
      const paths = ["", "/creation-site-web-nicolet", "/creation-site-web-becancour", "/creation-site-web-trois-rivieres", "/site-web-pme", "/creation-boutique-en-ligne", "/developpement-cms-sur-mesure", "/realisation-envol-des-enfants", "/tarifs", "/contact"];
      const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map(path => `  <url><loc>https://${webHost}${path}</loc></url>`).join("\n")}\n</urlset>`;
      return new Response(body, { headers: { "content-type": "application/xml; charset=utf-8" } });
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;

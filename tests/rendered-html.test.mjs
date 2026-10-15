import assert from "node:assert/strict";
import test from "node:test";

async function renderHome(url) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request(url, {
      headers: { accept: "text/html", host: new URL(url).hostname },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  return response.text();
}

test("renders Atelier Informatique Potvin metadata and v20 icons", async () => {
  const html = await renderHome("http://localhost/");

  assert.match(html, /<html[^>]*\blang="fr-CA"/i);
  assert.match(
    html,
    /<title>Dépannage informatique à Nicolet \| Atelier Informatique Potvin<\/title>/i,
  );
  assert.match(html, /\/atelierpotvin\/logo-header\.webp\?v=20/);
  assert.match(html, /\/atelierpotvin\/favicon\.ico\?v=20/);
  assert.match(html, /\/atelierpotvin\/favicon-32x32\.png\?v=20/);
  assert.match(html, /\/atelierpotvin\/apple-touch-icon\.png\?v=20/);
  assert.match(html, /\/atelierpotvin\/site\.webmanifest\?v=20/);
});

test("renders AIP Conception Web metadata and v20 icons", async () => {
  const html = await renderHome("https://aipconceptionweb.ca/");

  assert.match(
    html,
    /<title>Création de sites Web à Nicolet \| AIP Conception Web<\/title>/i,
  );
  assert.match(html, /\/aipconceptionweb\/logo-header\.webp\?v=20/);
  assert.match(html, /\/aipconceptionweb\/favicon\.ico\?v=20/);
  assert.match(html, /\/aipconceptionweb\/favicon-32x32\.png\?v=20/);
  assert.match(html, /\/aipconceptionweb\/apple-touch-icon\.png\?v=20/);
  assert.match(html, /\/aipconceptionweb\/site\.webmanifest\?v=20/);
});
